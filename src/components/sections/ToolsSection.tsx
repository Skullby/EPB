import { Database, Handshake, LineChart, Phone, ShieldCheck } from 'lucide-react'
import { technology, tools } from '../../content/siteContent'
import { SectionHeader } from '../ui/SectionHeader'

const ICONS: Record<string, React.ComponentType<{ className?: string; 'aria-hidden'?: boolean | 'true' | 'false' }>> = {
  'ENRIQUECIMIENTO DE DATOS': Database,
  'BUSINESS INTELLIGENCE': LineChart,
  'IVR, CAMPAÑAS Y MAILING': Phone,
  'ETAPA DE NEGOCIACIÓN': Handshake,
  'CALIDAD DEL SERVICIO': ShieldCheck,
}

export function ToolsSection() {
  return (
    <section id="herramientas" aria-label="Herramientas" className="border-y border-black/5 bg-white/70">
      <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-24">
        <SectionHeader
          eyebrow={tools.eyebrow}
          title={tools.title}
          description="Las capacidades operativas se organizan en bloques más claros para facilitar lectura, jerarquía y comprensión comercial."
        />

        <div className="grid gap-5 lg:grid-cols-2">
          {tools.items.map((item) => {
            const Icon = ICONS[item.title]
            return (
              <article key={item.title} className="reveal card-hover h-full flex flex-col rounded-card border border-epb-line bg-white p-7 shadow-card">
                <div className="h-12 w-12 rounded-full bg-epb-warm flex items-center justify-center" aria-hidden="true">
                  {Icon && <Icon className="h-6 w-6 text-epb-brand stroke-[1.75]" aria-hidden="true" />}
                </div>
                <h3 className="mt-4 text-xl font-semibold text-epb-ink">{item.title}</h3>
                {'body' in item && item.body && <p className="mt-4 leading-8 text-epb-slate">{item.body}</p>}
                {'bullets' in item && item.bullets && (
                  <ul className="mt-auto pt-5 space-y-2 list-disc pl-5 marker:text-epb-brand text-base leading-8 text-epb-slate">
                    {item.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                )}
              </article>
            )
          })}
        </div>

        <div className="mt-10 rounded-panel bg-epb-ink p-8 text-white shadow-soft lg:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-epb-warmAccent">{technology.title}</p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {technology.items.map((item) => (
              <div key={item} className="rounded-inner border border-white/10 bg-white/5 px-5 py-4 text-sm font-medium tracking-[0.04em] text-slate-200">
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
