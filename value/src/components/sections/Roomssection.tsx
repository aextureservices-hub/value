import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useInView } from 'framer-motion'
import './../CSS/Roomssection.css'
import Deluxe from '../../assets/room2.jpeg'
import Premium from '../../assets/room4.jpeg'
import Suite from '../../assets/room6.jpeg'

const rooms = [
  {
    title: 'Deluxe Room',
    desc: 'A sanctuary of calm. Our Deluxe Rooms blend classic elegance with every modern comfort.',
    img: Deluxe,
    price: '₹1099',
    tag: 'Most Popular',
  },
  {
    title: 'Premium Room',
    desc: 'Elevated living with panoramic city views, bespoke furnishings, and a private lounge.',
    img: Premium,
    price: '₹1299',
    tag: 'Elevated',
  },
  {
    title: 'Suite Room',
    desc: 'The pinnacle of indulgence. A full suite experience with butler service and a Jacuzzi.',
    img: Suite,
    price: '₹1399',
    tag: 'Signature',
  },
]

export function RoomsSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="rooms" id="rooms" ref={ref}>
      <div className="container">
        <div className="rooms__header">
          <motion.p
            className="section-label"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >Accommodations</motion.p>
          <motion.h2
            className="serif rooms__title"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            Our Rooms & <em>Suites</em>
          </motion.h2>
        </div>

        <div className="rooms__grid">
          {rooms.map((room, i) => (
            <motion.div
              key={room.title}
              className="room-card"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.15 + i * 0.15 }}
            >
              <div className="room-card__image zoom-wrap">
                <img src={room.img} alt={room.title} loading="lazy" />
                <div className="room-card__tag">{room.tag}</div>
              </div>
              <div className="room-card__body">
                <div className="room-card__top">
                  <h3 className="serif room-card__name">{room.title}</h3>
                  <span className="room-card__price serif">{room.price}<small>/night</small></span>
                </div>
                <p className="room-card__desc">{room.desc}</p>
                <Link to="/contact" className="room-card__btn">
                  <span>Reserve</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}