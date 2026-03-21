const APP_URL = 'https://app.tiercaseflow.com'
const CALENDLY_URL = 'https://calendly.com/andrea-tiercaseflow/30min'
const MAILTO = 'mailto:info@tiercaseflow.com'

/** TIER™ immediately before CaseFlow (TIER is trademarked). */
function BrandName({ className = '' }) {
  return (
    <span className={className}>
      TIER
      <span
        className="align-super ml-0.5 text-[0.55em] font-bold leading-none"
        aria-hidden="true"
      >
        ™
      </span>
      <span className="ml-1">CaseFlow</span>
    </span>
  )
}

/** Hero: TIER™ prominent; CaseFlow secondary color. */
function HeroWordmark({ className = '' }) {
  return (
    <span className={className}>
      <span className="text-white">
        TIER
        <span
          className="align-super ml-0.5 text-[0.55em] font-bold leading-none"
          aria-hidden="true"
        >
          ™
        </span>
      </span>{' '}
      <span className="text-slate-300">CaseFlow</span>
    </span>
  )
}

export default function App() {
  const features = [
    {
      title: 'Case Management',
      description:
        'Track every case from intake to closure in one centralized system.',
      icon: '📁',
    },
    {
      title: 'Activity Tracking',
      description:
        'Log investigative work, updates, and notes with clarity and consistency.',
      icon: '📝',
    },
    {
      title: 'Voucher Monitoring',
      description:
        'Keep an eye on missing vouchers so completed work does not slip through unpaid.',
      icon: '💳',
    },
    {
      title: 'Reporting Dashboard',
      description:
        'Get visibility into case progress, deadlines, and workload at a glance.',
      icon: '📊',
    },
  ]

  const problems = [
    'Cases scattered across emails, notes, and spreadsheets',
    'Missed vouchers leading to lost revenue',
    'No clear visibility into case status',
    'Too much time spent managing instead of investigating',
  ]

  const benefits = [
    'Stay on top of every case',
    'Never miss a voucher or deadline',
    'Keep attorneys informed without extra work',
    'Focus on investigations, not admin',
  ]

  const steps = [
    'Add your cases',
    'Track activities and tasks',
    'Monitor progress and deadlines',
    'Generate reports and stay organized',
  ]

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/85 backdrop-blur">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-4 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <div className="flex items-center justify-between gap-4 sm:justify-start">
            <a href="/" className="text-lg font-semibold tracking-wide hover:opacity-90">
              <BrandName />
            </a>
            <a
              href={APP_URL}
              className="rounded-xl border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-semibold text-white sm:hidden"
            >
              Open app
            </a>
          </div>

          <nav className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-slate-300">
            <a href="#challenges" className="transition hover:text-white">
              Challenges
            </a>
            <a href="#features" className="transition hover:text-white">
              Features
            </a>
            <a href="#pricing" className="transition hover:text-white">
              Pricing
            </a>
            <a href="#contact" className="transition hover:text-white">
              Demo
            </a>
            <a
              href={APP_URL}
              className="hidden font-medium text-cyan-200 transition hover:text-white sm:inline"
            >
              Open app
            </a>
          </nav>

          <div className="flex flex-wrap items-center gap-3 sm:justify-end">
            <a
              href={APP_URL}
              className="hidden rounded-2xl border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/10 sm:inline-block"
            >
              Log in
            </a>
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl border border-white/15 bg-white px-4 py-2 text-sm font-medium text-slate-950 shadow-lg transition hover:scale-[1.02]"
            >
              Book a Demo
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.18),transparent_35%),radial-gradient(circle_at_80%_30%,rgba(168,85,247,0.16),transparent_30%)]" />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-2 lg:px-8 lg:py-28">
          <div className="flex flex-col justify-center">
            <div className="mb-4 inline-flex w-fit items-center rounded-full border border-cyan-400/25 bg-cyan-400/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-cyan-200">
              Investigative Case Management Platform
            </div>

            <h1 className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              <HeroWordmark />
            </h1>

            <p className="mt-4 text-xl text-slate-200 sm:text-2xl">
              Investigative Case Management, Simplified.
            </p>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
              Run your entire investigative caseload from one system—no spreadsheets, no missed vouchers, no
              forgotten follow-ups.
            </p>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300">
              <BrandName className="font-semibold text-slate-100" /> is a software platform designed for
              investigators and legal professionals to manage cases, track activities, monitor deadlines, and
              streamline workflow from intake to closure.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="#pricing"
                className="rounded-2xl bg-white px-6 py-3 text-center text-sm font-semibold text-slate-950 shadow-xl transition hover:scale-[1.02]"
              >
                Get Started
              </a>
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3 text-center text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Schedule Demo
              </a>
              <a
                href={APP_URL}
                className="rounded-2xl border border-cyan-400/30 bg-cyan-400/10 px-6 py-3 text-center text-sm font-semibold text-cyan-100 transition hover:bg-cyan-400/20"
              >
                Open app
              </a>
            </div>
          </div>

          <div className="flex w-full max-w-xl flex-col items-center justify-center lg:max-w-none lg:items-stretch">
            <p className="mb-3 text-sm uppercase tracking-[0.2em] text-cyan-300">
              Intelligence Command Center
            </p>
            <img
              src="/tier-caseflow-dashboard.png"
              alt="TIER CaseFlow Intelligence Command Dashboard"
              className="h-auto w-full rounded-[24px] border border-white/10 shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Challenges */}
      <section id="challenges" className="border-t border-white/10 bg-slate-900/70">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">The Challenges</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              Too many cases. Too many moving parts. Not enough visibility.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-300">
              Investigators should not have to piece together their business from email threads, handwritten
              notes, and scattered spreadsheets.
            </p>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {problems.map((item) => (
              <div
                key={item}
                className="rounded-3xl border border-white/10 bg-slate-950/60 p-6 text-slate-200 shadow-lg"
              >
                <div className="flex items-start gap-3">
                  <span className="mt-1 text-lg" aria-hidden="true">
                    ⚠️
                  </span>
                  <p className="leading-7">{item}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="bg-slate-950">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_.9fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
                One System. Total Control.
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                Centralize your cases, tasks, activities, and reporting.
              </h2>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                <BrandName className="font-semibold text-slate-100" /> brings your workflow into one platform so
                you can track progress, monitor deadlines, manage communication, and move every case forward with
                confidence.
              </p>
            </div>

            <div className="rounded-[28px] border border-cyan-400/20 bg-cyan-400/5 p-8 shadow-xl">
              <p className="text-sm uppercase tracking-[0.2em] text-cyan-200">What that means</p>
              <ul className="mt-5 space-y-4 text-slate-200">
                <li className="rounded-2xl bg-white/5 px-4 py-3">Clear visibility from intake to closure</li>
                <li className="rounded-2xl bg-white/5 px-4 py-3">Fewer missed tasks and fewer dropped follow-ups</li>
                <li className="rounded-2xl bg-white/5 px-4 py-3">Better communication with attorneys</li>
                <li className="rounded-2xl bg-white/5 px-4 py-3">More consistency, structure, and billable control</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Built for investigators */}
      <section className="border-t border-white/10 bg-slate-900/60">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
                Built for Real Investigators
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                Created from real investigative workflows, not theory.
              </h2>
              <p className="mt-6 text-lg leading-8 text-slate-300">
                The platform reflects how investigations actually run—so cases keep moving, tasks stay visible,
                attorneys stay informed, and revenue does not get left on the table.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {benefits.map((item) => (
                <div
                  key={item}
                  className="rounded-3xl border border-white/10 bg-slate-950/60 p-6 shadow-lg"
                >
                  <div className="text-2xl" aria-hidden="true">
                    ✔
                  </div>
                  <p className="mt-3 text-base leading-7 text-slate-200">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="bg-slate-950">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">Features</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              Everything You Need to Manage Cases and Protect Your Revenue
            </h2>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="rounded-[28px] border border-white/10 bg-slate-900/70 p-6 shadow-lg"
              >
                <div className="text-3xl" aria-hidden="true">
                  {feature.icon}
                </div>
                <h3 className="mt-4 text-xl font-semibold">{feature.title}</h3>
                <p className="mt-3 leading-7 text-slate-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="border-t border-white/10 bg-slate-900/60">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">How It Works</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              Simple steps. Better workflow.
            </h2>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {steps.map((step, index) => (
              <div
                key={step}
                className="rounded-[28px] border border-white/10 bg-slate-950/60 p-6 shadow-lg"
              >
                <div className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
                  Step {index + 1}
                </div>
                <p className="mt-4 text-xl font-semibold leading-8 text-white">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="bg-slate-950">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">Pricing</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              Simple, transparent pricing.
            </h2>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            <div className="rounded-[32px] border border-white/10 bg-slate-900/70 p-8 shadow-xl">
              <p className="text-sm uppercase tracking-[0.2em] text-slate-400">Starter</p>
              <div className="mt-4 flex items-end gap-2">
                <span className="text-5xl font-semibold">$100</span>
                <span className="mb-1 text-slate-400">/ month</span>
              </div>
              <p className="mt-4 text-slate-300">A clean starting point for case tracking and organization.</p>
              <ul className="mt-6 space-y-3 text-slate-200">
                <li>• Case tracking</li>
                <li>• Activity logging</li>
                <li>• Basic reporting</li>
              </ul>
              <a
                href="#contact"
                className="mt-8 inline-block rounded-2xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Choose Starter
              </a>
            </div>

            <div className="rounded-[32px] border border-cyan-400/30 bg-cyan-400/10 p-8 shadow-2xl ring-1 ring-cyan-400/20">
              <div className="flex items-center justify-between gap-4">
                <p className="text-sm uppercase tracking-[0.2em] text-cyan-200">Pro</p>
                <span className="rounded-full bg-cyan-300/15 px-3 py-1 text-xs font-medium text-cyan-100">
                  Most Popular
                </span>
              </div>
              <div className="mt-4 flex items-end gap-2">
                <span className="text-5xl font-semibold">$250</span>
                <span className="mb-1 text-slate-300">/ month</span>
              </div>
              <p className="mt-4 text-slate-200">
                Expanded support for investigators who want stronger structure and oversight.
              </p>
              <ul className="mt-6 space-y-3 text-slate-100">
                <li>• Full case management</li>
                <li>• Weekly reports</li>
                <li>• Voucher monitoring</li>
                <li>• Back-office support</li>
              </ul>
              <a
                href="#contact"
                className="mt-8 inline-block rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-slate-950 shadow-lg transition hover:scale-[1.02]"
              >
                Choose Pro
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="border-t border-white/10 bg-slate-900/60">
        <div className="mx-auto max-w-5xl px-6 py-20 text-center lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">Ready When You Are</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-5xl">
            Ready to take control of your cases?
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Start using <BrandName className="font-semibold text-slate-100" /> today and bring clarity, structure,
            and efficiency to your investigative workflow.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={MAILTO}
              className="rounded-2xl bg-white px-6 py-3 text-sm font-semibold text-slate-950 shadow-xl transition hover:scale-[1.02]"
            >
              Email Us
            </a>
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Schedule Demo
            </a>
            <a
              href={APP_URL}
              className="rounded-2xl border border-cyan-400/30 bg-cyan-400/10 px-6 py-3 text-sm font-semibold text-cyan-100 transition hover:bg-cyan-400/20"
            >
              Open app
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-slate-950">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-sm text-slate-400 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <p>© 2026 Tactics for Improved Efficiency & Results, LLC. All rights reserved.</p>
          <div className="space-y-1 text-left lg:text-right">
            <p>TIER™ is a trademark of Tactics for Improved Efficiency & Results, LLC.</p>
            <p>
              <BrandName /> is provided by Tactics for Improved Efficiency &amp; Results, LLC.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
