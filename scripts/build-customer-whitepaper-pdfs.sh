#!/usr/bin/env bash
# Build print-ready PDFs from docs/CUSTOMER_WHITEPAPER_*.html using Chrome headless.
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
DOCS="$ROOT/docs"
OUT="$DOCS/pdfs"
mkdir -p "$OUT"

if [[ -x "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" ]]; then
  CHROME="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
elif [[ -x "/Applications/Chromium.app/Contents/MacOS/Chromium" ]]; then
  CHROME="/Applications/Chromium.app/Contents/MacOS/Chromium"
elif command -v google-chrome >/dev/null 2>&1; then
  CHROME="$(command -v google-chrome)"
elif command -v chromium >/dev/null 2>&1; then
  CHROME="$(command -v chromium)"
else
  echo "Error: Google Chrome or Chromium is required for PDF export." >&2
  echo "Install Chrome, or open each HTML file in a browser and use File > Print > Save as PDF." >&2
  exit 1
fi

build_pdf() {
  local html_name="$1"
  local pdf_name="$2"
  local html_path="$DOCS/$html_name"
  local pdf_path="$OUT/$pdf_name"

  if [[ ! -f "$html_path" ]]; then
    echo "Skip (missing): $html_name" >&2
    return 0
  fi

  echo "Building $pdf_name ..."
  "$CHROME" \
    --headless=new \
    --disable-gpu \
    --no-pdf-header-footer \
    --print-to-pdf="$pdf_path" \
    "file://$html_path"
}

build_pdf "CUSTOMER_WHITEPAPER_STARTER.html" "CaseFlow-access-only-overview.pdf"
build_pdf "CUSTOMER_WHITEPAPER_PRO_ADVISORY.html" "CaseFlow-operational-advisory-overview.pdf"
build_pdf "CUSTOMER_WHITEPAPER_ONBOARDING.html" "CaseFlow-white-glove-onboarding-overview.pdf"
build_pdf "CUSTOMER_WHITEPAPER_FOUNDING_MEMBERS.html" "CaseFlow-founding-members-overview.pdf"

echo ""
echo "Done. PDFs written to: $OUT"
