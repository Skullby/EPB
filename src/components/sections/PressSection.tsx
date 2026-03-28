import { csr, press } from '../../content/siteContent'
import { trackCTAEvent } from '../../lib/analytics'
import { SectionHeader } from '../ui/SectionHeader'

export function PressSection() {
  return (
    <section id="novedades" className="border-y border-black/5 bg-white/70">
      <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-24">
        <SectionHeader
          eyebrow="NOVEDADES"
          title="Prensa, eventos y presencia pública"
          description="Selección de notas, eventos y apariciones públicas organizadas para una lectura más simple."
        />

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {press.map(([tag, source, title, href]) => {
            const hasLink = Boolean(href)

            if (!hasLink) {
              return (
                <article
                  key={`${source}-${title}`}
                  className="flex h-full flex-col rounded-card border border-dashed border-epb-line bg-white p-6 shadow-card"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-epb-brand">{tag}</p>
                  <p className="mt-2 text-sm font-medium text-epb-slate">{source}</p>
                  <h3 className="mt-4 text-xl font-semibold leading-8 text-epb-ink">{title}</h3>
                  <span className="mt-6 inline-flex text-sm font-semibold text-amber-700">Contenido pendiente</span>
                </article>
              )
            }

            return (
              <a
                key={`${source}-${title}`}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="group flex h-full flex-col rounded-card border border-epb-line bg-white p-6 shadow-card transition hover:-translate-y-1 hover:border-epb-brand/30"
                onClick={() => trackCTAEvent({ name: 'press_item_click', section: 'press', label: title })}
              >
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-epb-brand">{tag}</p>
                <p className="mt-2 text-sm font-medium text-epb-slate">{source}</p>
                <h3 className="mt-4 text-xl font-semibold leading-8 text-epb-ink">{title}</h3>
                <span className="mt-6 inline-flex text-sm font-semibold text-epb-ink group-hover:text-epb-brand">Leer más →</span>
              </a>
            )
          })}
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {csr.map((item) => (
            <article key={item.title} className="rounded-card bg-epb-ink p-7 text-white shadow-soft">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-200">{item.tag}</p>
              <h3 className="mt-3 text-2xl font-semibold">{item.title}</h3>
              <p className="mt-4 leading-8 text-slate-300">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
