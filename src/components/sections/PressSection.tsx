import { csr, press } from '../../content/siteContent'
import { trackCTAEvent } from '../../lib/analytics'
import { SectionHeader } from '../ui/SectionHeader'

function extractYear(href: string): string | null {
  const match = href.match(/\/(20\d{2})\//)
  return match ? match[1] : null
}

export function PressSection() {
  const visiblePress = press.filter(([, , , href]) => Boolean(href))

  return (
    <section id="novedades" aria-label="Prensa y novedades" className="border-y border-black/5 bg-white/70">
      <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-24">
        <SectionHeader
          eyebrow="NOVEDADES"
          title="Prensa, eventos y presencia pública"
          description="Selección de notas, eventos y apariciones públicas organizadas para una lectura más simple."
        />

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {visiblePress.map(([tag, source, title, href]) => {
            const year = extractYear(href)
            const initial = source.charAt(0).toUpperCase()
            return (
              <a
                key={`${source}-${title}`}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={`${title} — abre en una pestaña nueva`}
                className="group flex h-full flex-col rounded-card border border-epb-line bg-white shadow-card transition hover:-translate-y-1 hover:border-epb-brand/30"
                onClick={() => trackCTAEvent({ name: 'press_item_click', section: 'press', label: title })}
              >
                {/* Thumbnail placeholder */}
                <div className="flex h-32 items-center justify-center rounded-t-card bg-gradient-to-br from-epb-sand to-epb-blushLight">
                  <span className="select-none text-6xl font-bold text-epb-ink/10">{initial}</span>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  {/* Top meta row */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <p className="text-sm font-medium text-epb-slate">
                        {source}{year ? ` · ${year}` : ''}
                      </p>
                      {tag === 'EVENTOS' && (
                        <span className="rounded-full border border-epb-brand/30 bg-epb-brand/5 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-epb-brand">
                          EVENTO
                        </span>
                      )}
                    </div>
                    <svg
                      aria-hidden="true"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      className="shrink-0 text-epb-slate"
                    >
                      <path d="M3 13L13 3M13 3H7M13 3V9" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>

                  {/* Title */}
                  <h3 className="mt-4 text-xl font-semibold leading-7 text-epb-ink">{title}</h3>

                  {/* Bottom CTA */}
                  <span className="mt-auto pt-6 inline-flex text-sm font-semibold text-epb-ink group-hover:text-epb-brand">
                    Leer más
                  </span>
                </div>
              </a>
            )
          })}
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {csr.map((item) => (
            <article key={item.title} className="rounded-card bg-epb-ink p-7 text-white shadow-soft">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-epb-warmAccent">{item.tag}</p>
              <h3 className="mt-3 text-2xl font-semibold">{item.title}</h3>
              <p className="mt-4 leading-8 text-slate-300">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
