import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import './Contantpage.css'

function FadeIn({ children, delay = 0, className = '' }: {
  children: React.ReactNode; delay?: number; className?: string
}) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  return (
    <motion.div ref={ref} className={className}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}>
      {children}
    </motion.div>
  )
}

const infoItems = [
  {
    tag: 'ADDR',
    label: 'Address',
    value: '12, Luxury Boulevard, Nehru Nagar\nBhilai, Chhattisgarh, India',
    href: null,
  },
  {
    tag: 'TEL',
    label: 'Phone',
    value: '+91 98765 43210',
    href: 'tel:+919876543210',
  },
  {
    tag: 'MAIL',
    label: 'Email',
    value: 'stay@thevaluehotel.com',
    href: 'mailto:stay@thevaluehotel.com',
  },
  {
    tag: 'TIME',
    label: 'Check-in / Out',
    value: 'In: 2:00 PM  ·  Out: 12:00 PM',
    href: null,
  },
]

export function ContactPage() {
  const [form, setForm] = useState({
    name: '', phone: '', email: '', checkin: '', checkout: '', message: '',
  })
  const [sent, setSent] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault()

  const message = `
✦ *NEW BOOKING ENQUIRY — The Value Hotel*

👤 *Name:* ${form.name}
📞 *Phone:* ${form.phone}
✉️ *Email:* ${form.email}
📅 *Check-in:* ${form.checkin || 'Not specified'}
📅 *Check-out:* ${form.checkout || 'Not specified'}
💬 *Message:* ${form.message || 'No message'}

_Sent via thevaluehotel.com_
  `.trim()

  const phone = '7024409426' // ← Replace with your actual WhatsApp number (country code + number, no + or spaces)
  const encoded = encodeURIComponent(message)
  const whatsappURL = `https://wa.me/${phone}?text=${encoded}`

  window.open(whatsappURL, '_blank')

  setSent(true)
  setTimeout(() => setSent(false), 6000)
  setForm({ name: '', phone: '', email: '', checkin: '', checkout: '', message: '' })
}

  return (
    <motion.div className="cp-page"
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}>

      {/* ── Hero ── */}
      <section className="cp-hero">
        <img
          src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=1800&q=80&auto=format&fit=crop"
          alt="Contact hero"
          className="cp-hero__img"
          loading="eager"
        />
        <div className="cp-hero__overlay" />
        <div className="cp-hero__content">
          <motion.p className="cp-hero__eyebrow"
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}>
            Get in Touch
          </motion.p>
          <motion.h1 className="cp-hero__title"
            initial={{ opacity: 0, y: 44 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}>
            Begin Your<br /><em>Journey</em>
          </motion.h1>
          <motion.div className="cp-hero__scroll-hint"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}>
            <span />
          </motion.div>
        </div>
      </section>

      {/* ── Info strip ── */}
      <FadeIn>
        <div className="cp-strip">
          {infoItems.map((item) => (
            <div key={item.tag} className="cp-strip__item">
              <span className="cp-strip__tag">{item.tag}</span>
              <span className="cp-strip__label">{item.label}</span>
              {item.href
                ? <a href={item.href} className="cp-strip__val cp-strip__val--link">{item.value}</a>
                : <span className="cp-strip__val">{item.value}</span>
              }
            </div>
          ))}
        </div>
      </FadeIn>

      {/* ── Main: heading + form ── */}
      <section className="cp-main">
        <div className="cp-main__inner">

          {/* Left heading */}
          <FadeIn className="cp-main__left">
            <p className="cp-eyebrow">Reservations & Enquiries</p>
            <h2 className="cp-main__headline">
              We'd Love<br />
              <em>to Hear</em><br />
              from You
            </h2>
            <p className="cp-main__body">
              Whether you're planning a leisure escape, a corporate retreat, or a
              special celebration — our concierge team is ready to craft your perfect stay.
            </p>
            <div className="cp-main__divider" />
            <p className="cp-main__response">
              <span className="cp-main__response-dot" />
              Typically responds within 2 hours
            </p>
          </FadeIn>

          {/* Right: form card */}
          <FadeIn delay={0.15} className="cp-form-wrap">

            {sent && (
              <motion.div className="cp-success"
                initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }}>
                <span className="cp-success__icon">◆</span>
                <div>
                  <p className="cp-success__title">Message Received</p>
                  <p className="cp-success__sub">
                    Thank you{form.name ? `, ${form.name}` : ''}. Our concierge will reach out shortly.
                  </p>
                </div>
              </motion.div>
            )}

            <form className="cp-form" onSubmit={handleSubmit} noValidate>

              <div className="cp-form__section-label">Personal Details</div>
              <div className="cp-form__row">
                <div className="cp-form__field">
                  <label htmlFor="name">Full Name <span>*</span></label>
                  <input id="name" type="text" name="name" value={form.name}
                    onChange={handleChange} placeholder="Your name" required />
                </div>
                <div className="cp-form__field">
                  <label htmlFor="phone">Phone <span>*</span></label>
                  <input id="phone" type="tel" name="phone" value={form.phone}
                    onChange={handleChange} placeholder="+91 00000 00000" required />
                </div>
              </div>
              <div className="cp-form__section-label" style={{ marginTop: '0.5rem' }}>Stay Dates</div>
              <div className="cp-form__row">
                <div className="cp-form__field">
                  <label htmlFor="checkin">Check-in</label>
                  <input id="checkin" type="date" name="checkin" value={form.checkin} onChange={handleChange} />
                </div>
                <div className="cp-form__field">
                  <label htmlFor="checkout">Check-out</label>
                  <input id="checkout" type="date" name="checkout" value={form.checkout} onChange={handleChange} />
                </div>
              </div>

              <div className="cp-form__field">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" value={form.message}
                  onChange={handleChange} rows={4}
                  placeholder="Tell us about your preferences, special occasions, or any requests…" />
              </div>

              <button type="submit" className="cp-form__submit">
                <span className="cp-form__submit-text">Send Enquiry</span>
                <span className="cp-form__submit-arrow">↗</span>
              </button>

            </form>
          </FadeIn>
        </div>
      </section>

      {/* ── Map ── */}
      <section className="cp-map">
        <FadeIn>
          <div className="cp-map__header">
            <p className="cp-eyebrow">Find Us</p>
            <h3 className="cp-map__title">Our Location</h3>
          </div>
        </FadeIn>
        <div className="cp-map__frame">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.2!2d81.3155369!3d21.2052013!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a293d000791ded7:0x2944bb2b5155c40f!2sThe+Value+Hotel!5e0!3m2!1sen!2sin!4v1680000000000"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="The Value Hotel Location"
          />
        </div>
      </section>

    </motion.div>
  )
}