// ブランドアセット生成スクリプト。
// 元SVG(src/assets/brand)から OGP画像・各種アイコンを public/ に生成する。
// 実行: node scripts/gen-brand-assets.mjs
import sharp from 'sharp';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const __dir = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dir, '..');
const brand = (f) => resolve(root, 'src/assets/brand', f);
const out = (f) => resolve(root, 'public', f);

const PAPER = '#faf9f5';
const INK = '#201f1c';
const SAGE = '#53644b';

// --- アイコン(favicon mark)を各サイズのPNGへ ---
const faviconLight = readFileSync(brand('favicon-light.svg'));
const iconSizes = [
  ['apple-touch-icon.png', 180],
  ['icon-192.png', 192],
  ['icon-512.png', 512],
  ['favicon-32.png', 32],
];
for (const [name, size] of iconSizes) {
  await sharp(faviconLight, { density: 384 })
    .resize(size, size, { fit: 'contain', background: PAPER })
    .png()
    .toFile(out(name));
  console.log('✓', name, `${size}x${size}`);
}

// --- OGP画像(1200x630) ---
// 中央にロゴ(アウトライン化済みなのでフォント非依存)、下にタグライン。
const W = 1200;
const H = 630;
const logoLight = readFileSync(brand('logo-light.svg'));
const logoPng = await sharp(logoLight, { density: 300 })
  .resize({ width: 760 })
  .png()
  .toBuffer();
const logoMeta = await sharp(logoPng).metadata();

const textSvg = Buffer.from(`
<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
  <style>
    .tag { font-family: "Yu Gothic", "YuGothic", "Meiryo", "Noto Sans JP", sans-serif; font-weight: 700; fill: ${INK}; }
    .label { font-family: "Montserrat", "Yu Gothic", sans-serif; font-weight: 600; fill: ${SAGE}; letter-spacing: 6px; }
  </style>
  <text x="${W / 2}" y="415" text-anchor="middle" font-size="40" class="tag">帰りたくなる毎日を。</text>
  <text x="${W / 2}" y="470" text-anchor="middle" font-size="20" class="label">GADGET &amp; INTERIOR MEDIA</text>
</svg>`);

await sharp({
  create: { width: W, height: H, channels: 4, background: PAPER },
})
  .composite([
    { input: logoPng, top: Math.round(H / 2 - (logoMeta.height ?? 190) / 2 - 40), left: Math.round(W / 2 - (logoMeta.width ?? 760) / 2) },
    { input: textSvg, top: 0, left: 0 },
    // 下部にsageのアクセントライン
    { input: Buffer.from(`<svg width="${W}" height="${H}"><rect x="${W / 2 - 30}" y="510" width="60" height="4" rx="2" fill="${SAGE}"/></svg>`), top: 0, left: 0 },
  ])
  .png()
  .toFile(out('og-default.png'));
console.log('✓ og-default.png', `${W}x${H}`);
