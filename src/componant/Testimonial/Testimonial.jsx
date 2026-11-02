
import React, { useState } from 'react'
import { Quote, ArrowLeft, ArrowRight } from 'lucide-react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'

import 'swiper/css'
import './Testimonial.scss'

const testimonials = [
  {
    name: 'Rahul Sharma',
    role: 'Project Manager',
    image: '/testimonials/client-1.jpg',
    message:
      'Sunil delivered an excellent website with a clean design and smooth functionality. His development skills and attention to detail made the entire experience great.'
  },
  {
    name: 'Priya Verma',
    role: 'Business Owner',
    image: '/testimonials/client-2.jpg',
    message:
      'Working with Sunil was a smooth experience. He understood our requirements, communicated clearly and delivered a responsive website.'
  },
  {
    name: 'Amit Patel',
    role: 'Founder',
    image: '/testimonials/client-3.jpg',
    message:
      'His problem-solving skills and commitment to quality really impressed us. The final website was exactly what we needed for our business.'
  },
  {
    name: 'Sneha Kulkarni',
    role: 'Marketing Manager',
    image: '/testimonials/client-4.jpg',
    message:
      'Sunil understood our vision and transformed it into a modern, user-friendly website. The overall development experience was excellent.'
  },
  {
    name: 'Akash Joshi',
    role: 'Business Owner',
    image: '/testimonials/client-5.jpg',
    message:
      'Great communication, timely delivery and quality development. I would definitely recommend Sunil for web development projects.'
  }
]

const Testimonial = () => {
  const [swiperInstance, setSwiperInstance] = useState(null)

  return (
    <section className="testimonial-parent parent">
      <div className="testimonial-cont container">

        <div className="testimonial-heading">
          <div>
            <span>WHAT CLIENTS SAY</span>
            <h2>What Clients Say</h2>
          </div>

          <div className="testimonial-controls">
            <button
              type="button"
              onClick={() => swiperInstance?.slidePrev()}
              aria-label="Previous testimonial"
            >
              <ArrowLeft size={20} />
            </button>

            <button
              type="button"
              onClick={() => swiperInstance?.slideNext()}
              aria-label="Next testimonial"
            >
              <ArrowRight size={20} />
            </button>
          </div>
        </div>

        <Swiper
          modules={[Navigation]}
          onSwiper={setSwiperInstance}
          spaceBetween={22}
          slidesPerView={3}
          speed={700}
          loop={true}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 14
            },
            576: {
              slidesPerView: 2,
              spaceBetween: 18
            },
            992: {
              slidesPerView: 3,
              spaceBetween: 22
            }
          }}
          className="testimonial-slider"
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="testimonial-card">

                <div className="testimonial-message">
                  <p>"{item.message}"</p>
                  <Quote className="testimonial-quote" size={23} />
                </div>

                <div className="testimonial-client">
                  <div className="testimonial-avatar">
                    <img
                      src={item.image}
                      alt={item.name}
                      onError={(e) => {
                        e.currentTarget.style.display = 'none'
                      }}
                    />
                    <span>{item.name.charAt(0)}</span>
                  </div>

                  <div className="testimonial-client-info">
                    <h3>{item.name}</h3>
                    <p>{item.role}</p>
                  </div>
                </div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  )
}

export default Testimonial
