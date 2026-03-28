import { recognitions } from '../../content/siteContent'
import { SectionHeader } from '../ui/SectionHeader'

export function RecognitionsSection() {
  return (
    <div className="mx-auto max-w-7xl px-5 pb-16 lg:px-8 lg:pb-24">
      <SectionHeader
        eyebrow="RECONOCIMIENTOS"
        title="Reconocimientos institucionales"
        description="Resumen de clientes y distinciones institucionales destacadas."
      />
      <div className="grid gap-5 xl:grid-cols-3">
        {recognitions.map((recognition) => (
          <article key={recognition.client} className="rounded-card border border-epb-line bg-white p-7 shadow-card">
            <h3 className="text-xl font-semibold text-epb-ink">{recognition.client}</h3>
            <ul className="mt-5 space-y-3 text-sm leading-7 text-epb-slate">
              {recognition.items.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </div>
  )
}
