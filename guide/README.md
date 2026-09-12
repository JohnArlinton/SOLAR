# Victoria Rooftop Solar + BESS — Technical Guide

[Open the complete HTML guide](./index.html)

English companion to [Solar Business Flows](../flows/). The flows remain the canonical diagram gallery; this guide adds business, regulatory, and operational topics with explicitly pending decisions. Business position: Route A (property ownership, secondary) vs Route B (rooftop lease/licence, primary); tenant PPA anchors offtake, licensed retailer/aggregator buys export, DNSP/VicGrid carry only.

## Contents

- 13 topics with a local table of contents, 9 pilot-quality stories and 7 open decisions.
- Three diagram stubs reference the canonical flow specs in `../flows/`.
- 18 Appendix A sources catalogued in `content/source-links.json`.
- Contracts, repositories, and source links as small JSON catalogs.

`index.html` is self-contained and opens locally without a server or installation. No JavaScript is required to read it.

## Maintenance

Edit a topic once in `content/pages/`; metadata lives in `content/pages.json`; shared catalogs live in `content/`. `diagrams/` contains stubs pointing at the canonical flow specs. `evidence/` contains build receipts.

With Node >= 18:

```sh
cd guide
npm run verify
```

The build updates `index.html`. Verification checks internal links, story-topic coverage, and that every referenced flow JSON exists.

## Disclaimer

Documentation only — not legal, planning, or engineering advice. All capacity, yield, and price figures are planning assumptions from the September 2026 research; verify at site and at financial close.
