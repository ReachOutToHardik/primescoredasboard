import { ChevronDown } from 'lucide-react'
import { useState } from 'react'
import type { FAQ } from '../../data/primescore'

export default function FAQAccordion({ items }: { items: FAQ[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <div className="grid gap-3">
      {items.map((item, idx) => {
        const open = openIndex === idx
        return (
          <div
            key={item.q}
            className={[
              'overflow-hidden rounded-2xl border transition-colors duration-200',
              open
                ? 'border-brandRed/25 bg-white shadow-card'
                : 'border-brandNavy/8 bg-white/60 hover:bg-white/80',
            ].join(' ')}
          >
            <button
              type="button"
              onClick={() => setOpenIndex(open ? null : idx)}
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
            >
              <div className="flex items-baseline gap-3">
                <span className="font-mono text-xs text-textSecondary/60">
                  {String(idx + 1).padStart(2, '0')}
                </span>
                <span className="font-semibold text-brandNavy">{item.q}</span>
              </div>
              <ChevronDown
                className={[
                  'h-5 w-5 shrink-0 text-textSecondary transition-transform duration-300',
                  open ? 'rotate-180' : 'rotate-0',
                ].join(' ')}
              />
            </button>
            <div
              className={[
                'grid transition-[grid-template-rows] duration-300 ease-out',
                open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]',
              ].join(' ')}
            >
              <div className="overflow-hidden px-6 pb-5 pl-[3.25rem] text-sm leading-relaxed text-textSecondary">
                {item.a}
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
