import { useState, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import './../CSS/Gallerypage.css'

const categories = ['All', 'Rooms', 'Decorations', 'Rooftop Café']

const images = [
  { src: 'value/src/assets/room6.jpeg', cat: 'Rooms', title: 'Deluxe Suite', size: 'tall' },
  { src: 'value/src/assets/room1.jpeg', cat: 'Rooms', title: 'Premium Room', size: '' },
  { src: 'value/src/assets/room3.jpeg', cat: 'Rooms', title: 'Presidential Suite', size: '' },
  { src: 'https://images.unsplash.com/photo-1478146059778-26028b07395a?w=900&q=85&auto=format&fit=crop', cat: 'Decorations', title: 'Birthday Setup', size: 'tall' },
  { src: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=900&q=85&auto=format&fit=crop', cat: 'Decorations', title: 'Floral Arrangement', size: '' },
  { src: 'https://images.unsplash.com/photo-1621303837174-89787a7d4729?w=900&q=85&auto=format&fit=crop', cat: 'Decorations', title: 'Anniversary Decor', size: '' },
  { src: 'https://images.unsplash.com/photo-1537047902294-62a40c20a6ae?w=900&q=85&auto=format&fit=crop', cat: 'Rooftop Café', title: 'Rooftop View', size: 'wide' },
  { src: 'https://images.unsplash.com/photo-1514190051997-0f6f39ca5cde?w=900&q=85&auto=format&fit=crop', cat: 'Rooftop Café', title: 'Evening Cocktails', size: '' },
  { src: 'https://images.unsplash.com/photo-1559329007-40df8a9345d8?w=900&q=85&auto=format&fit=crop', cat: 'Rooftop Café', title: 'Skyline Dining', size: '' },
]

function GalleryItem({ img, index, onClick }: { img: typeof images[0]; index: number; onClick: () => void }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-50px' })
  return (
    <motion.div
      ref={ref}
      className={`gallery-item zoom-wrap ${img.size}`}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: (index % 4) * 0.1 }}
      onClick={onClick}
    >
      <img src={img.src} alt={img.title} loading="lazy" />
      <div className="gallery-item__overlay">
        <p className="serif gallery-item__title">{img.title}</p>
        <span className="gallery-item__cat">{img.cat}</span>
      </div>
    </motion.div>
  )
}

export function GalleryPage() {
  const [activeTab, setActiveTab] = useState('All')
  const [lightbox, setLightbox] = useState<number | null>(null)

  const filtered = activeTab === 'All' ? images : images.filter(img => img.cat === activeTab)

  const closeLightbox = () => setLightbox(null)
  const prevImg = () => setLightbox(i => i !== null ? (i - 1 + filtered.length) % filtered.length : null)
  const nextImg = () => setLightbox(i => i !== null ? (i + 1) % filtered.length : null)

  return (
    <motion.div className="page" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>

      {/* Hero */}
      <section className="gallery-page-hero">
        <img src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1800&q=80&auto=format&fit=crop" alt="Gallery" loading="eager" />
        <div className="gallery-page-hero__overlay" />
        <div className="gallery-page-hero__content">
          <motion.p className="section-label" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>Gallery</motion.p>
          <motion.h1 className="serif gallery-page-hero__title" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.9 }}>
            Moments of <em>Beauty</em>
          </motion.h1>
        </div>
      </section>

      {/* Gallery */}
      <section className="gallery-section">
        <div className="container">
          {/* Tabs */}
          <div className="gallery-tabs">
            {categories.map(cat => (
              <button
                key={cat}
                className={`gallery-tab ${activeTab === cat ? 'active' : ''}`}
                onClick={() => setActiveTab(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <motion.div
            className="gallery-grid"
            key={activeTab}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
          >
            {filtered.map((img, i) => (
              <GalleryItem key={img.src} img={img} index={i} onClick={() => setLightbox(i)} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            className="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={closeLightbox}
          >
            <button className="lightbox__close" onClick={closeLightbox} aria-label="Close">✕</button>
            <button className="lightbox__arrow lightbox__arrow--prev" onClick={e => { e.stopPropagation(); prevImg() }} aria-label="Previous">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M19 12H5M12 5l-7 7 7 7"/>
              </svg>
            </button>
            <motion.div
              key={lightbox}
              className="lightbox__content"
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.35 }}
              onClick={e => e.stopPropagation()}
            >
              <img src={filtered[lightbox].src} alt={filtered[lightbox].title} />
              <div className="lightbox__info">
                <p className="serif lightbox__title">{filtered[lightbox].title}</p>
                <p className="lightbox__cat section-label">{filtered[lightbox].cat}</p>
              </div>
            </motion.div>
            <button className="lightbox__arrow lightbox__arrow--next" onClick={e => { e.stopPropagation(); nextImg() }} aria-label="Next">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </button>
          </motion.div>
        )}
      </AnimatePresence>

    </motion.div>
  )
}