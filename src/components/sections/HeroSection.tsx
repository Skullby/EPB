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
      {/* Animated gradient background */}
      <div
        className="absolute inset-0 bg-[length:200%_200%] motion-safe:animate-gradient-shift"
        style={{
          backgroundImage:
            'linear-gradient(122deg, rgba(108,16,24,0.98) 0%, rgba(146,24,33,0.96) 30%, rgba(180,40,52,0.90) 50%, rgba(146,24,33,0.96) 70%, rgba(108,16,24,0.98) 100%)',
        }}
      />

      {/* Subtle grid overlay for depth */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
      />

      {/* Ambient blobs — staggered timing for organic feel */}
      <div className="pointer-events-none absolute -left-16 top-8 h-72 w-72 rounded-full bg-white/[0.08] blur-3xl motion-safe:animate-subtle-drift" />
      <div className="pointer-events-none absolute right-[-8%] top-[20%] h-56 w-56 rounded-full bg-[#ffb3bb]/10 blur-3xl motion-safe:animate-drift-reverse" />
      <div className="pointer-events-none absolute bottom-0 left-[30%] h-48 w-48 rounded-full bg-white/[0.05] blur-3xl motion-safe:animate-subtle-drift [animation-delay:4s]" />
      <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-epb-warmAccent/10 blur-3xl motion-safe:animate-drift-reverse [animation-delay:2s]" />

      {/* Floating particles */}
      <div className="pointer-events-none absolute bottom-16 left-[15%] h-2 w-2 rounded-full bg-white/20 motion-safe:animate-float-up" />
      <div className="pointer-events-none absolute bottom-24 left-[45%] h-1.5 w-1.5 rounded-full bg-white/15 motion-safe:animate-float-up [animation-delay:2s]" />
      <div className="pointer-events-none absolute bottom-12 right-[25%] h-2.5 w-2.5 rounded-full bg-white/10 motion-safe:animate-float-up [animation-delay:4s]" />
      <div className="pointer-events-none absolute bottom-20 right-[10%] h-1.5 w-1.5 rounded-full bg-white/20 motion-safe:animate-float-up [animation-delay:6s]" />

      {/* Warm glow accent at bottom */}
      <div className="pointer-events-none absolute -bottom-20 left-1/2 h-40 w-[60%] -translate-x-1/2 rounded-full bg-epb-warmAccent/8 blur-3xl motion-safe:animate-pulse-soft" />

      <div className="relative mx-auto max-w-7xl px-5 pb-12 pt-16 lg:px-8 lg:pb-16 lg:pt-28">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.18fr)_minmax(340px,0.82fr)] lg:items-end">
          {/* Headline — sole dominant anchor */}
          <div className="max-w-3xl text-white">
            <p className="reveal text-sm font-semibold uppercase tracking-[0.34em] text-white/72">{hero.eyebrow}</p>
            <h1 className="reveal reveal-delay-1 mt-5 max-w-4xl text-4xl font-bold leading-[1.03] tracking-tight sm:text-5xl lg:text-[4.35rem]">
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
                className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-epb-rose"
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
                className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-epb-rose"
              >
                Gestión de cobranzas
              </CTAButton>
            </div>

            <p className="reveal reveal-delay-4 mt-7 text-xs font-semibold uppercase tracking-[0.22em] text-white/62">
              Estrategia • Negociación • Tecnología aplicada
            </p>
          </div>

          {/* Trust panel — de-emphasized, glass morphism */}
          <div className="reveal reveal-delay-2 relative rounded-panel border border-white/10 bg-white/[0.06] p-7 text-white shadow-card backdrop-blur-sm md:p-8">
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
                  <p className="text-2xl font-bold tracking-tight">{item.value}</p>
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
