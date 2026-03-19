export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      {/* Nav */}
      <header className="sticky top-0 z-30 border-b border-slate-200/80 bg-white/90 backdrop-blur">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
          <div>
            <p className="text-lg font-extrabold tracking-tight">TIER CaseFlow</p>
            <p className="text-xs font-medium text-slate-500">Investigative Workflow Platform</p>
          </div>
          <a
            href="https://app.tiercaseflow.com"
            className="rounded-xl bg-indigo-600 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-700"
          >
            Open Application
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto w-full max-w-6xl px-6 pt-16 pb-12">
        <div className="rounded-3xl border border-slate-200 bg-white p-10 shadow-sm">
          <h1 className="text-4xl font-black tracking-tight sm:text-5xl">TIER CaseFlow</h1>
          <p className="mt-3 text-lg text-slate-600">
            Investigative Workflow Platform for Criminal Defense Teams
          </p>
          <p className="mt-6 max-w-3xl text-slate-600 leading-relaxed">
            Centralize case activity, directives, and reporting in one secure operational workspace.
            TIER CaseFlow helps investigative teams move faster with structure, visibility, and accountability.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="https://app.tiercaseflow.com"
              className="rounded-xl bg-indigo-600 px-5 py-3 text-sm font-semibold text-white hover:bg-indigo-700"
            >
              Open Application
            </a>
            <a
              href="mailto:info@tiercaseflow.com"
              className="rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-100"
            >
              Contact
            </a>
          </div>
          <p className="mt-6 text-sm text-slate-500">
            Built for investigators, case managers, and legal operations teams.
          </p>
        </div>
      </section>

      {/* Why */}
      <section className="mx-auto w-full max-w-6xl px-6 py-6">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-bold tracking-tight">Why TIER CaseFlow Was Built</h2>
          <p className="mt-4 text-slate-600 leading-relaxed">
            TIER CaseFlow was built to eliminate operational friction in investigative case management:
            scattered notes, inconsistent logs, and unclear priorities.
          </p>
          <p className="mt-3 text-slate-600 leading-relaxed">
            It evolved from field-tested workflows into a structured platform teams can rely on daily
            for case jackets, task coordination, reporting, and voucher pipeline visibility.
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto w-full max-w-6xl px-6 py-10">
        <h2 className="mb-5 text-2xl font-bold tracking-tight">Core Capabilities</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {[
            ['Case File Jackets', 'Centralized matter details, court events, communications, and evidence status.'],
            ['Activity Logging', 'Narrative-based logs with coded activity and billable hours.'],
            ['Task Coordination', 'Operational directives tracked by priority and due date.'],
            ['Reporting Hub', 'Fast generation of attorney-facing and internal summaries.'],
            ['Voucher Pipeline', 'Visibility from missing to submitted to paid.'],
            ['Operational Clarity', 'A single workspace that improves consistency and follow-through.'],
          ].map(([title, text]) => (
            <div key={title} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <h3 className="text-base font-bold">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Audience */}
      <section className="mx-auto w-full max-w-6xl px-6 pb-10">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-bold tracking-tight">Who It’s For</h2>
          <div className="mt-4 flex flex-wrap gap-3">
            {[
              'Investigators managing active matters',
              'Case managers coordinating timelines and tasks',
              'Attorneys and administrators monitoring readiness',
            ].map((item) => (
              <span
                key={item}
                className="rounded-full border border-indigo-100 bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-700"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="mx-auto w-full max-w-6xl px-6 pb-16">
        <div className="rounded-3xl bg-slate-900 p-8 text-white shadow-lg">
          <h2 className="text-2xl font-bold tracking-tight">Ready to streamline investigative operations?</h2>
          <p className="mt-2 text-slate-300">
            Access TIER CaseFlow and continue your workflow in one centralized platform.
          </p>
          <a
            href="https://app.tiercaseflow.com"
            className="mt-6 inline-block rounded-xl bg-indigo-500 px-5 py-3 text-sm font-semibold text-white hover:bg-indigo-400"
          >
            Open TIER CaseFlow
          </a>
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto w-full max-w-6xl px-6 py-6 text-sm text-slate-500">
          © 2026 TIER CaseFlow. All rights reserved.
        </div>
      </footer>
    </div>
  )
}
