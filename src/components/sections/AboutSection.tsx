import { about } from '../../content/siteContent'
import { SectionHeader } from '../ui/SectionHeader'

export function AboutSection() {
  return (
    <section id="nosotros" aria-label="Nosotros" className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-24">
      <SectionHeader eyebrow={about.eyebrow} title={about.title} />

      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div className="rounded-panel border border-epb-line bg-white p-8 shadow-soft lg:p-10">
          {about.body.map((paragraph) => (
            <p key={paragraph} className="mb-5 text-lg leading-8 text-epb-slate last:mb-0">
              {paragraph}
            </p>
          ))}
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {about.stats.map((stat) => (
              <div key={stat.label} className="rounded-card bg-epb-soft p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-epb-brand">{stat.label}</p>
                <p className="mt-3 text-4xl font-semibold tracking-tight text-epb-ink">{stat.value}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-5">
          <div className="rounded-panel bg-epb-warm p-8 shadow-soft ring-1 ring-black/5 lg:p-10">
            <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-epb-brand">MISIÓN</h3>
            <p className="mt-4 text-lg leading-8 text-epb-slate">{about.mission}</p>
          </div>
          <div className="rounded-panel bg-epb-warm p-8 shadow-soft ring-1 ring-black/5 lg:p-10">
            <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-epb-brand">VALORES</h3>
            <div className="mt-5 flex flex-wrap gap-3">
              {about.values.map((value) => (
                <span key={value} className="rounded-full border border-epb-brand/20 bg-white px-4 py-2 text-sm font-semibold text-epb-ink shadow-sm">
                  {value}
                </span>
              ))}
            </div>
          </div>
          <div className="rounded-panel bg-epb-warm p-8 shadow-soft ring-1 ring-black/5 lg:p-10">
            <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-epb-brand">VISIÓN</h3>
            <p className="mt-4 text-lg leading-8 text-epb-slate">{about.vision}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
