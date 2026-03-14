# Production Run Report

Date: 2026-03-07
Project: Sapiens AeroComp (`C:\Users\md\Downloads\Sap`)

## 1) Preflight
- Command: `npm install`
- Result: Pass (dependencies already up to date)

## 2) Quality Gates
- Command: `npm run lint`
- Result: Pass
- Warning (expected):
  - `@next/next/no-img-element` in `components/Products.tsx:62`

- Command: `npm run build`
- Result: Pass
- Static pages generated successfully

## 3) Start Command Validation
- Command: `npm run start`
- Result: Failed first due to port 3000 in use

- Command: `npm run start -- --port 3011`
- Result: Expected failure for export mode
- Error confirmed:
  - `"next start" does not work with "output: export" configuration. Use "npx serve@latest out" instead.`

## 4) Static Preview
- Command: `npx serve@latest -l 4173 out`
- URL: `http://localhost:4173`
- HTTP check: `200 OK`

## 5) Smoke Test Results
- Hero renders with background + CTAs: PASS
- Navbar anchors (`#about`, `#solutions`, `#products`, `#performance`, `#contact`): PASS
- Products section includes all 5 product entries: PASS
- Performance table + vibration panel: PASS
- Contact form when `NEXT_PUBLIC_FORMSPREE_FORM_ID` is unset:
  - Submit button disabled: PASS
  - Helper text shown: PASS
- Contact form when `NEXT_PUBLIC_FORMSPREE_FORM_ID` is set (test value): PASS
  - Form action points to Formspree endpoint
  - Submit button enabled
- Mobile nav open/close code path: PASS (code-level verification)

## Final Status
- Production build check completed successfully.
- No source code changes were made as part of this run.
