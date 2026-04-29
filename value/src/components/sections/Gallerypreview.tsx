import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useInView } from 'framer-motion'
import './GalleryPreview.css'

const images = [
  { src: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=700&q=80&auto=format&fit=crop', span: 'tall', alt: 'Hotel lobby' },
  { src: 'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=700&q=80&auto=format&fit=crop', span: '', alt: 'Luxury room' },
  { src: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=700&q=80&auto=format&fit=crop', span: '', alt: 'Pool view' },
  { src: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=700&q=80&auto=format&fit=crop', span: 'wide', alt: 'Restaurant' },
  { src: 'https://images.unsplash.com/photo-1540541338287-41700207dee6?w=700&q=80&auto=format&fit=crop', span: '', alt: 'Rooftop' },
]

export function GalleryPreview() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="gallery-preview" id="gallery" ref={ref}>
      <div className="container">
        <div className="gallery-preview__header">
          <motion.p className="section-label"
            initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.7 }}>Gallery</motion.p>
          <motion.h2 className="serif gallery-preview__title"
            initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}>
            Captured <em>Moments</em>
          </motion.h2>
        </div>

        <div className="gallery-preview__grid">
          {images.map((img, i) => (
            <motion.div
              key={i}
              className={`gallery-preview__item zoom-wrap ${img.span}`}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.1 + i * 0.1 }}
            >
              <img src={img.src} alt={img.alt} loading="lazy" />
              <div className="gallery-preview__overlay" />
            </motion.div>
          ))}
        </div>

        <motion.div
          className="gallery-preview__cta"
          initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          <Link to="/gallery" className="btn-gold"><span>View Full Gallery</span></Link>
        </motion.div>
      </div>
    </section>
  )
}