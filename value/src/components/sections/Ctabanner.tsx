import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useInView } from 'framer-motion'
import './../CSS/Ctabanner.css'

export function CTABanner() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="cta-banner" ref={ref}>
      <div className="cta-banner__image-wrap">
        <img
          src="https://images.unsplash.com/photo-1519449556851-5720b33024e7?w=1800&q=80&auto=format&fit=crop"
          alt="Luxury hotel poolside"
          loading="lazy"
        />
      </div>
      <div className="cta-banner__overlay" />
      <div className="cta-banner__content">
        <motion.p
          className="section-label"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >Reserve Your Stay</motion.p>
        <motion.h2
          className="serif cta-banner__title"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.15 }}
        >
          Begin Your <em>Extraordinary</em><br />Journey Today
        </motion.h2>
        <motion.p
          className="cta-banner__sub"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Limited suites available. Book directly for exclusive member benefits.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.45 }}
        >
          <Link to="/contact" className="btn-gold-fill">
            <span>Book Your Stay</span>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}