import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useInView } from 'framer-motion'
import "./../CSS/AboutSection.css"

export function AboutSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="about-preview" id="about" ref={ref}>
      <div className="container about-preview__inner">
        {/* Left: image */}
        <motion.div
          className="about-preview__image zoom-wrap"
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <img
            src="https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?w=900&q=80&auto=format&fit=crop"
            alt="value Hotel Lobby"
            loading="lazy"
          />
          <div className="about-preview__badge">
            <span className="serif">Est.</span>
            <strong className="serif">2023</strong>
          </div>
        </motion.div>

        {/* Right: text */}
        <motion.div
          className="about-preview__text"
          initial={{ opacity: 0, x: 50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="section-label">Our Story</p>
          <span className="gold-line" style={{ margin: '1rem 0 2rem' }} />
          <h2 className="serif about-preview__heading">
            A Legacy of <br /><em>Unmatched Luxury</em>
          </h2>
          <p className="about-preview__body">
            Nestled in the heart of the city, The Value Hotel has stood as a beacon of refined
            elegance for over Three years. Every corner is curated for those who believe that
            travel is not merely a journey — it is a <em>feeling</em>.
          </p>
          <p className="about-preview__body">
            From our handcrafted interiors to our attentive concierge team, we craft moments
            that linger long after you've left.
          </p>
          <Link to="/about" className="btn-gold" style={{ marginTop: '2.5rem' }}>
            <span>Our Story</span>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}