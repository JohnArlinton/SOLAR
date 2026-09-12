## Summary
Two business routes, one energy core. Route B (rooftop lease/licence) is the primary: lower capital, scalable portfolio. Route A (property ownership) is opportunistic/secondary. Preliminary winner: Route B ★★★★☆ vs Route A ★★★☆☆.

## Routes
| | Route A: property ownership | Route B: rooftop lease/licence |
|---|---|---|
| Control | Buy the property: roof + building + tenancy | 20–30 yr roof rights; SPV owns PV + BESS |
| Capital | High (property + energy asset) | Much lower (energy asset only) |
| Scale | Slow, deal by deal | Scalable portfolio, Warehouse 001 → 002 → … |
| Role | Opportunistic / secondary | Primary |

- Hybrid: SolarCo holds owned + leased assets as one energy portfolio.
- Same energy core both routes: PV + optional BESS (sized from load profile + export limit, never a generic ratio) + tenant offtake + grid export. See `architecture`.

## Revenue stack
| Layer | Role |
|---|---|
| Onsite savings (tenant PPA) | Primary — displaces retail daytime cost |
| Export | Secondary — wholesale/export terms |
| Arbitrage | Secondary — BESS shifts cheap to priced periods |
| FCAS | Upside — via aggregator-VPP, which monetises flexibility and never buys energy |
| Certificates | Haircut — STC/deeming discounted |

## Worked illustration
- A 60/40 onsite/export split at 0.12/0.06 is an **example**, not a tariff.
- AEMO negative-price periods punish export-heavy dispatch.
- Size to onsite load first; re-price every site. See `offtake`, `economics`.

## Open decisions
- Confirm retailer examples against current offers at financial close; treat any aggregator as flexibility only, never as buyer. See `offtake`, `market-contacts`.
- Lock certificate treatment (CER STC 100 kW–1 MW from Oct 2026) with an adviser.
