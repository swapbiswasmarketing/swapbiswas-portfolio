// Convert one or more SVG files to 1200px-wide WebP alongside the source.
// Usage: node scripts/convert-svg-batch.cjs <path/to/file.svg> [more.svg ...]
// See BLOG_INSTRUCTIONS.md section 3 for the diagram design system.

const { Resvg } = require('@resvg/resvg-js');
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function convert(svgPath) {
  const webpPath = svgPath.replace(/\.svg$/, '.webp');
  const svg = fs.readFileSync(svgPath, 'utf8');
  const resvg = new Resvg(svg, { fitTo: { mode: 'width', value: 1200 } });
  const png = resvg.render().asPng();
  await sharp(png).webp({ quality: 90 }).toFile(webpPath);
  console.log('Wrote', webpPath);
}

(async () => {
  const args = process.argv.slice(2);
  if (args.length === 0) {
    console.error('Usage: node scripts/convert-svg-batch.cjs <path/to/file.svg> [more.svg ...]');
    process.exit(1);
  }
  for (const a of args) {
    await convert(path.resolve(a));
  }
})().catch((e) => { console.error(e); process.exit(1); });
