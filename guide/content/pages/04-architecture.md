## Summary
Same energy core on both routes: PV on the roof, BESS on the ground, EMS in charge. Power flows PV → inverters → LV → transformer → DNSP, with the BESS compound cycling beside the switchboard. Route only changes who controls the roof (see `business-model`), never the electrics.

## Reference class
| Item | Planning assumption |
|---|---|
| Pilot PV | 0.5–2 MWp |
| Pilot BESS | 1–4 MWh, sized from load profile + export limit, never a generic ratio |
| Yield | ~1.31 GWh/yr per MWp, Melbourne |
| Specific yield | ~3.6 kWh/kW/day |
| Footprint | ~6000–8000 m² roof per MWp |
| BESS placement | Ground-mounted compound preferred |

## Notes
- Every figure above is a planning assumption; verify with SunSPOT, shading, and structural checks.
- Metering splits onsite use (tenant PPA) from export (retailer or wholesale participant) for settlement. See `offtake`, `regulatory-map`.
- Size to the load-first method (NMI → 24-month NEM12 → daytime band); usable roof after setbacks is always smaller than gross roof. Detail: see `site-qualification`.

## Open decisions
- Lock PV/BESS sizing to interval load, not to panel price.
