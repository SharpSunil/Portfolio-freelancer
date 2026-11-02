import React from 'react'
import {
  Monitor,
  Layers,
  Code2,
  Database,
  ArrowUpRight
} from 'lucide-react'
import './Offer.scss'

const services = [
  {
    icon: Monitor,
    title: 'Frontend Development',
    description:
      'Building modern, responsive and interactive websites using React.js and Next.js.',
    color: 'orange'
  },
  {
    icon: Layers,
    title: 'UI Development',
    description:
      'Creating clean, user-friendly interfaces with pixel-perfect layouts and smooth animations.',
    color: 'purple'
  },
  {
    icon: Code2,
    title: 'Full-Stack Development',
    description:
      'Developing complete web applications with powerful frontend and backend functionality.',
    color: 'blue'
  },
  {
    icon: Database,
    title: 'API & Database Integration',
    description:
      'Connecting REST APIs, managing databases and building reliable data-driven applications.',
    color: 'cyan'
  }
]

const Offer = () => {
  return (
    <section className="offer-parent parent">
      <div className="offer-cont container">

        <div className="offer-heading">
          <span>WHAT I DO</span>
          <h2>Services I Offer</h2>
        </div>

        <div className="offer-grid">
          {services.map((service, index) => {
            const Icon = service.icon

            return (
              <div className="offer-card glass-card" key={index}>
                <div className={`offer-icon ${service.color}`}>
                  <Icon size={21} />
                </div>

                <h3>{service.title}</h3>

                <p>{service.description}</p>

                <div className="offer-arrow">
                  <ArrowUpRight size={17} />
                </div>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}

export default Offer