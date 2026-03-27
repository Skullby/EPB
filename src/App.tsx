import { useState, useEffect, useRef, useCallback } from 'react'
import type { FormEvent } from 'react'
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
      { threshold: 0.12 },
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
  const heroRef = useReveal<HTMLElement>()
  const servicesRef = useReveal<HTMLElement>()
  const toolsRef = useReveal<HTMLElement>()
  const aboutRef = useReveal<HTMLElement>()
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
      <header className="sticky top-0 z-50 border-b border-black/5 bg-[#f4f1ea]/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 lg:px-8">
          <a href="#inicio" className="flex items-center gap-3" aria-label="Ir al inicio">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-epb-brand text-sm font-bold tracking-[0.3em] text-white">
              EPB
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-epb-brand">Estudio Palmero</p>
              <p className="text-sm text-epb-slate">Recupero y gestión de mora</p>
            </div>
          </a>

          <nav className="hidden items-center gap-6 text-sm font-medium text-epb-slate md:flex" aria-label="Principal">
            <a href="#servicios" className="transition hover:text-epb-brand">Servicios</a>
            <a href="#herramientas" className="transition hover:text-epb-brand">Herramientas</a>
            <a href="#nosotros" className="transition hover:text-epb-brand">Nosotros</a>
            <a href="#novedades" className="transition hover:text-epb-brand">Novedades</a>
            <a href="#contacto" className="transition hover:text-epb-brand">Contacto</a>
          </nav>

          <a
            href={CONTACT.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="cta-glow rounded-full bg-epb-brand px-5 py-3 text-sm font-semibold text-white transition hover:bg-epb-brandDark hover:-translate-y-0.5"
          >
            Contacto
          </a>
        </div>
      </header>

      <main id="contenido">
        {/* ── Hero ────────────────────────────────────────────── */}
        <section
          id="inicio"
          ref={heroRef}
          className="reveal relative overflow-hidden border-b border-black/5 bg-[#f4f1ea]"
        >
          {/* Subtle animated background blobs */}
          <div className="pointer-events-none absolute inset-0" aria-hidden="true">
            <div className="absolute -right-32 -top-32 h-[500px] w-[500px] rounded-full bg-epb-brand/[0.07] blur-3xl motion-safe:animate-subtle-drift" />
            <div className="absolute -bottom-24 -left-24 h-[400px] w-[400px] rounded-full bg-epb-accent/[0.05] blur-3xl motion-safe:animate-subtle-drift [animation-delay:10s]" />
          </div>

          <div className="relative mx-auto grid max-w-7xl gap-10 px-5 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-28">
            <div className="max-w-3xl">
              <p className="inline-flex rounded-full border border-epb-brand/20 bg-white/80 px-4 py-1.5 text-sm font-semibold text-epb-brand shadow-soft">
                {hero.badge}
              </p>
              <h1 className="mt-6 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                {hero.title}
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-epb-slate">{hero.intro}</p>

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
            </div>

            <div className="grid gap-4">
              {hero.reasons.map((item, i) => {
                const [title, text] = item.split(' — ')
                return (
                  <article
                    key={item}
                    className={`card-hover rounded-[1.75rem] border border-white/70 bg-white/80 p-6 shadow-soft backdrop-blur reveal reveal-delay-${i + 1}`}
                  >
                    <p className="text-xs font-semibold uppercase tracking-[0.28em] text-epb-brand">{title}</p>
                    <p className="mt-3 text-xl font-semibold leading-8 text-epb-ink">{text}</p>
                  </article>
                )
              })}
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
        className="fixed bottom-5 right-5 z-[60] inline-flex items-center gap-3 rounded-full bg-[#25D366] px-5 py-4 text-sm font-semibold text-white shadow-[0_20px_45px_rgba(37,211,102,0.35)] transition hover:-translate-y-0.5 hover:shadow-[0_24px_55px_rgba(37,211,102,0.42)]"
      >
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/15 text-lg">✆</span>
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
