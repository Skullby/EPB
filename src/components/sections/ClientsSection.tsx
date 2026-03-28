import { clientLogos } from '../../content/siteContent'

export function ClientsSection() {
  return (
    <section aria-label="Clientes" className="border-b border-black/5 bg-white">
      <div className="mx-auto max-w-7xl px-5 py-10 lg:px-8 lg:py-14">
        <div className="reveal reveal-delay-1 rounded-panel border border-epb-blush bg-[linear-gradient(180deg,#fff_0%,#fdf8f8_100%)] p-6 shadow-soft lg:p-8">
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <div className="max-w-xl">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-epb-rose">{clientLogos.eyebrow}</p>
              <h2 className="mt-2 text-2xl font-bold tracking-tight text-epb-ink sm:text-3xl">{clientLogos.title}</h2>
              <p className="mt-4 text-base leading-7 text-epb-slate">
                Construimos relaciones de largo plazo con banca y empresas, sosteniendo operación profesional, trazabilidad y cumplimiento en cada tramo de gestión.
              </p>

              <dl className="mt-6 grid grid-cols-3 gap-3">
                <div className="rounded-2xl border border-epb-blushLight bg-white px-3 py-4 text-center">
                  <dt className="text-[11px] font-semibold uppercase tracking-[0.18em] text-epb-rose">Trayectoria</dt>
                  <dd className="mt-1 text-2xl font-bold text-epb-ink">25+</dd>
                </div>
                <div className="rounded-2xl border border-epb-blushLight bg-white px-3 py-4 text-center">
                  <dt className="text-[11px] font-semibold uppercase tracking-[0.18em] text-epb-rose">Clientes</dt>
                  <dd className="mt-1 text-2xl font-bold text-epb-ink">50+</dd>
                </div>
                <div className="rounded-2xl border border-epb-blushLight bg-white px-3 py-4 text-center">
                  <dt className="text-[11px] font-semibold uppercase tracking-[0.18em] text-epb-rose">Equipo</dt>
                  <dd className="mt-1 text-2xl font-bold text-epb-ink">200+</dd>
                </div>
              </dl>
            </div>

            <div>
              <div className="grid grid-cols-4 gap-3 sm:grid-cols-5 lg:grid-cols-4 xl:grid-cols-5">
                {clientLogos.logos.map((logo) => (
                  <div
                    key={logo.src}
                    className="card-hover flex aspect-square items-center justify-center rounded-inner border border-epb-blushLight bg-white p-3 shadow-sm"
                  >
                    <img
                      src={logo.src}
                      alt={logo.alt}
                      loading="lazy"
                      className="h-full w-full object-contain opacity-75 grayscale transition duration-300 hover:opacity-100 hover:grayscale-0"
                    />
                  </div>
                ))}
              </div>
              <p className="mt-4 text-xs font-medium uppercase tracking-[0.14em] text-epb-slate">
                Referencias institucionales y cartera corporativa en operación activa.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
