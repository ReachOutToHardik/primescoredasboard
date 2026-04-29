import { animate } from 'framer-motion'
import { useEffect, useMemo, useState } from 'react'

function polarToCartesian(cx: number, cy: number, r: number, angle: number) {
  const rad = ((angle - 90) * Math.PI) / 180
  return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) }
}

function arcPath(cx: number, cy: number, r: number, startAngle: number, endAngle: number) {
  const start = polarToCartesian(cx, cy, r, endAngle)
  const end = polarToCartesian(cx, cy, r, startAngle)
  const largeArcFlag = endAngle - startAngle <= 180 ? 0 : 1
  return `M ${start.x} ${start.y} A ${r} ${r} 0 ${largeArcFlag} 0 ${end.x} ${end.y}`
}

export default function CreditScoreGauge({
  from = 480,
  to = 780,
  label = 'Credit Score',
}: {
  from?: number
  to?: number
  label?: string
}) {
  const [value, setValue] = useState(from)

  useEffect(() => {
    const controls = animate(from, to, {
      duration: 1.8,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setValue(Math.round(v)),
    })
    return () => controls.stop()
  }, [from, to])

  const min = 300
  const max = 900
  const percent = Math.max(0, Math.min(1, (value - min) / (max - min)))

  const startAngle = 210
  const endAngle = -30
  const sweep = startAngle - endAngle
  const angle = startAngle - percent * sweep

  const r = 110
  const cx = 140
  const cy = 130

  const bgArc = useMemo(() => arcPath(cx, cy, r, endAngle, startAngle), [])
  const fgArc = useMemo(() => arcPath(cx, cy, r, angle, startAngle), [angle])
  const tip = polarToCartesian(cx, cy, r, angle)

  const scoreLabel = value >= 750 ? 'Excellent' : value >= 650 ? 'Good' : 'Building'
  const scoreColor = value >= 750 ? '#63A831' : value >= 650 ? '#FFB81C' : '#E41E26'

  return (
    <div className="overflow-hidden rounded-2xl border border-brandNavy/8 bg-white p-6 shadow-card">
      <div className="flex flex-col items-center gap-4 sm:flex-row sm:items-start sm:gap-8">
        {/* Gauge visual */}
        <div className="relative h-[180px] w-[280px] shrink-0">
          <svg viewBox="0 0 280 170" className="h-full w-full">
            <defs>
              <linearGradient id="gaugeGrad" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#E41E26" stopOpacity="0.7" />
                <stop offset="50%" stopColor="#FFB81C" stopOpacity="0.85" />
                <stop offset="100%" stopColor="#63A831" stopOpacity="0.9" />
              </linearGradient>
            </defs>

            {/* Track */}
            <path d={bgArc} fill="none" stroke="rgba(15,23,41,0.08)" strokeWidth="12" strokeLinecap="round" />
            {/* Fill */}
            <path d={fgArc} fill="none" stroke="url(#gaugeGrad)" strokeWidth="12" strokeLinecap="round" />
            {/* Tip dot */}
            <circle cx={tip.x} cy={tip.y} r="7" fill="white" stroke={scoreColor} strokeWidth="3" />
          </svg>

          {/* Score in center */}
          <div className="absolute inset-x-0 bottom-4 flex flex-col items-center">
            <div className="font-display text-4xl font-black tracking-tight text-brandNavy">
              {value}
            </div>
            <div className="mt-0.5 text-xs text-textSecondary">out of 900</div>
          </div>
        </div>

        {/* Info */}
        <div className="flex-1 text-center sm:text-left">
          <div className="text-xs font-medium uppercase tracking-wider text-textSecondary">{label}</div>
          <div className="mt-3 inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold"
            style={{ backgroundColor: `${scoreColor}15`, color: scoreColor }}>
            <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: scoreColor }} />
            {scoreLabel}
          </div>
          <p className="mt-3 text-sm leading-relaxed text-textSecondary">
            Simulated recovery path from report upload to dispute resolution.
          </p>
          <div className="mt-4 flex items-center gap-4 text-xs text-textSecondary">
            <span>300</span>
            <div className="h-1 flex-1 rounded-full bg-gradient-to-r from-brandRed/30 via-brandYellow/30 to-brandGreen/30" />
            <span>900</span>
          </div>
        </div>
      </div>
    </div>
  )
}
