
import React from 'react'
import {
  Globe,
  Camera,
  Code2,
  Send,
  ArrowUpRight
} from 'lucide-react'
import './Contact.scss'

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
  const handleSubmit = (e) => {
    e.preventDefault()

    const formData = new FormData(e.currentTarget)
    const name = formData.get('name')
    const email = formData.get('email')
    const subject = formData.get('subject')
    const message = formData.get('message')

    const mailtoLink = `mailto:your-email@example.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`
    )}`

    window.location.href = mailtoLink
  }

  return (
    <section className="contact-parent parent">
      <div className="contact-cont container">

        <div className="contact-content">

          <div className="contact-info">
            <span className="contact-label">LET'S CONNECT</span>

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
                    <ArrowUpRight className="social-arrow" size={13} />
                  </a>
                )
              })}
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="contact-form-row">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
              />
            </div>

            <input
              type="text"
              name="subject"
              placeholder="Your Subject"
              required
            />

            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              required
            />

            <button type="submit" className="contact-submit">
              Send Message
              <Send size={19} />
            </button>
          </form>

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
