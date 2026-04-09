import { useEffect, useRef, useState } from 'react'
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
  const [open, setOpen] = useState(false)
  const closeBtnRef = useRef<HTMLButtonElement>(null)
  const toggleBtnRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!open) return

    const toggleBtn = toggleBtnRef.current

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('keydown', onKey)

    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    closeBtnRef.current?.focus()

    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = prevOverflow
      toggleBtn?.focus()
    }
  }, [open])

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-epb-cream/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 lg:px-8">
        <a href="#inicio" className="flex items-center gap-3" aria-label="Ir al inicio">
          <img src="/brand/logo.png" alt="EPB — Estudio Palmero de Belizán & Asociados" className="h-12 w-auto" />
        </a>

        <nav className="hidden items-center gap-6 text-sm font-medium text-epb-slate md:flex" aria-label="Principal">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="transition hover:text-epb-ink">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={CONTACT.whatsapp}
            target="_blank"
            rel="noreferrer"
            aria-label="Contactar por WhatsApp (se abre en una pestaña nueva)"
            className="cta-glow hidden rounded-full bg-epb-ink px-4 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-epb-brand focus-visible:ring-offset-2 md:inline-flex"
            onClick={() => trackCTAEvent({ name: 'header_contact_click', section: 'header', label: 'whatsapp' })}
          >
            Contacto
          </a>

          <button
            ref={toggleBtnRef}
            type="button"
            aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={open}
            aria-controls="mobile-drawer"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-epb-line bg-white text-epb-ink transition hover:border-epb-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-epb-brand focus-visible:ring-offset-2 md:hidden"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div
          id="mobile-drawer"
          role="dialog"
          aria-modal="true"
          aria-label="Menú de navegación"
          className="fixed inset-0 z-[60] md:hidden"
        >
          <button
            type="button"
            aria-label="Cerrar menú"
            onClick={() => setOpen(false)}
            className="absolute inset-0 h-full w-full bg-black/50 backdrop-blur-sm"
          />
          <div className="absolute inset-x-0 top-0 flex flex-col gap-2 bg-epb-cream p-5 shadow-soft">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-epb-slate">Menú</span>
              <button
                ref={closeBtnRef}
                type="button"
                aria-label="Cerrar menú"
                onClick={() => setOpen(false)}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-epb-line bg-white text-epb-ink transition hover:border-epb-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-epb-brand focus-visible:ring-offset-2"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>

            <nav aria-label="Principal móvil" className="mt-3 flex flex-col">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="flex min-h-[56px] items-center rounded-card border border-transparent px-4 text-base font-semibold text-epb-ink transition hover:border-epb-line hover:bg-white"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <a
              href={CONTACT.whatsapp}
              target="_blank"
              rel="noreferrer"
              aria-label="Contactar por WhatsApp (se abre en una pestaña nueva)"
              onClick={() => {
                trackCTAEvent({ name: 'header_contact_click', section: 'header_mobile', label: 'whatsapp' })
                setOpen(false)
              }}
              className="mt-3 inline-flex min-h-[56px] items-center justify-center rounded-full bg-epb-ink px-5 text-base font-semibold text-white transition hover:bg-epb-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-epb-brand focus-visible:ring-offset-2"
            >
              Contactar por WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
