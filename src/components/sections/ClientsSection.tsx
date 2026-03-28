import { clientLogos } from '../../content/siteContent'

export function ClientsSection() {
  return (
    <section aria-label="Clientes" className="border-b border-black/5 bg-white">
      <div className="mx-auto max-w-7xl px-5 py-10 lg:px-8 lg:py-14">
        <div className="reveal reveal-delay-1 rounded-panel border border-[#ead6d8] bg-[linear-gradient(180deg,#fff_0%,#fdf8f8_100%)] p-6 shadow-soft lg:p-8">
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <div className="max-w-xl">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#8d1f27]">{clientLogos.eyebrow}</p>
              <h2 className="mt-2 text-2xl font-semibold tracking-tight text-epb-ink sm:text-3xl">{clientLogos.title}</h2>
              <p className="mt-4 text-base leading-7 text-epb-slate">
                Construimos relaciones de largo plazo con banca y empresas, sosteniendo operación profesional, trazabilidad y cumplimiento en cada tramo de gestión.
              </p>

              <dl className="mt-6 grid grid-cols-3 gap-3">
                <div className="rounded-2xl border border-[#efdfe1] bg-white px-3 py-4 text-center">
                  <dt className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#8d1f27]">Trayectoria</dt>
                  <dd className="mt-1 text-2xl font-semibold text-epb-ink">25+</dd>
                </div>
                <div className="rounded-2xl border border-[#efdfe1] bg-white px-3 py-4 text-center">
                  <dt className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#8d1f27]">Clientes</dt>
                  <dd className="mt-1 text-2xl font-semibold text-epb-ink">50+</dd>
                </div>
                <div className="rounded-2xl border border-[#efdfe1] bg-white px-3 py-4 text-center">
                  <dt className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#8d1f27]">Equipo</dt>
                  <dd className="mt-1 text-2xl font-semibold text-epb-ink">200+</dd>
                </div>
              </dl>
            </div>

            <div>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                {clientLogos.items.map((item) => (
                  <div
                    key={item}
                    className="card-hover flex min-h-[84px] items-center justify-center rounded-inner border border-[#e9d8d9] bg-white px-4 text-center text-sm font-semibold uppercase tracking-[0.16em] text-[#7b1d24] shadow-sm"
                  >
                    {item}
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
