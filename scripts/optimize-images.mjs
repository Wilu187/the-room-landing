// Generates responsive AVIF / WebP / JPEG variants of the photos used on the page.
// Usage: node scripts/optimize-images.mjs <source-dir-with-jpg-originals>
// Output: public/images/<name>-<width>.<avif|webp|jpg>
import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const WIDTHS = [480, 800, 1200, 1600, 2000];
const src = process.argv[2];
if (!src) {
  console.error('Podaj katalog z oryginałami: node scripts/optimize-images.mjs <katalog>');
  process.exit(1);
}
const out = path.resolve('public/images');
fs.mkdirSync(out, { recursive: true });

for (const file of fs.readdirSync(src).filter((f) => /\.jpe?g$/i.test(f))) {
  const name = file.replace(/\.jpe?g$/i, '');
  const input = path.join(src, file);
  const { width } = await sharp(input).metadata();
  for (const w of WIDTHS.filter((w) => w <= width)) {
    const base = sharp(input).resize({ width: w, withoutEnlargement: true });
    await base.clone().avif({ quality: 52, effort: 6 }).toFile(path.join(out, `${name}-${w}.avif`));
    await base.clone().webp({ quality: 74 }).toFile(path.join(out, `${name}-${w}.webp`));
    await base.clone().jpeg({ quality: 76, mozjpeg: true }).toFile(path.join(out, `${name}-${w}.jpg`));
  }
  console.log('ok', name, width);
}
