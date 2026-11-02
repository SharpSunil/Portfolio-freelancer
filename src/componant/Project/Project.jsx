
import React from 'react'
import { ArrowUpRight } from 'lucide-react'
import './Project.scss'

const projects = [
  {
    title: 'Healthcare Management System',
    category: 'React.js, Dashboard & API Integration',
    image: '/projects/healthcare.png',
    link: '#'
  },
  {
    title: 'Digital Agency Website',
    category: 'React.js, UI Development',
    image: '/projects/agency.png',
    link: '#'
  },
  {
    title: 'NGO Website',
    category: 'Website Development, WordPress',
    image: '/projects/ngo.png',
    link: '#'
  }
]

const Project = () => {
  return (
    <section className="project-parent parent">
      <div className="project-cont container">

        <div className="project-heading">
          <div>
            <span>MY PROJECTS</span>
            <h2>Selected Work</h2>
          </div>

          <a href="#projects" className="project-view-all">
            View All Projects
            <span>
              <ArrowUpRight size={20} />
            </span>
          </a>
        </div>

        <div className="project-grid" id="projects">
          {projects.map((project, index) => (
            <a
              href={project.link}
              className={`project-card project-card-${index + 1}`}
              key={index}
              target="_blank"
              rel="noreferrer"
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
            </a>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Project
