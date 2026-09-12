## Summary
Victoria splits the project across planning, licensing, market, electrical, fire, and environmental regulators — and across four roles that must never be confused: energy buyer, market operator, network operator, technology-installer. Know who buys energy before spending on build.

## Four roles (authoritative correction)
| Role | Who | Buys energy? |
|---|---|---|
| Energy buyer | Tenant (onsite PPA); licensed retailer / wholesale participant (export) | Yes |
| Market operator | AEMO / NEM (market + settlement framework, FCAS co-optimisation) | Never — not a customer |
| Network operator | DNSP (connection, transport, constraints); VicGrid (transmission planning, mostly irrelevant under 2 MW) | Never |
| Technology-installer | EPC / installer (designs, builds, commissions); aggregator/VPP (controls and optimises the fleet, monetises flexibility) | Never — the aggregator/VPP is NOT a buyer |

- An aggregator/VPP controls and optimises the fleet and accesses wholesale/FCAS value; the retailer or market participant provides the settlement pathway. Never model VPP revenue as a buyer price. See `offtake`, `market-contacts`.

## Buyer priority (authoritative)
| Priority | Buyer | Notes |
|---|---|---|
| 1 — primary onsite | Tenant under onsite PPA | Highest per kWh; anchors the site |
| 2 — primary export | Licensed retailer | Settlement pathway; under-30 MW General Exemption Order |
| 3 — wholesale | Wholesale market participant via NEM | Only with a partner handling the market interface on the first project |
| 4 — flexibility only | Aggregator/VPP | Monetises flexibility (arbitrage, FCAS); does NOT buy energy |
| — | AEMO/NEM operator, DNSP connection, VicGrid | Never buyers; VicGrid mostly irrelevant under 2 MW |

## Grid connection: first contact
- First contact is always the site DNSP, found via the site NMI — never VicGrid for rooftop scale.
- CitiPower/Powercor via mySupply and eConnect; Jemena, AusNet via EnergyConnect, United Energy, CitiPower each run their own enquiry portal. Links: see `market-contacts`.
- The EPC or engineer submits the technical pack (single-line diagram, inverters, protection settings, export intent); HEJ does not self-submit on the first project.
- Jemena connection enquiry fee rises from A$550 to A$700 from 21 September 2026 (planning assumption — confirm at submission).

## Map
| Area | Rule (planning assumption) |
|---|---|
| Planning | Permit at or above 1 MW goes to the minister |
| Licensing | ESC licensing by role and size |
| Market | AEMO/NEM registration for export and FCAS paths |
| Certificates | CER STC treatment for 100 kW–1 MW from Oct 2026 |
| Electrical | ESV: AS/NZS 5033, 5139, 4777 |
| Fire | CFA requirements shape the BESS compound |
| Environment | EPA noise and waste scope |

## Certification layers (summary; detail in `vendors-epc`)
- Licensed electrician and Registered Electrical Contractor (REC) → Certificate of Electrical Safety via Energy Safe Victoria.
- SAA-accredited designer and installer + Clean Energy Regulator (CER) / SRES compliance for certificates.
- DNSP commissioning approval before energisation; BESS adds fire, EMS, and insurance sign-offs.

## Notes
- All thresholds are research statements; confirm each with the relevant authority or adviser.
- Terminal-station PDFs are supplemental context, not connection offers.

## Open decisions
- Verify the STC date rule and planning threshold at financial close.
