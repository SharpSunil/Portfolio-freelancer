
import React from 'react'
import { useParams, Link } from 'react-router-dom'
import {
  ArrowLeft,
  ArrowUpRight,
  ExternalLink,
  CheckCircle2,
  Code2,
  Clock3,
  BriefcaseBusiness
} from 'lucide-react'
import projects from '../../data/projects'
import './ProjectDetails.scss'

const ProjectDetails = () => {
  const { slug } = useParams()

  const project = projects.find(item => item.slug === slug)

  if (!project) {
    return (
      <div className="project-details-parent parent">
        <div className="project-details-cont container">
          <div className="project-not-found glass-card">
            <h2>Project Not Found</h2>
            <p>The project you are looking for does not exist.</p>

            <Link to="/#work" className="project-back-btn">
              <ArrowLeft size={18} />
              Back to Projects
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="project-details-parent parent">
      <div className="project-details-cont container">

        <Link to="/#work" className="project-back-link">
          <ArrowLeft size={18} />
          Back to Projects
        </Link>

        <section className="project-details-hero glass-card">

          <div className="project-details-info">
            <span className="project-details-label">
              {project.category}
            </span>

            <h1>{project.title}</h1>

            <h2>{project.subtitle}</h2>

            <p>{project.description}</p>

            <div className="project-details-buttons">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="project-live-btn"
                >
                  Live Preview
                  <ExternalLink size={18} />
                </a>
              )}

              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="project-github-btn"
                >
                  Source Code
                  <Code2 size={18} />
                </a>
              )}
            </div>
          </div>

          <div className="project-details-image">
            <img src={project.image} alt={project.title} />
          </div>

        </section>

        <section className="project-meta-grid">

          <div className="project-meta-card glass-card">
            <BriefcaseBusiness size={22} />
            <span>My Role</span>
            <h3>{project.role}</h3>
          </div>

          <div className="project-meta-card glass-card">
            <Clock3 size={22} />
            <span>Duration</span>
            <h3>{project.duration}</h3>
          </div>

          <div className="project-meta-card glass-card">
            <Code2 size={22} />
            <span>Technologies</span>
            <h3>{project.technologies.length}+ Tools</h3>
          </div>

        </section>

        <section className="project-overview glass-card">
          <span className="project-details-label">PROJECT OVERVIEW</span>
          <h2>About This Project</h2>
          <p>{project.description}</p>
        </section>

        <section className="project-information-grid">

          <div className="project-information-card glass-card">
            <span className="project-details-label">THE CHALLENGE</span>
            <h2>Project Challenges</h2>
            <p>{project.challenge}</p>
          </div>

          <div className="project-information-card glass-card">
            <span className="project-details-label">THE SOLUTION</span>
            <h2>My Approach</h2>
            <p>{project.solution}</p>
          </div>

        </section>

        <section className="project-features glass-card">
          <span className="project-details-label">PROJECT HIGHLIGHTS</span>
          <h2>Key Features</h2>

          <div className="project-feature-list">
            {project.features.map((feature, index) => (
              <div className="project-feature" key={index}>
                <CheckCircle2 size={19} />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="project-technologies glass-card">
          <span className="project-details-label">MY TOOLKIT</span>
          <h2>Technologies Used</h2>

          <div className="project-tech-list">
            {project.technologies.map((tech, index) => (
              <span key={index}>{tech}</span>
            ))}
          </div>
        </section>

        <section className="project-details-cta glass-card">
          <div>
            <span className="project-details-label">HAVE A PROJECT?</span>
            <h2>Let's Build Something Great Together</h2>
            <p>
              Have a similar idea? Let's discuss your project
              and create something meaningful.
            </p>
          </div>

          <Link to="/#contact" className="project-contact-btn">
            Let's Talk
            <ArrowUpRight size={19} />
          </Link>
        </section>

      </div>
    </div>
  )
}

export default ProjectDetails
