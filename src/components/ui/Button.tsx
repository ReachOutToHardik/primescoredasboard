import type { ButtonHTMLAttributes } from 'react'

type Variant = 'primary' | 'ghost' | 'surface'

const base =
  'inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition-all duration-200 focus:outline-none focus-visible:ring-2 active:scale-[0.97]'

const variants: Record<Variant, string> = {
  primary:
    'bg-brandRed text-white shadow-glowRed hover:brightness-105 hover:-translate-y-px focus-visible:ring-brandRed/40',
  ghost:
    'border border-brandNavy/15 bg-transparent text-brandNavy hover:border-brandNavy/30 hover:bg-brandNavy/[0.04] focus-visible:ring-brandNavy/20',
  surface:
    'border border-brandNavy/10 bg-white/80 text-brandNavy backdrop-blur-sm hover:border-brandNavy/20 hover:bg-white focus-visible:ring-brandNavy/15',
}

export default function Button({
  variant = 'primary',
  className = '',
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & { variant?: Variant }) {
  return <button {...props} className={[base, variants[variant], className].join(' ')} />
}
