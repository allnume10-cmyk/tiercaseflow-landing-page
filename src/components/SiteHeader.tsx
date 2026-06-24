import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  APP_URL,
  SCHEDULE_DEMO_URL,
  CONTACT_US_EMAIL,
  CONTACT_US_MAILTO,
  CONTACT_US_PHONE,
  CONTACT_US_PHONE_TEL,
} from '../config/site'

type SiteHeaderProps = {
  currentPage: 'home' | 'faq' | 'founding-member'
}

const NAV_LINK_CLASS =
  'min-h-[44px] py-2 transition hover:text-white sm:min-h-0 sm:py-0'

function sectionHref(hash: string) {
  return `/#${hash}`
}

export function SiteHeader({ currentPage }: SiteHeaderProps) {
  const [showHeaderContact, setShowHeaderContact] = useState(false)
  const headerContactRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!showHeaderContact) return

    const onPointerDown = (event: PointerEvent) => {
      if (!headerContactRef.current) return
      if (headerContactRef.current.contains(event.target as Node)) return
      setShowHeaderContact(false)
    }

    window.addEventListener('pointerdown', onPointerDown)
    return () => window.removeEventListener('pointerdown', onPointerDown)
  }, [showHeaderContact])

  const navLink = (hash: string, label: string) => (
    <a href={sectionHref(hash)} className={NAV_LINK_CLASS}>
      {label}
    </a>
  )

  const faqClass =
    currentPage === 'faq'
      ? `${NAV_LINK_CLASS} font-medium text-white`
      : NAV_LINK_CLASS

  const foundingClass =
    currentPage === 'founding-member'
      ? `${NAV_LINK_CLASS} font-medium text-white`
      : NAV_LINK_CLASS

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-3 sm:px-6 sm:py-4 lg:px-8">
        <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-center justify-between gap-3">
            <Link to="/" className="text-base font-semibold tracking-wide sm:text-lg">
              <span className="text-white">TIER&trade;</span>{' '}
              <span className="text-slate-300">CaseFlow</span>
            </Link>
            <div className="flex shrink-0 items-center gap-2 sm:gap-3 lg:hidden">
              <a
                href={APP_URL}
                className="min-h-[44px] min-w-[44px] px-2 py-2 text-sm font-medium text-slate-300 transition hover:text-white sm:min-h-0 sm:min-w-0 sm:px-0"
              >
                Sign in
              </a>
              <a
                href={SCHEDULE_DEMO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-[44px] rounded-2xl border border-white/15 bg-white px-3 py-2 text-center text-xs font-medium text-slate-950 shadow-lg transition hover:scale-[1.02] sm:min-h-0 sm:px-4 sm:text-sm"
              >
                Schedule Demo
              </a>
            </div>
          </div>

          <nav className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs text-slate-300 sm:text-sm lg:flex-1 lg:justify-center lg:text-sm">
            {navLink('challenges', 'Challenges')}
            {navLink('features', 'Features')}
            {navLink('pricing', 'Pricing')}
            {navLink('onboarding', 'Onboarding')}
            <Link to="/faq" className={faqClass}>
              FAQ
            </Link>
            <Link to="/founding-member" className={foundingClass}>
              Founding Members Program
            </Link>
            {navLink('contact', 'Demo')}
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
                      <span className="text-slate-400">(Mon-Fri, ET)</span>
                    </div>
                  </div>
                </div>
              ) : null}
            </div>

            <a
              href={SCHEDULE_DEMO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="min-h-[44px] rounded-2xl border border-white/15 bg-white px-3 py-2 text-center text-xs font-medium text-slate-950 shadow-lg transition hover:scale-[1.02] sm:min-h-0 sm:px-4 sm:text-sm"
            >
              Schedule Demo
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
