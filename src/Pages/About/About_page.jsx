
import React from 'react'
import {
  Code2,
  Monitor,
  Database,
  Globe,
  Layers,
  Rocket,
  BriefcaseBusiness,
  GraduationCap,
  ArrowUpRight,
  CheckCircle2
} from 'lucide-react'
import './About_page.scss'

const About_page = () => {
  const expertise = [
    {
      icon: Code2,
      title: 'Frontend Development',
      description: 'Building responsive, interactive and user-friendly interfaces using React.js, Next.js, JavaScript, HTML and SCSS.'
    },
    {
      icon: Database,
      title: 'Backend Development',
      description: 'Developing APIs, server-side applications and database-driven solutions using Node.js, Express.js, PHP and MySQL.'
    },
    {
      icon: Monitor,
      title: 'Website Development',
      description: 'Creating modern, scalable and performance-focused websites with clean architecture and maintainable code.'
    },
    {
      icon: Globe,
      title: 'CMS & Integrations',
      description: 'Working with WordPress, third-party APIs, analytics integrations and dynamic content management systems.'
    }
  ]

  const technologies = [
    'React.js',
    'Next.js',
    'JavaScript',
    'HTML5',
    'CSS3',
    'SCSS',
    'Bootstrap',
    'Node.js',
    'Express.js',
    'PHP',
    'MySQL',
    'WordPress',
    'REST APIs',
    'Git',
    'GSAP',
    'Swiper'
  ]

  const highlights = [
    'Responsive and modern website development',
    'Reusable React components and clean architecture',
    'REST API integration and backend development',
    'Database design and management',
    'Website performance and SEO considerations',
    'Third-party tools and service integrations'
  ]

  return (
    <div className="about_page-parent parent">
      <div className="about-page-cont container">

        <section className="about-page-hero">
          <div className="about-page-heading">
            <span className="about-page-label">ABOUT ME</span>
            <h1>Turning Ideas Into <span>Digital Experiences</span></h1>
            <p>
              I'm Sunil Shelke, a Full-Stack Web Developer passionate
              about building modern, scalable and meaningful digital
              experiences.
            </p>
          </div>

          <div className="about-page-stats">
            <div className="about-stat glass-card">
              <BriefcaseBusiness size={22} />
              <h3>5+</h3>
              <span>Years of Experience</span>
            </div>

            <div className="about-stat glass-card">
              <Code2 size={22} />
              <h3>React</h3>
              <span>Frontend Development</span>
            </div>

            <div className="about-stat glass-card">
              <Layers size={22} />
              <h3>Full-Stack</h3>
              <span>Development Expertise</span>
            </div>
          </div>
        </section>

        <section className="about-intro-section glass-card">
          <div className="about-section-title">
            <span className="about-page-label">MY JOURNEY</span>
            <h2>A Little About Me</h2>
          </div>

          <div className="about-intro-content">
            <p>
              I am a web developer with 5+ years of experience in
              developing modern websites and web applications. My
              primary focus is React.js and frontend development,
              along with hands-on experience in backend technologies
              and database management.
            </p>

            <p>
              Throughout my journey, I have worked with different
              technologies and development tools to transform ideas
              into functional digital products. I enjoy solving
              technical challenges, developing reusable components
              and creating smooth user experiences.
            </p>

            <p>
              I believe good development is not just about writing
              code. It is about understanding requirements, choosing
              the right approach and delivering solutions that are
              reliable, maintainable and useful.
            </p>
          </div>
        </section>

        <section className="about-expertise-section">
          <div className="about-section-title">
            <span className="about-page-label">WHAT I DO</span>
            <h2>My Areas of Expertise</h2>
            <p>
              From frontend interfaces to backend functionality,
              I work across different areas of web development.
            </p>
          </div>

          <div className="about-expertise-grid">
            {expertise.map((item, index) => {
              const Icon = item.icon

              return (
                <div className="expertise-card glass-card" key={index}>
                  <div className="expertise-icon">
                    <Icon size={24} />
                  </div>

                  <h3>{item.title}</h3>
                  <p>{item.description}</p>

                  <ArrowUpRight className="expertise-arrow" size={20} />
                </div>
              )
            })}
          </div>
        </section>

        <section className="about-skills-section glass-card">
          <div className="about-section-title">
            <span className="about-page-label">MY TOOLKIT</span>
            <h2>Technologies I Work With</h2>
            <p>
              Technologies and tools I use to build and maintain
              modern web applications.
            </p>
          </div>

          <div className="about-tech-grid">
            {technologies.map((tech, index) => (
              <div className="about-tech-item" key={index}>
                <CheckCircle2 size={17} />
                <span>{tech}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="about-approach-section">
          <div className="about-section-title">
            <span className="about-page-label">HOW I WORK</span>
            <h2>My Development Approach</h2>
          </div>

          <div className="about-approach-grid">
            <div className="approach-card glass-card">
              <div className="approach-number">01</div>
              <h3>Understand</h3>
              <p>
                Understand the requirements, project goals and
                expected user experience.
              </p>
            </div>

            <div className="approach-card glass-card">
              <div className="approach-number">02</div>
              <h3>Plan & Build</h3>
              <p>
                Choose suitable technologies and develop clean,
                reusable and scalable solutions.
              </p>
            </div>

            <div className="approach-card glass-card">
              <div className="approach-number">03</div>
              <h3>Test & Improve</h3>
              <p>
                Test functionality, improve performance and refine
                the overall experience.
              </p>
            </div>

            <div className="approach-card glass-card">
              <div className="approach-number">04</div>
              <h3>Deliver</h3>
              <p>
                Deliver reliable solutions that meet project
                requirements and business objectives.
              </p>
            </div>
          </div>
        </section>

        <section className="about-cta glass-card">
          <div>
            <span className="about-page-label">LET'S CONNECT</span>
            <h2>Have an Idea or Project in Mind?</h2>
            <p>
              Let's discuss your ideas and build something meaningful
              together.
            </p>
          </div>

          <a href="/#contact" className="about-cta-btn">
            Let's Talk
            <ArrowUpRight size={19} />
          </a>
        </section>

      </div>
    </div>
  )
}

export default About_page
