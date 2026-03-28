import { services } from '../../content/siteContent'
import { trackCTAEvent } from '../../lib/analytics'
import { SectionHeader } from '../ui/SectionHeader'

export function ServicesSection() {
  return (
    <section id="servicios" className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-24">
      <SectionHeader
        eyebrow={services.eyebrow}
        title={services.title}
        description="Presentamos los servicios clave con una estructura más clara, priorizando lectura, jerarquía visual y comprensión rápida."
      />

      <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <article className="reveal reveal-delay-1 card-hover rounded-panel bg-epb-ink p-8 text-white shadow-soft lg:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-200">{services.main.title}</p>
          <h3 className="mt-4 text-3xl font-semibold tracking-tight">{services.main.description}</h3>
          <p className="mt-8 text-sm font-semibold uppercase tracking-[0.3em] text-emerald-200">¿Cómo lo hacemos?</p>
          <ul className="mt-5 space-y-4 text-base leading-8 text-slate-200">
            {services.main.steps.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ul>
        </article>

        <aside className="reveal reveal-delay-2 card-hover rounded-panel border border-epb-line bg-white p-8 shadow-soft lg:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-epb-brand">Marca complementaria</p>
          <p className="mt-4 text-lg leading-8 text-epb-slate">{services.main.note}</p>
          <a
            href={services.main.noteHref}
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex rounded-full border border-epb-line px-5 py-3 text-sm font-semibold text-epb-ink transition hover:border-epb-brand hover:text-epb-brand"
            onClick={() => trackCTAEvent({ name: 'services_note_click', section: 'services', label: 'ver_agenciapalmero' })}
          >
            Ver AgenciaPalmero
          </a>
        </aside>
      </div>
    </section>
  )
}
