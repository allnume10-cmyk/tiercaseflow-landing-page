const APP_URL = 'https://app.tiercaseflow.com'
const CALENDLY_URL = 'https://calendly.com/andrea-tiercaseflow/30min'
const MAILTO = 'mailto:info@tiercaseflow.com'
const ONBOARDING_FORM_URL = 'https://forms.gle/hSyMZcsoNLzwWXzk9'
const STRIPE_CHECKOUT_STARTER_URL = 'https://buy.stripe.com/5kQ9AT7Na8hE1c10erbjW00'
const STRIPE_CHECKOUT_PRO_URL = 'https://buy.stripe.com/bJe00jaZm69w4od4uHbjW01'

export default function App() {
  const features = [
    {
      title: 'Case Command Center',
      description:
        'View and manage every case from intake to closure in one centralized system.',
      icon: '📁',
    },
    {
      title: 'Activity Intelligence',
      description:
        'Capture every investigative activity with timestamps, notes, and full visibility.',
      icon: '📝',
    },
    {
      title: 'Revenue Protection',
      description:
        'Identify missing vouchers and ensure every completed task is accounted for and billable.',
      icon: '💳',
    },
    {
      title: 'Operational Dashboard',
      description:
        'Monitor case progress, deadlines, and workload with real-time insights.',
      icon: '📊',
    },
    {
      title: 'Risk & Priority Alerts',
      description:
        'Surface stagnant cases, overdue actions, and critical risks so you know exactly where to focus next.',
      icon: '🚨',
    },
  ]

  const challenges = [
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
    <div className="min-h-screen overflow-x-hidden bg-slate-950 text-white antialiased">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-3 sm:px-6 sm:py-4 lg:flex-row lg:items-center lg:justify-between lg:gap-4 lg:px-8">
          <div className="flex w-full items-center justify-between gap-2 lg:w-auto lg:justify-start">
            <div className="text-base font-semibold tracking-wide sm:text-lg">
              <span className="text-white">TIER™</span>
            </div>
            <div className="flex shrink-0 items-center gap-2 sm:gap-3">
              <a
                href={APP_URL}
                className="min-h-[44px] min-w-[44px] px-2 py-2 text-sm font-medium text-slate-300 transition hover:text-white sm:min-h-0 sm:min-w-0 sm:px-0"
              >
                Sign in
              </a>
              <a
                href="#contact"
                className="min-h-[44px] rounded-2xl border border-white/15 bg-white px-3 py-2 text-center text-xs font-medium text-slate-950 shadow-lg transition hover:scale-[1.02] sm:min-h-0 sm:px-4 sm:text-sm"
              >
                Book a Demo
              </a>
            </div>
          </div>

          <nav className="flex w-full flex-wrap items-center justify-center gap-x-4 gap-y-2 border-t border-white/5 pt-3 text-xs text-slate-300 sm:text-sm lg:w-auto lg:justify-end lg:border-t-0 lg:pt-0 lg:text-sm">
            <a href="#challenges" className="min-h-[44px] py-2 transition hover:text-white sm:min-h-0 sm:py-0">
              Challenges
            </a>
            <a href="#features" className="min-h-[44px] py-2 transition hover:text-white sm:min-h-0 sm:py-0">
              Features
            </a>
            <a href="#pricing" className="min-h-[44px] py-2 transition hover:text-white sm:min-h-0 sm:py-0">
              Pricing
            </a>
            <a href="#onboarding" className="min-h-[44px] py-2 transition hover:text-white sm:min-h-0 sm:py-0">
              Onboarding
            </a>
            <a href="#contact" className="min-h-[44px] py-2 transition hover:text-white sm:min-h-0 sm:py-0">
              Demo
            </a>
          </nav>
        </div>
      </header>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.18),transparent_35%),radial-gradient(circle_at_80%_30%,rgba(168,85,247,0.16),transparent_30%)]" />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:gap-12 sm:px-6 sm:py-20 lg:grid-cols-2 lg:px-8 lg:py-28">
          <div className="flex flex-col justify-center">
            <div className="mb-4 inline-flex max-w-full items-center rounded-full border border-cyan-400/25 bg-cyan-400/10 px-3 py-1.5 text-[10px] font-medium uppercase leading-snug tracking-[0.15em] text-cyan-200 sm:text-xs sm:tracking-[0.2em]">
              Investigative Case Intelligence Platform
            </div>

            <h1 className="max-w-3xl text-[1.65rem] font-semibold leading-[1.15] tracking-tight min-[400px]:text-3xl sm:text-4xl sm:leading-tight md:text-5xl lg:text-6xl">
              TIER™ <span className="text-slate-300">CaseFlow</span>
            </h1>

            <p className="mt-4 text-xl text-slate-200 sm:text-2xl">
              Command Your Cases. Protect Your Revenue.
            </p>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
              TIER CaseFlow is a real-time intelligence platform that helps investigators manage cases, track
              activities, monitor deadlines, and streamline workflow from intake to closure—ensuring no work goes
              unbilled.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="#pricing"
                className="rounded-2xl bg-white px-6 py-3 text-center text-sm font-semibold text-slate-950 shadow-xl transition hover:scale-[1.02]"
              >
                Get Started
              </a>
              <a
                href="#contact"
                className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3 text-center text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Schedule Demo
              </a>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <div className="w-full max-w-2xl rounded-[28px] border border-white/10 bg-white/5 p-4 shadow-2xl backdrop-blur">
              <p className="mb-3 text-sm uppercase tracking-[0.2em] text-cyan-300">
                Intelligence Command Center
              </p>
              <img
                src="/tier-caseflow-dashboard.png"
                alt="TIER CaseFlow Intelligence Command Dashboard"
                className="w-full rounded-[24px] border border-white/10 shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="challenges" className="border-t border-white/10 bg-slate-900/70">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">Challenges</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              Where Investigators Lose Time & Money
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-300">
              When workflow is scattered, things get missed—and missed work means missed revenue.
            </p>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {challenges.map((item) => (
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
                TIER CaseFlow brings your workflow into one platform so you can track progress, monitor deadlines,
                manage communication, and move every case forward with confidence.
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
                Built from real investigative workflows, TIER CaseFlow is designed to keep cases moving, eliminate
                missed tasks, keep attorneys informed, and ensure no revenue is left on the table.
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

      <section id="features" className="bg-slate-950">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">Features</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              Everything You Need to Manage Cases and Protect Your Revenue
            </h2>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
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
                href={STRIPE_CHECKOUT_STARTER_URL}
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
                href={STRIPE_CHECKOUT_PRO_URL}
                className="mt-8 inline-block rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-slate-950 shadow-lg transition hover:scale-[1.02]"
              >
                Choose Pro
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="onboarding" className="border-t border-white/10 bg-slate-950">
        <div className="mx-auto max-w-3xl px-6 py-16 text-center lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">Optional add-on</p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
            White-Glove Onboarding <span className="text-slate-500">(Optional)</span>
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-300 sm:text-lg">
            Need help getting started? We’ll help migrate your existing cases into TIER CaseFlow and organize your
            workspace from day one.
          </p>
          <p className="mx-auto mt-5 max-w-2xl text-base font-medium leading-7 text-cyan-100/95">
            Designed to get you fully set up without disrupting your current workflow.
          </p>

          <h3 className="mt-10 text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">The onboarding process</h3>
          <ol className="mx-auto mt-5 max-w-md space-y-3 text-left text-base text-slate-200">
            <li className="flex gap-3">
              <span className="shrink-0 font-semibold text-cyan-300">1.</span>
              <span>Subscribe to TIER CaseFlow</span>
            </li>
            <li className="flex gap-3">
              <span className="shrink-0 font-semibold text-cyan-300">2.</span>
              <span>Submit an onboarding request</span>
            </li>
            <li className="flex gap-3">
              <span className="shrink-0 font-semibold text-cyan-300">3.</span>
              <span>Receive a custom quote</span>
            </li>
            <li className="flex gap-3">
              <span className="shrink-0 font-semibold text-cyan-300">4.</span>
              <span>Onboarding begins once payment is received</span>
            </li>
          </ol>

          <p className="mx-auto mt-8 max-w-xl text-sm leading-6 text-slate-400">
            Pricing is custom based on caseload and data sources; we’ll confirm scope before any work. Most onboarding
            projects range between $250–$750.
          </p>

          <a
            href={ONBOARDING_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block rounded-2xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            Request Your Onboarding Quote
          </a>
        </div>
      </section>

      <section id="contact" className="border-t border-white/10 bg-slate-900/60">
        <div className="mx-auto max-w-5xl px-6 py-20 text-center lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">Ready When You Are</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-5xl">
            Ready to take control of your cases?
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Start using TIER CaseFlow today and bring clarity, structure, and efficiency to your investigative
            workflow.
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
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-slate-950">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-sm text-slate-400 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <p>© 2026 Tactics for Improved Efficiency & Results, LLC. All rights reserved.</p>
          <div className="space-y-1 text-left lg:text-right">
            <p>TIER™ is a trademark of Tactics for Improved Efficiency & Results, LLC.</p>
            <p>TIER CaseFlow is a software platform provided by TIER.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
