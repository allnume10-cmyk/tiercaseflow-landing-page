import { useEffect, useRef, useState } from 'react'

const APP_URL = 'https://app.tiercaseflow.com'
const CALENDLY_URL = 'https://calendly.com/andrea-tiercaseflow/30min'
const CONTACT_US_MAILTO = 'mailto:support@tiercaseflow.com'
const CONTACT_US_EMAIL = 'support@tiercaseflow.com'
const CONTACT_US_PHONE = '227-259-4871'
const CONTACT_US_PHONE_TEL = 'tel:+12272594871'
const ONBOARDING_FORM_URL = 'https://forms.gle/hSyMZcsoNLzwWXzk9'
const STRIPE_CHECKOUT_STARTER_URL = 'https://buy.stripe.com/00w5kDaZmapMcUJaT5bjW05'
const PRO_QUOTE_FORM_URL =
  'https://docs.google.com/forms/d/e/1FAIpQLSeRZr_KctWw16dkkHiIjhxA9ZHaOe0AijFkOGBRvSFHf0ExaQ/viewform?usp=publish-editor'
const TERMS_URL =
  'https://docs.google.com/document/d/1wls41IsUejAfLeTYgflUzXkKGmiklqCCfMIsDRmYG3w/edit?usp=share_link'
const PRIVACY_POLICY_URL =
  'https://docs.google.com/document/d/1fOmIvltJkqiWzne3Jy9rs-05EILmtpgO3Eofx8aWQj8/edit?usp=share_link'
const REFUND_POLICY_URL =
  'https://docs.google.com/document/d/1VJVwCsfpCHIetzRmTF_ZuY8PGD2u0GfZ-O-puMhO86A/edit?usp=share_link'
const SYSTEM_STATUS_KEY = 'system_status_banner_v1'
const SUPABASE_URL = 'https://hezgzrgwuegovztqxsts.supabase.co'
const SUPABASE_ANON_KEY =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imhlemd6cmd3dWVnb3Z6dHF4c3RzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjcwMjEyNTMsImV4cCI6MjA4MjU5NzI1M30.7Oph6m2BlYmpUTa465Ak2eu4I5VEKh6Amvkvjh6AG9s'

