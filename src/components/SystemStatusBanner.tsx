import { useEffect, useState } from 'react'
import { SUPABASE_ANON_KEY, SUPABASE_URL, SYSTEM_STATUS_KEY } from '../config/site'

export type PublicSystemStatus = {
  level: 'red' | 'yellow' | 'green'
  title: string
  message: string
  supportLine: string | null
}

export function SystemStatusBanner() {
  const [publicSystemStatus, setPublicSystemStatus] = useState<PublicSystemStatus | null>(null)

  useEffect(() => {
    const loadPublicSystemStatus = async () => {
      try {
        const query = new URLSearchParams({
          select: 'value',
          key: `eq.${SYSTEM_STATUS_KEY}`,
          limit: '1',
        })
        const res = await fetch(`${SUPABASE_URL}/rest/v1/app_settings?${query.toString()}`, {
          method: 'GET',
          headers: {
            apikey: SUPABASE_ANON_KEY,
            Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
          },
        })
        if (!res.ok) return
        const rows = await res.json()
        if (!Array.isArray(rows) || rows.length === 0) return
        const raw = rows[0]?.value
        if (!raw) return
        const parsed = typeof raw === 'string' ? JSON.parse(raw) : raw
        if (!parsed || typeof parsed !== 'object') return
        if (parsed.active === false) return
        const level =
          parsed.level === 'red' || parsed.level === 'yellow' || parsed.level === 'green'
            ? parsed.level
            : 'green'
        const title =
          typeof parsed.title === 'string' && parsed.title.trim()
            ? parsed.title
            : 'Service Status: Operational'
        const message = typeof parsed.message === 'string' && parsed.message.trim() ? parsed.message : ''
        const supportLine =
          level === 'red' && typeof parsed.supportLine === 'string' && parsed.supportLine.trim()
            ? parsed.supportLine
            : null
        setPublicSystemStatus({ level, title, message, supportLine })
      } catch {
        // Optional banner; fail silently on landing pages.
      }
    }
    loadPublicSystemStatus()
  }, [])

  if (!publicSystemStatus) return null

  return (
    <div
      className={`border-b px-4 py-3 sm:px-6 ${
        publicSystemStatus.level === 'red'
          ? 'border-rose-200 bg-rose-50 text-rose-950'
          : publicSystemStatus.level === 'yellow'
            ? 'border-amber-200 bg-amber-50 text-amber-950'
            : 'border-emerald-200 bg-emerald-50 text-emerald-950'
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
  )
}
