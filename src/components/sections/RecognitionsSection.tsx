import { useState } from 'react'
import { recognitions } from '../../content/siteContent'
import { SectionHeader } from '../ui/SectionHeader'

const COLLAPSE_LIMIT = 5

function extractYearRange(items: readonly string[]): string {
  const years: number[] = []
  for (const item of items) {
    const matches = item.match(/\b(19|20)\d{2}\b/g)
    if (matches) years.push(...matches.map(Number))
  }
  if (years.length === 0) return '2009–2019'
  return `${Math.min(...years)}–${Math.max(...years)}`
}

function clientSlug(client: string): string {
  return client.toLowerCase().replace(/\s+/g, '-')
}

interface ClientCardProps {
  recognition: (typeof recognitions)[number]
  revealClass: string
}

function ClientCard({ recognition, revealClass }: ClientCardProps) {
  const [expanded, setExpanded] = useState(false)
  const hasMore = recognition.items.length > COLLAPSE_LIMIT
  const visibleItems = expanded ? recognition.items : recognition.items.slice(0, COLLAPSE_LIMIT)
  const slug = clientSlug(recognition.client)
  const listId = `recognitions-list-${slug}`

  return (
    <article className={`${revealClass} card-hover rounded-card border border-epb-line bg-white p-7 shadow-card`}>
      <h3 className="text-xl font-bold text-epb-ink">{recognition.client}</h3>
      <ul
        id={listId}
        className="mt-5 list-disc space-y-3 pl-5 text-sm leading-7 text-epb-slate marker:text-epb-brand"
      >
        {visibleItems.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      {hasMore && (
        <button
          type="button"
          aria-expanded={expanded}
          aria-controls={listId}
          onClick={() => setExpanded((prev) => !prev)}
          className="mt-5 inline-flex min-h-[44px] items-center rounded-full px-4 text-sm font-semibold text-epb-brand transition hover:text-epb-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-epb-brand focus-visible:ring-offset-2"
        >
          {expanded ? 'Ver menos' : `Ver todos (${recognition.items.length})`}
        </button>
      )}
    </article>
  )
}

export function RecognitionsSection() {
  const totalCount = recognitions.reduce((sum, r) => sum + r.items.length, 0)
  const allItems = recognitions.flatMap((r) => r.items)
  const yearRange = extractYearRange(allItems)
  const clientCount = recognitions.length

  return (
    <section aria-label="Reconocimientos" className="mx-auto max-w-7xl px-5 pb-16 lg:px-8 lg:pb-24">
      <SectionHeader
        eyebrow="RECONOCIMIENTOS"
        title="Reconocimientos institucionales"
        description="Resumen de clientes y distinciones institucionales destacadas."
      />
      <div className="mb-8 flex justify-center">
        <div className="inline-flex items-center gap-3 rounded-full border border-epb-line bg-white px-6 py-3 text-sm font-medium text-epb-slate">
          <span>+{totalCount} reconocimientos</span>
          <span aria-hidden="true">·</span>
          <span>{yearRange}</span>
          <span aria-hidden="true">·</span>
          <span>{clientCount} clientes principales</span>
        </div>
      </div>
      <div className="grid gap-5 xl:grid-cols-3">
        {recognitions.map((recognition, idx) => (
          <ClientCard
            key={recognition.client}
            recognition={recognition}
            revealClass={`reveal${idx > 0 ? ` reveal-delay-${idx}` : ''}`}
          />
        ))}
      </div>
    </section>
  )
}
