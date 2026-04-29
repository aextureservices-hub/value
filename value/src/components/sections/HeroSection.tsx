import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import './HeroSection.css'

const slides = [
  {
    img: 'src/assets/room2.jpeg',
    label: 'Hotel Exterior',
  },
  {
    img: 'src/assets/room6.jpeg',
    label: 'Luxury Suite',
  },
  {
    img: 'src/assets/room3.jpeg',
    label: 'Rooftop Experience',
  },
]

export function HeroSection() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setCurrent(c => (c + 1) % slides.length), 5500)
    return () => clearInterval(t)
  }, [])

  return (
    <section className="hero" id="home">
      {/* Slides */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          className="hero__slide"
          initial={{ opacity: 0, scale: 1.06 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <img src={slides[current].img} alt={slides[current].label} loading="eager" />
        </motion.div>
      </AnimatePresence>

      {/* Overlay */}
      <div className="hero__overlay" />

      {/* Content */}
      <div className="hero__content">
        <motion.p
          className="hero__eyebrow section-label"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Welcome to The Value
        </motion.p>

        <motion.h1
          className="hero__title serif"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65, duration: 0.9 }}
        >
          Your Second<br />
          <em>Home</em>
        </motion.h1>

        <motion.p
          className="hero__sub"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
        >
          Take time to relax. Experience luxury redefined.
        </motion.p>

        <motion.div
          className="hero__actions"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.15, duration: 0.8 }}
        >
          <Link to="/contact" className="btn-gold-fill">
            <span>Book Now</span>
          </Link>
          <Link to="/about" className="btn-gold">
            <span>Discover More</span>
          </Link>
        </motion.div>
      </div>

      {/* Slide indicators */}
      <div className="hero__dots">
        {slides.map((_, i) => (
          <button
            key={i}
            className={`hero__dot ${i === current ? 'active' : ''}`}
            onClick={() => setCurrent(i)}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Scroll cue */}
      <motion.div
        className="hero__scroll"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <div className="hero__scroll-line" />
        <span>Scroll</span>
      </motion.div>
    </section>
  )
}