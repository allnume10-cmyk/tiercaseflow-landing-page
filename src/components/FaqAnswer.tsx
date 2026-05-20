import type { ReactNode } from 'react'

/** Renders FAQ answer text with [label](url) markdown-style links as hyperlinks. */
export function FaqAnswer({ text, className }: { text: string; className?: string }) {
  const linkPattern = /\[([^\]]+)\]\(([^)]+)\)/g
  const nodes: ReactNode[] = []
  let lastIndex = 0
  let match: RegExpExecArray | null
  let key = 0

  while ((match = linkPattern.exec(text)) !== null) {
    if (match.index > lastIndex) {
      nodes.push(text.slice(lastIndex, match.index))
    }

    const label = match[1]
    const href = match[2]
    const isExternal = /^https?:\/\//i.test(href)

    nodes.push(
      <a
        key={key++}
        href={href}
        className="font-medium text-cyan-300 underline decoration-cyan-400/40 underline-offset-2 transition hover:text-cyan-200 hover:decoration-cyan-300/70"
        {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      >
        {label}
      </a>,
    )

    lastIndex = match.index + match[0].length
  }

  if (lastIndex < text.length) {
    nodes.push(text.slice(lastIndex))
  }

  return <p className={className}>{nodes.length > 0 ? nodes : text}</p>
}
