import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const read = f => fs.readFileSync(path.join(root, f), 'utf8');
const checks = [];

// 1. Every page in pages.json has a markdown file.
const pagesMeta = JSON.parse(read('content/pages.json'));
const pageIds = new Set(pagesMeta.map(p => p.id));
for (const p of pagesMeta) {
  if (!fs.existsSync(path.join(root, 'content', 'pages', p.file))) throw new Error(`Missing page file ${p.file}`);
}
checks.push(`${pagesMeta.length} page files present`);

// 2. Every story references an existing topic.
const stories = JSON.parse(read('content/stories.json'));
for (const s of stories) {
  if (!pageIds.has(s.page)) throw new Error(`Story ${s.id} references unknown page ${s.page}`);
}
checks.push(`${stories.length} stories mapped to topics`);

// 3. Decisions, contracts, source-links are valid and referenced.
const decisions = JSON.parse(read('content/decisions.json'));
for (const d of decisions) {
  if (!pageIds.has(d.page)) throw new Error(`Decision ${d.id} references unknown page ${d.page}`);
}
checks.push(`${decisions.length} decisions mapped to topics`);
const contracts = JSON.parse(read('content/contracts.json'));
checks.push(`${contracts.length} contracts catalogued`);
const sources = JSON.parse(read('content/source-links.json'));
if (sources.count !== sources.links.length) throw new Error('source-links count mismatch');
checks.push(`${sources.links.length} sources catalogued`);

// 4. Every flow JSON referenced by diagrams/ exists.
const flows = [
  '01-ecosystem-architecture.architecture.json',
  '02-site-screening-sequence.sequence.json',
  '03-grid-connection-workflow.workflow.json',
  '04-system-sizing-lifecycle.lifecycle.json',
  '05-install-commission-sequence.sequence.json',
  '06-dispatch-settlement-dataflow.dataflow.json',
  '07-operations-decommission-workflow.workflow.json'
];
for (const f of flows) {
  const p = path.join(root, '..', 'flows', f);
  if (!fs.existsSync(p)) throw new Error(`Missing flow spec ${f}`);
  JSON.parse(fs.readFileSync(p, 'utf8'));
}
checks.push(`${flows.length} flow specs present and valid`);

// 5. Diagram stubs point at existing canonical specs.
for (const name of ['ecosystem', 'connection', 'sizing']) {
  const stub = JSON.parse(read(`diagrams/${name}.json`));
  if (!fs.existsSync(path.join(root, stub.canonical))) throw new Error(`Stub ${name} points at missing ${stub.canonical}`);
}
checks.push('3 diagram stubs resolve');

console.log(JSON.stringify({ status: 'passed', topics: pagesMeta.length, stories: stories.length, checks }, null, 2));
