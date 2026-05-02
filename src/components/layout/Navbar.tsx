import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useEffect, useMemo, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'

const linkBase =
  'relative text-[13px] font-medium tracking-wide transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-brandRed/50'

function NavItem({ to, label, onClick }: { to: string; label: string; onClick?: () => void }) {
  return (
    <NavLink
      to={to}
      onClick={onClick}
      className={({ isActive }) =>
        [
          linkBase,
          isActive
            ? 'text-brandNavy after:absolute after:-bottom-1 after:left-0 after:right-0 after:h-[2px] after:rounded-full after:bg-brandRed'
            : 'text-textSecondary hover:text-brandNavy',
        ].join(' ')
      }
    >
      {label}
    </NavLink>
  )
}

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  const links = useMemo(
    () => [
      { to: '/', label: 'Home' },
      { to: '/services', label: 'Services' },
      { to: '/how-it-works', label: 'How It Works' },
      { to: '/pricing', label: 'Pricing' },
      { to: '/about', label: 'About' },
      { to: '/contact', label: 'Contact' },
    ],
    [],
  )

  useEffect(() => {
    setMobileOpen(false)
  }, [location.pathname])

  useEffect(() => {
    const handler = () => setIsScrolled(window.scrollY > 12)
    handler()
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <header className="sticky top-0 z-50">
      <div
        className={[
          'border-b transition-all duration-300',
          isScrolled
            ? 'border-brandNavy/8 bg-white/85 backdrop-blur-xl'
            : 'border-transparent bg-transparent',
        ].join(' ')}
      >
        <div className="mx-auto flex max-w-[1440px] items-center justify-between px-4 py-3 sm:px-6 lg:px-12">
          <NavLink to="/" className="group flex items-center">
            <img src="/Logo-primescore.png" alt="Primescore" className="h-[42px] w-auto" />
          </NavLink>

          <nav className="hidden items-center gap-8 md:flex">
            {links.map((l) => (
              <NavItem key={l.to} to={l.to} label={l.label} />
            ))}
            <NavLink
              to="/dashboard"
              className="rounded-lg border border-brandNavy/15 bg-white/70 px-4 py-2 text-[13px] font-semibold text-brandNavy transition-all duration-200 hover:border-brandNavy/30 hover:bg-white"
            >
              Dashboard
            </NavLink>
          </nav>

          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            className="inline-flex items-center justify-center rounded-lg border border-brandNavy/8 bg-white/80 p-2 text-brandNavy backdrop-blur-md md:hidden"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        <AnimatePresence>
          {mobileOpen ? (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.26, ease: [0.22, 1, 0.36, 1] }}
              className="md:hidden"
            >
              <div className="mx-auto max-w-[1440px] px-4 pb-4 sm:px-6 lg:px-12">
                <div className="overflow-hidden rounded-xl border border-brandNavy/8 bg-white shadow-elevated">
                  <div className="grid gap-1 p-3">
                    {links.map((l) => (
                      <NavLink
                        key={l.to}
                        to={l.to}
                        onClick={() => setMobileOpen(false)}
                        className={({ isActive }) =>
                          [
                            'rounded-lg px-4 py-2.5 text-sm font-medium transition-colors',
                            isActive
                              ? 'bg-brandRed/10 text-brandRed font-semibold'
                              : 'text-textSecondary hover:bg-brandNavy/[0.04] hover:text-brandNavy',
                          ].join(' ')
                        }
                      >
                        {l.label}
                      </NavLink>
                    ))}
                    <NavLink
                      to="/dashboard"
                      onClick={() => setMobileOpen(false)}
                      className="mt-1 rounded-lg bg-brandRed px-4 py-2.5 text-center text-sm font-semibold text-white"
                    >
                      Dashboard
                    </NavLink>
                  </div>
                </div>
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>
    </header>
  )
}
