import { Link } from 'react-router-dom'
import './Footer.css'

const socials = [
  { label: 'IG', href: '#', full: 'Instagram' },
  { label: 'FB', href: '#', full: 'Facebook' },
  { label: 'TW', href: '#', full: 'Twitter' },
  { label: 'LI', href: '#', full: 'LinkedIn' },
]

const navLinks = [['Home', '/'], ['About Us', '/about'], ['Gallery', '/gallery'], ['Contact', '/contact']]
const rooms    = ['Deluxe Room', 'Premium Room', 'Suite Room', 'Presidential Suite']
const ticker   = ['THE VALUE HOTEL', 'LUXURY & SUITES', 'BHILAI · INDIA', 'BOOK YOUR STAY', 'CRAFTED IN GOLD']

export function Footer() {
  return (
    <footer className="footer">

      {/* ── Marquee ticker ── */}
      <div className="footer__ticker" aria-hidden="true">
        <div className="footer__ticker-track">
          {[...ticker, ...ticker].map((t, i) => (
            <span key={i} className="footer__ticker-item">
              {t} <span className="footer__ticker-dot">◆</span>
            </span>
          ))}
        </div>
      </div>

      {/* ── Hero text band ── */}
      <div className="footer__hero">
        <p className="footer__hero-eyebrow">Est. since forever elegant</p>
        <h2 className="footer__hero-headline">
          <span>The</span>
          <span className="footer__hero-gold">Value</span>
        </h2>
        <p className="footer__hero-sub">Luxury Hotel & Suites · Bhilai</p>
      </div>

      {/* ── Main grid ── */}
      <div className="footer__main">
        <div className="container footer__grid">

          {/* Desc + Socials */}
          <div className="footer__brand">
            <p className="footer__desc">
              An oasis of calm in the city's heartbeat. Where every night becomes a memory etched in gold.
            </p>
            <div className="footer__socials">
              {socials.map(s => (
                <a key={s.label} href={s.href} className="footer__social" aria-label={s.full}>
                  <span>{s.label}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Navigate */}
          <div className="footer__col">
            <h4 className="footer__col-title">Navigate</h4>
            <ul>
              {navLinks.map(([label, to]) => (
                <li key={to}>
                  <Link to={to as string}>
                    <span className="footer__link-arrow">→</span>{label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Rooms */}
          <div className="footer__col">
            <h4 className="footer__col-title">Rooms</h4>
            <ul>
              {rooms.map(r => (
                <li key={r}>
                  <Link to="/contact">
                    <span className="footer__link-arrow">→</span>{r}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="footer__col footer__col--contact">
            <h4 className="footer__col-title">Find Us</h4>
            <div className="footer__contact-card">
              <div className="footer__contact-row">
                <span className="footer__contact-label">ADDR</span>
                <span>12, Luxury Boulevard,<br />Nehru Nagar, Bhilai</span>
              </div>
              <div className="footer__contact-divider" />
              <div className="footer__contact-row">
                <span className="footer__contact-label">TEL</span>
                <a href="tel:+919876543210">+91 98765 43210</a>
              </div>
              <div className="footer__contact-divider" />
              <Link to="/contact" className="footer__contact-cta">
                Book a Stay <span>↗</span>
              </Link>
            </div>
          </div>

        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <p>© {new Date().getFullYear()} The Value Hotel & Suites</p>
          <div className="footer__bottom-dot" />
          <p>Crafted with <span className="footer__bottom-diamond">◆</span> for the discerning traveller</p>
        </div>
      </div>

    </footer>
  )
}