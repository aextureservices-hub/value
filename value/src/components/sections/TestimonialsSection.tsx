import { useState, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import './../CSS/TestimonialsSection.css'

const testimonials = [
  {
    name: 'Priya Sharma',
    location: 'Mumbai, India',
    text: 'Velour Hotel is in a class of its own. From the moment I arrived, the staff made me feel like royalty. The suite was immaculate, the rooftop café had the most stunning views, and the food was extraordinary. This is my definition of a perfect escape.',
    rating: 5,
    avatar: 'PS',
  },
  {
    name: 'James Whitfield',
    location: 'London, UK',
    text: 'I travel frequently for business, and Velour sets the gold standard for hospitality. The attention to detail — from the hand-picked toiletries to the pillow menu — shows a level of care that is increasingly rare. I shall return without hesitation.',
    rating: 5,
    avatar: 'JW',
  },
  {
    name: 'Aisha Patel',
    location: 'Dubai, UAE',
    text: 'We celebrated our anniversary here and it was absolutely magical. The team decorated our suite with fresh flowers and personalized touches. The spa treatment was divine. Velour understands what luxury truly means.',
    rating: 5,
    avatar: 'AP',
  },
  {
    name: 'Rahul Mehta',
    location: 'Bangalore, India',
    text: 'The architecture, the ambiance, the service — everything at Velour is curated with intention. I hosted a business dinner at the fine dining restaurant and my guests were thoroughly impressed. A world-class experience.',
    rating: 5,
    avatar: 'RM',
  },
]

export function TestimonialsSection() {
  const [current, setCurrent] = useState(0)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const prev = () => setCurrent(c => (c - 1 + testimonials.length) % testimonials.length)
  const next = () => setCurrent(c => (c + 1) % testimonials.length)

  return (
    <section className="testimonials" id="testimonials" ref={ref}>
      <div className="testimonials__bg" />
      <div className="container">
        <div className="testimonials__header">
          <motion.p className="section-label"
            initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.7 }}>Guest Stories</motion.p>
          <motion.h2 className="serif testimonials__title"
            initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}>
            Words from Our <em>Guests</em>
          </motion.h2>
        </div>

        <motion.div
          className="testimonials__slider"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.25 }}
        >
          {/* Stars */}
          <div className="testimonials__stars">
            {Array.from({ length: testimonials[current].rating }).map((_, i) => (
              <span key={i}>★</span>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.blockquote
              key={current}
              className="serif testimonials__quote"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              "{testimonials[current].text}"
            </motion.blockquote>
          </AnimatePresence>

          <AnimatePresence mode="wait">
            <motion.div
              key={`author-${current}`}
              className="testimonials__author"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              <div className="testimonials__avatar">
                {testimonials[current].avatar}
              </div>
              <div>
                <p className="testimonials__name">{testimonials[current].name}</p>
                <p className="testimonials__location">{testimonials[current].location}</p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="testimonials__controls">
            <button onClick={prev} className="testimonials__btn" aria-label="Previous">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M19 12H5M12 5l-7 7 7 7"/>
              </svg>
            </button>
            <div className="testimonials__dots">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  className={`testimonials__dot ${i === current ? 'active' : ''}`}
                  onClick={() => setCurrent(i)}
                  aria-label={`Testimonial ${i + 1}`}
                />
              ))}
            </div>
            <button onClick={next} className="testimonials__btn" aria-label="Next">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}