import { useMemo } from 'react'
import { CONTACT, hero } from '../../content/siteContent'
import { useTypewriter } from '../../lib/useTypewriter'
import { CTAButton } from '../ui/CTAButton'

export function HeroSection() {
  const lines = useMemo(
    () => [
      hero.badge,
      'Más de 25 años de trayectoria institucional',
      'Soluciones adecuadas para cada uno de nuestros clientes',
    ],
    []
  )

  const { words, visibleCount, currentLine } = useTypewriter(lines)

  return (
    <section id="inicio" className="relative overflow-hidden border-b border-black/5 bg-epb-cream">
      <div className="absolute inset-0 bg-[linear-gradient(122deg,rgba(108,16,24,0.98)_0%,rgba(146,24,33,0.96)_44%,rgba(201,77,89,0.74)_74%,rgba(245,240,233,0.94)_100%)]" />
      <div className="pointer-events-none absolute -left-10 top-12 h-52 w-52 rounded-full bg-white/10 blur-3xl motion-safe:animate-subtle-drift" />
      <div className="pointer-events-none absolute -right-12 bottom-0 h-64 w-64 rounded-full bg-[#ffb3bb]/15 blur-3xl motion-safe:animate-subtle-drift" />

      <div className="relative mx-auto max-w-7xl px-5 pb-10 pt-14 lg:px-8 lg:pb-14 lg:pt-24">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.18fr)_minmax(340px,0.82fr)] lg:items-end">
          {/* Headline — sole dominant anchor */}
          <div className="max-w-3xl text-white">
            <p className="reveal text-sm font-semibold uppercase tracking-[0.34em] text-white/72">{hero.eyebrow}</p>
            <h1 className="reveal reveal-delay-1 mt-5 max-w-4xl text-4xl font-semibold leading-[1.03] tracking-tight sm:text-5xl lg:text-[4.35rem]">
              {hero.title}
            </h1>
            <p className="reveal reveal-delay-2 mt-6 max-w-2xl text-lg leading-8 text-white/84">{hero.intro}</p>
            <p className="reveal reveal-delay-3 mt-5 max-w-2xl text-base leading-7 text-white/70">{hero.supporting}</p>

            <div className="reveal reveal-delay-3 mt-8 flex flex-col gap-4 sm:flex-row">
              <CTAButton
                href="#contacto"
                variant="primary"
                eventName="hero_contact_click"
                section="hero"
                label="quiero_comunicarme"
                className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#8d1f27]"
              >
                Quiero comunicarme
              </CTAButton>
              <CTAButton
                href={CONTACT.selfService}
                variant="secondary"
                eventName="hero_self_service_click"
                section="hero"
                label="gestion_de_cobranzas"
                external
                className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#8d1f27]"
              >
                Gestión de cobranzas
              </CTAButton>
            </div>

            <p className="reveal reveal-delay-4 mt-7 text-xs font-semibold uppercase tracking-[0.22em] text-white/62">
              Estrategia • Negociación • Tecnología aplicada
            </p>
          </div>

          {/* Trust panel — de-emphasized per UX review */}
          <div className="reveal reveal-delay-2 relative rounded-panel border border-white/10 bg-white/[0.06] p-7 text-white shadow-card backdrop-blur md:p-8">
            <div className="min-h-[96px] text-xs font-semibold uppercase tracking-[0.32em] text-white/60">
              <span className="sr-only">{currentLine}</span>
              <span aria-hidden="true" className="inline-flex flex-wrap items-center gap-x-[0.22em] gap-y-1 leading-6">
                {words.slice(0, visibleCount).map((word, i) => (
                  <span key={word + i} className="type-word">{word}</span>
                ))}
                <span className="type-cursor" aria-hidden="true">|</span>
              </span>
            </div>
            <div className="mt-8 grid gap-4 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
              {hero.highlights.map((item) => (
                <div key={item.label} className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3">
                  <p className="text-2xl font-semibold tracking-tight">{item.value}</p>
                  <p className="mt-2 text-xs uppercase tracking-[0.2em] text-white/56">{item.label}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 h-px bg-white/10" />
            <p className="mt-7 text-base leading-7 text-white/68">{hero.note}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
