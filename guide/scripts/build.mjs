import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));

function escape(s) {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function inline(s) {
  let out = escape(s);
  out = out.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
  out = out.replace(/`([^`]+)`/g, '<code>$1</code>');
  out = out.replace(/\[([^\]]+)\]\((https?:[^)\s]+)\)/g, '<a href="$2">$1</a>');
  return out;
}

// Minimal markdown: ## headings, tables (|), lists (-), bold, paragraphs.
function mdToHtml(md) {
  const lines = md.split('\n');
  let html = '';
  let inList = false;
  let i = 0;
  const closeList = () => { if (inList) { html += '</ul>'; inList = false; } };
  while (i < lines.length) {
    const line = lines[i];
    const trim = line.trim();
    if (trim.startsWith('## ')) { closeList(); html += `<h3>${inline(trim.slice(3))}</h3>`; }
    else if (/^\|.*\|$/.test(trim) && i + 1 < lines.length && /^\|[\s|:|-]+\|$/.test(lines[i + 1].trim())) {
      closeList();
      const head = trim.split('|').filter(Boolean).map(c => `<th>${inline(c.trim())}</th>`).join('');
      html += `<div class="table-scroll"><table><thead><tr>${head}</tr></thead><tbody>`;
      i += 2;
      while (i < lines.length && /^\|.*\|$/.test(lines[i].trim())) {
        const cells = lines[i].trim().split('|').filter(Boolean).map(c => `<td>${inline(c.trim())}</td>`).join('');
        html += `<tr>${cells}</tr>`;
        i++;
      }
      html += '</tbody></table></div>';
      continue;
    } else if (trim.startsWith('- ')) {
      if (!inList) { html += '<ul>'; inList = true; }
      html += `<li>${inline(trim.slice(2))}</li>`;
    } else if (trim === '') { closeList(); }
    else { closeList(); html += `<p>${inline(trim)}</p>`; }
    i++;
  }
  closeList();
  return html;
}

const pagesMeta = JSON.parse(fs.readFileSync(path.join(root, 'content', 'pages.json'), 'utf8'));
const pages = pagesMeta.map(p => ({
  ...p,
  body: mdToHtml(fs.readFileSync(path.join(root, 'content', 'pages', p.file), 'utf8'))
}));

const groups = [...new Set(pages.map(p => p.group))];
const toc = groups.map(g =>
  `<div><h3>${escape(g)}</h3><ol>${pages.filter(p => p.group === g).map(p => `<li><a href="#${p.id}">${escape(p.title)}</a></li>`).join('')}</ol></div>`
).join('\n');

const sections = pages.map((p, i) =>
  `<section id="${p.id}" class="chapter"><p class="eyebrow">${escape(p.group)} · ${String(i + 1).padStart(2, '0')}</p><h2>${escape(p.title)}</h2>${p.body}<p class="back"><a href="#indice">Back to index ↑</a></p></section>`
).join('\n\n');

const css = `body{margin:0;background:#F6F8FB;color:#16222E;font:16px/1.6 -apple-system,BlinkMacSystemFont,"Inter","Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif}.brandbar{background:linear-gradient(115deg,#0A2138 0%,#0E2E4F 55%,#0B4F4A 130%);color:#fff}.brandwrap{width:min(960px,calc(100% - 32px));margin:auto;padding:14px 0}.brandwrap{display:flex;align-items:center;justify-content:space-between;gap:12px;flex-wrap:wrap}.backmenu{display:inline-block;padding:6px 14px;border-radius:999px;background:#FFB627;color:#0A2138;font:700 .7rem/1.5 ui-monospace,Menlo,monospace;letter-spacing:.1em;text-transform:uppercase;text-decoration:none}.backmenu:hover{background:#FFC95C}.backmenu:focus-visible{outline:3px solid #FFB627;outline-offset:3px}a:focus-visible{outline:3px solid #FFB627;outline-offset:3px}.brand{display:inline-flex;align-items:center;gap:12px;color:#fff;text-decoration:none}.mark{flex:none}.wordmark strong{display:block;font-size:.98rem;letter-spacing:-.01em;line-height:1.2}.wordmark small{display:block;font:600 .66rem/1.5 ui-monospace,Menlo,monospace;letter-spacing:.12em;text-transform:uppercase;color:#FFB627}main{width:min(960px,calc(100% - 32px));margin:auto;padding:32px 0 48px}.hero{background:linear-gradient(120deg,#0A2138 0%,#0E2E4F 55%,#0B4F4A 135%);color:#fff;border-radius:16px;padding:40px 32px;box-shadow:0 18px 44px #0a213829}.hero::after{content:"";display:block;height:4px;border-radius:2px;margin-top:20px;background:linear-gradient(90deg,#FFB627,#FF8C1A,#00B4A2)}h1{font-size:clamp(1.9rem,4vw,2.9rem);letter-spacing:-.025em;line-height:1.1;margin:0 0 12px}.hero p{color:#C9D6E2;margin:8px 0}.hero a{color:#FFB627}.eyebrowpill{display:inline-block;margin-bottom:14px;padding:5px 14px;border-radius:999px;background:#FFB627;color:#0A2138;font:700 .7rem/1.5 ui-monospace,Menlo,monospace;letter-spacing:.14em;text-transform:uppercase}.toc{display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:16px;margin:24px 0}.toc>div{background:#fff;border:1px solid #DCE4EC;border-radius:14px;padding:14px 16px;box-shadow:0 10px 28px #0a213814}.chapter{background:#FFFFFF;border:1px solid #DCE4EC;border-radius:14px;padding:20px 22px;margin:20px 0;box-shadow:0 10px 28px #0a213814}.chapter h2{letter-spacing:-.02em}.eyebrow{color:#7A5200;background:#FFF3D6;border:1px solid #F0C65C;border-radius:999px;display:inline-block;padding:3px 12px;font:700 .7rem/1.5 ui-monospace,Menlo,monospace;letter-spacing:.1em;text-transform:uppercase}a{color:#0B3D91}a:focus-visible{outline:3px solid #FFB627;outline-offset:2px}.table-scroll{overflow:auto}table{width:100%;border-collapse:collapse}th,td{text-align:left;padding:8px 12px;border-top:1px solid #DCE4EC;vertical-align:top}thead th{border-top:0;background:#0E2E4F;color:#fff;font-family:ui-monospace,Menlo,monospace;font-size:.72rem;letter-spacing:.08em;text-transform:uppercase}code{color:#0E2E4F}.back,.disc{font-size:.9rem;color:#4A5B6B}footer{margin-top:32px;border-top:1px solid #DCE4EC;padding-top:18px;font-size:.9rem;color:#4A5B6B}.site-brand{font:700 .72rem/1.5 ui-monospace,Menlo,monospace;letter-spacing:.1em;text-transform:uppercase;color:#0E2E4F}`;

const brandmark = `<svg class="mark" width="40" height="40" viewBox="0 0 40 40" aria-hidden="true" focusable="false"><rect width="40" height="40" rx="9" fill="#0A2138" stroke="#FFB627" stroke-opacity=".45"/><circle cx="20" cy="13.5" r="5.4" fill="#FFB627"/><g stroke="#FFB627" stroke-width="1.8" stroke-linecap="round"><line x1="20" y1="3.4" x2="20" y2="5.6"/><line x1="27.4" y1="6.1" x2="25.9" y2="7.6"/><line x1="30.2" y1="13.5" x2="28" y2="13.5"/><line x1="27.4" y1="20.9" x2="25.9" y2="19.4"/><line x1="12.6" y1="6.1" x2="14.1" y2="7.6"/><line x1="9.8" y1="13.5" x2="12" y2="13.5"/><line x1="12.6" y1="20.9" x2="14.1" y2="19.4"/></g><path d="M10 25.5h20l-2.8 8.5H12.8z" fill="#00B4A2"/><g stroke="#0A2138" stroke-width="1.2"><line x1="15" y1="25.5" x2="16" y2="34"/><line x1="20" y1="25.5" x2="20" y2="34"/><line x1="25" y1="25.5" x2="24" y2="34"/><line x1="11.2" y1="29.5" x2="28.8" y2="29.5"/></g></svg>`;

const html = `<!doctype html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="color-scheme" content="light"><link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 40 40'%3E%3Crect width='40' height='40' rx='9' fill='%230A2138'/%3E%3Ccircle cx='20' cy='14' r='6' fill='%23FFB627'/%3E%3Cpath d='M10 25h20l-3 9H13z' fill='%2300B4A2'/%3E%3C/svg%3E"><title>HEJ Energy &amp; Technology · Victoria Rooftop Solar + BESS Technical Guide</title>
<style>${css}</style></head><body><header class="brandbar"><div class="brandwrap"><a class="brand" href="../flows/index.html" aria-label="HEJ Energy and Technology — business flows">${brandmark}<span class="wordmark"><strong>HEJ Energy &amp; Technology</strong><small>Rooftop Solar + Storage · Victoria</small></span></a><a class="backmenu" href="../index.html">← Back to main menu</a></div></header><main id="inicio">
<section class="hero">
<p class="eyebrowpill">Technical guide</p>
<h1>Victoria Rooftop Solar + BESS</h1>
<p>Companion to <a href="../flows/index.html">Solar Business Flows</a>. ${pages.length} topics drawn from the September 2026 research on commercial/industrial rooftops in Victoria, Australia.</p>
<p class="disc" style="color:#C9D6E2">Documentation only — not legal, planning, or engineering advice. Capacity, yield, and price figures are planning assumptions; verify at site and at financial close.</p>
</section>
<nav id="indice" aria-label="Index"><h2>Index</h2><div class="toc">${toc}</div></nav>
${sections}
<footer><div class="site-brand">HEJ Energy &amp; Technology · Rooftop Solar + Storage · Victoria</div><p><a href="../index.html">← Back to main menu</a> · Generated from canonical modules in content/. Flows remain the canonical diagram gallery in ../flows/.</p></footer></main></body></html>`;

fs.writeFileSync(path.join(root, 'index.html'), html);
console.log(`Self-contained HTML: ${Buffer.byteLength(html)} bytes; ${pages.length} topics.`);
