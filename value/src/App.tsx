import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'

import { Navbar } from './components/Navbar/Navbar'
import { Footer } from './components/sections/Footer'
import { WhatsAppFAB } from './components/ui/WhatsAppFAB'
import { CustomCursor } from './components/ui/CustomCursor'

import { HomePage } from './components/pages/HomePage'
import { AboutPage } from './components/pages/Aboutpage'
import { GalleryPage } from './components/pages/Gallerypage'
import { ContactPage } from './components/pages/Contactpage'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

function AppInner() {
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="app" style={{ background: '#0a0a0a', minHeight: '100vh' }}>
      <CustomCursor />
      <Navbar scrolled={scrolled} />
      <ScrollToTop />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </AnimatePresence>
      <Footer />
      <WhatsAppFAB />
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <AppInner />
    </BrowserRouter>
  )
}