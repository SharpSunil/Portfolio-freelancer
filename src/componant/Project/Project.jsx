
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'

import 'swiper/css'
import './Project.scss'
import img1 from '../../assets/Project/akkafoundation.png'
import img2 from '../../assets/Project/creovista.png'
import img3 from '../../assets/Project/diwiseglobal.png'
import img4 from '../../assets/Project/deeva.png'
import img5 from '../../assets/Project/orthox.png'
import img6 from '../../assets/Project/kpuri.png'
import img7 from '../../assets/Project/neshma.png'
const projects = [
  {
    title: 'Akka Foundation Website',
    category: 'React.js, UI Development, API Integration',
    image: img1,
    slug: 'akka-foundation-website'
  },
{
  title: 'Creovista Digital Agency Website',
  category: 'WordPress, Custom Page Template Development',
  image: img2,
  slug: 'creovista-digital-agency'
},
  {
  title: 'DIwise Global Website',
  category: 'Next.js, UI Design & API Integration',
  image: img3,
  slug: 'diwise-global-website'
},
{
  title: 'Deeva Karnani Shah Portfolio',
  category: 'React.js, Vite & Custom UI Development',
  image: img4,
  slug: 'deeva-karnani-shah-website'
},
{
  title: 'Orthox Clinic Website',
  category: 'WordPress, Custom UI & Multilingual Development',
  image: img5,
  slug: 'orthox-clinic-website'
},
{
  title: 'K. Puri & Associates Website',
  category: 'React.js, Vite & Custom UI Development',
  image: img6,
  slug: 'kpuri-associates-website'
},
{
  title: 'Neshma Academy Website',
  category: 'WordPress, Website Development & Maintenance',
  image: img7,
  slug: 'neshma-academy-website'
},
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
