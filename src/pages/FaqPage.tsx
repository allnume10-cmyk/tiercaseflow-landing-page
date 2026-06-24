import { useEffect } from 'react'
import { FaqAccordion } from '../components/FaqAccordion'
import { SiteFooter } from '../components/SiteFooter'
import { SiteHeader } from '../components/SiteHeader'
import {
  SCHEDULE_DEMO_URL,
  CONTACT_US_EMAIL,
  CONTACT_US_MAILTO,
  CONTACT_US_PHONE,
  CONTACT_US_PHONE_TEL,
  SITE_URL,
} from '../config/site'
import { FAQ_CATEGORIES, faqAnswerPlainText } from '../content/faq'

function FaqJsonLd() {
  const mainEntity = FAQ_CATEGORIES.flatMap((category) =>
    category.items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faqAnswerPlainText(item.answer),
      },
    })),
  )

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity,
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}

export function FaqPage() {
  useEffect(() => {
    document.title = 'FAQ | TIER\u2122 CaseFlow'
    const meta = document.querySelector('meta[name="description"]')
    if (meta) {
      meta.setAttribute(
        'content',
        'Answers about getting started, onboarding, pricing, security, features, and support for TIER CaseFlow.',
      )
    }
    let canonical = document.querySelector('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.setAttribute('rel', 'canonical')
      document.head.appendChild(canonical)
    }
    canonical.setAttribute('href', `${SITE_URL}/faq`)
  }, [])

  return (
    <div className="min-h-screen overflow-x-hidden bg-slate-950 text-white antialiased">
      <FaqJsonLd />
      <SiteHeader currentPage="faq" />

      <main>
        <section className="relative overflow-hidden border-b border-white/10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.14),transparent_40%)]" />
          <div className="relative mx-auto max-w-3xl px-4 py-14 text-center sm:px-6 sm:py-16 lg:px-8">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">Help Center</p>
            <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              Frequently Asked Questions
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
              Quick answers about TIER CaseFlow for investigators and firm administrators. Expand a category,
              then a question, for details.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-3xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
          <FaqAccordion categories={FAQ_CATEGORIES} />

          <p className="mt-8 text-center text-xs leading-relaxed text-slate-500">
            Pricing and security answers include standard disclaimers. See our Privacy Policy
            linked in those answers for more on data handling.
          </p>
        </section>

        <section className="border-t border-white/10 bg-slate-900/60">
          <div className="mx-auto max-w-3xl px-4 py-12 text-center sm:px-6 lg:px-8">
            <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">Still have questions?</h2>
            <p className="mt-3 text-slate-300">
              Contact Support at{' '}
              <a
                href={CONTACT_US_MAILTO}
                className="font-medium text-white underline decoration-white/30 underline-offset-2 hover:decoration-white/60"
              >
                {CONTACT_US_EMAIL}
              </a>
              .
            </p>
            <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
              <a
                href={CONTACT_US_MAILTO}
                className="rounded-2xl bg-white px-6 py-3 text-sm font-semibold text-slate-950 shadow-xl transition hover:scale-[1.02]"
              >
                Email Support
              </a>
              <a
                href={SCHEDULE_DEMO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Schedule Demo
              </a>
            </div>
            <p className="mt-4 text-sm text-slate-400">
              <a href={CONTACT_US_PHONE_TEL} className="underline decoration-white/25 underline-offset-2 hover:text-slate-200">
                {CONTACT_US_PHONE}
              </a>{' '}
              <span>(Mon-Fri, ET)</span>
            </p>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
