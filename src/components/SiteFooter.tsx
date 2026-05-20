import { PRIVACY_POLICY_URL, REFUND_POLICY_URL, TERMS_URL } from '../config/site'

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-slate-950">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-8 text-sm text-slate-400 lg:flex-row lg:items-start lg:justify-between lg:px-8">
        <div>
          <p>&copy; 2026 Tactics for Improved Efficiency &amp; Results, LLC. All rights reserved.</p>
          <ul className="mt-4 list-disc space-y-1.5 pl-5 text-slate-300">
            <li>
              <a
                href={TERMS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-white/30 underline-offset-2 transition hover:text-white hover:decoration-white/60"
              >
                Terms &amp; Conditions
              </a>
            </li>
            <li>
              <a
                href={PRIVACY_POLICY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-white/30 underline-offset-2 transition hover:text-white hover:decoration-white/60"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                href={REFUND_POLICY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-white/30 underline-offset-2 transition hover:text-white hover:decoration-white/60"
              >
                Refund Policy
              </a>
            </li>
          </ul>
        </div>
        <div className="space-y-1 text-left lg:max-w-md lg:text-right">
          <p>TIER&trade; is a trademark of Tactics for Improved Efficiency &amp; Results, LLC.</p>
          <p>TIER CaseFlow is a software platform provided by TIER.</p>
        </div>
      </div>
    </footer>
  )
}
