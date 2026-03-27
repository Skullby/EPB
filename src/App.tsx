import { useState, useEffect, useRef, useCallback } from 'react'
import type { FormEvent } from 'react'
import {
  CONTACT,
  about,
  clients,
  csr,
  hero,
  press,
  recognitions,
  services,
  technology,
  tools,
} from './content/siteContent'

/* ------------------------------------------------------------------ */
/*  Scroll-reveal hook – adds .is-visible when element enters viewport */
/* ------------------------------------------------------------------ */
function useReveal<T extends HTMLElement>() {
  const ref = useRef<T>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) {
      el.classList.add('is-visible')
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('is-visible')
          observer.unobserve(el)
        }
      },
      { threshold: 0.01, rootMargin: '0px 0px -10% 0px' },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return ref
}

/* ------------------------------------------------------------------ */
/*  Section header                                                     */
/* ------------------------------------------------------------------ */
function SectionHeader({ eyebrow, title, description }: { eyebrow: string; title: string; description?: string }) {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center lg:mb-14">
      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-epb-brand">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-epb-ink sm:text-4xl">{title}</h2>
      {description ? <p className="mt-4 text-base leading-7 text-epb-slate sm:text-lg">{description}</p> : null}
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  App                                                                */
/* ------------------------------------------------------------------ */
function App() {
  const [formState, setFormState] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    message: '',
  })

  const handleField = useCallback(
    (field: keyof typeof formState) => (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setFormState((prev) => ({ ...prev, [field]: event.target.value })),
    [],
  )

  const whatsappHref = (() => {
    const summary = [
      'Hola EPB, quiero hacer una consulta.',
      formState.name ? `Nombre: ${formState.name}` : null,
      formState.company ? `Empresa: ${formState.company}` : null,
      formState.email ? `Email: ${formState.email}` : null,
      formState.phone ? `Teléfono: ${formState.phone}` : null,
      formState.message ? `Consulta: ${formState.message}` : null,
    ]
      .filter(Boolean)
      .join('\n')

    return `https://wa.me/5491164215435?text=${encodeURIComponent(summary)}`
  })()

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    window.open(whatsappHref, '_blank', 'noopener,noreferrer')
  }

  /* Reveal refs for each section */
  const servicesRef = useReveal<HTMLElement>()
  const toolsRef = useReveal<HTMLElement>()
  const aboutRef = useReveal<HTMLElement>()
  const clientsRef = useReveal<HTMLDivElement>()
  const recognitionsRef = useReveal<HTMLDivElement>()
  const pressRef = useReveal<HTMLElement>()
  const contactRef = useReveal<HTMLElement>()

  return (
    <div className="min-h-screen bg-[#f4f1ea] text-epb-ink">
      <a
        href="#contenido"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:rounded-full focus:bg-epb-ink focus:px-4 focus:py-3 focus:text-white"
      >
        Saltar al contenido
      </a>

      {/* ── Header ─────────────────────────────────────────────── */}
      <header className="sticky top-0 z-50 border-b border-black/5 bg-[#f4f1ea]/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-4 py-3 sm:px-5 lg:px-8">
          <a href="#inicio" className="min-w-0 flex items-center gap-3" aria-label="Ir al inicio">
            <div className="flex shrink-0 items-center justify-center rounded-[1.35rem] border border-epb-brand/10 bg-white px-3 py-2 shadow-soft">
              <img
                src="/brand/epb-logo-original.png"
                alt="EPB Estudio Palmero de Belizán"
                className="h-8 w-auto sm:h-9"
              />
            </div>
            <div className="min-w-0">
              <p className="truncate text-[11px] font-semibold uppercase tracking-[0.24em] text-epb-brand sm:text-xs sm:tracking-[0.3em]">Estudio Palmero</p>
              <p className="truncate text-xs text-epb-slate sm:text-sm">Recupero y gestión de mora</p>
            </div>
          </a>

          <nav className="hidden items-center gap-6 text-sm font-medium text-epb-slate md:flex" aria-label="Principal">
            <a href="#servicios" className="transition hover:text-epb-brand">Servicios</a>
            <a href="#herramientas" className="transition hover:text-epb-brand">Herramientas</a>
            <a href="#nosotros" className="transition hover:text-epb-brand">Nosotros</a>
            <a href="#clientes" className="transition hover:text-epb-brand">Clientes</a>
            <a href="#novedades" className="transition hover:text-epb-brand">Novedades</a>
            <a href="#contacto" className="transition hover:text-epb-brand">Contacto</a>
          </nav>

          <a
            href={CONTACT.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="cta-glow shrink-0 rounded-full bg-epb-brand px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-epb-brandDark hover:-translate-y-0.5 sm:px-5 sm:py-3"
          >
            Contacto
          </a>
        </div>

        <div className="border-t border-black/5 px-4 py-2 md:hidden">
          <nav className="mx-auto flex max-w-7xl items-center gap-2 overflow-x-auto text-xs font-semibold text-epb-slate" aria-label="Principal móvil">
            <a href="#servicios" className="whitespace-nowrap rounded-full border border-epb-line bg-white px-3 py-2 transition hover:border-epb-brand hover:text-epb-brand">Servicios</a>
            <a href="#herramientas" className="whitespace-nowrap rounded-full border border-epb-line bg-white px-3 py-2 transition hover:border-epb-brand hover:text-epb-brand">Herramientas</a>
            <a href="#nosotros" className="whitespace-nowrap rounded-full border border-epb-line bg-white px-3 py-2 transition hover:border-epb-brand hover:text-epb-brand">Nosotros</a>
            <a href="#clientes" className="whitespace-nowrap rounded-full border border-epb-line bg-white px-3 py-2 transition hover:border-epb-brand hover:text-epb-brand">Clientes</a>
            <a href="#novedades" className="whitespace-nowrap rounded-full border border-epb-line bg-white px-3 py-2 transition hover:border-epb-brand hover:text-epb-brand">Novedades</a>
            <a href="#contacto" className="whitespace-nowrap rounded-full border border-epb-line bg-white px-3 py-2 transition hover:border-epb-brand hover:text-epb-brand">Contacto</a>
          </nav>
        </div>
      </header>

      <main id="contenido">
        {/* ── Hero ────────────────────────────────────────────── */}
        <section
          id="inicio"
          className="relative overflow-hidden border-b border-black/5 bg-[#f4f1ea]"
        >
          {/* Subtle animated background blobs */}
          <div className="pointer-events-none absolute inset-0" aria-hidden="true">
            <div className="absolute -right-32 -top-32 h-[500px] w-[500px] rounded-full bg-epb-brand/[0.07] blur-3xl motion-safe:animate-subtle-drift" />
            <div className="absolute -bottom-24 -left-24 h-[400px] w-[400px] rounded-full bg-epb-accent/[0.05] blur-3xl motion-safe:animate-subtle-drift [animation-delay:10s]" />
          </div>

          <div className="relative mx-auto grid max-w-7xl gap-12 px-5 py-16 lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:px-8 lg:py-28 xl:gap-16">
            <div className="max-w-2xl">
              <div className="inline-flex items-center rounded-[1.5rem] border border-epb-brand/15 bg-white/85 px-4 py-3 shadow-soft backdrop-blur">
                <img
                  src="/brand/epb-logo-original.png"
                  alt="EPB Estudio Palmero de Belizán"
                  className="h-10 w-auto sm:h-12"
                />
              </div>
              <p className="mt-5 inline-flex rounded-full border border-epb-brand/20 bg-white/80 px-4 py-1.5 text-sm font-semibold text-epb-brand shadow-soft">
                {hero.badge}
              </p>
              <h1 className="mt-6 max-w-3xl text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-[4.15rem]">
                {hero.title}
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-8 text-epb-slate">{hero.intro}</p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#contacto"
                  className="cta-glow rounded-full bg-epb-brand px-7 py-4 text-center text-base font-semibold text-white shadow-soft transition hover:bg-epb-brandDark hover:-translate-y-0.5"
                >
                  Quiero comunicarme
                </a>
                <a
                  href={CONTACT.selfService}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-epb-line bg-white px-7 py-4 text-center text-base font-semibold text-epb-ink transition hover:border-epb-brand hover:text-epb-brand hover:-translate-y-0.5"
                >
                  Gestión de cobranzas
                </a>
              </div>

              <div className="mt-8 flex flex-wrap gap-3 text-sm font-semibold text-epb-ink">
                <div className="rounded-full border border-epb-brand/12 bg-white/72 px-4 py-2 shadow-soft">Desde 1996</div>
                <div className="rounded-full border border-epb-brand/12 bg-white/72 px-4 py-2 shadow-soft">Bancos, empresas y PyMES</div>
                <div className="rounded-full border border-epb-brand/12 bg-white/72 px-4 py-2 shadow-soft">Atención comercial + autogestión</div>
              </div>
            </div>

            <div className="relative lg:pl-4 xl:pl-8">
              <div className="absolute inset-x-10 top-10 h-32 rounded-full bg-epb-brand/10 blur-3xl" aria-hidden="true" />
              <div className="hero-visual relative overflow-hidden rounded-[2.4rem] border border-white/75 bg-[linear-gradient(135deg,rgba(255,255,255,0.92),rgba(255,248,246,0.96),rgba(255,255,255,0.9))] p-6 shadow-lifted backdrop-blur sm:p-8 lg:p-10">
                <div className="pointer-events-none absolute inset-0" aria-hidden="true">
                  <div className="absolute inset-y-0 right-[14%] w-px bg-gradient-to-b from-transparent via-epb-brand/15 to-transparent" />
                  <div className="absolute inset-y-0 right-[34%] w-px bg-gradient-to-b from-transparent via-epb-brand/10 to-transparent" />
                  <div className="absolute inset-x-0 top-[22%] h-px bg-gradient-to-r from-transparent via-epb-brand/12 to-transparent" />
                  <div className="absolute inset-x-0 top-[58%] h-px bg-gradient-to-r from-transparent via-epb-brand/10 to-transparent" />
                  <div className="absolute right-[-12%] top-[-14%] h-48 w-48 rounded-full border border-epb-brand/10" />
                </div>

                <div className="relative z-10 grid gap-6 lg:grid-cols-[0.72fr_0.28fr] lg:items-end">
                  <div className="overflow-hidden rounded-[2rem] bg-epb-ink px-6 py-7 text-white shadow-soft sm:px-8 sm:py-8">
                    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-epb-brandLight">Operación institucional</p>
                    <p className="mt-4 max-w-md text-3xl font-semibold tracking-tight sm:text-[2.5rem]">
                      Gestión profesional con estructura, seguimiento y canales activos.
                    </p>
                    <div className="mt-8 flex items-end gap-3" aria-hidden="true">
                      <span className="hero-bar h-24 w-4 rounded-full bg-white/18 [animation-delay:0s]" />
                      <span className="hero-bar h-36 w-4 rounded-full bg-white/28 [animation-delay:0.8s]" />
                      <span className="hero-bar h-28 w-4 rounded-full bg-epb-brand [animation-delay:1.4s]" />
                      <span className="hero-bar h-44 w-4 rounded-full bg-white [animation-delay:0.4s]" />
                      <span className="hero-bar h-32 w-4 rounded-full bg-epb-brand/70 [animation-delay:1.1s]" />
                    </div>
                  </div>

                  <div className="grid gap-4">
                    <article className="rounded-[1.6rem] border border-epb-brand/12 bg-white/88 p-5 shadow-soft">
                      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-epb-brand">Presencia</p>
                      <p className="mt-3 text-xl font-semibold text-epb-ink">Marca institucional, contacto directo y operación continua.</p>
                    </article>
                    <article className="rounded-[1.6rem] border border-epb-brand/12 bg-[#fff4f1] p-5 shadow-soft">
                      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-epb-brand">Cobertura</p>
                      <p className="mt-3 text-xl font-semibold text-epb-ink">Soluciones para carteras comerciales, bancarias y PyME.</p>
                    </article>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Servicios ──────────────────────────────────────── */}
        <section id="servicios" ref={servicesRef} className="reveal mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-24">
          <SectionHeader eyebrow={services.eyebrow} title={services.title} description="Presentamos los servicios clave con una estructura más clara, priorizando lectura, jerarquía visual y comprensión rápida." />
          <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
            <article className="rounded-[2rem] bg-epb-ink p-8 text-white shadow-soft lg:p-10">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-epb-brandLight">{services.main.title}</p>
              <h3 className="mt-4 text-3xl font-semibold tracking-tight">{services.main.description}</h3>
              <p className="mt-8 text-sm font-semibold uppercase tracking-[0.3em] text-epb-brandLight">¿Cómo lo hacemos?</p>
              <ul className="mt-5 space-y-4 text-base leading-8 text-slate-200">
                {services.main.steps.map((step) => (
                  <li key={step}>{step}</li>
                ))}
              </ul>
            </article>

            <aside className="card-hover rounded-[2rem] border border-epb-line bg-white p-8 shadow-soft lg:p-10">
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

        {/* ── Herramientas ───────────────────────────────────── */}
        <section id="herramientas" ref={toolsRef} className="reveal border-y border-black/5 bg-white/70">
          <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-24">
            <SectionHeader eyebrow={tools.eyebrow} title={tools.title} description="Las capacidades operativas se organizan en bloques más claros para facilitar lectura, jerarquía y comprensión comercial." />
            <div className="grid gap-5 lg:grid-cols-2">
              {tools.items.map((item) => (
                <article key={item.title} className="card-hover rounded-[1.75rem] border border-epb-line bg-white p-7 shadow-soft">
                  <h3 className="text-xl font-semibold text-epb-ink">{item.title}</h3>
                  {'body' in item && item.body ? <p className="mt-4 leading-8 text-epb-slate">{item.body}</p> : null}
                  {'bullets' in item && item.bullets ? (
                    <ul className="mt-4 space-y-3 text-base leading-8 text-epb-slate">
                      {item.bullets.map((bullet) => (
                        <li key={bullet}>
                          <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-epb-brand align-middle" />
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </article>
              ))}
            </div>

            <div className="mt-10 rounded-[2rem] bg-epb-ink p-8 text-white shadow-soft lg:p-10">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-epb-brandLight">{technology.title}</p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                {technology.items.map((item) => (
                  <div key={item} className="rounded-[1.25rem] border border-white/10 bg-white/5 px-5 py-4 text-sm font-medium tracking-[0.04em] text-slate-200 transition hover:border-epb-brand/40 hover:bg-white/10">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Nosotros ───────────────────────────────────────── */}
        <section id="nosotros" ref={aboutRef} className="reveal mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-24">
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
                  <div key={stat.label} className="rounded-[1.5rem] bg-epb-brand/[0.06] p-5 ring-1 ring-epb-brand/10">
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
                    <span key={value} className="rounded-full border border-epb-brand/20 bg-white px-4 py-2 text-sm font-semibold text-epb-ink shadow-sm transition hover:border-epb-brand/40 hover:shadow-md">
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

          {/* Clientes */}
          <div id="clientes" ref={clientsRef} className="reveal mt-14">
            <SectionHeader eyebrow={clients.eyebrow} title={clients.title} description={clients.description} />
            <div className="overflow-hidden rounded-[2rem] border border-epb-line bg-gradient-to-br from-white via-[#fcfaf6] to-[#f6efe7] p-6 shadow-soft sm:p-8 lg:p-10">
              <div className="flex flex-col gap-4 border-b border-black/5 pb-6 sm:flex-row sm:items-end sm:justify-between">
                <div className="max-w-2xl">
                  <p className="text-sm font-semibold uppercase tracking-[0.3em] text-epb-brand">Relaciones institucionales</p>
                  <p className="mt-3 text-base leading-7 text-epb-slate sm:text-lg">
                    Una selección de marcas históricas presentes en el ecosistema comercial de EPB, reintroducidas con una presentación contemporánea y sobria.
                  </p>
                </div>
                <div className="rounded-full border border-epb-brand/15 bg-white px-4 py-2 text-sm font-semibold text-epb-ink shadow-sm">
                  +{clients.logos.length} marcas integradas
                </div>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                {clients.logos.map((logo, index) => (
                  <article
                    key={logo.src}
                    className={`group flex min-h-[108px] items-center justify-center rounded-[1.4rem] border border-white/80 bg-white/90 p-4 shadow-[0_12px_30px_rgba(15,23,42,0.06)] transition hover:-translate-y-1 hover:border-epb-brand/20 hover:shadow-[0_18px_40px_rgba(15,23,42,0.10)] reveal reveal-delay-${(index % 4) + 1}`}
                  >
                    <img
                      src={logo.src}
                      alt={logo.alt}
                      loading="lazy"
                      className="max-h-12 w-full object-contain opacity-95 transition duration-300 group-hover:scale-[1.02] sm:max-h-14"
                    />
                  </article>
                ))}
              </div>
            </div>
          </div>

          {/* Reconocimientos */}
          <div ref={recognitionsRef} className="reveal mt-14">
            <SectionHeader eyebrow="RECONOCIMIENTOS" title="Reconocimientos institucionales" description="Resumen de clientes y distinciones institucionales destacadas." />
            <div className="grid gap-5 xl:grid-cols-3">
              {recognitions.map((recognition) => (
                <article key={recognition.client} className="card-hover rounded-[1.75rem] border border-epb-line bg-white p-7 shadow-soft">
                  <h3 className="flex items-center gap-3 text-xl font-semibold text-epb-ink">
                    <span className="inline-block h-2 w-2 rounded-full bg-epb-brand" />
                    {recognition.client}
                  </h3>
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

        {/* ── Novedades ──────────────────────────────────────── */}
        <section id="novedades" ref={pressRef} className="reveal border-y border-black/5 bg-white/70">
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
                    className="card-hover group flex h-full flex-col rounded-[1.5rem] border border-epb-line bg-white p-6 shadow-soft transition hover:border-epb-brand/30"
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
                <article key={item.title} className="card-hover rounded-[1.75rem] bg-epb-ink p-7 text-white shadow-soft">
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-epb-brandLight">{item.tag}</p>
                  <h3 className="mt-3 text-2xl font-semibold">{item.title}</h3>
                  <p className="mt-4 leading-8 text-slate-300">{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── Contacto ───────────────────────────────────────── */}
        <section id="contacto" ref={contactRef} className="reveal mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-24">
          <div className="grid gap-8 rounded-[2rem] bg-epb-ink p-8 text-white shadow-lifted lg:grid-cols-[0.85fr_1.15fr] lg:p-12">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-epb-brandLight">CONTACTO</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">Hacenos tu consulta</h2>
              <div className="mt-6 space-y-3 text-lg leading-8 text-slate-300">
                <p>{CONTACT.address}</p>
                <p>{CONTACT.city}</p>
                <p>{CONTACT.phone}</p>
                <p>{CONTACT.hotline}</p>
              </div>
              <p className="mt-8 text-sm font-semibold uppercase tracking-[0.3em] text-epb-brandLight">HORARIO DE ATENCIÓN</p>
              <div className="mt-4 space-y-3 text-base leading-8 text-slate-300">
                <p>Atención Telefónica Lunes a Viernes 07:30 a 20:30hs - Sábados 8 a 12.30hs</p>
                <p>Caja Lunes a Viernes de 9 a 18hs - Sábados 9 a 12hs. / Chatbot 24hs</p>
              </div>

              <div className="mt-8 grid gap-4 self-start">
                <a href={CONTACT.whatsapp} target="_blank" rel="noreferrer" className="rounded-[1.5rem] bg-white px-6 py-5 text-epb-ink transition hover:bg-red-50 hover:-translate-y-0.5">
                  <p className="text-sm font-semibold uppercase tracking-[0.28em] text-epb-brand">Quiero comunicarme</p>
                  <p className="mt-2 text-xl font-semibold">Contacto comercial</p>
                </a>
                <a href={CONTACT.selfService} target="_blank" rel="noreferrer" className="rounded-[1.5rem] border border-white/15 bg-white/5 px-6 py-5 transition hover:bg-white/10 hover:-translate-y-0.5">
                  <p className="text-sm font-semibold uppercase tracking-[0.28em] text-epb-brandLight">Gestión de cobranzas</p>
                  <p className="mt-2 text-xl font-semibold">Portal de autogestión</p>
                </a>
                <a href={CONTACT.phoneHref} className="rounded-[1.5rem] border border-white/15 bg-white/5 px-6 py-5 transition hover:bg-white/10 hover:-translate-y-0.5">
                  <p className="text-sm font-semibold uppercase tracking-[0.28em] text-epb-brandLight">Teléfono</p>
                  <p className="mt-2 text-xl font-semibold">{CONTACT.phone}</p>
                </a>
                <a href={CONTACT.email} className="rounded-[1.5rem] border border-white/15 bg-white/5 px-6 py-5 transition hover:bg-white/10 hover:-translate-y-0.5">
                  <p className="text-sm font-semibold uppercase tracking-[0.28em] text-epb-brandLight">Email</p>
                  <p className="mt-2 text-xl font-semibold">info@epb.com.ar</p>
                </a>
              </div>
            </div>

            <div className="rounded-[1.75rem] bg-white p-6 text-epb-ink shadow-soft lg:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-epb-brand">Formulario rápido</p>
              <h3 className="mt-3 text-2xl font-semibold">Escribinos y seguimos por WhatsApp</h3>
              <p className="mt-3 text-base leading-7 text-epb-slate">
                Completá tus datos y abrimos una conversación de WhatsApp con el mensaje ya preparado para acelerar el contacto comercial.
              </p>

              <form className="mt-6 grid gap-4" onSubmit={handleSubmit}>
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="grid gap-2 text-sm font-medium text-epb-ink">
                    <span>Nombre</span>
                    <input
                      required
                      value={formState.name}
                      onChange={handleField('name')}
                      className="rounded-2xl border border-epb-line px-4 py-3 outline-none transition focus:border-epb-brand focus:ring-2 focus:ring-epb-brand/20"
                      placeholder="Tu nombre"
                    />
                  </label>
                  <label className="grid gap-2 text-sm font-medium text-epb-ink">
                    <span>Empresa</span>
                    <input
                      value={formState.company}
                      onChange={handleField('company')}
                      className="rounded-2xl border border-epb-line px-4 py-3 outline-none transition focus:border-epb-brand focus:ring-2 focus:ring-epb-brand/20"
                      placeholder="Empresa / área"
                    />
                  </label>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="grid gap-2 text-sm font-medium text-epb-ink">
                    <span>Email</span>
                    <input
                      type="email"
                      required
                      value={formState.email}
                      onChange={handleField('email')}
                      className="rounded-2xl border border-epb-line px-4 py-3 outline-none transition focus:border-epb-brand focus:ring-2 focus:ring-epb-brand/20"
                      placeholder="nombre@empresa.com"
                    />
                  </label>
                  <label className="grid gap-2 text-sm font-medium text-epb-ink">
                    <span>Teléfono</span>
                    <input
                      value={formState.phone}
                      onChange={handleField('phone')}
                      className="rounded-2xl border border-epb-line px-4 py-3 outline-none transition focus:border-epb-brand focus:ring-2 focus:ring-epb-brand/20"
                      placeholder="+54 11 ..."
                    />
                  </label>
                </div>

                <label className="grid gap-2 text-sm font-medium text-epb-ink">
                  <span>Consulta</span>
                  <textarea
                    required
                    rows={5}
                    value={formState.message}
                    onChange={handleField('message')}
                    className="rounded-[1.5rem] border border-epb-line px-4 py-3 outline-none transition focus:border-epb-brand focus:ring-2 focus:ring-epb-brand/20"
                    placeholder="Contanos qué tipo de gestión necesitás."
                  />
                </label>

                <div className="flex flex-col gap-3 sm:flex-row">
                  <button
                    type="submit"
                    className="cta-glow inline-flex items-center justify-center rounded-full bg-epb-brand px-6 py-4 text-base font-semibold text-white transition hover:bg-epb-brandDark hover:-translate-y-0.5"
                  >
                    Enviar por WhatsApp
                  </button>
                  <a
                    href={whatsappHref}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center rounded-full border border-epb-line px-6 py-4 text-base font-semibold text-epb-ink transition hover:border-epb-brand hover:text-epb-brand"
                  >
                    Abrir mensaje prellenado
                  </a>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* ── WhatsApp FAB ──────────────────────────────────────── */}
      <a
        href={whatsappHref}
        target="_blank"
        rel="noreferrer"
        aria-label="Abrir WhatsApp"
        className="fixed bottom-4 right-4 z-[60] inline-flex items-center gap-2 rounded-full bg-[#25D366] px-3 py-3 text-sm font-semibold text-white shadow-[0_20px_45px_rgba(37,211,102,0.35)] transition hover:-translate-y-0.5 hover:shadow-[0_24px_55px_rgba(37,211,102,0.42)] sm:bottom-5 sm:right-5 sm:gap-3 sm:px-5 sm:py-4"
      >
        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/15 text-lg sm:h-10 sm:w-10">✆</span>
        <span className="hidden sm:inline">WhatsApp</span>
      </a>

      {/* ── Footer ────────────────────────────────────────────── */}
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
