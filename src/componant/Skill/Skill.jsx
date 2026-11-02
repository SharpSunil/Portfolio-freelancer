
import React from 'react'
import './Skill.scss'

const skills = [
  { name: 'React.js', short: '⚛', color: 'react' },
  { name: 'Next.js', short: 'N', color: 'next' },
  { name: 'JavaScript', short: 'JS', color: 'javascript' },
  { name: 'Node.js', short: 'JS', color: 'node' },
  { name: 'Express.js', short: 'EX', color: 'express' },
  { name: 'PHP', short: 'PHP', color: 'php' },
  { name: 'MySQL', short: 'DB', color: 'mysql' },
  { name: 'WordPress', short: 'W', color: 'wordpress' }
]

const Skill = () => {
  return (
    <section className="skill-parent parent">
      <div className="skill-cont container">
        <div className="skill-heading">
          <span>TOOLS & SKILLS</span>
          <h2>Technologies I Use</h2>
        </div>

        <div className="skill-grid">
          {skills.map((skill, index) => (
            <div className="skill-card" key={index}>
              <div className={`skill-icon ${skill.color}`}>
                {skill.short}
              </div>
              <h3>{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skill
