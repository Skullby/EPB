import { CONTACT } from '../../content/siteContent'
import { trackCTAEvent } from '../../lib/analytics'

export function ContactSection() {
  return (
    <section id="contacto" aria-label="Contacto" className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-24">
      <div className="grid gap-8 rounded-panel bg-epb-ink p-8 text-white shadow-soft lg:grid-cols-[0.95fr_1.05fr] lg:p-12">
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

        <div className="grid gap-4 self-start">
          <a
            href={CONTACT.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="rounded-card bg-white px-6 py-5 text-epb-ink transition hover:bg-epb-sand"
            onClick={() => trackCTAEvent({ name: 'contact_whatsapp_click', section: 'contact', label: 'contacto_comercial' })}
          >
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-epb-brand">Quiero comunicarme</p>
            <p className="mt-2 text-xl font-semibold">Contacto comercial</p>
          </a>
          <a
            href={CONTACT.selfService}
            target="_blank"
            rel="noreferrer"
            className="rounded-card border border-white/15 bg-white/5 px-6 py-5 transition hover:bg-white/10"
            onClick={() => trackCTAEvent({ name: 'contact_self_service_click', section: 'contact', label: 'portal_autogestion' })}
          >
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-epb-warmAccent">Gestión de cobranzas</p>
            <p className="mt-2 text-xl font-semibold">Portal de autogestión</p>
          </a>
          <a
            href={CONTACT.phoneHref}
            className="rounded-card border border-white/15 bg-white/5 px-6 py-5 transition hover:bg-white/10"
            onClick={() => trackCTAEvent({ name: 'contact_phone_click', section: 'contact', label: CONTACT.phone })}
          >
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-epb-warmAccent">Teléfono</p>
            <p className="mt-2 text-xl font-semibold">{CONTACT.phone}</p>
          </a>
          <a
            href={CONTACT.email}
            className="rounded-card border border-white/15 bg-white/5 px-6 py-5 transition hover:bg-white/10"
            onClick={() => trackCTAEvent({ name: 'contact_email_click', section: 'contact', label: 'info@epb.com.ar' })}
          >
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-epb-warmAccent">Email</p>
            <p className="mt-2 text-xl font-semibold">info@epb.com.ar</p>
          </a>
        </div>
      </div>
    </section>
  )
}
