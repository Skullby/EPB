import { CONTACT } from '../../content/siteContent'
import { trackCTAEvent } from '../../lib/analytics'

const navLinks = [
  { href: '#servicios', label: 'Servicios' },
  { href: '#herramientas', label: 'Herramientas' },
  { href: '#nosotros', label: 'Nosotros' },
  { href: '#novedades', label: 'Novedades' },
  { href: '#contacto', label: 'Contacto' },
]

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-epb-cream/90 backdrop-blur">
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
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="transition hover:text-epb-ink">
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href={CONTACT.whatsapp}
          target="_blank"
          rel="noreferrer"
          className="cta-glow rounded-full bg-epb-ink px-4 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-epb-brand focus-visible:ring-offset-2"
          onClick={() => trackCTAEvent({ name: 'header_contact_click', section: 'header', label: 'contacto' })}
        >
          Contacto
        </a>
      </div>

      <nav
        className="mx-auto flex max-w-7xl gap-2 overflow-x-auto px-5 pb-3 text-xs font-semibold uppercase tracking-[0.14em] text-epb-slate md:hidden lg:px-8"
        aria-label="Secciones rápidas"
      >
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="whitespace-nowrap rounded-full border border-epb-line bg-white px-3 py-2"
          >
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  )
}
