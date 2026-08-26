// Assign each blog post one of the 8 Renaissance cover paintings based on its categories,
// balancing usage so posts sharing a category alternate covers. CRLF-safe.
// Usage: node scripts/assign-blog-covers.cjs [--dry]
const fs = require('fs');
const path = require('path');
const cfg = JSON.parse(fs.readFileSync(path.join(__dirname, 'art-slots.json'), 'utf8'));
const alts = Object.fromEntries(cfg.slots.filter((s) => s.alt).map((s) => [s.file, s.alt]));
const map = cfg.category_map;
const dir = path.resolve(__dirname, '..', 'src/content/blog');
const dry = process.argv.includes('--dry');
const used = {};
let prev = null;
// Process in display order (newest first) so neighbouring posts on the index alternate covers.
const dateOf = (f) => {
  const m = fs.readFileSync(path.join(dir, f), 'utf8').match(/^publishDate:\s*([0-9-]+)/m);
  return m ? m[1] : '0000';
};
const files = fs
  .readdirSync(dir)
  .filter((f) => f.endsWith('.md'))
  .sort((a, b) => dateOf(b).localeCompare(dateOf(a)) || a.localeCompare(b));
let changed = 0, skipped = 0;
for (const f of files) {
  const p = path.join(dir, f);
  const raw = fs.readFileSync(p, 'utf8');
  const eol = raw.includes('\r\n') ? '\r\n' : '\n';
  const lines = raw.split(eol);
  if (lines[0] !== '---') { skipped++; continue; }
  const end = lines.indexOf('---', 1);
  if (end < 0) { skipped++; continue; }
  const fm = lines.slice(1, end);
  const catLine = fm.find((l) => /^category:\s*\[/.test(l));
  const cats = catLine ? catLine.replace(/^category:\s*\[|\]\s*$/g, '').split(',').map((c) => c.trim().replace(/^["']|["']$/g, '')) : [];
  const candidates = [...new Set(cats.map((c) => map[c]).filter(Boolean))];
  if (!candidates.length) candidates.push('stock-1');
  // Least-used candidate wins; never repeat the previous post's cover when there is an alternative.
  const ranked = candidates.sort((a, b) => (used[a] || 0) - (used[b] || 0));
  const pick = ranked.find((c) => c !== prev) || ranked[0];
  prev = pick;
  used[pick] = (used[pick] || 0) + 1;
  const imgLine = `img: /assets/${pick}.webp`;
  const altLine = `img_alt: ${JSON.stringify(alts[pick] || '')}`;
  const imgIdx = fm.findIndex((l) => /^img:/.test(l));
  const altIdx = fm.findIndex((l) => /^img_alt:/.test(l));
  if (imgIdx >= 0) fm[imgIdx] = imgLine; else fm.push(imgLine);
  if (altIdx >= 0) fm[altIdx] = altLine; else fm.splice(fm.findIndex((l) => /^img:/.test(l)) + 1, 0, altLine);
  const out = ['---', ...fm, ...lines.slice(end)].join(eol);
  if (out !== raw) { changed++; if (!dry) fs.writeFileSync(p, out); }
}
console.log(dry ? '[dry run]' : '[written]', 'posts:', files.length, 'changed:', changed, 'skipped:', skipped, 'usage:', JSON.stringify(used));
