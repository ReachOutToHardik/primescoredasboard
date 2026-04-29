import { AnimatePresence, motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { LayoutDashboard, ShieldCheck, TrendingUp } from 'lucide-react'
import { useEffect, useState, MouseEvent } from 'react'
import AnimatedCounter from './AnimatedCounter'

const states = [
  {
    id: 'scanning',
    score: 550,
    status: 'Detecting errors...',
    statusColor: 'text-brandOrange',
    items: [
      { t: 'HDFC Credit Card', s: 'Flagged: Late Tag', c: 'text-brandOrange' },
      { t: 'SBI Personal Loan', s: 'Flagged: Duplicate', c: 'text-brandRed' },
      { t: 'ICICI Auto Loan', s: 'Clear', c: 'text-brandGreen' },
    ]
  },
  {
    id: 'disputing',
    score: 550,
    status: 'In progress',
    statusColor: 'text-brandYellow',
    items: [
      { t: 'HDFC Credit Card', s: 'Filed (Ref: 91X2)', c: 'text-brandYellow' },
      { t: 'SBI Personal Loan', s: 'Filed (Ref: 44L1)', c: 'text-brandYellow' },
      { t: 'ICICI Auto Loan', s: 'Clear', c: 'text-brandGreen' },
    ]
  },
  {
    id: 'recovered',
    score: 720,
    status: 'Resolved',
    statusColor: 'text-brandGreen',
    items: [
      { t: 'HDFC Credit Card', s: 'Removed', c: 'text-brandGreen' },
      { t: 'SBI Personal Loan', s: 'Merged', c: 'text-brandGreen' },
      { t: 'ICICI Auto Loan', s: 'Clear', c: 'text-brandGreen' },
    ]
  }
]

export default function DashboardPreview3D() {
  const [idx, setIdx] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setIdx((prev) => (prev + 1) % states.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [])

  const current = states[idx]

  // Mouse Parallax Effect
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const springConfig = { damping: 25, stiffness: 150 }
  const springX = useSpring(mouseX, springConfig)
  const springY = useSpring(mouseY, springConfig)

  const rotateX = useTransform(springY, [-0.5, 0.5], [10, -10])
  const rotateY = useTransform(springX, [-0.5, 0.5], [-10, 10])

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const xPct = x / rect.width - 0.5
    const yPct = y / rect.height - 0.5
    mouseX.set(xPct)
    mouseY.set(yPct)
  }

  const handleMouseLeave = () => {
    mouseX.set(0)
    mouseY.set(0)
  }

  return (
    <div 
      className="relative mx-auto w-full max-w-[480px] perspective-[2000px] p-8"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        style={{ 
          rotateX, 
          rotateY,
          transformStyle: 'preserve-3d'
        }}
        className="relative rounded-[2rem] border border-brandNavy/10 bg-white p-6 shadow-elevated transition-shadow hover:shadow-2xl hover:shadow-brandNavy/10"
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-brandNavy/10 pb-5">
          <div className="flex items-center gap-3">
            <div className="grid h-10 w-10 place-items-center rounded-xl bg-brandNavy text-white">
              <LayoutDashboard className="h-5 w-5" />
            </div>
            <div>
              <div className="font-display font-bold text-brandNavy">Primescore Dashboard</div>
              <div className="text-xs text-textSecondary">Live Case Tracking</div>
            </div>
          </div>
          <div className="relative flex h-3 w-3 items-center justify-center">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brandGreen opacity-75"></span>
            <span className="relative inline-flex h-2 w-2 rounded-full bg-brandGreen"></span>
          </div>
        </div>

        {/* Content */}
        <div className="mt-6 grid grid-cols-[1fr_1.5fr] gap-5" style={{ transform: 'translateZ(20px)' }}>
          {/* Score Card */}
          <div className="flex flex-col items-center justify-center rounded-2xl border border-brandNavy/5 bg-night p-4 text-center">
            <div className="mb-2 text-xs font-semibold uppercase tracking-wider text-textSecondary">CIBIL Score</div>
            <div className="font-display text-5xl font-black text-brandNavy">
              <AnimatedCounter value={current.score} />
            </div>
            <div className={['mt-3 rounded-full border border-brandNavy/5 bg-white px-3 py-1 text-[11px] font-bold uppercase tracking-wide', current.statusColor].join(' ')}>
              {current.status}
            </div>
          </div>

          {/* Active Items */}
          <div className="flex flex-col justify-center gap-2.5">
            <AnimatePresence mode="popLayout">
              {current.items.map((item, i) => (
                <motion.div
                  key={`${idx}-${i}`}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center justify-between rounded-xl border border-brandNavy/5 bg-white p-3 shadow-sm"
                >
                  <div className="text-xs font-medium text-brandNavy">{item.t}</div>
                  <div className={['text-[11px] font-bold', item.c].join(' ')}>{item.s}</div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>

        {/* Bottom Banner */}
        <div className="mt-6 flex items-center gap-3 rounded-xl bg-brandNavy/5 p-4" style={{ transform: 'translateZ(10px)' }}>
          <ShieldCheck className="h-5 w-5 text-brandNavy" />
          <div className="text-sm font-medium text-brandNavy">
            <AnimatePresence mode="wait">
              <motion.span
                key={idx}
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                className="inline-block"
              >
                {idx === 0 ? "Analyzing credit profile..." : idx === 1 ? "Bureau disputes filed successfully." : "Profile updated. Score increased!"}
              </motion.span>
            </AnimatePresence>
          </div>
        </div>

        {/* Floating decoration to enhance 3D feel */}
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -right-6 -top-6 grid h-14 w-14 place-items-center rounded-2xl bg-brandRed text-white shadow-glowRed"
          style={{ transform: 'translateZ(60px)' }}
        >
          <TrendingUp className="h-7 w-7" />
        </motion.div>
      </motion.div>
    </div>
  )
}
