import {
  CONTACT,
  about,
  csr,
  hero,
  press,
  recognitions,
  services,
  technology,
  tools,
} from './content/siteContent'

function SectionHeader({ eyebrow, title, description }: { eyebrow: string; title: string; description?: string }) {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center lg:mb-14">
      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-epb-brand">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-epb-ink sm:text-4xl">{title}</h2>
      {description ? <p className="mt-4 text-base leading-7 text-epb-slate sm:text-lg">{description}</p> : null}
    </div>
  )
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
            <a href="#servicios">Servicios</a>
            <a href="#herramientas">Herramientas</a>
            <a href="#nosotros">Nosotros</a>
            <a href="#novedades">Novedades</a>
            <a href="#contacto">Contacto</a>
          </nav>

          <a
            href={CONTACT.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-epb-ink px-4 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5"
          >
            Contacto
          </a>
        </div>
      </header>

      <main id="contenido">
        <section id="inicio" className="relative overflow-hidden border-b border-black/5 bg-[#f4f1ea]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(15,118,110,0.18),transparent_30%),radial-gradient(circle_at_left,rgba(249,115,22,0.12),transparent_28%)]" />
          <div className="relative mx-auto grid max-w-7xl gap-10 px-5 py-14 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-24">
            <div className="max-w-3xl">
              <p className="inline-flex rounded-full border border-epb-brand/20 bg-white/80 px-4 py-1 text-sm font-semibold text-epb-brand shadow-soft">
                {hero.badge}
              </p>
              <h1 className="mt-6 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                {hero.title}
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-epb-slate">{hero.intro}</p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#contacto"
                  className="rounded-full bg-epb-brand px-7 py-4 text-center text-base font-semibold text-white shadow-soft transition hover:bg-epb-brandDark"
                >
                  Quiero comunicarme
                </a>
                <a
                  href={CONTACT.selfService}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-epb-line bg-white px-7 py-4 text-center text-base font-semibold text-epb-ink transition hover:border-epb-brand hover:text-epb-brand"
                >
                  Gestión de cobranzas
                </a>
              </div>
            </div>

            <div className="grid gap-4">
              {hero.reasons.map((item) => {
                const [title, text] = item.split(' — ')
                return (
                  <article key={item} className="rounded-[1.75rem] border border-white/70 bg-white/80 p-6 shadow-soft backdrop-blur">
                    <p className="text-xs font-semibold uppercase tracking-[0.28em] text-epb-brand">{title}</p>
                    <p className="mt-3 text-xl font-semibold leading-8 text-epb-ink">{text}</p>
                  </article>
                )
              })}
            </div>
          </div>
        </section>

        <section id="servicios" className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-24">
          <SectionHeader eyebrow={services.eyebrow} title={services.title} description="Se replica la sección principal del sitio original, manteniendo el texto base y ordenando la lectura con una interfaz más clara." />
          <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
            <article className="rounded-[2rem] bg-epb-ink p-8 text-white shadow-soft lg:p-10">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-200">{services.main.title}</p>
              <h3 className="mt-4 text-3xl font-semibold tracking-tight">{services.main.description}</h3>
              <p className="mt-8 text-sm font-semibold uppercase tracking-[0.3em] text-emerald-200">¿Cómo lo hacemos?</p>
              <ul className="mt-5 space-y-4 text-base leading-8 text-slate-200">
                {services.main.steps.map((step) => (
                  <li key={step}>{step}</li>
                ))}
              </ul>
            </article>

            <aside className="rounded-[2rem] border border-epb-line bg-white p-8 shadow-soft lg:p-10">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-epb-brand">Marca complementaria</p>
              <p className="mt-4 text-lg leading-8 text-epb-slate">{services.main.note}</p>
              <a
                href={services.main.noteHref}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex rounded-full border border-epb-line px-5 py-3 text-sm font-semibold text-epb-ink transition hover:border-epb-brand hover:text-epb-brand"
              >
                Ver AgenciaPalmero
              </a>
            </aside>
          </div>
        </section>

        <section id="herramientas" className="border-y border-black/5 bg-white/70">
          <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-24">
            <SectionHeader eyebrow={tools.eyebrow} title={tools.title} description="La información se conserva esencialmente igual a la home original; el cambio está en jerarquía visual, layout y legibilidad." />
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
            <SectionHeader eyebrow="RECONOCIMIENTOS" title="Reconocimientos institucionales" description="Se conservaron los clientes y distinciones visibles en la home original." />
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
            <SectionHeader eyebrow="NOVEDADES" title="Prensa, eventos y presencia pública" description="Se listan notas y apariciones con el mismo texto base del original, reorganizadas en tarjetas para facilitar lectura y scroll." />
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {press.map(([tag, source, title, href]) => (
                <a
                  key={`${source}-${title}`}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex h-full flex-col rounded-[1.5rem] border border-epb-line bg-white p-6 shadow-soft transition hover:-translate-y-1 hover:border-epb-brand/30"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-epb-brand">{tag}</p>
                  <p className="mt-2 text-sm font-medium text-epb-slate">{source}</p>
                  <h3 className="mt-4 text-xl font-semibold leading-8 text-epb-ink">{title}</h3>
                  <span className="mt-6 inline-flex text-sm font-semibold text-epb-ink group-hover:text-epb-brand">Leer más →</span>
                </a>
              ))}
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
              <a href={CONTACT.whatsapp} target="_blank" rel="noreferrer" className="rounded-[1.5rem] bg-white px-6 py-5 text-epb-ink transition hover:bg-emerald-50">
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-epb-brand">Quiero comunicarme</p>
                <p className="mt-2 text-xl font-semibold">Contacto comercial</p>
              </a>
              <a href={CONTACT.selfService} target="_blank" rel="noreferrer" className="rounded-[1.5rem] border border-white/15 bg-white/5 px-6 py-5 transition hover:bg-white/10">
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-emerald-200">Gestión de cobranzas</p>
                <p className="mt-2 text-xl font-semibold">Portal de autogestión</p>
              </a>
              <a href={CONTACT.phoneHref} className="rounded-[1.5rem] border border-white/15 bg-white/5 px-6 py-5 transition hover:bg-white/10">
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-emerald-200">Teléfono</p>
                <p className="mt-2 text-xl font-semibold">{CONTACT.phone}</p>
              </a>
              <a href={CONTACT.email} className="rounded-[1.5rem] border border-white/15 bg-white/5 px-6 py-5 transition hover:bg-white/10">
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-emerald-200">Email</p>
                <p className="mt-2 text-xl font-semibold">info@epb.com.ar</p>
              </a>
              <a href={CONTACT.originalSite} target="_blank" rel="noreferrer" className="rounded-[1.5rem] border border-white/15 bg-white/5 px-6 py-5 transition hover:bg-white/10">
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-emerald-200">Sitio original</p>
                <p className="mt-2 text-xl font-semibold">www.epb.com.ar</p>
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-black/5 bg-[#f4f1ea]">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-8 text-sm text-epb-slate lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <p>EPB — Recupero de activos y gestión de mora.</p>
          <p>Rediseño visual con contenido base fiel al sitio original.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
