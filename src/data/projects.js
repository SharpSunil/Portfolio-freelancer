import img1 from '../assets/Project/akkafoundation.png'
import img2 from '../assets/Project/creovista.png'
const projects = [


  {
    id: 1,
    slug: 'akka-foundation-website',
    title: 'Akka Foundation Website',
    category: 'Non-Profit Organization / NGO',
    subtitle: 'A Digital Platform for Social Impact',
    description:
      'Designed and developed a complete digital platform for Akka Foundation, a non-profit organization dedicated to community development and social welfare. The website showcases the foundation’s social initiatives, community activities, awareness campaigns and projects focused on creating positive change in society.',

    image: img1,

    duration: '2 months (UI Design & Frontend Development)',
    role: 'Complete UI Design & Frontend Development, API integration, Responsive Layouts, Content Management System',

    technologies: [
      'React.js',
      'JavaScript',
      'SCSS',
      'HTML5',
      'SCSS',
      'REST API',
      'Responsive Design'
    ],

    features: [
      'Complete website UI design and layout development',
      'NGO profile and foundation information',
      'Women empowerment initiatives',
      'Education and community development programs',
      'Healthcare awareness and medical initiatives',
      'Drushti Abhiyan – Eye care initiative',
      'Project Anandi – Menstrual hygiene awareness',
      'Environment and water conservation activities',
      'Agriculture and farmer support initiatives',
      'Events, activities and gallery sections',
      'Responsive layouts for mobile, tablet and desktop'
    ],

    challenge:
      'Presenting the foundation’s diverse social initiatives, projects and community activities through a single, engaging and easy-to-navigate digital platform while communicating its non-profit mission effectively.',

    solution:
      'Designed the complete website UI and developed responsive frontend components to organize the foundation’s initiatives into clear sections. Created dedicated layouts for social projects, awareness campaigns, events, activities and organizational information to make the website informative, accessible and engaging.',

    liveUrl: 'https://akkafoundation.in',
    githubUrl: ''
  }
  ,
 {
  id: 2,
  slug: 'creovista-digital-agency',
  title: 'Creovista Digital Marketing Agency',
  category: 'Digital Marketing Agency Website',
  subtitle: 'Custom WordPress Website Development',
  description:
    'A professional website developed for Creovista, a digital marketing agency, to showcase its services, expertise and digital solutions through a modern and responsive online presence.',
  image: img2,
  duration: 'Website Development',
  role: 'WordPress Setup & Custom Template Development',
  technologies: [
    'WordPress',
    'PHP',
    'HTML5',
    'CSS3',
    'JavaScript',
    'SCSS',
    'Responsive Design'
  ],
  features: [
    'Complete WordPress installation and setup',
    'Custom page templates developed from scratch',
    'Custom website layout and UI implementation',
    'Service-wise individual pages',
    'Responsive design for mobile and desktop',
    'Dynamic WordPress content management',
    'Contact form integration',
    'Reusable page sections and components'
  ],
  challenge:
    'Creating a professional digital presence for a digital marketing agency while ensuring flexibility, responsive layouts and easy content management through WordPress.',
  solution:
    'Set up WordPress and developed custom page templates from scratch, implementing the website UI and reusable layouts to create a responsive and manageable website.',
  liveUrl: 'https://creovista.in/',
  githubUrl: ''
},
  {
    id: 3,
    slug: 'ngo-website',
    title: 'NGO Website',
    category: 'Non-Profit Website',
    subtitle: 'Digital Platform for Social Impact',
    description:
      'A website for a non-profit organization to showcase its initiatives, social activities, projects and community development work.',
    image: '/projects/ngo.png',
    duration: 'Project Development',
    role: 'Website Development',
    technologies: ['WordPress', 'PHP', 'MySQL', 'HTML', 'CSS', 'SEO'],
    features: [
      'Organization and mission pages',
      'Dynamic blog management',
      'Project and activity showcases',
      'Donation-focused sections',
      'Content management system',
      'SEO-friendly website structure'
    ],
    challenge:
      'Presenting the organization’s activities and initiatives in a clear, accessible and engaging way.',
    solution:
      'Developed structured website pages and dynamic content management functionality to make content updates easier.',
    liveUrl: '',
    githubUrl: ''
  }
]

export default projects;
