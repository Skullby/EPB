import { services } from '../../content/siteContent'
import { trackCTAEvent } from '../../lib/analytics'
import { SectionHeader } from '../ui/SectionHeader'

export function ServicesSection() {
  return (
    <section id="servicios" aria-label="Servicios" className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-24">
      <SectionHeader
        eyebrow={services.eyebrow}
        title={services.title}
        description="Tres líneas de servicio diseñadas para carteras institucionales, con metodología propia y resultados medibles."
      />

      <div className="grid grid-cols-1 gap-5 md:grid-cols-3 lg:gap-6">
        {services.items.map((item, i) => (
          <div
            key={item.number}
            className={`reveal reveal-delay-${i + 1} card-hover rounded-panel border border-epb-line bg-white p-7 shadow-soft lg:p-8 h-full flex flex-col`}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-epb-brand">{item.number}</p>
            <h3 className="mt-3 text-2xl font-semibold text-epb-ink">{item.title}</h3>
            <p className="mt-3 text-base leading-7 text-epb-slate">{item.description}</p>
            <div className="mt-auto">
              <div className="mt-6 border-t border-epb-line pt-5">
                <ul role="list" className="space-y-2">
                  {item.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-2 text-sm leading-6 text-epb-slate">
                      <span aria-hidden="true" className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-epb-brand" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 lg:mt-16">
        <div className="grid items-center gap-6 rounded-panel bg-epb-warm p-6 ring-1 ring-black/5 lg:grid-cols-[0.25fr_0.75fr] lg:p-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-epb-brand">
              {services.subBrand.eyebrow}
            </p>
            <p className="mt-2 text-2xl font-semibold text-epb-ink">{services.subBrand.title}</p>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-base leading-7 text-epb-slate">{services.subBrand.description}</p>
            <a
              href={services.subBrand.href}
              target="_blank"
              rel="noreferrer"
              aria-label="Ver AgenciaPalmero (se abre en una pestaña nueva)"
              className="inline-flex min-h-[44px] shrink-0 items-center rounded-full border border-epb-line bg-white px-5 py-3 text-sm font-semibold text-epb-ink transition hover:border-epb-brand hover:text-epb-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-epb-brand focus-visible:ring-offset-2"
              onClick={() => trackCTAEvent({ name: 'services_sub_brand_click', section: 'services', label: 'agencia_palmero' })}
            >
              Ver AgenciaPalmero
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
