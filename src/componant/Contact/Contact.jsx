import React, { useState } from 'react'
import {
  Globe,
  Camera,
  Code2,
  Send,
  ArrowUpRight
} from 'lucide-react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import './Contact.scss'

const GOOGLE_SCRIPT_URL =
  'https://script.google.com/macros/s/AKfycbxZlOgMgP1tQT0bBkbC1u68bA0wsFV831BSmjqMQeztn2S_KKHGC9W7ivWpBXfAoRkbhQ/exec'

const socialLinks = [
  {
    icon: Code2,
    link: 'https://www.linkedin.com/',
    label: 'LinkedIn'
  },
  {
    icon: Camera,
    link: 'https://www.instagram.com/',
    label: 'Instagram'
  },
  {
    icon: Globe,
    link: 'https://dribbble.com/',
    label: 'Dribbble'
  }
]

const Contact = () => {
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (loading) return

    const form = e.currentTarget
    const formData = new FormData(form)

    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      subject: formData.get('subject'),
      message: formData.get('message')
    }

    setLoading(true)

    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'text/plain;charset=utf-8'
        },
        body: JSON.stringify(data)
      })

      toast.success('Your message has been sent successfully! 🎉')
      form.reset()

    } catch (error) {
      console.error('Contact form error:', error)

      toast.error('Failed to send your message. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="contact-parent parent" id="contact">

      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />

      <div className="contact-cont container">

        <div className="contact-content">

          {/* Contact Information */}
          <div className="contact-info">

            <span className="contact-label">
              LET'S CONNECT
            </span>

            <h2>
              Have a project in mind?
              <br />
              Let's create something amazing together.
            </h2>

            <p className="contact-description">
              I'm always open to new ideas,
              collaborations and exciting projects.
            </p>

            <div className="contact-socials">
              {socialLinks.map((social, index) => {
                const Icon = social.icon

                return (
                  <a
                    href={social.link}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={social.label}
                    key={index}
                  >
                    <Icon size={23} />

                    <ArrowUpRight
                      className="social-arrow"
                      size={13}
                    />
                  </a>
                )
              })}
            </div>

          </div>

          {/* Contact Form */}
          <form
            className="contact-form"
            onSubmit={handleSubmit}
          >

            <div className="contact-form-row">

              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                disabled={loading}
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                disabled={loading}
              />

            </div>

            <input
              type="text"
              name="subject"
              placeholder="Your Subject"
              required
              disabled={loading}
            />

            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              required
              disabled={loading}
            />

            <button
              type="submit"
              className="contact-submit"
              disabled={loading}
            >
              {loading ? 'Sending...' : 'Send Message'}

              <Send size={19} />
            </button>

          </form>

          {/* Animated Orb */}
          <div className="contact-orb">

            <div className="contact-orb-inner"></div>

            <div className="contact-orb-ring ring-one"></div>

            <div className="contact-orb-ring ring-two"></div>

            <div className="contact-orb-ring ring-three"></div>

          </div>

        </div>

      </div>

    </section>
  )
}

export default Contact