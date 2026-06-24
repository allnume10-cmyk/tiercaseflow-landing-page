# Customer whitepapers (HTML + PDF)

Print-ready customer overviews for sales and onboarding conversations.

## Ready-to-send PDFs

Pre-built files live in **`docs/pdfs/`**:

| PDF | Topic |
|-----|--------|
| `CaseFlow-access-only-overview.pdf` | Access Only subscription |
| `CaseFlow-operational-advisory-overview.pdf` | Operational Advisory and Support |
| `CaseFlow-white-glove-onboarding-overview.pdf` | White-Glove Onboarding |
| `CaseFlow-founding-members-overview.pdf` | Founding Members Program |

Attach or share these directly — no browser step required.

## Source HTML (edit here)

| HTML source | Notes |
|-------------|--------|
| `CUSTOMER_WHITEPAPER_STARTER.html` | Access Only (legacy filename) |
| `CUSTOMER_WHITEPAPER_PRO_ADVISORY.html` | Operational Advisory and Support |
| `CUSTOMER_WHITEPAPER_ONBOARDING.html` | White-Glove Onboarding |
| `CUSTOMER_WHITEPAPER_FOUNDING_MEMBERS.html` | Founding Members Program |

After editing HTML, regenerate PDFs (see below).

## Regenerate all PDFs (one command)

From the repo root (requires **Google Chrome** or Chromium):

```bash
npm run build:whitepaper-pdfs
```

Or:

```bash
./scripts/build-customer-whitepaper-pdfs.sh
```

## Manual PDF (no Chrome)

1. Open the `.html` file in **Chrome or Safari** (not Cursor).
2. **File ? Print ? Save as PDF**.
