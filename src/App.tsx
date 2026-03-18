const EXTERNAL_LINKS = {
  whatsapp: 'https://wa.me/5491112345678?text=Hola%20EPB%2C%20quiero%20hablar%20sobre%20un%20proyecto',
  calendar: 'https://cal.com/epb/diagnostico',
  email: 'mailto:hola@epb.digital',
  linkedin: 'https://www.linkedin.com/company/epb-digital',
} as const

const quickActions = [
  { title: 'Pedir diagnóstico', description: 'Revisamos tu caso y te proponemos próximos pasos claros.', href: EXTERNAL_LINKS.calendar },
  { title: 'Hablar por WhatsApp', description: 'Canal directo para consultas rápidas y coordinación comercial.', href: EXTERNAL_LINKS.whatsapp },
  { title: 'Solicitar propuesta', description: 'Armamos una propuesta simple, alineada a tu etapa y objetivo.', href: EXTERNAL_LINKS.email },
]

const services = [
  'Estrategia comercial y posicionamiento',
  'Sitios web orientados a conversión',
  'Automatización de procesos y follow-up',
  'Campañas y activos digitales de adquisición',
]

const process = [
  {
    step: '01',
    title: 'Entendemos el negocio',
    copy: 'Ordenamos objetivos, público, oferta y fricciones para decidir con foco comercial.',
  },
  {
    step: '02',
    title: 'Diseñamos una ruta simple',
    copy: 'Priorizamos lo que impacta primero: mensaje, canal, activos y automatizaciones.',
  },
  {
    step: '03',
    title: 'Implementamos y medimos',
    copy: 'Lanzamos rápido, ajustamos con datos y dejamos una base escalable para crecer.',
  },
]

const reasons = [
  'Bajamos la complejidad: hablamos claro, proponemos rápido y ejecutamos sin vueltas.',
  'Pensamos en conversión antes que en decoración: cada sección tiene un propósito comercial.',
  'Trabajamos con procesos reutilizables para que la operación no dependa de apagar incendios.',
]

const team = [
  'Perfil híbrido entre estrategia, producto y ejecución digital.',
  'Acompañamiento cercano, con foco en decisiones accionables.',
  'Capacidad para pasar de idea a implementación sin fricción innecesaria.',
]

const clientLogos = ['Estudio Norte', 'Grupo Delta', 'Casa Nexo', 'Orbita Health', 'Punto Base']

function SectionTitle({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center lg:mb-14">
      <span className="mb-3 inline-flex rounded-full bg-emerald-50 px-4 py-1 text-sm font-semibold uppercase tracking-[0.24em] text-epb-brand">
        {eyebrow}
      </span>
      <h2 className="text-3xl font-semibold tracking-tight text-epb-ink sm:text-4xl">{title}</h2>
      <p className="mt-4 text-base leading-7 text-epb-slate sm:text-lg">{description}</p>
    </div>
  )
}

