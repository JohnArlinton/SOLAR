## Summary
The battery is the dispatchable half of the platform. Treat usable energy, not nameplate, as the real capacity.

## Rules
- Usable capacity sits below nameplate; degradation continues in service.
- Ground-mounted compound preferred for fire separation, access, and augmentation.
- Thermal management and CFA fire design run through layout.
- Budget augmentation at about years 7–10 (planning assumption).

## Notes
- EMS controls charge/discharge against onsite load and price signals.
- Size BESS from the tenant load profile + DNSP export limit, never a generic ratio. See `architecture`.
- C&I unit options (Sungrow, Sigenergy, WHES, RedX) and installed planning ranges live in `vendors-epc`.
- Record usable-capacity guarantees and warranty terms at procurement.

## Open decisions
- Confirm augmentation scope and cost with the EPC before close.
