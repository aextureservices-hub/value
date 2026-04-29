import { motion } from 'framer-motion'
import { HeroSection } from '../sections/HeroSection'
import { AboutSection } from '../sections/AboutSection'
import { RoomsSection } from '../sections/Roomssection'
import { AmenitiesSection } from '../sections/Amenitiessection'
import { GalleryPreview } from '../sections/Gallerypreview'
import { TestimonialsSection } from '../sections/TestimonialsSection'
import { CTABanner } from '../sections/Ctabanner'
import './Homepage.css'
export function HomePage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <section className="home-hero">
      <HeroSection />
      <AboutSection />
      <RoomsSection />
      <AmenitiesSection />
      <GalleryPreview />
      <TestimonialsSection />
      <CTABanner />
      </section>
    </motion.div>
  )
}