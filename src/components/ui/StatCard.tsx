interface StatCardProps {
  value: string
  label: string
  variant?: 'light' | 'dark' | 'outline'
}

export function StatCard({ value, label, variant = 'light' }: StatCardProps) {
  const styles = {
    light: 'bg-epb-soft text-epb-ink',
    dark: 'border border-white/18 bg-white/[0.04] text-white',
    outline: 'border border-epb-blushLight bg-white text-epb-ink',
  }

  const labelStyles = {
    light: 'text-epb-brand',
    dark: 'text-white/68',
    outline: 'text-epb-rose',
  }

  return (
    <div className={`rounded-2xl px-4 py-4 text-center ${styles[variant]}`}>
      <p className={`text-[11px] font-semibold uppercase tracking-[0.18em] ${labelStyles[variant]}`}>{label}</p>
      <p className="mt-1 text-2xl font-semibold tracking-tight">{value}</p>
    </div>
  )
}
