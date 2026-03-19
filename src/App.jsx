export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      {/* Nav */}
      <header className="sticky top-0 z-30 border-b border-slate-200/80 bg-white/90 backdrop-blur">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-600 text-xs font-black tracking-wide text-white">
              TIER
            </span>
            <div>
              <p className="text-sm font-extrabold leading-tight tracking-tight sm:text-base">
                Tactics for Improved Efficiency &amp; Results (TIER)&trade;
              </p>
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">CaseFlow&trade;</p>
            </div>
          </div>
          <a
            href="https://app.tiercaseflow.com"
            className="rounded-xl bg-indigo-600 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-700"
          >
            Open TIER CaseFlow&trade;
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto w-full max-w-6xl px-6 pb-10 pt-10 sm:pb-12 sm:pt-14">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
          <h1 className="text-3xl font-black leading-tight tracking-tight sm:text-5xl">
            TIER CaseFlow&trade;
          </h1>
          <p className="mt-3 text-sm font-semibold uppercase tracking-wide text-indigo-700">
            Investigative Workflow Platform
          </p>
          <p className="mt-4 max-w-4xl text-base leading-relaxed text-slate-600 sm:text-lg">
            TIER CaseFlow&trade; centralizes case activity, directives, and reporting in one secure operational
            workspace so investigators and attorneys stay aligned with structure and accountability from intake
            through resolution.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="https://app.tiercaseflow.com"
              className="rounded-xl bg-indigo-600 px-5 py-3 text-sm font-semibold text-white hover:bg-indigo-700"
            >
              Open TIER CaseFlow&trade;
            </a>
            <a
              href="mailto:info@tiercaseflow.com"
              className="rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-100"
            >
              Request Information
            </a>
          </div>
        </div>
      </section>

      {/* Why */}
      <section className="mx-auto w-full max-w-6xl px-6 py-5 sm:py-6">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-bold tracking-tight">Why TIER CaseFlow&trade; Was Built</h2>
          <p className="mt-4 text-slate-600 leading-relaxed">
            TIER CaseFlow&trade; was built to solve common case management problems: scattered notes, inconsistent
            activity logs, and unclear priorities that slow investigators down.
          </p>
          <p className="mt-3 text-slate-600 leading-relaxed">
            It is based on real investigative workflows and gives investigators a clear daily structure for case
            jackets, task tracking, reporting, and voucher visibility.
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="mx-auto w-full max-w-6xl px-6 py-8 sm:py-10">
        <h2 className="mb-5 text-2xl font-bold tracking-tight">Operational Benefits</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {[
            [
              'Reduce Administrative Drag',
              'Replace scattered notes and disconnected systems with one consistent workflow.',
            ],
            [
              'Improve Visibility',
              'Give attorneys clear insight into activity status, workload, and progress.',
            ],
            [
              'Strengthen Billing Accuracy',
              'Track narrative activity and voucher status in real time for cleaner submissions.',
            ],
            [
              'Increase Case Readiness',
              'Keep priorities and deadlines visible so critical tasks keep moving.',
            ],
          ].map(([title, text]) => (
            <div key={title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-base font-bold">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="mx-auto w-full max-w-6xl px-6 py-8 sm:py-10">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-bold tracking-tight">How It Works</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            {[
              ['1) Capture Activity', 'Log updates, evidence status, communications, and billable work.'],
              ['2) Track Priorities', 'Assign directives, set due dates, and keep work moving.'],
              ['3) Share Clear Reports', 'Generate concise summaries and monitor voucher status.'],
            ].map(([title, text]) => (
              <div key={title} className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <h3 className="text-base font-bold">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto w-full max-w-6xl px-6 py-8 sm:py-10">
          <h2 className="mb-5 text-2xl font-bold tracking-tight">Core Capabilities</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {[
            ['Case File Jackets', 'Centralized matter details, court events, communications, and evidence status.'],
            ['Activity Logging', 'Narrative activity logs with coded work and billable hours.'],
            ['Task Coordination', 'Directives tracked by priority and due date.'],
            ['Reporting Hub', 'Fast generation of attorney-facing summaries.'],
            ['Voucher Pipeline', 'Visibility from missing to submitted to paid.'],
            ['Operational Clarity', 'One workspace that improves consistency and follow-through.'],
          ].map(([title, text]) => (
            <div key={title} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <h3 className="text-base font-bold">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="mx-auto w-full max-w-6xl px-6 pb-16">
        <div className="rounded-3xl bg-slate-900 p-8 text-white shadow-lg sm:p-10">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
            Ready to run investigations with more clarity and control?
          </h2>
          <p className="mt-3 max-w-2xl text-slate-300">
            Built for investigators who need a clear, accountable workflow from intake to resolution.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="https://app.tiercaseflow.com"
              className="inline-block rounded-xl bg-indigo-500 px-5 py-3 text-sm font-semibold text-white hover:bg-indigo-400"
            >
              Open TIER CaseFlow&trade;
            </a>
            <a
              href="mailto:info@tiercaseflow.com"
              className="inline-block rounded-xl border border-slate-600 px-5 py-3 text-sm font-semibold text-slate-100 hover:bg-slate-800"
            >
              Contact Sales
            </a>
            <a
              href="https://calendly.com/andrea-tiercaseflow/30min"
              className="inline-block rounded-xl border border-indigo-300 px-5 py-3 text-sm font-semibold text-indigo-100 hover:bg-indigo-900/30"
            >
              Book a Demo
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 px-6 py-6 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 TIER CaseFlow&trade;. All rights reserved.</p>
          <div className="flex flex-wrap gap-4">
            <a className="hover:text-slate-700" href="mailto:info@tiercaseflow.com">
              info@tiercaseflow.com
            </a>
            <a className="hover:text-slate-700" href="https://tiercaseflow.com">
              tiercaseflow.com
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