export default function App() {
  const [showHeaderContact, setShowHeaderContact] = useState(false)
  const headerContactRef = useRef(null)
  const [publicSystemStatus, setPublicSystemStatus] = useState(null)

  useEffect(() => {
    if (!showHeaderContact) return

    const onPointerDown = (event) => {
      if (!headerContactRef.current) return
      if (headerContactRef.current.contains(event.target)) return
      setShowHeaderContact(false)
    }

    window.addEventListener('pointerdown', onPointerDown)
    return () => window.removeEventListener('pointerdown', onPointerDown)
  }, [showHeaderContact])

  useEffect(() => {
    const loadPublicSystemStatus = async () => {
      try {
        const query = new URLSearchParams({
          select: 'value',
          key: `eq.${SYSTEM_STATUS_KEY}`,
          limit: '1',
        });
        const res = await fetch(`${SUPABASE_URL}/rest/v1/app_settings?${query.toString()}`, {
          method: 'GET',
          headers: {
            apikey: SUPABASE_ANON_KEY,
            Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
          },
        });
        if (!res.ok) return;
        const rows = await res.json();
        if (!Array.isArray(rows) || rows.length === 0) return;
        const raw = rows[0]?.value;
        if (!raw) return;
        const parsed = typeof raw === 'string' ? JSON.parse(raw) : raw;
        if (!parsed || typeof parsed !== 'object') return;
        if (parsed.active === false) return;
        const level = parsed.level === 'red' || parsed.level === 'yellow' || parsed.level === 'green' ? parsed.level : 'green';
        const title = typeof parsed.title === 'string' && parsed.title.trim() ? parsed.title : 'Service Status: Operational';
        const message = typeof parsed.message === 'string' && parsed.message.trim() ? parsed.message : '';
        const supportLine =
          level === 'red' && typeof parsed.supportLine === 'string' && parsed.supportLine.trim()
            ? parsed.supportLine
            : null;
        setPublicSystemStatus({ level, title, message, supportLine });
      } catch {
        // Keep landing page resilient; status strip is optional.
      }
    };
    loadPublicSystemStatus();
  }, []);

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
      {publicSystemStatus && (
        <div
          className={`border-b px-4 py-3 sm:px-6 ${
            publicSystemStatus.level === 'red'
              ? 'bg-rose-50 border-rose-200 text-rose-950'
              : publicSystemStatus.level === 'yellow'
                ? 'bg-amber-50 border-amber-200 text-amber-950'
                : 'bg-emerald-50 border-emerald-200 text-emerald-950'
          }`}
          role="status"
          aria-live={publicSystemStatus.level === 'red' ? 'assertive' : 'polite'}
        >
          <div className="mx-auto max-w-7xl">
            <p className="text-[11px] font-black uppercase tracking-widest">{publicSystemStatus.title}</p>
            {publicSystemStatus.message ? (
              <p className="mt-1 text-sm font-medium leading-relaxed">{publicSystemStatus.message}</p>
            ) : null}
            {publicSystemStatus.level === 'red' && publicSystemStatus.supportLine ? (
              <p className="mt-2 text-xs font-semibold leading-relaxed">{publicSystemStatus.supportLine}</p>
            ) : null}
          </div>
        </div>
      )}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-3 sm:px-6 sm:py-4 lg:px-8">
          <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex items-center justify-between gap-3">
              <div className="text-base font-semibold tracking-wide sm:text-lg">
                <span className="text-white">TIER™</span> <span className="text-slate-300">CaseFlow</span>
              </div>
              <div className="flex shrink-0 items-center gap-2 sm:gap-3 lg:hidden">
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

            <nav className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs text-slate-300 sm:text-sm lg:flex-1 lg:justify-center lg:text-sm">
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

            <div className="hidden shrink-0 items-center gap-2 sm:gap-3 lg:flex">
              <a
                href={APP_URL}
                className="min-h-[44px] min-w-[44px] px-2 py-2 text-sm font-medium text-slate-300 transition hover:text-white sm:min-h-0 sm:min-w-0 sm:px-0"
              >
                Sign in
              </a>

              <div className="relative" ref={headerContactRef}>
                <button
                  type="button"
                  onClick={() => setShowHeaderContact((prev) => !prev)}
                  aria-expanded={showHeaderContact}
                  aria-controls="header-contact-panel"
                  className="min-h-[44px] rounded-2xl border border-white/15 bg-white/5 px-3 py-2 text-center text-xs font-medium text-white transition hover:bg-white/10 sm:min-h-0 sm:px-4 sm:text-sm"
                >
                  Contact us
                </button>

                {showHeaderContact ? (
                  <div
                    id="header-contact-panel"
                    className="absolute right-0 top-[calc(100%+0.5rem)] w-[min(320px,calc(100vw-2rem))] rounded-2xl border border-white/10 bg-slate-950/95 p-4 text-left shadow-2xl backdrop-blur"
                  >
                    <div className="space-y-2 text-sm text-slate-200">
                      <a
                        href={CONTACT_US_MAILTO}
                        className="block underline decoration-white/25 underline-offset-2 transition hover:text-white hover:decoration-white/60"
                      >
                        {CONTACT_US_EMAIL}
                      </a>
                      <div className="text-slate-300">
                        <a
                          href={CONTACT_US_PHONE_TEL}
                          className="underline decoration-white/25 underline-offset-2 transition hover:text-white hover:decoration-white/60"
                        >
                          {CONTACT_US_PHONE}
                        </a>{' '}
                        <span className="text-slate-400">(Mon–Fri, ET)</span>
                      </div>
                    </div>
                  </div>
                ) : null}
              </div>

              <a
                href="#contact"
                className="min-h-[44px] rounded-2xl border border-white/15 bg-white px-3 py-2 text-center text-xs font-medium text-slate-950 shadow-lg transition hover:scale-[1.02] sm:min-h-0 sm:px-4 sm:text-sm"
              >
                Book a Demo
              </a>
            </div>
          </div>
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
              TIER CaseFlow is a real-time intelligence platform that helps criminal investigators manage cases, track
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
                <li className="rounded-2xl bg-white/5 px-4 py-3">Avoid missed tasks and follow-ups</li>
                <li className="rounded-2xl bg-white/5 px-4 py-3">Enhanced communication with attorneys</li>
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

          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            <div className="rounded-[32px] border border-white/10 bg-slate-900/70 p-8 shadow-xl">
              <p className="text-sm uppercase tracking-[0.2em] text-slate-400">Starter</p>
              <div className="mt-4 flex items-end gap-2">
                <span className="text-5xl font-semibold">$75</span>
                <span className="mb-1 text-slate-400">/ month</span>
              </div>
              <p className="mt-4 text-slate-300">
                A structured foundation for case tracking, activity logging, and day-to-day organization.
              </p>
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
              <p className="mt-2 text-sm font-medium text-cyan-100">
                Everything in Starter, plus hands-on advisory and support.
              </p>
              <div className="mt-4 flex items-end gap-2">
                <span className="text-2xl font-semibold leading-tight">Operational Advisory &amp; Support</span>
              </div>
              <p className="mt-2 text-sm font-medium text-cyan-100">(Premium Support)</p>
              <p className="mt-4 text-slate-100">
                A hands-on support service designed to help manage workflow, monitor case progress, and ensure
                nothing falls through the cracks.
              </p>
              <p className="mt-4 text-slate-100">
                Designed for investigators who want ongoing oversight, structure, and support as their caseload
                grows—while ensuring cases continue to move and revenue is consistently captured.
              </p>
              <ul className="mt-6 space-y-3 text-slate-100">
                <li>• Full case management</li>
                <li>• Weekly reports</li>
                <li>• Voucher monitoring</li>
                <li>• Back-office support</li>
              </ul>
              <a
                href={PRO_QUOTE_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-block rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-slate-950 shadow-lg transition hover:scale-[1.02]"
              >
                Request Pro Quote
              </a>
            </div>
            <div id="onboarding" className="rounded-[32px] border border-white/10 bg-slate-900/70 p-8 shadow-xl">
              <div className="flex items-center justify-between gap-4">
                <p className="text-sm uppercase tracking-[0.2em] text-slate-300">White-Glove Onboarding</p>
                <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-slate-200">Optional</span>
              </div>
              <p className="mt-4 text-slate-300">
                We migrate existing cases and organize your system so you start with a clean, structured workflow.
              </p>
              <p className="mt-4 text-slate-300">
                Pricing is custom based on caseload and data sources; most projects range between $250-$750.
              </p>
              <div className="mt-6 rounded-2xl border border-white/10 bg-slate-950/60 p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200">Onboarding process</p>
                <ol className="mt-3 space-y-2 text-sm text-slate-200">
                  <li>1. Subscribe to TIER CaseFlow</li>
                  <li>2. Submit an onboarding request</li>
                  <li>3. Receive a custom quote</li>
                  <li>4. Onboarding begins after payment</li>
                </ol>
              </div>
              <a
                href={ONBOARDING_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-block rounded-2xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Request Onboarding Quote
              </a>
            </div>
          </div>
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
              href={CONTACT_US_MAILTO}
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

          <div className="mt-6 space-y-2 text-sm text-slate-200">
            <a
              href={CONTACT_US_MAILTO}
              className="underline decoration-white/30 underline-offset-2 transition hover:text-white hover:decoration-white/60"
            >
              {CONTACT_US_EMAIL}
            </a>
            <div className="text-slate-300">
              <a
                href={CONTACT_US_PHONE_TEL}
                className="underline decoration-white/30 underline-offset-2 transition hover:text-white hover:decoration-white/60"
              >
                {CONTACT_US_PHONE}
              </a>{' '}
              <span className="text-slate-400">(Mon–Fri, ET)</span>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-slate-950">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-8 text-sm text-slate-400 lg:flex-row lg:items-start lg:justify-between lg:px-8">
          <div>
            <p>© 2026 Tactics for Improved Efficiency & Results, LLC. All rights reserved.</p>
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
            <p>TIER™ is a trademark of Tactics for Improved Efficiency & Results, LLC.</p>
            <p>TIER CaseFlow is a software platform provided by TIER.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
