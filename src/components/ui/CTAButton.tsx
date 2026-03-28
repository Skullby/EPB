import type { MouseEvent, ReactNode } from 'react'
import { trackCTAEvent } from '../../lib/analytics'

interface CTAButtonProps {
  href: string
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'ghost'
  eventName: string
  section: string
  label?: string
  external?: boolean
  className?: string
}

const variants = {
  primary:
    'cta-glow rounded-full bg-white px-7 py-4 text-center text-base font-semibold text-epb-rose shadow-soft transition hover:-translate-y-0.5',
  secondary:
    'cta-glow rounded-full border border-white/25 bg-white/10 px-7 py-4 text-center text-base font-semibold text-white transition hover:bg-white/16',
  ghost:
    'rounded-full border border-epb-line px-5 py-3 text-sm font-semibold text-epb-ink transition hover:border-epb-brand hover:text-epb-brand',
}

export function CTAButton({
  href,
  children,
  variant = 'primary',
  eventName,
  section,
  label,
  external,
  className = '',
}: CTAButtonProps) {
  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    trackCTAEvent({
      name: eventName,
      section,
      label: label ?? e.currentTarget.href,
    })
  }

  return (
    <a
      href={href}
      onClick={handleClick}
      className={`${variants[variant]} ${className}`}
      {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}
    >
      {children}
    </a>
  )
}
