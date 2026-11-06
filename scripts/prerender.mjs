// Wstawia wyrenderowany HTML do dist/index.html, aby treść była dostępna bez JavaScriptu,
// oraz dodaje preload krojów używanych w pierwszym widoku.
import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

const dist = path.resolve('dist');
const ssrEntry = path.resolve('dist-ssr/entry-server.js');
const { render } = await import(pathToFileURL(ssrEntry).href);
const html = render();
const indexPath = path.join(dist, 'index.html');
let template = fs.readFileSync(indexPath, 'utf8');
if (!template.includes('<div id="root"></div>')) throw new Error('Brak <div id="root"></div> w dist/index.html');

const assets = fs.readdirSync(path.join(dist, 'assets'));
const preload = ['eb-garamond-latin-400-normal', 'eb-garamond-latin-ext-400-normal', 'inter-latin-wght-normal']
  .map((name) => assets.find((f) => f.startsWith(name) && f.endsWith('.woff2')))
  .filter(Boolean)
  .map((f) => `<link rel="preload" href="/assets/${f}" as="font" type="font/woff2" crossorigin />`)
  .join('\n    ');
template = template.replace('</head>', `    ${preload}\n  </head>`);
template = template.replace('<div id="root"></div>', `<div id="root">${html}</div>`);
fs.writeFileSync(indexPath, template);
fs.rmSync(path.resolve('dist-ssr'), { recursive: true, force: true });
console.log('prerender: ok', (html.length / 1024).toFixed(1) + ' KB;', preload.split('\n').length, 'preloads');
