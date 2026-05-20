import { useEffect, useId, useState, type ReactNode } from 'react'
import type { FaqCategory } from '../content/faq'
import { FaqAnswer } from './FaqAnswer'

type FaqAccordionProps = {
  categories: FaqCategory[]
}

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const update = () => setReduced(mq.matches)
    update()
    mq.addEventListener('change', update)
    return () => mq.removeEventListener('change', update)
  }, [])

  return reduced
}

function CollapsePanel({
  open,
  panelId,
  reducedMotion,
  children,
}: {
  open: boolean
  panelId: string
  reducedMotion: boolean
  children: ReactNode
}) {
  if (reducedMotion) {
    return open ? <div id={panelId}>{children}</div> : null
  }

  return (
    <div
      className="grid transition-[grid-template-rows] duration-300 ease-out motion-reduce:transition-none"
      style={{ gridTemplateRows: open ? '1fr' : '0fr' }}
    >
      <div className="overflow-hidden">
        <div id={panelId} className="min-h-0">
          {children}
        </div>
      </div>
    </div>
  )
}

function Chevron({ open }: { open: boolean }) {
  return (
    <svg
      aria-hidden
      className={`h-5 w-5 shrink-0 text-slate-400 transition-transform duration-300 motion-reduce:transition-none ${open ? 'rotate-180' : ''}`}
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z"
        clipRule="evenodd"
      />
    </svg>
  )
}

export function FaqAccordion({ categories }: FaqAccordionProps) {
  const baseId = useId()
  const reducedMotion = usePrefersReducedMotion()
  const [openCategories, setOpenCategories] = useState<Set<string>>(() =>
    categories[0]?.id ? new Set([categories[0].id]) : new Set(),
  )
  const [openQuestions, setOpenQuestions] = useState<Set<string>>(new Set())

  useEffect(() => {
    const hash = window.location.hash.replace(/^#/, '')
    if (!hash) return

    const category = categories.find((c) => c.id === hash)
    if (category) {
      setOpenCategories((prev) => new Set(prev).add(category.id))
      return
    }

    for (const cat of categories) {
      const item = cat.items.find((i) => i.id === hash)
      if (item) {
        setOpenCategories((prev) => new Set(prev).add(cat.id))
        setOpenQuestions((prev) => new Set(prev).add(item.id))
        break
      }
    }
  }, [categories])

  const toggleCategory = (id: string) => {
    setOpenCategories((prev) => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })
  }

  const toggleQuestion = (id: string) => {
    setOpenQuestions((prev) => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })
  }

  return (
    <div className="space-y-4">
      {categories.map((category) => {
        const categoryOpen = openCategories.has(category.id)
        const categoryPanelId = `${baseId}-cat-${category.id}`

        return (
          <section
            key={category.id}
            id={category.id}
            className="scroll-mt-28 rounded-2xl border border-white/10 bg-slate-900/50 shadow-lg shadow-black/10"
          >
            <h2>
              <button
                type="button"
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left sm:px-6"
                aria-expanded={categoryOpen}
                aria-controls={categoryPanelId}
                onClick={() => toggleCategory(category.id)}
              >
                <span className="text-base font-semibold text-white sm:text-lg">{category.title}</span>
                <Chevron open={categoryOpen} />
              </button>
            </h2>

            <CollapsePanel open={categoryOpen} panelId={categoryPanelId} reducedMotion={reducedMotion}>
              <ul className="space-y-2 border-t border-white/10 px-3 pb-4 pt-2 sm:px-4">
                {category.items.map((item) => {
                  const questionOpen = openQuestions.has(item.id)
                  const answerId = `${baseId}-q-${item.id}`

                  return (
                    <li
                      key={item.id}
                      id={item.id}
                      className="scroll-mt-28 rounded-xl border border-white/5 bg-slate-950/40"
                    >
                      <h3>
                        <button
                          type="button"
                          className="flex w-full items-start justify-between gap-3 px-4 py-3 text-left text-sm font-medium text-slate-100 sm:text-base"
                          aria-expanded={questionOpen}
                          aria-controls={answerId}
                          onClick={() => toggleQuestion(item.id)}
                        >
                          <span>{item.question}</span>
                          <Chevron open={questionOpen} />
                        </button>
                      </h3>
                      <CollapsePanel open={questionOpen} panelId={answerId} reducedMotion={reducedMotion}>
                        <FaqAnswer
                          text={item.answer}
                          className="px-4 pb-4 text-sm leading-relaxed text-slate-300"
                        />
                      </CollapsePanel>
                    </li>
                  )
                })}
              </ul>
            </CollapsePanel>
          </section>
        )
      })}
    </div>
  )
}