function App() {
  return (
    <div className="bg-white text-epb-ink">
      <a
        href="#contenido-principal"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-epb-ink focus:px-4 focus:py-3 focus:text-sm focus:font-semibold focus:text-white"
      >
        Saltar al contenido
      </a>

      <header className="sticky top-0 z-50 border-b border-epb-line/80 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 lg:px-8">
          <a href="#home" aria-label="Ir al inicio de EPB Digital" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-epb-ink text-sm font-bold text-white">EPB</div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-epb-slate">EPB Digital</p>
              <p className="text-xs text-epb-slate">Estrategia, web y automatización</p>
            </div>
          </a>
          <nav aria-label="Navegación principal" className="hidden items-center gap-6 text-sm font-medium text-epb-slate md:flex">
            <a href="#servicios">Servicios</a>
            <a href="#metodo">Cómo lo hacemos</a>
            <a href="#nosotros">Quiénes somos</a>
            <a href="#contacto">Contacto</a>
          </nav>
          <a
            href={EXTERNAL_LINKS.calendar}
            target="_blank"
            rel="noreferrer"
            aria-label="Agendar llamada en calendario externo"
            className="rounded-full bg-epb-ink px-4 py-3 text-sm font-semibold text-white transition hover:bg-epb-brandDark sm:px-5"
          >
            <span className="sm:hidden">Agendar</span>
            <span className="hidden sm:inline">Agendar llamada</span>
          </a>
        </div>
      </header>

      <main id="contenido-principal">
        <section id="home" className="bg-hero">
          <div className="mx-auto grid max-w-7xl gap-14 px-5 py-16 lg:grid-cols-[1.2fr_0.8fr] lg:px-8 lg:py-24">
            <div className="max-w-3xl">
              <span className="inline-flex rounded-full border border-emerald-200 bg-white/80 px-4 py-1 text-sm font-semibold text-epb-brand shadow-sm">
                Impulsamos crecimiento con foco en resultados
              </span>
              <h1 className="mt-6 text-4xl font-semibold leading-tight tracking-tight text-epb-ink sm:text-5xl lg:text-6xl">
                Convertí tu presencia digital en una máquina más clara para vender, escalar y responder mejor.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-epb-slate">
                En EPB ayudamos a empresas y equipos comerciales a ordenar mensaje, activos y operación digital para que cada contacto tenga una ruta más simple hacia la conversión.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href={EXTERNAL_LINKS.calendar}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Abrir agenda para pedir una propuesta"
                  className="rounded-full bg-epb-brand px-7 py-4 text-center text-base font-semibold text-white shadow-soft transition hover:bg-epb-brandDark"
                >
                  Quiero una propuesta
                </a>
                <a
                  href="#servicios"
                  className="rounded-full border border-epb-line bg-white px-7 py-4 text-center text-base font-semibold text-epb-ink transition hover:border-epb-brand hover:text-epb-brand"
                >
                  Ver servicios
                </a>
              </div>
              <ul className="mt-10 grid gap-4 sm:grid-cols-3" aria-label="Beneficios principales">
                {['Implementación rápida', 'Comunicación clara', 'Canales conectados'].map((item) => (
                  <li key={item} className="rounded-2xl border border-white/60 bg-white/80 p-4 shadow-soft">
                    <p className="text-sm font-semibold text-epb-ink">{item}</p>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-[2rem] border border-white/70 bg-white p-6 shadow-soft lg:p-8">
              <div className="rounded-[1.5rem] bg-epb-ink p-6 text-white">
                <p className="text-sm uppercase tracking-[0.28em] text-emerald-200">Canal digital</p>
                <h3 className="mt-4 text-2xl font-semibold">Una base lista para captar, responder y convertir mejor.</h3>
                <ul className="mt-6 space-y-4 text-sm leading-7 text-slate-200" aria-label="Resultados del sitio">
                  <li>• Sitio web preparado para comunicar valor y activar consultas.</li>
                  <li>• Accesos directos a WhatsApp, mail y agenda comercial.</li>
                  <li>• Estructura adaptable para sumar casos, credenciales y nuevos servicios.</li>
                </ul>
              </div>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-epb-line bg-epb-soft p-4">
                  <p className="text-sm text-epb-slate">Tiempo de respuesta</p>
                  <p className="mt-2 text-2xl font-semibold">Más rápido</p>
                </div>
                <div className="rounded-2xl border border-epb-line bg-epb-soft p-4">
                  <p className="text-sm text-epb-slate">Mensaje comercial</p>
                  <p className="mt-2 text-2xl font-semibold">Más claro</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
          <SectionTitle
            eyebrow="Acciones rápidas"
            title="Elegí el próximo paso sin perder tiempo"
            description="Diseñamos la experiencia para que una consulta no quede congelada. Cada acceso apunta a mover una oportunidad hacia adelante."
          />
          <div className="grid gap-6 lg:grid-cols-3">
            {quickActions.map((action) => (
              <a
                key={action.title}
                href={action.href}
                target="_blank"
                rel="noreferrer"
                aria-label={`${action.title} en enlace externo`}
                className="rounded-[1.75rem] border border-epb-line bg-white p-7 shadow-soft transition hover:-translate-y-1 hover:border-epb-brand"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-epb-brand">Acción directa</p>
                <h3 className="mt-4 text-2xl font-semibold">{action.title}</h3>
                <p className="mt-4 leading-7 text-epb-slate">{action.description}</p>
                <span className="mt-6 inline-flex text-sm font-semibold text-epb-ink">Ir ahora →</span>
              </a>
            ))}
          </div>
        </section>

        <section id="servicios" className="border-y border-epb-line bg-epb-soft">
          <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
            <SectionTitle
              eyebrow="Servicios"
              title="Soluciones para ordenar la captación y sostener el crecimiento"
              description="Integramos estrategia, implementación y optimización para que el canal digital acompañe objetivos comerciales reales."
            />
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {services.map((service) => (
                <article key={service} className="rounded-[1.75rem] border border-epb-line bg-white p-6 shadow-soft">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 text-lg font-bold text-epb-brand">+</div>
                  <h3 className="mt-5 text-xl font-semibold">{service}</h3>
                  <p className="mt-3 leading-7 text-epb-slate">Implementación enfocada en claridad, velocidad de respuesta y mejor experiencia para tus potenciales clientes.</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="metodo" className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
          <SectionTitle
            eyebrow="Cómo lo hacemos"
            title="Un proceso corto, medible y orientado a decisiones"
            description="No proponemos más complejidad de la necesaria. Priorizamos lo que genera tracción y deja una base reutilizable para crecer."
          />
          <div className="grid gap-6 lg:grid-cols-3">
            {process.map((item) => (
              <article key={item.step} className="rounded-[1.75rem] bg-epb-ink p-7 text-white shadow-soft">
                <p className="text-sm font-semibold tracking-[0.24em] text-emerald-200">{item.step}</p>
                <h3 className="mt-4 text-2xl font-semibold">{item.title}</h3>
                <p className="mt-4 leading-7 text-slate-300">{item.copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="bg-epb-sand">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 lg:grid-cols-[1fr_1fr] lg:px-8">
            <div>
              <SectionTitle
                eyebrow="Por qué EPB"
                title="Porque necesitás avanzar con foco comercial y una ejecución que no se trabe"
                description="EPB combina criterio de negocio, sensibilidad de producto y velocidad de implementación para mover proyectos con menos fricción."
              />
            </div>
            <div className="grid gap-5 self-center">
              {reasons.map((reason) => (
                <div key={reason} className="rounded-[1.5rem] border border-orange-100 bg-white p-6 shadow-soft">
                  <p className="text-lg leading-8 text-epb-slate">{reason}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="nosotros" className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div className="rounded-[2rem] border border-dashed border-epb-line bg-epb-soft p-8 text-center shadow-soft">
              <div className="flex h-72 items-center justify-center rounded-[1.5rem] border border-epb-line bg-white">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-epb-brand">Placeholder visual</p>
                  <p className="mt-3 text-lg text-epb-slate">Reemplazar por foto de equipo, founder o pieza de marca.</p>
                </div>
              </div>
            </div>
            <div>
              <SectionTitle
                eyebrow="Quiénes somos"
                title="Un equipo chico, resolutivo y obsesionado con que las cosas pasen"
                description="Trabajamos cerca del negocio para detectar lo importante, bajar ruido y construir activos digitales que sostengan crecimiento con más orden."
              />
              <div className="space-y-4">
                {team.map((item) => (
                  <div key={item} className="rounded-[1.5rem] border border-epb-line bg-white p-5 shadow-soft">
                    <p className="leading-7 text-epb-slate">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-epb-line bg-epb-soft">
          <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
            <SectionTitle
              eyebrow="Clientes"
              title="Marcas y equipos que confiaron en procesos más claros"
              description="Podés reemplazar estos placeholders por logos reales cuando estén disponibles. La sección ya queda lista para credenciales futuras."
            />
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {clientLogos.map((logo) => (
                <div key={logo} className="flex min-h-28 items-center justify-center rounded-[1.5rem] border border-dashed border-epb-line bg-white px-6 text-center text-lg font-semibold text-epb-slate shadow-soft">
                  {logo}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contacto" className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
          <div className="grid gap-8 rounded-[2rem] bg-epb-ink p-8 text-white shadow-soft lg:grid-cols-[1.1fr_0.9fr] lg:p-12">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emerald-200">Contacto / canal digital</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">Si querés ordenar tu canal digital, empecemos por una conversación concreta.</h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
                Contanos qué querés destrabar: presencia web, generación de demanda, automatización o estructura comercial. Respondemos con foco y próximos pasos accionables.
              </p>
            </div>
            <div className="grid gap-4 self-start">
              <a
                href={EXTERNAL_LINKS.whatsapp}
                target="_blank"
                rel="noreferrer"
                aria-label="Escribir por WhatsApp"
                className="rounded-[1.5rem] bg-white px-6 py-5 text-epb-ink transition hover:bg-emerald-50"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-epb-brand">WhatsApp</p>
                <p className="mt-2 text-xl font-semibold">Escribir ahora</p>
              </a>
              <a href={EXTERNAL_LINKS.email} aria-label="Enviar email a hola arroba epb punto digital" className="rounded-[1.5rem] border border-white/15 bg-white/5 px-6 py-5 transition hover:bg-white/10">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emerald-200">Email</p>
                <p className="mt-2 text-xl font-semibold">hola@epb.digital</p>
              </a>
              <a
                href={EXTERNAL_LINKS.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="Abrir LinkedIn de EPB Digital"
                className="rounded-[1.5rem] border border-white/15 bg-white/5 px-6 py-5 transition hover:bg-white/10"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emerald-200">LinkedIn</p>
                <p className="mt-2 text-xl font-semibold">EPB Digital</p>
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-epb-line bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-10 lg:grid-cols-[1.2fr_0.8fr_0.8fr] lg:px-8">
          <div>
            <p className="text-lg font-semibold">EPB Digital</p>
            <p className="mt-3 max-w-md leading-7 text-epb-slate">
              Estrategia, implementación y optimización digital para equipos que necesitan crecer con más claridad y menos fricción operativa.
            </p>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-epb-slate">Secciones</p>
            <nav aria-label="Secciones del pie" className="mt-4 grid gap-3 text-sm text-epb-slate">
              <a href="#servicios">Servicios</a>
              <a href="#metodo">Cómo lo hacemos</a>
              <a href="#nosotros">Quiénes somos</a>
              <a href="#contacto">Contacto</a>
            </nav>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-epb-slate">Canales</p>
            <div className="mt-4 grid gap-3 text-sm text-epb-slate">
              <a href={EXTERNAL_LINKS.whatsapp} target="_blank" rel="noreferrer" aria-label="Abrir WhatsApp de EPB Digital">WhatsApp</a>
              <a href={EXTERNAL_LINKS.email}>hola@epb.digital</a>
              <a href={EXTERNAL_LINKS.linkedin} target="_blank" rel="noreferrer" aria-label="Abrir LinkedIn de EPB Digital">LinkedIn</a>
            </div>
          </div>
        </div>
      </footer>

      <a
        href={EXTERNAL_LINKS.whatsapp}
        target="_blank"
        rel="noreferrer"
        aria-label="Abrir WhatsApp"
        className="fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500 text-2xl text-white shadow-soft transition hover:scale-105"
      >
        ⌁
      </a>
    </div>
  )
}

export default App
