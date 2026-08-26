// Grade the raw generated artwork to the Paper & Signal palette and export site assets.
// Usage: node scripts/grade-art.cjs [slotId ...]
// Input:  tmp/art-raw/<id>.png (from generate-art.cjs, or any PNG/JPG you drop there with the slot id as name)
// Output: stock-N  -> src/assets/stock-N.webp + public/assets/stock-N.webp (1472x871)
//         art/*    -> public/assets/art/<name>.webp (2000px wide max) + <name>-800.webp
const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const cfg = JSON.parse(fs.readFileSync(path.join(__dirname, 'art-slots.json'), 'utf8'));
const only = process.argv.slice(2);
const rawDir = path.resolve(__dirname, '..', 'tmp', 'art-raw');
const repo = path.resolve(__dirname, '..');

// Warm, matte grade: pull saturation down a touch, lift blacks toward warm umber, add fine grain.
async function grade(input, width, height) {
  const img = sharp(input).rotate();
  const meta = await img.metadata();
  let w = width || Math.min(meta.width, 2000);
  let h = height || Math.round(meta.height * (w / meta.width));
  if (!height && h > 1600) { h = 1600; w = Math.round(meta.width * (h / meta.height)); }
  const base = await sharp(input)
    .resize(w, h, { fit: 'cover', position: 'attention' })
    .modulate({ saturation: 0.82, brightness: 1.0 })
    .linear([0.94, 0.94, 0.94], [10, 8, 5]) // lift blacks slightly toward warm umber
    .toBuffer();
  // Grain overlay
  const grain = await sharp({ create: { width: w, height: h, channels: 1, noise: { type: 'gaussian', mean: 128, sigma: 10 } } })
    .png().toBuffer();
  return sharp(base).composite([{ input: grain, blend: 'overlay' }]).toBuffer();
}

async function findRaw(id) {
  for (const ext of ['png', 'jpg', 'jpeg', 'webp']) {
    const p = path.join(rawDir, `${id}.${ext}`);
    if (fs.existsSync(p)) return p;
  }
  return null;
}

(async () => {
  const slots = cfg.slots.filter((s) => !only.length || only.includes(s.id));
  for (const s of slots) {
    const raw = await findRaw(s.id);
    if (!raw) { console.log('missing raw for', s.id, '- skipped'); continue; }
    if (s.file.startsWith('stock-')) {
      const buf = await grade(raw, 1472, 871);
      const webp = await sharp(buf).webp({ quality: 84 }).toBuffer();
      fs.writeFileSync(path.join(repo, 'src/assets', s.file + '.webp'), webp);
      fs.writeFileSync(path.join(repo, 'public/assets', s.file + '.webp'), webp);
      const w400 = await sharp(buf).resize(400).webp({ quality: 80 }).toBuffer();
      fs.writeFileSync(path.join(repo, 'public/assets', s.file + '-400w.webp'), w400);
      console.log(s.file, Math.round(webp.length / 1024) + 'KB');
    } else {
      const outDir = path.join(repo, 'public/assets', path.dirname(s.file));
      fs.mkdirSync(outDir, { recursive: true });
      const buf = await grade(raw);
      const name = path.basename(s.file);
      const big = await sharp(buf).webp({ quality: 82 }).toBuffer();
      const small = await sharp(buf).resize(800).webp({ quality: 78 }).toBuffer();
      fs.writeFileSync(path.join(outDir, name + '.webp'), big);
      fs.writeFileSync(path.join(outDir, name + '-800.webp'), small);
      console.log(s.file, Math.round(big.length / 1024) + 'KB', '+ 800w');
    }
  }
})().catch((e) => { console.error(e); process.exit(1); });
