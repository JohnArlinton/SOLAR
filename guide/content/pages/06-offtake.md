## Summary
Two offtake paths: consume onsite under a tenant PPA (anchor), or export through a licensed retailer or wholesale market participant into NEM settlement (<30 MW exempt pathway). The aggregator/VPP monetises flexibility on top — it is NOT a buyer. An explicit Energy Offtake Strategy step locks this before financial close.

## Correction (applies everywhere)
- The aggregator/VPP controls and optimises the fleet and accesses wholesale/FCAS value; it does not buy energy.
- The retailer or market participant provides the settlement pathway and is the export buyer.
- Never model VPP revenue as a buyer price; never list a DNSP, VicGrid, or AEMO/NEM as a buyer.

## Paths
| Path | Value | Notes |
|---|---|---|
| Onsite PPA (Tier-1 tenant) | Highest per kWh | Anchor; tenant pays for metered onsite use |
| Export via licensed retailer | Wholesale terms | Only genuine surplus; negative prices bite; retailer not obliged to buy at our price |
| Export via wholesale participant | Wholesale terms | Via NEM; partner handles the market interface on the first project |
| Flexibility via aggregator-VPP | Upside (arbitrage, FCAS) | Registration and metering required; monetises, never buys |

## Licensed retailers vs wholesale participants
| Licensed retailers (retail settlement path) | Note |
|---|---|
| Origin, AGL, EnergyAustralia, Shell Energy, Flow Power, ENGIE | Large retailers with C&I desks |
| Energy Locals, Red Energy/Lumo, Alinta, SmartestEnergy, Momentum, Diamond Energy | Mid-tier and green retailers |
| Iberdrola, Tilt Renewables, Pacific Blue, Stanwell, TotalEnergies | Vertically integrated generators and specialists |

- First-contact order for HEJ: Flow Power, Origin, EnergyAustralia, AGL, Shell Energy, SmartestEnergy.
- HEJ owns the PV and BESS; on the first project a partner handles the market interface. Contact details and links: see `market-contacts`.

## Aggregator/VPP explainer (summary; detail in `market-contacts`)
- What it does: orchestrates the 4-warehouse portfolio (and beyond) as one flexible fleet — dispatch timing, FCAS bidding, wholesale exposure management.
- What it does not do: buy energy or settle export volumes.
- First call: Flow Power (1300 08 06 08) with the ask script in `market-contacts`.
- Later: Amber, Discover Energy, Diamond Energy — residential and small-scale bias, engage after the first site proves.

## Energy Offtake Strategy (authoritative, pre-close step)
- Who pays per kWh: tenant (onsite) + named retailer or wholesale participant (export); aggregator named for flexibility only.
- What contract/price/term: PPA + export terms with tenor matched toward the 20–30 yr asset.
- Under what connection/market rules: DNSP offer export figure + NEM settlement path.
- DNSP and VicGrid appear here as transport only — never as buyers. See `regulatory-map`.

## Notes
- Retailer names in the research are examples; offers change.
- Settlement follows the meter split of onsite vs export.

## Open decisions
- Re-price offtake per site at financial close.
