import type { MouseEvent } from 'react'
import {
  CONTACT,
  about,
  clientLogos,
  csr,
  hero,
  press,
  recognitions,
  services,
  technology,
  tools,
} from './content/siteContent'
import { trackCTAEvent } from './lib/analytics'

function SectionHeader({ eyebrow, title, description }: { eyebrow: string; title: string; description?: string }) {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center lg:mb-14">
      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-epb-brand">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-epb-ink sm:text-4xl">{title}</h2>
      {description ? <p className="mt-4 text-base leading-7 text-epb-slate sm:text-lg">{description}</p> : null}
    </div>
  )
}

const handleCTA = (eventName: string, section: string, label?: string) => (event: MouseEvent<HTMLAnchorElement>) => {
  trackCTAEvent({
    name: eventName,
    section,
    label: label ?? event.currentTarget.href,
  })
}

function App() {
  return (
    <div className="min-h-screen bg-[#f4f1ea] text-epb-ink">
      <a
        href="#contenido"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:rounded-full focus:bg-epb-ink focus:px-4 focus:py-3 focus:text-white"
      >
        Saltar al contenido
      </a>

      <header className="sticky top-0 z-50 border-b border-black/5 bg-[#f4f1ea]/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 lg:px-8">
          <a href="#inicio" className="flex items-center gap-3" aria-label="Ir al inicio">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-epb-ink text-sm font-bold tracking-[0.3em] text-white">
              EPB
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-epb-brand">Estudio Palmero</p>
              <p className="text-sm text-epb-slate">Recupero y gestión de mora</p>
            </div>
          </a>

          <nav className="hidden items-center gap-6 text-sm font-medium text-epb-slate md:flex" aria-label="Principal">
            <a href="#servicios" className="transition hover:text-epb-ink">Servicios</a>
            <a href="#herramientas" className="transition hover:text-epb-ink">Herramientas</a>
            <a href="#nosotros" className="transition hover:text-epb-ink">Nosotros</a>
            <a href="#novedades" className="transition hover:text-epb-ink">Novedades</a>
            <a href="#contacto" className="transition hover:text-epb-ink">Contacto</a>
          </nav>

          <a
            href={CONTACT.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="cta-glow rounded-full bg-epb-ink px-4 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-epb-brand focus-visible:ring-offset-2"
            onClick={handleCTA('header_contact_click', 'header', 'contacto')}
          >
            Contacto
          </a>
        </div>

        <nav className="mx-auto flex max-w-7xl gap-2 overflow-x-auto px-5 pb-3 text-xs font-semibold uppercase tracking-[0.14em] text-epb-slate md:hidden lg:px-8" aria-label="Secciones rápidas">
          <a href="#servicios" className="whitespace-nowrap rounded-full border border-epb-line bg-white px-3 py-2">Servicios</a>
          <a href="#herramientas" className="whitespace-nowrap rounded-full border border-epb-line bg-white px-3 py-2">Herramientas</a>
          <a href="#nosotros" className="whitespace-nowrap rounded-full border border-epb-line bg-white px-3 py-2">Nosotros</a>
          <a href="#novedades" className="whitespace-nowrap rounded-full border border-epb-line bg-white px-3 py-2">Novedades</a>
          <a href="#contacto" className="whitespace-nowrap rounded-full border border-epb-line bg-white px-3 py-2">Contacto</a>
        </nav>
      </header>

      <main id="contenido">
        <section id="inicio" className="relative overflow-hidden border-b border-black/5 bg-[#f4f1ea]">
          <div className="absolute inset-0 bg-[linear-gradient(122deg,rgba(108,16,24,0.98)_0%,rgba(146,24,33,0.96)_44%,rgba(201,77,89,0.74)_74%,rgba(245,240,233,0.94)_100%)]" />
          <div className="pointer-events-none absolute -left-10 top-12 h-52 w-52 rounded-full bg-white/10 blur-3xl motion-safe:animate-subtle-drift" />
          <div className="pointer-events-none absolute -right-12 bottom-0 h-64 w-64 rounded-full bg-[#ffb3bb]/15 blur-3xl motion-safe:animate-subtle-drift" />

          <div className="relative mx-auto max-w-7xl px-5 pb-10 pt-14 lg:px-8 lg:pb-14 lg:pt-24">
            <div className="grid gap-10 lg:grid-cols-[minmax(0,1.18fr)_minmax(340px,0.82fr)] lg:items-end">
              <div className="max-w-3xl text-white">
                <p className="reveal is-visible text-sm font-semibold uppercase tracking-[0.34em] text-white/72">{hero.eyebrow}</p>
                <h1 className="reveal reveal-delay-1 is-visible mt-5 max-w-4xl text-4xl font-semibold leading-[1.03] tracking-tight sm:text-5xl lg:text-[4.35rem]">
                  {hero.title}
                </h1>
                <p className="reveal reveal-delay-2 is-visible mt-6 max-w-2xl text-lg leading-8 text-white/84">{hero.intro}</p>
                <p className="reveal reveal-delay-3 is-visible mt-5 max-w-2xl text-base leading-7 text-white/70">{hero.supporting}</p>

                <div className="reveal reveal-delay-3 is-visible mt-8 flex flex-col gap-4 sm:flex-row">
                  <a
                    href="#contacto"
                    className="cta-glow rounded-full bg-white px-7 py-4 text-center text-base font-semibold text-[#8d1f27] shadow-soft transition hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#8d1f27]"
                    onClick={handleCTA('hero_contact_click', 'hero', 'quiero_comunicarme')}
                  >
                    Quiero comunicarme
                  </a>
                  <a
                    href={CONTACT.selfService}
                    target="_blank"
                    rel="noreferrer"
                    className="cta-glow rounded-full border border-white/25 bg-white/10 px-7 py-4 text-center text-base font-semibold text-white transition hover:bg-white/16 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#8d1f27]"
                    onClick={handleCTA('hero_self_service_click', 'hero', 'gestion_de_cobranzas')}
                  >
                    Gestión de cobranzas
                  </a>
                </div>

                <p className="reveal reveal-delay-4 is-visible mt-7 text-xs font-semibold uppercase tracking-[0.22em] text-white/62">
                  Estrategia • Negociación • Tecnología aplicada
                </p>
              </div>

              <div className="hero-visual reveal reveal-delay-2 is-visible relative rounded-[2rem] border border-white/18 bg-white/12 p-7 text-white shadow-soft backdrop-blur md:p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.32em] text-white/72">{hero.badge}</p>
                <div className="mt-8 grid gap-4 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
                  {hero.highlights.map((item) => (
                    <div key={item.label} className="hero-bar rounded-xl border border-white/18 bg-white/[0.04] px-4 py-3">
                      <p className="text-3xl font-semibold tracking-tight">{item.value}</p>
                      <p className="mt-2 text-xs uppercase tracking-[0.2em] text-white/68">{item.label}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-8 h-px bg-white/18" />
                <p className="mt-7 text-base leading-7 text-white/78">{hero.note}</p>
              </div>
            </div>
          </div>
        </section>

        <section aria-label="Clientes" className="border-b border-black/5 bg-white">
          <div className="mx-auto max-w-7xl px-5 py-10 lg:px-8 lg:py-14">
            <div className="reveal is-visible rounded-[2rem] border border-[#ead6d8] bg-[linear-gradient(180deg,#fff_0%,#fdf8f8_100%)] p-6 shadow-soft lg:p-8">
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
                        className="card-hover flex min-h-[84px] items-center justify-center rounded-[1.15rem] border border-[#e9d8d9] bg-white px-4 text-center text-sm font-semibold uppercase tracking-[0.16em] text-[#7b1d24] shadow-sm"
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

        <section id="servicios" className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-24">
          <SectionHeader eyebrow={services.eyebrow} title={services.title} description="Presentamos los servicios clave con una estructura más clara, priorizando lectura, jerarquía visual y comprensión rápida." />
          <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
            <article className="reveal is-visible card-hover rounded-[2rem] bg-epb-ink p-8 text-white shadow-soft lg:p-10">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-200">{services.main.title}</p>
              <h3 className="mt-4 text-3xl font-semibold tracking-tight">{services.main.description}</h3>
              <p className="mt-8 text-sm font-semibold uppercase tracking-[0.3em] text-emerald-200">¿Cómo lo hacemos?</p>
              <ul className="mt-5 space-y-4 text-base leading-8 text-slate-200">
                {services.main.steps.map((step) => (
                  <li key={step}>{step}</li>
                ))}
              </ul>
            </article>

            <aside className="reveal reveal-delay-1 is-visible card-hover rounded-[2rem] border border-epb-line bg-white p-8 shadow-soft lg:p-10">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-epb-brand">Marca complementaria</p>
              <p className="mt-4 text-lg leading-8 text-epb-slate">{services.main.note}</p>
              <a
                href={services.main.noteHref}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex rounded-full border border-epb-line px-5 py-3 text-sm font-semibold text-epb-ink transition hover:border-epb-brand hover:text-epb-brand"
                onClick={handleCTA('services_note_click', 'services', 'ver_agenciapalmero')}
              >
                Ver AgenciaPalmero
              </a>
            </aside>
          </div>
        </section>

        <section id="herramientas" className="border-y border-black/5 bg-white/70">
          <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-24">
            <SectionHeader eyebrow={tools.eyebrow} title={tools.title} description="Las capacidades operativas se organizan en bloques más claros para facilitar lectura, jerarquía y comprensión comercial." />
            <div className="grid gap-5 lg:grid-cols-2">
              {tools.items.map((item) => (
                <article key={item.title} className="rounded-[1.75rem] border border-epb-line bg-white p-7 shadow-soft">
                  <h3 className="text-xl font-semibold text-epb-ink">{item.title}</h3>
                  {'body' in item && item.body ? <p className="mt-4 leading-8 text-epb-slate">{item.body}</p> : null}
                  {'bullets' in item && item.bullets ? (
                    <ul className="mt-4 space-y-3 text-base leading-8 text-epb-slate">
                      {item.bullets.map((bullet) => (
                        <li key={bullet}>• {bullet}</li>
                      ))}
                    </ul>
                  ) : null}
                </article>
              ))}
            </div>

            <div className="mt-10 rounded-[2rem] bg-epb-ink p-8 text-white shadow-soft lg:p-10">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-200">{technology.title}</p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                {technology.items.map((item) => (
                  <div key={item} className="rounded-[1.25rem] border border-white/10 bg-white/5 px-5 py-4 text-sm font-medium tracking-[0.04em] text-slate-200">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="nosotros" className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-24">
          <SectionHeader eyebrow={about.eyebrow} title={about.title} />
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div className="rounded-[2rem] border border-epb-line bg-white p-8 shadow-soft lg:p-10">
              {about.body.map((paragraph) => (
                <p key={paragraph} className="mb-5 last:mb-0 text-lg leading-8 text-epb-slate">
                  {paragraph}
                </p>
              ))}
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {about.stats.map((stat) => (
                  <div key={stat.label} className="rounded-[1.5rem] bg-epb-soft p-5">
                    <p className="text-sm font-semibold uppercase tracking-[0.28em] text-epb-brand">{stat.label}</p>
                    <p className="mt-3 text-4xl font-semibold tracking-tight text-epb-ink">{stat.value}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-5">
              <div className="rounded-[2rem] bg-[#fcfaf6] p-8 shadow-soft ring-1 ring-black/5 lg:p-10">
                <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-epb-brand">MISIÓN</h3>
                <p className="mt-4 text-lg leading-8 text-epb-slate">{about.mission}</p>
              </div>
              <div className="rounded-[2rem] bg-[#fcfaf6] p-8 shadow-soft ring-1 ring-black/5 lg:p-10">
                <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-epb-brand">VALORES</h3>
                <div className="mt-5 flex flex-wrap gap-3">
                  {about.values.map((value) => (
                    <span key={value} className="rounded-full border border-epb-brand/20 bg-white px-4 py-2 text-sm font-semibold text-epb-ink shadow-sm">
                      {value}
                    </span>
                  ))}
                </div>
              </div>
              <div className="rounded-[2rem] bg-[#fcfaf6] p-8 shadow-soft ring-1 ring-black/5 lg:p-10">
                <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-epb-brand">VISIÓN</h3>
                <p className="mt-4 text-lg leading-8 text-epb-slate">{about.vision}</p>
              </div>
            </div>
          </div>

          <div className="mt-14">
            <SectionHeader eyebrow="RECONOCIMIENTOS" title="Reconocimientos institucionales" description="Resumen de clientes y distinciones institucionales destacadas." />
            <div className="grid gap-5 xl:grid-cols-3">
              {recognitions.map((recognition) => (
                <article key={recognition.client} className="rounded-[1.75rem] border border-epb-line bg-white p-7 shadow-soft">
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
        </section>

        <section id="novedades" className="border-y border-black/5 bg-white/70">
          <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-24">
            <SectionHeader eyebrow="NOVEDADES" title="Prensa, eventos y presencia pública" description="Selección de notas, eventos y apariciones públicas organizadas para una lectura más simple." />
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {press.map(([tag, source, title, href]) => {
                const hasLink = Boolean(href)

                if (!hasLink) {
                  return (
                    <article
                      key={`${source}-${title}`}
                      className="flex h-full flex-col rounded-[1.5rem] border border-dashed border-epb-line bg-white p-6 shadow-soft"
                    >
                      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-epb-brand">{tag}</p>
                      <p className="mt-2 text-sm font-medium text-epb-slate">{source}</p>
                      <h3 className="mt-4 text-xl font-semibold leading-8 text-epb-ink">{title}</h3>
                      <span className="mt-6 inline-flex text-sm font-semibold text-amber-700">Contenido pendiente</span>
                    </article>
                  )
                }

                return (
                  <a
                    key={`${source}-${title}`}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex h-full flex-col rounded-[1.5rem] border border-epb-line bg-white p-6 shadow-soft transition hover:-translate-y-1 hover:border-epb-brand/30"
                    onClick={handleCTA('press_item_click', 'press', title)}
                  >
                    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-epb-brand">{tag}</p>
                    <p className="mt-2 text-sm font-medium text-epb-slate">{source}</p>
                    <h3 className="mt-4 text-xl font-semibold leading-8 text-epb-ink">{title}</h3>
                    <span className="mt-6 inline-flex text-sm font-semibold text-epb-ink group-hover:text-epb-brand">Leer más →</span>
                  </a>
                )
              })}
            </div>

            <div className="mt-12 grid gap-5 lg:grid-cols-3">
              {csr.map((item) => (
                <article key={item.title} className="rounded-[1.75rem] bg-epb-ink p-7 text-white shadow-soft">
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-200">{item.tag}</p>
                  <h3 className="mt-3 text-2xl font-semibold">{item.title}</h3>
                  <p className="mt-4 leading-8 text-slate-300">{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="contacto" className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-24">
          <div className="grid gap-8 rounded-[2rem] bg-epb-ink p-8 text-white shadow-soft lg:grid-cols-[0.95fr_1.05fr] lg:p-12">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-200">CONTACTO</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">Hacenos tu consulta</h2>
              <div className="mt-6 space-y-3 text-lg leading-8 text-slate-300">
                <p>{CONTACT.address}</p>
                <p>{CONTACT.city}</p>
                <p>{CONTACT.phone}</p>
                <p>{CONTACT.hotline}</p>
              </div>
              <p className="mt-8 text-sm font-semibold uppercase tracking-[0.3em] text-emerald-200">HORARIO DE ATENCIÓN</p>
              <div className="mt-4 space-y-3 text-base leading-8 text-slate-300">
                <p>Atención Telefónica Lunes a Viernes 07:30 a 20:30hs - Sábados 8 a 12.30hs</p>
                <p>Caja Lunes a Viernes de 9 a 18hs - Sábados 9 a 12hs. / Chatbot 24hs</p>
              </div>
            </div>

            <div className="grid gap-4 self-start">
              <a
                href={CONTACT.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="rounded-[1.5rem] bg-white px-6 py-5 text-epb-ink transition hover:bg-emerald-50"
                onClick={handleCTA('contact_whatsapp_click', 'contact', 'contacto_comercial')}
              >
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-epb-brand">Quiero comunicarme</p>
                <p className="mt-2 text-xl font-semibold">Contacto comercial</p>
              </a>
              <a
                href={CONTACT.selfService}
                target="_blank"
                rel="noreferrer"
                className="rounded-[1.5rem] border border-white/15 bg-white/5 px-6 py-5 transition hover:bg-white/10"
                onClick={handleCTA('contact_self_service_click', 'contact', 'portal_autogestion')}
              >
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-emerald-200">Gestión de cobranzas</p>
                <p className="mt-2 text-xl font-semibold">Portal de autogestión</p>
              </a>
              <a
                href={CONTACT.phoneHref}
                className="rounded-[1.5rem] border border-white/15 bg-white/5 px-6 py-5 transition hover:bg-white/10"
                onClick={handleCTA('contact_phone_click', 'contact', CONTACT.phone)}
              >
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-emerald-200">Teléfono</p>
                <p className="mt-2 text-xl font-semibold">{CONTACT.phone}</p>
              </a>
              <a
                href={CONTACT.email}
                className="rounded-[1.5rem] border border-white/15 bg-white/5 px-6 py-5 transition hover:bg-white/10"
                onClick={handleCTA('contact_email_click', 'contact', 'info@epb.com.ar')}
              >
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-emerald-200">Email</p>
                <p className="mt-2 text-xl font-semibold">info@epb.com.ar</p>
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-black/5 bg-[#f4f1ea]">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-8 text-sm text-epb-slate lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <p>EPB — Recupero de activos y gestión de mora.</p>
          <p>Presentación institucional preparada para revisión comercial.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
