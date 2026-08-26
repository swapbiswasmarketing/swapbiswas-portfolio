// Generate the Renaissance x nature artwork set with Gemini's image model (Nano Banana).
// Usage (PowerShell):  $env:GEMINI_API_KEY="..."; node scripts/generate-art.cjs [slotId ...]
// Reads scripts/art-slots.json, writes raw PNG/JPEG to tmp/art-raw/<id>.<ext> (re-runs skip existing files
// unless FORCE=1). Then run: node scripts/grade-art.cjs  to grade + export the WebP site assets.
// Env: ART_MODEL (default gemini-3-pro-image), ART_SIZE (1K | 2K | 4K, default 2K)
const fs = require('fs');
const path = require('path');

const KEY = process.env.GEMINI_API_KEY || process.env.GOOGLE_API_KEY;
if (!KEY) {
  console.error('Set GEMINI_API_KEY (or GOOGLE_API_KEY) in the environment first.');
  process.exit(1);
}
const MODEL = process.env.ART_MODEL || 'gemini-3-pro-image';
const SIZE = process.env.ART_SIZE || '2K';
const cfg = JSON.parse(fs.readFileSync(path.join(__dirname, 'art-slots.json'), 'utf8'));
const only = process.argv.slice(2);
const outDir = path.resolve(__dirname, '..', 'tmp', 'art-raw');
fs.mkdirSync(outDir, { recursive: true });
const HEADERS = { 'x-goog-api-key': KEY, 'Content-Type': 'application/json' };

// Find the first base64 image payload anywhere in a response object (tolerant to API shape changes).
function findImage(node) {
  if (!node || typeof node !== 'object') return null;
  if (Array.isArray(node)) { for (const n of node) { const r = findImage(n); if (r) return r; } return null; }
  const mime = node.mime_type || node.mimeType;
  if (typeof node.data === 'string' && node.data.length > 1000 && (!mime || String(mime).startsWith('image/'))) return { data: node.data, mime: mime || 'image/png' };
  for (const k of Object.keys(node)) { const r = findImage(node[k]); if (r) return r; }
  return null;
}

async function viaInteractions(prompt, aspect) {
  const body = { model: MODEL, input: prompt, response_format: { type: 'image', mime_type: 'image/png', aspect_ratio: aspect, image_size: SIZE } };
  const res = await fetch('https://generativelanguage.googleapis.com/v1beta/interactions', { method: 'POST', headers: HEADERS, body: JSON.stringify(body) });
  const json = await res.json().catch(() => ({}));
  return { ok: res.ok, status: res.status, json };
}

async function viaGenerateContent(prompt, aspect) {
  const body = {
    contents: [{ role: 'user', parts: [{ text: prompt }] }],
    generationConfig: { responseModalities: ['IMAGE'], imageConfig: { aspectRatio: aspect, imageSize: SIZE } },
  };
  const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent`, { method: 'POST', headers: HEADERS, body: JSON.stringify(body) });
  const json = await res.json().catch(() => ({}));
  return { ok: res.ok, status: res.status, json };
}

async function generate(slot) {
  const existing = ['png', 'jpg', 'jpeg'].map((e) => path.join(outDir, `${slot.id}.${e}`)).find((p) => fs.existsSync(p));
  if (existing && !process.env.FORCE) { console.log('skip (exists)', slot.id); return; }
  const prompt = `${slot.prompt}\n\nStyle: ${cfg.style}\nAvoid: ${cfg.negative}`;
  for (let attempt = 1; attempt <= 3; attempt++) {
    let r = await viaInteractions(prompt, slot.aspect);
    if (!r.ok && (r.status === 404 || r.status === 400)) {
      console.log(slot.id, 'interactions endpoint returned', r.status, '- falling back to generateContent');
      r = await viaGenerateContent(prompt, slot.aspect);
    }
    if (!r.ok) {
      console.error(slot.id, 'HTTP', r.status, JSON.stringify(r.json).slice(0, 400));
      if (r.status === 429 || r.status >= 500) { await new Promise((s) => setTimeout(s, 5000 * attempt)); continue; }
      return;
    }
    const img = findImage(r.json);
    if (!img) { console.error(slot.id, 'no image in response:', JSON.stringify(r.json).slice(0, 400)); continue; }
    const ext = img.mime.includes('jpeg') || img.mime.includes('jpg') ? 'jpg' : 'png';
    const out = path.join(outDir, `${slot.id}.${ext}`);
    fs.writeFileSync(out, Buffer.from(img.data, 'base64'));
    console.log('wrote', path.relative(process.cwd(), out), Math.round((img.data.length * 0.75) / 1024) + 'KB');
    return;
  }
}

(async () => {
  const slots = cfg.slots.filter((s) => !only.length || only.includes(s.id));
  console.log(`model=${MODEL} size=${SIZE} slots=${slots.length}`);
  for (const s of slots) await generate(s);
  console.log('done. next: node scripts/grade-art.cjs');
})().catch((e) => { console.error(e); process.exit(1); });
