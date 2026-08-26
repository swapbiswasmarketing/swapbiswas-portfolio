// Enhance a low-res portrait photo with Gemini's image model (image-to-image edit), preserving identity.
// Usage: $env:GEMINI_API_KEY="..."; node scripts/enhance-portrait.cjs "<path to photo>" [variant ...]
// Writes tmp/portrait/<variant>.png. Variants: faithful | warm | studio
const fs = require('fs');
const path = require('path');
const KEY = process.env.GEMINI_API_KEY || process.env.GOOGLE_API_KEY;
if (!KEY) { console.error('Set GEMINI_API_KEY'); process.exit(1); }
const MODEL = process.env.ART_MODEL || 'gemini-3-pro-image';
const [src, ...only] = process.argv.slice(2);
const outDir = path.resolve(__dirname, '..', 'tmp', 'portrait');
fs.mkdirSync(outDir, { recursive: true });

const BASE = 'This is a real photograph of a specific person. Recreate it as a sharp, high-resolution 4:5 portrait photograph. Preserve the identity EXACTLY: same face, facial structure, skin tone, hairstyle, beard, smile, expression, same black short-sleeve shirt, same pose and framing (head and upper body centered, a little more room above the head). Keep the same location: misty mountain slopes with forest and low clouds behind him. Do not add or change any facial features, do not slim or beautify, no makeup, no glasses, no text, no watermark. Output should look like it was shot on a full-frame camera with an 85mm lens: crisp eyes and hair detail, natural skin texture, gentle background separation.';
const VARIANTS = {
  faithful: BASE + ' Natural daylight color, true-to-life colors, no stylization.',
  warm: BASE + ' Grade it with a soft, warm, slightly desaturated editorial look (warm highlights, gentle contrast, muted greens), consistent with an old-master painting palette, still clearly a photograph.',
  studio: BASE + ' Slightly stronger subject separation with a soft, hazy background and a subtle warm rim light from the upper left, like a magazine profile portrait.',
};

async function run(name) {
  const img = fs.readFileSync(src);
  const mime = src.toLowerCase().endsWith('.png') ? 'image/png' : 'image/jpeg';
  const body = {
    contents: [{ role: 'user', parts: [{ inlineData: { mimeType: mime, data: img.toString('base64') } }, { text: VARIANTS[name] }] }],
    generationConfig: { responseModalities: ['IMAGE'], imageConfig: { aspectRatio: '4:5', imageSize: '2K' } },
  };
  const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent`, { method: 'POST', headers: { 'x-goog-api-key': KEY, 'Content-Type': 'application/json' }, body: JSON.stringify(body) });
  const json = await res.json().catch(() => ({}));
  if (!res.ok) { console.error(name, 'HTTP', res.status, JSON.stringify(json).slice(0, 300)); return; }
  const parts = (((json.candidates || [])[0] || {}).content || {}).parts || [];
  const out = parts.find((p) => p.inlineData && p.inlineData.data);
  if (!out) { console.error(name, 'no image', JSON.stringify(json).slice(0, 300)); return; }
  const ext = (out.inlineData.mimeType || '').includes('png') ? 'png' : 'jpg';
  const file = path.join(outDir, `${name}.${ext}`);
  fs.writeFileSync(file, Buffer.from(out.inlineData.data, 'base64'));
  console.log('wrote', path.relative(process.cwd(), file));
}

(async () => {
  const names = only.length ? only : Object.keys(VARIANTS);
  for (const n of names) await run(n);
})().catch((e) => { console.error(e); process.exit(1); });
