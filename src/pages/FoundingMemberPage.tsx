import { useEffect } from 'react'
import { SiteFooter } from '../components/SiteFooter'
import { SiteHeader } from '../components/SiteHeader'
import {
  FOUNDING_MEMBERS_SCHEDULE_CALL_URL,
  FOUNDING_MEMBER_APPLY_FORM_URL,
  SITE_URL,
} from '../config/site'

type BenefitCard = {
  title: string
  subtitle: string
  description: string
  includes: string[]
  accent: 'emerald' | 'violet'
}

const benefitCards: BenefitCard[] = [
  {
    title: 'Free Operational Advisory & Support',
    subtitle: 'First 3 Months Included',
    description:
      'Receive hands-on workflow guidance and implementation support as you transition into TIER CaseFlow.',
    includes: [
      'Weekly implementation guidance',
      'Workflow reviews',
      'Case management best practices',
      'Attorney reporting assistance',
      'Operational visibility support',
    ],
    accent: 'emerald',
  },
  {
    title: '50% Off White-Glove Onboarding',
    subtitle: 'Transition to TIER CaseFlow with confidence.',
    description: '',
    includes: [
      'System setup assistance',
      'Case migration support',
      'Workflow configuration',
      'Personalized onboarding sessions',
      'Faster path to adoption',
    ],
    accent: 'violet',
  },
  {
    title: 'Direct Founder Access',
    subtitle: "Help shape what's next.",
    description: '',
    includes: [
      'Direct communication',
      'Workflow discussions',
      'Enhancement feedback',
      'Operational insight sharing',
      'Early feature discussions',
    ],
    accent: 'violet',
  },
]

const consultationNote =
  'The Founding Members Program includes a brief onboarding consultation to review your workflow, discuss onboarding requirements, and answer any questions before getting started.'

function SectionRule({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-4">
      <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      <p className="text-xs font-bold uppercase tracking-[0.28em] text-slate-400">{label}</p>
      <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
    </div>
  )
}

