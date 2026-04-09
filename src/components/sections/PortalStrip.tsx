import { CONTACT } from '../../content/siteContent'
import { trackCTAEvent } from '../../lib/analytics'

export function PortalStrip() {
  return (
    <section
      aria-label="Portal de autogestión para deudores"
      className="border-t border-black/5 bg-epb-warm"
    >
      <div className="mx-auto max-w-7xl px-5 py-10 lg:px-8 lg:py-12">
        <div className="flex flex-col items-start gap-5 rounded-card border border-epb-line bg-white p-6 shadow-sm md:flex-row md:items-center md:justify-between md:p-7">
          <div className="max-w-xl">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-epb-brand">
              Portal de autogestión
            </p>
            <h2 className="mt-2 text-xl font-semibold text-epb-ink sm:text-2xl">
              ¿Tenés una deuda para gestionar?
            </h2>
            <p className="mt-2 text-sm leading-6 text-epb-slate">
              Ingresá al portal para consultar tu saldo, obtener información de pago y gestionar tu cuenta en línea.
            </p>
          </div>
          <a
            href={CONTACT.selfService}
            target="_blank"
            rel="noreferrer"
            aria-label="Ingresar al portal de autogestión (se abre en una pestaña nueva)"
            onClick={() => trackCTAEvent({ name: 'portal_self_service_click', section: 'portal_strip', label: 'self_service' })}
            className="inline-flex min-h-[48px] items-center gap-2 rounded-full bg-epb-ink px-6 py-3 text-sm font-semibold text-white transition hover:bg-epb-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-epb-brand focus-visible:ring-offset-2"
          >
            Ingresar al portal
            <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </section>
  )
}
