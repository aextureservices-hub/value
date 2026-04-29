import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useInView } from 'framer-motion'
import './../CSS/Aboutpage.css'

const values = [
  { icon: '✦', title: 'Excellence', desc: 'Every detail, no matter how small, is an opportunity to exceed expectations.' },
  { icon: '✦', title: 'Authenticity', desc: 'We create genuine connections — with our guests, our city, and our heritage.' },
  { icon: '✦', title: 'Discretion', desc: 'Privacy and personalization are the cornerstones of our service philosophy.' },
  { icon: '✦', title: 'Timelessness', desc: 'Inspired by classic luxury, designed for the modern connoisseur.' },
]

const stats = [
  { num: '15+', label: 'Years of Excellence' },
  { num: '48', label: 'Luxury Suites' },
  { num: '4.9★', label: 'Guest Rating' },
  { num: '12K+', label: 'Happy Guests' },
]

function FadeIn({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  return (
    <motion.div ref={ref} className={className}
      initial={{ opacity: 0, y: 35 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}>
      {children}
    </motion.div>
  )
}

export function AboutPage() {
  return (
    <motion.div className="page" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>

      {/* Hero */}
      <section className="about-hero">
        <img src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1800&q=80&auto=format&fit=crop" alt="Velour Hotel" loading="eager" />
        <div className="about-hero__overlay" />
        <div className="about-hero__content">
          <motion.p className="section-label" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>About Us</motion.p>
          <motion.h1 className="serif about-hero__title" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.9 }}>
            A Legacy Written<br /><em>in Gold</em>
          </motion.h1>
        </div>
      </section>

      {/* Story */}
      <section className="about-story">
        <div className="container about-story__inner">
          <FadeIn className="about-story__text">
            <p className="section-label">Our Story</p>
            <span className="gold-line" style={{ margin: '1rem 0 2rem' }} />
            <h2 className="serif about-story__heading">Where Every Corner<br /><em>Tells a Story</em></h2>
            <p>
              Founded in 2008 by visionary hotelier Vikram Mehta, Velour was born from a singular belief:
              that true luxury is not about opulence alone — it is about the <em>feeling</em> of being
              perfectly understood. Set against the vibrant heartbeat of the city, our property was
              designed to feel like an intimate sanctuary, a refuge from the extraordinary pace of modern life.
            </p>
            <p>
              Over fifteen years, Velour has evolved into one of the region's most celebrated destinations —
              earning recognition from Condé Nast, Tatler, and the Forbes Travel Guide. Yet we remain
              steadfast in our founding philosophy: every guest is family.
            </p>
            <p>
              From the hand-woven textiles in our suites to the locally sourced ingredients gracing
              our restaurant tables, we celebrate the art of living beautifully.
            </p>
          </FadeIn>
          <FadeIn delay={0.2} className="about-story__image zoom-wrap">
            <img src="https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?w=900&q=80&auto=format&fit=crop" alt="Hotel story" loading="lazy" />
          </FadeIn>
        </div>
      </section>

      {/* Stats */}
      <section className="about-stats">
        <div className="container about-stats__grid">
          {stats.map((s, i) => (
            <FadeIn key={s.label} delay={i * 0.1} className="about-stat">
              <p className="serif about-stat__num">{s.num}</p>
              <p className="about-stat__label">{s.label}</p>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="about-mv">
        <div className="container about-mv__grid">
          <FadeIn className="about-mv__card">
            <span className="about-mv__icon">◈</span>
            <h3 className="serif">Our Mission</h3>
            <p>To curate experiences that transcend the ordinary — creating moments of genuine warmth, artful design, and effortless luxury that resonate long after departure.</p>
          </FadeIn>
          <FadeIn delay={0.15} className="about-mv__card about-mv__card--gold">
            <span className="about-mv__icon">◈</span>
            <h3 className="serif">Our Vision</h3>
            <p>To be recognised as India's most beloved luxury destination, where heritage meets modernity, and every guest feels the rare privilege of being truly seen.</p>
          </FadeIn>
        </div>
      </section>

      {/* Values */}
      <section className="about-values">
        <div className="container">
          <FadeIn className="about-values__header">
            <p className="section-label">Our Philosophy</p>
            <h2 className="serif about-values__title">Why Choose <em>Velour</em></h2>
          </FadeIn>
          <div className="about-values__grid">
            {values.map((v, i) => (
              <FadeIn key={v.title} delay={i * 0.12} className="about-value-card">
                <span className="about-value-card__icon">{v.icon}</span>
                <h3 className="serif about-value-card__title">{v.title}</h3>
                <p className="about-value-card__desc">{v.desc}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Second image feature */}
      <section className="about-feature">
        <div className="container about-feature__inner">
          <FadeIn className="about-feature__image zoom-wrap">
            <img src="https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=900&q=80&auto=format&fit=crop" alt="Luxury suite" loading="lazy" />
          </FadeIn>
          <FadeIn delay={0.2} className="about-feature__text">
            <p className="section-label">The Experience</p>
            <span className="gold-line" style={{ margin: '1rem 0 2rem' }} />
            <h2 className="serif" style={{ fontSize: 'clamp(1.8rem,3vw,2.6rem)', fontWeight: 300, color: '#f5f0eb', marginBottom: '1.5rem', lineHeight: 1.25 }}>
              Meticulously Designed<br /><em>for You</em>
            </h2>
            <p style={{ fontSize: '0.88rem', lineHeight: 1.9, color: '#c8c0b5', fontWeight: 300, marginBottom: '1rem' }}>
              Our suites are not merely rooms — they are environments carefully orchestrated to soothe, inspire, and delight. Each space is a dialogue between art, architecture, and the senses.
            </p>
            <p style={{ fontSize: '0.88rem', lineHeight: 1.9, color: '#c8c0b5', fontWeight: 300, marginBottom: '2.5rem' }}>
              Premium linens, bespoke furnishings, curated artwork, and a pillow menu that ensures your most restful night — these are but a few of the details we obsess over so you need not.
            </p>
            <Link to="/contact" className="btn-gold"><span>Book a Suite</span></Link>
          </FadeIn>
        </div>
      </section>

    </motion.div>
  )
}