function BenefitBox({ benefit }: { benefit: BenefitCard }) {
  const isEmerald = benefit.accent === 'emerald'

  return (
    <div
      className={`flex h-full flex-col rounded-[28px] border p-6 shadow-lg sm:p-7 ${
        isEmerald
          ? 'border-emerald-400/25 bg-emerald-400/5'
          : 'border-violet-400/25 bg-violet-400/5'
      }`}
    >
      <h3 className="text-lg font-semibold leading-snug text-white">{benefit.title}</h3>
      <p
        className={`mt-2 text-sm font-semibold ${
          isEmerald ? 'text-emerald-300' : 'text-violet-200'
        }`}
      >
        {benefit.subtitle}
      </p>
      {benefit.description ? (
        <p className="mt-4 text-sm leading-relaxed text-slate-300">{benefit.description}</p>
      ) : null}
      <div className="mt-5 flex-1">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">Includes:</p>
        <ul className="mt-3 space-y-2.5 text-sm text-slate-200">
          {benefit.includes.map((item) => (
            <li key={item} className="flex gap-2.5">
              <span className={`mt-0.5 shrink-0 ${isEmerald ? 'text-emerald-300' : 'text-violet-300'}`}>
                *
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export function FoundingMemberPage() {
  useEffect(() => {
    document.title = 'Founding Members Program | TIER\u2122 CaseFlow'
    const meta = document.querySelector('meta[name="description"]')
    if (meta) {
      meta.setAttribute(
        'content',
        'Become one of ten Founding Members of TIER CaseFlow. Exclusive support, onboarding benefits, and direct founder access.',
      )
    }
    let canonical = document.querySelector('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.setAttribute('rel', 'canonical')
      document.head.appendChild(canonical)
    }
    canonical.setAttribute('href', `${SITE_URL}/founding-member`)
  }, [])

  return (
    <div className="min-h-screen overflow-x-hidden bg-slate-950 text-white antialiased">
      <SiteHeader currentPage="founding-member" />

      <main>
        <section className="relative overflow-hidden border-b border-white/10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(52,211,153,0.12),transparent_40%),radial-gradient(circle_at_80%_20%,rgba(167,139,250,0.16),transparent_35%)]" />
          <div className="relative mx-auto max-w-4xl px-4 py-12 text-center sm:px-6 lg:px-8 lg:py-16">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-300">
              Founding Members Program
            </p>
            <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
              <span className="text-white">Partner With Us.</span>{' '}
              <span className="text-emerald-300">Shape What&apos;s Next.</span>
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
              Become one of ten Founding Members and receive exclusive support, guidance, and direct access
              while helping shape the future of TIER CaseFlow.
            </p>
            <div className="mx-auto mt-8 max-w-3xl overflow-hidden rounded-[28px] border border-violet-400/20 shadow-2xl ring-1 ring-white/10">
              <img
                src="/founding-handshake-focus.png"
                alt="Partnership handshake representing the TIER CaseFlow Founding Members Program"
                className="h-36 w-full object-cover object-center sm:h-44 md:h-52"
              />
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-300">
              Founding Members Program Benefits
            </p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
              Exclusive support for early investigative partners.
            </h2>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {benefitCards.map((benefit) => (
              <BenefitBox key={benefit.title} benefit={benefit} />
            ))}
          </div>

          <div className="mt-14 space-y-6">
            <SectionRule label="Limited to Ten" />
            <div className="rounded-[28px] border border-emerald-400/25 bg-gradient-to-b from-emerald-400/10 to-slate-900/40 p-6 text-center shadow-lg sm:p-8">
              <h3 className="text-xl font-semibold text-white sm:text-2xl">
                Limited to 10 Founding Investigators
              </h3>
              <p className="mt-3 text-sm font-medium text-emerald-200">
                To ensure personalized collaboration and support.
              </p>
              <p className="mx-auto mt-4 max-w-3xl text-sm leading-relaxed text-slate-300 sm:text-base">
                The Founding Members Program is intentionally limited to ten investigators so each participant
                receives meaningful engagement and implementation assistance during the program.
              </p>
            </div>
          </div>
        </section>

        <section className="border-t border-white/10 bg-slate-900/50">
          <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
            <SectionRule label="Founder Insight" />
            <div className="mt-8 rounded-[28px] border border-violet-400/20 bg-violet-400/5 p-6 sm:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-200">
                Founder Insight
              </p>
              <p className="mt-4 text-base leading-relaxed text-slate-200 sm:text-lg">
                The goal is not three free months.
              </p>
              <p className="mt-4 text-base leading-relaxed text-slate-200 sm:text-lg">
                The goal is to build lasting partnerships with investigators whose experience, insight, and
                feedback help ensure TIER CaseFlow continues to evolve in ways that meaningfully support the
                investigative community.
              </p>
              <p className="mt-4 text-base leading-relaxed text-slate-200 sm:text-lg">
                Like a well-tended garden, meaningful growth happens through collaboration, care, and a
                willingness to help shape what comes next.
              </p>
              <p className="founder-signature mt-6 text-emerald-300">Andrea Osborne</p>
              <p className="text-sm text-slate-400">Founder</p>
            </div>
          </div>
        </section>

        <section className="border-t border-white/10">
          <div className="mx-auto max-w-3xl px-4 py-12 text-center sm:px-6 lg:px-8 lg:py-16">
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Become a Founding Investigator</h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-300">
              Secure your spot in a limited cohort designed for hands-on partnership, onboarding support, and
              direct founder access.
            </p>
            <p className="mx-auto mt-5 max-w-2xl rounded-2xl border border-emerald-400/20 bg-emerald-400/5 px-4 py-3 text-sm leading-relaxed text-emerald-100">
              {consultationNote}
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
              <a
                href={FOUNDING_MEMBER_APPLY_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl bg-emerald-400 px-6 py-3 text-sm font-semibold text-slate-950 shadow-xl transition hover:scale-[1.02]"
              >
                Secure Your Founding Investigator Spot
              </a>
              <a
                href={FOUNDING_MEMBERS_SCHEDULE_CALL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Schedule a Call
              </a>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
