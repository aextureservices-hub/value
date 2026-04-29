import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import './../CSS/Navbar.css'

const links = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Contact', to: '/contact' },
]

interface NavbarProps { scrolled: boolean }

export function Navbar({ scrolled }: NavbarProps) {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  return (
    <>
      <motion.nav
        className={`navbar ${scrolled ? 'navbar--solid' : ''}`}
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="navbar__inner">

          {/* Logo — LEFT */}
          <Link to="/" className="navbar__logo" onClick={() => setOpen(false)}>
            <img
              src="src\assets\logo.jpeg"
              alt="The Value Hotel & Suites"
              className="navbar__logo-img"
            />
          </Link>

          {/* Desktop links — CENTER */}
          <ul className="navbar__links">
            {links.map(l => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className={`navbar__link ${pathname === l.to ? 'navbar__link--active' : ''}`}
                >
                  {l.label}
                  <span className="navbar__link-underline" />
                </Link>
              </li>
            ))}
          </ul>

          {/* RIGHT side: Book Now (desktop) + Burger (mobile) */}
          <div className="navbar__right">
            <Link to="/contact" className="navbar__cta">
              <span>Book Now</span>
            </Link>

            <button
              className={`navbar__burger ${open ? 'open' : ''}`}
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
            >
              <span /><span /><span />
            </button>
          </div>

        </div>
      </motion.nav>

      {/* Mobile drawer — slides from RIGHT */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="mobile-drawer"
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Close button inside drawer */}
            <button
              className="mobile-drawer__close"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
            >
              <span /><span />
            </button>

            <ul>
              {links.map((l, i) => (
                <motion.li
                  key={l.to}
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.08 }}
                >
                  <Link
                    to={l.to}
                    className={pathname === l.to ? 'active' : ''}
                    onClick={() => setOpen(false)}
                  >
                    {l.label}
                  </Link>
                </motion.li>
              ))}
              <motion.li
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.45 }}
              >
                <Link to="/contact" className="mobile-book" onClick={() => setOpen(false)}>
                  Book Your Stay
                </Link>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}