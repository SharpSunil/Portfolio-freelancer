
import React from 'react'
import {
  Search,
  ClipboardList,
  Lightbulb,
  Palette,
  RefreshCw
} from 'lucide-react'
import './Process.scss'

const processSteps = [
  {
    number: '01',
    title: 'Discover',
    description: 'Understand goals, users, and project requirements.',
    icon: Search
  },
  {
    number: '02',
    title: 'Define',
    description: 'Turn insights into a clear and focused plan.',
    icon: ClipboardList
  },
  {
    number: '03',
    title: 'Plan & Develop',
    description: 'Explore ideas and develop possible solutions.',
    icon: Lightbulb
  },
  {
    number: '04',
    title: 'Development',
    description: 'Build intuitive, responsive and visually appealing experiences.',
    icon: Palette
  },
  {
    number: '05',
    title: 'Test & Launch',
    description: 'Validate, gather feedback and refine for the best outcome.',
    icon: RefreshCw
  }
]

const Process = () => {
  return (
    <section className="process-parent parent">
      <div className="process-cont container">

        <div className="process-heading">
          <span>MY PROCESS</span>
          <h2>Development Process I Follow</h2>
        </div>

        <div className="process-grid">
          {processSteps.map((step, index) => {
            const Icon = step.icon

            return (
              <div className="process-card" key={step.number}>
                <div className="process-card-top">
                  <div className="process-icon">
                    <Icon size={22} />
                  </div>

                  <span className="process-number">
                    {step.number}
                  </span>
                </div>

                <div className="process-content">
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>

                {index !== processSteps.length - 1 && (
                  <div className="process-connector">
                    <span></span>
                  </div>
                )}
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}

export default Process
