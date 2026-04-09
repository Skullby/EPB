import { useState } from 'react'
import { CONTACT } from '../../content/siteContent'
import { trackCTAEvent } from '../../lib/analytics'

interface FormState {
  nombre: string
  empresa: string
  email: string
  mensaje: string
}

const INITIAL: FormState = { nombre: '', empresa: '', email: '', mensaje: '' }

export function ContactSection() {
  const [form, setForm] = useState<FormState>(INITIAL)

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const body = [
      `Nombre: ${form.nombre}`,
      form.empresa ? `Empresa: ${form.empresa}` : null,
      `Email: ${form.email}`,
      `Mensaje: ${form.mensaje}`,
    ]
      .filter(Boolean)
      .join('\n')

    const mailtoUrl =
      `mailto:info@epb.com.ar` +
      `?subject=${encodeURIComponent(`Consulta desde epb.com.ar — ${form.nombre}`)}` +
      `&body=${encodeURIComponent(body)}`

    trackCTAEvent({ name: 'contact_form_submit', section: 'contact', label: 'consulta' })
    window.location.href = mailtoUrl
  }

  const labelClass = 'text-xs font-semibold uppercase tracking-[0.28em] text-epb-warmAccent'
  const inputClass =
    'mt-1 w-full rounded-card border border-white/15 bg-white/5 px-4 py-3 text-white placeholder-white/40 focus:border-epb-brand focus:ring-2 focus:ring-epb-brand/40 focus:outline-none'

  return (
    <section id="contacto" aria-label="Contacto" className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-24">
      <div className="grid gap-8 rounded-panel bg-epb-ink p-8 text-white shadow-soft lg:grid-cols-[0.95fr_1.05fr] lg:p-12">
        {/* Left column */}
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-epb-warmAccent">CONTACTO</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">Hacenos tu consulta</h2>
          <div className="mt-6 space-y-3 text-lg leading-8 text-slate-300">
            <p>{CONTACT.address}</p>
            <p>{CONTACT.city}</p>
            <p>{CONTACT.phone}</p>
            <p>{CONTACT.hotline}</p>
          </div>
          <p className="mt-8 text-sm font-semibold uppercase tracking-[0.3em] text-epb-warmAccent">HORARIO DE ATENCIÓN</p>
          <div className="mt-4 space-y-3 text-base leading-8 text-slate-300">
            <p>Atención Telefónica Lunes a Viernes 07:30 a 20:30hs - Sábados 8 a 12.30hs</p>
            <p>Caja Lunes a Viernes de 9 a 18hs - Sábados 9 a 12hs. / Chatbot 24hs</p>
          </div>
        </div>

        {/* Right column — contact form + sidebar */}
        <div className="flex flex-col gap-6 self-start">
          <form aria-label="Formulario de contacto" onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div>
              <label htmlFor="nombre" className={labelClass}>
                Nombre
              </label>
              <input
                id="nombre"
                name="nombre"
                type="text"
                required
                autoComplete="name"
                placeholder="Tu nombre"
                value={form.nombre}
                onChange={handleChange}
                className={inputClass}
              />
            </div>

            <div>
              <label htmlFor="empresa" className={labelClass}>
                Empresa <span className="normal-case font-normal opacity-60">(opcional)</span>
              </label>
              <input
                id="empresa"
                name="empresa"
                type="text"
                autoComplete="organization"
                placeholder="Tu empresa"
                value={form.empresa}
                onChange={handleChange}
                className={inputClass}
              />
            </div>

            <div>
              <label htmlFor="email" className={labelClass}>
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                autoComplete="email"
                placeholder="tu@empresa.com"
                value={form.email}
                onChange={handleChange}
                className={inputClass}
              />
            </div>

            <div>
              <label htmlFor="mensaje" className={labelClass}>
                Mensaje
              </label>
              <textarea
                id="mensaje"
                name="mensaje"
                required
                rows={4}
                placeholder="Contanos en qué podemos ayudarte"
                value={form.mensaje}
                onChange={handleChange}
                className={inputClass}
              />
            </div>

            <button
              type="submit"
              className="min-h-[48px] rounded-card bg-white px-6 py-4 font-semibold text-epb-ink transition hover:bg-epb-sand focus:outline-none focus-visible:ring-2 focus-visible:ring-epb-brand focus-visible:ring-offset-2 focus-visible:ring-offset-epb-ink"
            >
              Enviar consulta
            </button>
          </form>

          {/* Alt-contact sidebar strip */}
          <div className="flex gap-3">
            <a
              href={CONTACT.whatsapp}
              target="_blank"
              rel="noreferrer"
              aria-label="Contactar por WhatsApp (se abre en una pestaña nueva)"
              className="flex min-h-[44px] flex-1 items-center justify-center rounded-card border border-white/15 bg-white/5 px-4 py-3 text-sm font-semibold transition hover:bg-white/10"
              onClick={() => trackCTAEvent({ name: 'contact_whatsapp_click', section: 'contact', label: 'whatsapp_sidebar' })}
            >
              WhatsApp
            </a>
            <a
              href={CONTACT.email}
              aria-label="Enviar un email"
              className="flex min-h-[44px] flex-1 items-center justify-center rounded-card border border-white/15 bg-white/5 px-4 py-3 text-sm font-semibold transition hover:bg-white/10"
              onClick={() => trackCTAEvent({ name: 'contact_email_click', section: 'contact', label: 'email_sidebar' })}
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
