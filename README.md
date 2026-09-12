# HEJ Energy & Technology — Victoria Rooftop Solar + BESS

Distributed energy platform on Victorian commercial and industrial rooftops. Primary play is **Route B — 20–30 year rooftop lease/licence with SPV-owned PV + BESS**, replicable Warehouse 001 → 002 → … (property ownership is the secondary Route A).

## Quick path

1. Open `index.html` in any modern browser — no build step, no dependencies.
2. Pick a path: `flows/index.html` for the business picture, `guide/index.html` for engineering depth.
3. To rebuild the guide: run `npm run verify` inside `guide/`.

## Structure

| Path | What is there |
|------|---------------|
| `index.html` | Landing page and main menu — links into flows and guide |
| `flows/index.html` | 7 interactive Mermaid diagrams (Route A vs Route B) + evidence in `flows/model-evidence.html` |
| `guide/index.html` | 15 self-contained topics incl. `market-contacts` and `site-qualification` (site qualification program + A$35k development fund); rebuild with `npm run verify` in `guide/` |
| `PLAN.md` | Closure plan — scope, realignment, and delivery receipts |

## Model in brief

- **Route B (primary):** long-term roof rights, SPV owns PV + BESS. **Route A (secondary):** buy the property opportunistically. Same energy core both routes.
- **Buyers:** tenant onsite PPA anchors revenue; licensed retailer/market participant buys export; aggregator monetises flexibility via VPP. DNSP and VicGrid carry energy only — they never buy it.
- Full picture lives in `flows/index.html` and `guide/index.html` — this README does not duplicate their tables.

## Notes

- Documentation only — not legal or engineering advice. Capacity, yield, and price figures are planning assumptions; verify at site and at financial close.
- Research date: 5 September 2026. Business model realignment: September 2026 (HEJ two-route model).
