import { CONTACT } from '../../content/siteContent'

const footerLinks = [
  { href: '#servicios', label: 'Servicios' },
  { href: '#herramientas', label: 'Herramientas' },
  { href: '#nosotros', label: 'Nosotros' },
  { href: '#novedades', label: 'Novedades' },
  { href: '#contacto', label: 'Contacto' },
]

export function Footer() {
  return (
    <footer className="border-t border-black/5 bg-epb-ink text-white">
      <div className="mx-auto max-w-7xl px-5 py-12 lg:px-8 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
          {/* Brand */}
          <div>
            <img src="/brand/logo.png" alt="EPB — Estudio Palmero de Belizán & Asociados" className="h-10 w-auto brightness-0 invert" />
            <p className="mt-5 max-w-sm text-sm leading-6 text-white/60">
              Recupero de activos y gestión de mora con más de 25 años de trayectoria institucional al servicio de bancos, empresas y PyMES.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-epb-warmAccent">Secciones</p>
            <nav className="mt-4 flex flex-col gap-2.5" aria-label="Pie de página">
              {footerLinks.map((link) => (
                <a key={link.href} href={link.href} className="text-sm text-white/60 transition hover:text-white">
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact info */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-epb-warmAccent">Contacto</p>
            <div className="mt-4 space-y-2.5 text-sm text-white/60">
              <p>{CONTACT.address}</p>
              <p>{CONTACT.city}</p>
              <a href={CONTACT.phoneHref} className="block transition hover:text-white">{CONTACT.phone}</a>
              <p>{CONTACT.hotline}</p>
              <a href={CONTACT.email} className="block transition hover:text-white">info@epb.com.ar</a>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-8 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} EPB — Estudio Palmero de Belizán & Asociados. Todos los derechos reservados.</p>
          <p>Presentación institucional</p>
        </div>
      </div>
    </footer>
  )
}
