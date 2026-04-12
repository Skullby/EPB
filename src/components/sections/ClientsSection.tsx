import { clientLogos } from '../../content/siteContent'

function LogoRow({ logos, direction = 'left', speed = 35 }: {
  logos: readonly { readonly src: string; readonly alt: string }[]
  direction?: 'left' | 'right'
  speed?: number
}) {
  const animClass = direction === 'left' ? 'animate-marquee-left' : 'animate-marquee-right'
  const duration = `${speed}s`

  return (
    <div className="group relative overflow-hidden">
      {/* Fade edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-white to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-white to-transparent" />

      <div
        className={`flex w-max gap-4 ${animClass} group-hover:[animation-play-state:paused]`}
        style={{ animationDuration: duration }}
      >
        {/* Duplicate set for seamless loop */}
        {[...logos, ...logos].map((logo, i) => (
          <div
            key={`${logo.src}-${i}`}
            className="flex h-20 w-28 shrink-0 items-center justify-center rounded-inner border border-epb-blushLight bg-white p-3 shadow-sm transition duration-300 hover:border-epb-blush hover:shadow-card"
          >
            <img
              src={logo.src}
              alt={logo.alt}
              loading="lazy"
              className="h-full w-full object-contain opacity-90 transition duration-300 hover:opacity-100"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export function ClientsSection() {
  // Split logos into two rows for a richer visual
  const mid = Math.ceil(clientLogos.logos.length / 2)
  const row1 = clientLogos.logos.slice(0, mid)
  const row2 = clientLogos.logos.slice(mid)

  return (
    <section aria-label="Clientes" className="border-b border-black/5 bg-white">
      <div className="mx-auto max-w-7xl px-5 py-10 lg:px-8 lg:py-14">
        <div className="reveal reveal-delay-1 rounded-panel border border-epb-blush bg-[linear-gradient(180deg,#fff_0%,#fdf8f8_100%)] py-8 shadow-soft lg:py-10">
          {/* Header row */}
          <div className="grid gap-6 px-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:px-8">
            <div className="max-w-xl">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-epb-rose">{clientLogos.eyebrow}</p>
              <h2 className="mt-2 text-2xl font-bold tracking-tight text-epb-ink sm:text-3xl">{clientLogos.title}</h2>
              <p className="mt-4 text-base leading-7 text-epb-slate">
                Construimos relaciones de largo plazo con banca y empresas, sosteniendo operación profesional, trazabilidad y cumplimiento en cada tramo de gestión.
              </p>
            </div>

            <dl className="grid grid-cols-3 gap-3">
              <div className="rounded-2xl border border-epb-blushLight bg-white px-3 py-4 text-center">
                <dt className="text-[10px] font-semibold uppercase tracking-[0.1em] text-epb-rose sm:text-[11px] sm:tracking-[0.18em]">Trayectoria</dt>
                <dd className="mt-1 text-2xl font-bold text-epb-ink">25+</dd>
              </div>
              <div className="rounded-2xl border border-epb-blushLight bg-white px-3 py-4 text-center">
                <dt className="text-[10px] font-semibold uppercase tracking-[0.1em] text-epb-rose sm:text-[11px] sm:tracking-[0.18em]">Clientes</dt>
                <dd className="mt-1 text-2xl font-bold text-epb-ink">50+</dd>
              </div>
              <div className="rounded-2xl border border-epb-blushLight bg-white px-3 py-4 text-center">
                <dt className="text-[10px] font-semibold uppercase tracking-[0.1em] text-epb-rose sm:text-[11px] sm:tracking-[0.18em]">Equipo</dt>
                <dd className="mt-1 text-2xl font-bold text-epb-ink">200+</dd>
              </div>
            </dl>
          </div>

          {/* Carousel rows */}
          <div className="mt-8 space-y-4">
            <LogoRow logos={row1} direction="left" speed={40} />
            <LogoRow logos={row2} direction="right" speed={45} />
          </div>

          <p className="mt-6 px-6 text-center text-xs font-medium uppercase tracking-[0.14em] text-epb-slate lg:px-8">
            Referencias institucionales y cartera corporativa en operación activa.
          </p>
        </div>
      </div>
    </section>
  )
}
