
import React from 'react'
import {
    Monitor,
    Palette,
    Layers,
    Database,
    Globe,
    Gauge,
    Code2,
    Smartphone,
    ShoppingCart,
    Search,
    Server,
    Workflow,
    ArrowUpRight,
    CheckCircle2
} from 'lucide-react'
import './Service_page.scss'

const Services_page = () => {
    const services = [
        {
            id: '01',
            icon: Monitor,
            title: 'Frontend Development',
            description: 'Building modern, responsive and interactive websites that deliver smooth user experiences across all devices.',
            technologies: ['React.js', 'Next.js', 'JavaScript', 'HTML5', 'SCSS'],
            features: [
                'Responsive website development',
                'Reusable React components',
                'Interactive UI elements',
                'Cross-browser compatibility',
                'Performance-focused interfaces'
            ]
        },
        {
            id: '02',
            icon: Palette,
            title: 'UI Development',
            description: 'Transforming design concepts into clean, pixel-perfect interfaces with attention to detail and usability.',
            technologies: ['HTML', 'CSS', 'SCSS', 'Bootstrap', 'Material UI'],
            features: [
                'Pixel-perfect implementation',
                'Modern layouts and styling',
                'Animations and transitions',
                'Mobile-friendly interfaces',
                'Reusable styling systems'
            ]
        },
        {
            id: '03',
            icon: Layers,
            title: 'Full-Stack Development',
            description: 'Developing complete web applications by combining powerful frontend experiences with reliable backend functionality.',
            technologies: ['React.js', 'Next.js', 'Node.js', 'Express.js', 'MySQL'],
            features: [
                'Complete web application development',
                'Frontend and backend integration',
                'Authentication and authorization',
                'Database connectivity',
                'Scalable application architecture'
            ]
        },
        {
            id: '04',
            icon: Database,
            title: 'Backend & API Development',
            description: 'Creating secure backend systems, REST APIs and database-driven applications to power modern websites.',
            technologies: ['Node.js', 'Express.js', 'PHP', 'MySQL', 'REST API'],
            features: [
                'REST API development',
                'Database design and integration',
                'CRUD operations',
                'Authentication systems',
                'Third-party API integration'
            ]
        },
        {
            id: '05',
            icon: Globe,
            title: 'WordPress Development',
            description: 'Building flexible and manageable WordPress websites with custom functionality and dynamic content.',
            technologies: ['WordPress', 'PHP', 'MySQL', 'HTML', 'CSS'],
            features: [
                'Custom WordPress websites',
                'Theme customization',
                'Custom post types',
                'Dynamic page development',
                'WordPress API integration'
            ]
        },
        {
            id: '06',
            icon: Gauge,
            title: 'Website Optimization & SEO',
            description: 'Improving website performance, usability and search engine readiness for a better digital experience.',
            technologies: ['Google Analytics', 'Search Console', 'SEO', 'Core Web Vitals'],
            features: [
                'Website speed optimization',
                'On-page SEO implementation',
                'Responsive performance improvements',
                'Technical SEO basics',
                'Analytics integration'
            ]
        }
    ]

    const process = [
        {
            number: '01',
            title: 'Understanding',
            description: 'Understanding your business, project requirements and goals.'
        },
        {
            number: '02',
            title: 'Planning',
            description: 'Selecting the right technologies and defining the development approach.'
        },
        {
            number: '03',
            title: 'Development',
            description: 'Building your solution with clean code and a focus on quality.'
        },
        {
            number: '04',
            title: 'Testing & Delivery',
            description: 'Testing functionality, refining details and delivering the final solution.'
        }
    ]

    return (
        <div className="services-page-parent parent">
            <div className="services-page-cont container">

                <section className="services-page-hero">
                    <span className="services-page-label">MY SERVICES</span>

                    <h1>
                        Solutions I Build For <span>Your Digital Growth</span>
                    </h1>

                    <p>
                        I help businesses and individuals turn their ideas into
                        modern, functional and scalable digital experiences
                        through reliable web development solutions.
                    </p>

                    <div className="services-hero-stats">
                        <div>
                            <Code2 size={22} />
                            <h3>5+</h3>
                            <span>Years Experience</span>
                        </div>

                        <div>
                            <Workflow size={22} />
                            <h3>Full-Stack</h3>
                            <span>Development</span>
                        </div>

                        <div>
                            <Smartphone size={22} />
                            <h3>Responsive</h3>
                            <span>Web Experiences</span>
                        </div>
                    </div>
                </section>

                <section className="services-list-section">
                    <div className="services-section-heading">
                        <div>
                            <span className="services-page-label">WHAT I OFFER</span>
                            <h2>Services & Solutions</h2>
                            <p>
                                From frontend interfaces to complete web applications,
                                explore the development services I provide.
                            </p>
                        </div>
                    </div>

                    <div className="services-page-grid">
                        {services.map((service) => {
                            const Icon = service.icon

                            return (
                                <article className="service-detail-card glass-card" key={service.id}>
                                    <div className="service-detail-top">
                                        <div className="service-detail-icon">
                                            <Icon size={25} />
                                        </div>
                                        <span className="service-detail-number">
                                            {service.id}
                                        </span>
                                    </div>

                                    <h3>{service.title}</h3>

                                    <p className="service-detail-description">
                                        {service.description}
                                    </p>

                                    <div className="service-detail-features">
                                        <h4>What I Provide</h4>

                                        {service.features.map((feature, index) => (
                                            <div className="service-feature" key={index}>
                                                <CheckCircle2 size={16} />
                                                <span>{feature}</span>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="service-detail-tech">
                                        <h4>Technologies</h4>

                                        <div className="service-tech-list">
                                            {service.technologies.map((tech, index) => (
                                                <span key={index}>{tech}</span>
                                            ))}
                                        </div>
                                    </div>

                                    <a href="/#contact" className="service-detail-link">
                                        Discuss Your Project
                                        <ArrowUpRight size={18} />
                                    </a>
                                </article>
                            )
                        })}
                    </div>
                </section>

                <section className="services-process-section glass-card">
                    <div className="services-section-heading">
                        <span className="services-page-label">MY WORKFLOW</span>
                        <h2>How I Work</h2>
                        <p>
                            A simple and structured approach to turn your ideas
                            into working digital solutions.
                        </p>
                    </div>

                    <div className="services-process-grid">
                        {process.map((item, index) => (
                            <div className="services-process-card" key={index}>
                                <span>{item.number}</span>
                                <h3>{item.title}</h3>
                                <p>{item.description}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="services-cta glass-card">
                    <div>
                        <span className="services-page-label">HAVE A PROJECT?</span>
                        <h2>Let's Build Something Great Together</h2>
                        <p>
                            Have an idea, need a website or looking for a developer?
                            Let's discuss your project.
                        </p>
                    </div>

                    <a href="/#contact" className="services-cta-button">
                        Start a Conversation
                        <ArrowUpRight size={19} />
                    </a>
                </section>

            </div>
        </div>
    )
}

export default Services_page
