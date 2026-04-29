import type { HTMLAttributes } from 'react'

export default function Badge({ className = '', ...props }: HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      {...props}
      className={[
        'inline-flex items-center gap-1.5 rounded-full border border-brandNavy/8 bg-brandNavy/[0.04] px-3 py-1 text-xs font-medium text-textSecondary',
        className,
      ].join(' ')}
    />
  )
}
