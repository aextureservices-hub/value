import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import './../CSS/HeroSection.css'


const slides = [
  {
    img: 'https://lh3.googleusercontent.com/gps-cs-s/APNQkAEya_eBOhMX2fDBnUtsBob6aCGUXmgqRZcrKeWVTgQEv-E_VG8UwF1FTp0pNLWk3yedNF7mhbQ9opUltzzDI2FQBPd3clxIuKJy_9K7a62CPLxKmCR8ydsTNanGLBLKeLfRZbU=s1360-w1360-h1020-rw',
    label: 'Hotel Exterior',
  },
  {
    img: 'https://lh3.googleusercontent.com/gps-cs-s/APNQkAGYvfrhH7w1f-hyA6NoTMDKAIPcvIXp30qsCRxpV_IxrgmHyXeeUJg9HvfSJNTaicxFTrddpyJllVhIohCGHYSzKfuUZMyosBuga3zsNhISw9EegesYXIGQA-GRPReahpu6_O5kBg=s1360-w1360-h1020-rw',
    label: 'Luxury Suite',
  },
  {
    img: 'value/public/room3.jpeg',
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