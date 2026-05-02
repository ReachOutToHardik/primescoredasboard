import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2800)
    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] }
          }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white"
        >
          {/* Main Logo Container */}
          <div className="relative flex flex-col items-center">

            {/* Background Glow Effect */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{
                scale: [0.8, 1.2, 1],
                opacity: [0, 0.3, 0.1]
              }}
              transition={{ duration: 2, ease: "easeOut" }}
              className="absolute h-64 w-64 rounded-full bg-brandRed/20 blur-[60px]"
            />

            {/* Logo Animation */}
            <motion.div
              initial={{ scale: 0.5, opacity: 0, y: 20 }}
              animate={{
                scale: 1,
                opacity: 1,
                y: 0,
                rotateX: [0, -10, 10, 0],
                rotateY: [0, 15, -15, 0]
              }}
              transition={{
                duration: 1.2,
                ease: [0.22, 1, 0.36, 1],
                rotateX: { duration: 3, repeat: Infinity, ease: "linear" },
                rotateY: { duration: 4, repeat: Infinity, ease: "linear" }
              }}
              className="relative perspective-1000"
            >
              <img
                src="/Logo-primescore.png"
                alt="Primescore"
                className="h-20 w-auto object-contain relative z-10"
              />

              {/* Animated Shine/Scan Line */}
              <motion.div
                initial={{ x: '-100%', skewX: -25 }}
                animate={{ x: '200%' }}
                transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 0.5, ease: "easeInOut" }}
                className="absolute inset-0 z-20 bg-gradient-to-r from-transparent via-white/40 to-transparent pointer-events-none"
              />
            </motion.div>

            {/* Progress Bar / Reveal Line */}
            <div className="mt-12 w-48 h-[2px] bg-brandNavy/5 relative overflow-hidden rounded-full">
              <motion.div
                initial={{ x: '-100%' }}
                animate={{ x: '0%' }}
                transition={{ duration: 2, ease: [0.65, 0, 0.35, 1] }}
                className="absolute inset-0 bg-brandRed"
              />
            </div>

            {/* Subtext Reveal */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="mt-6 flex flex-col items-center gap-1"
            >
              <span className="text-[10px] font-bold tracking-[0.4em] text-brandNavy/40 uppercase">
                Credit Recovery Begins Here
              </span>
            </motion.div>
          </div>

          {/* Corner Decorations for "Motion Graphic" feel */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, ease: "circOut" }}
            className="absolute top-12 left-12 h-[1px] w-24 bg-brandNavy/10 origin-left"
          />
          <motion.div
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 0.8, ease: "circOut", delay: 0.2 }}
            className="absolute top-12 left-12 w-[1px] h-24 bg-brandNavy/10 origin-top"
          />

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, ease: "circOut" }}
            className="absolute bottom-12 right-12 h-[1px] w-24 bg-brandNavy/10 origin-right"
          />
          <motion.div
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 0.8, ease: "circOut", delay: 0.2 }}
            className="absolute bottom-12 right-12 w-[1px] h-24 bg-brandNavy/10 origin-bottom"
          />
        </motion.div>
      )}
    </AnimatePresence>
  )
}
