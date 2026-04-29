import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import './AmenitiesSection.css'

const amenities = [
  {
    icon: '🌆',
    title: 'Rooftop Café',
    desc: 'Sip artisan cocktails with a 360° skyline view at our exclusive rooftop lounge.',
  },
  {
    icon: '🛎️',
    title: '24/7 Concierge',
    desc: 'Our dedicated team is available around the clock to fulfill your every need.',
  },
  {
    icon: '📶',
    title: 'High-Speed WiFi',
    desc: 'Seamless, ultra-fast connectivity throughout every area of the property.',
  },
  {
    icon: '🛋️',
    title: 'Luxury Interiors',
    desc: 'Every suite curated by award-winning designers with bespoke art and furnishings.',
  },
  {
    icon: '🍽️',
    title: 'Fine Dining',
    desc: 'Michelin-trained chefs craft seasonal menus in our signature restaurant.',
  },
  {
    icon: '🧖',
    title: 'Wellness Spa',
    desc: 'Indulge in holistic treatments and therapies at our tranquil in-house spa.',
  },
]

export function AmenitiesSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="amenities" id="amenities" ref={ref}>
      <div className="amenities__bg" />
      <div className="container">
        <div className="amenities__header">
          <motion.p
            className="section-label"
            initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.7 }}
          >Facilities</motion.p>
          <motion.h2
            className="serif amenities__title"
            initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            Beyond <em>Ordinary</em>
          </motion.h2>
          <motion.p
            className="amenities__sub"
            initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Crafted for those who settle for nothing less than perfection.
          </motion.p>
        </div>

        <div className="amenities__grid">
          {amenities.map((a, i) => (
            <motion.div
              key={a.title}
              className="amenity-card"
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 + i * 0.1 }}
            >
              <div className="amenity-card__icon">{a.icon}</div>
              <h3 className="serif amenity-card__title">{a.title}</h3>
              <p className="amenity-card__desc">{a.desc}</p>
              <div className="amenity-card__line" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}