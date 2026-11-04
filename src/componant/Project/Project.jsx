
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'

import 'swiper/css'
import './Project.scss'

const projects = [
  {
    title: 'Healthcare Management System',
    category: 'React.js, Dashboard & API Integration',
    image: '/projects/healthcare.png',
    slug: 'healthcare-management-system'
  },
  {
    title: 'Digital Agency Website',
    category: 'React.js, UI Development',
    image: '/projects/agency.png',
    slug: 'digital-agency-website'
  },
  {
    title: 'NGO Website',
    category: 'Website Development, WordPress',
    image: '/projects/ngo.png',
    slug: 'ngo-website'
  }
]

const Project = () => {
  const [swiper, setSwiper] = useState(null)

  return (
    <section className="project-parent parent" id="project">
      <div className="project-cont container">

        <div className="project-heading">
          <div>
            <span>MY PROJECTS</span>
            <h2>Selected Work</h2>
          </div>

          <div className="project-navigation">
            <button
              type="button"
              className="project-prev"
              onClick={() => swiper?.slidePrev()}
              aria-label="Previous projects"
            >
              <ChevronLeft size={21} />
            </button>

            <button
              type="button"
              className="project-next"
              onClick={() => swiper?.slideNext()}
              aria-label="Next projects"
            >
              <ChevronRight size={21} />
            </button>
          </div>
        </div>

        <Swiper
          modules={[Autoplay]}
          onSwiper={setSwiper}
          loop={projects.length > 3}
          spaceBetween={20}
          slidesPerView={3}
          speed={700}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 15
            },
            576: {
              slidesPerView: 2,
              spaceBetween: 15
            },
            992: {
              slidesPerView: 3,
              spaceBetween: 20
            }
          }}
          className="project-swiper"
        >
          {projects.map((project, index) => (
            <SwiperSlide key={project.slug}>
              <Link
                to={`/projects/${project.slug}`}
                className={`project-card project-card-${index + 1}`}
              >
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                </div>

                <div className="project-info">
                  <div>
                    <h3>{project.title}</h3>
                    <p>{project.category}</p>
                  </div>

                  <span className="project-arrow">
                    <ArrowUpRight size={22} />
                  </span>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  )
}

export default Project
