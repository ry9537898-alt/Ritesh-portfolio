import { motion } from 'framer-motion'
import { FiGithub, FiExternalLink } from 'react-icons/fi'
import { MdConstruction } from 'react-icons/md'
import styles from './Projects.module.css'

const projects = [
  {
    title: 'Healthy Fly',
    subtitle: 'Medical Equipment Website',
    description:
      'Developed a responsive medical equipment website using HTML, CSS, and JavaScript. Created organized product categories, responsive layouts, and interactive website elements using JavaScript. The website is deployed on Vercel.',
    features: [
      'Medical equipment product presentation',
      'Categories: Surgical, Rehabilitation, Medicine, Mobility, Personal Hygiene, Orthopedic',
      'Responsive layouts and interactive elements',
      'Company information sections',
    ],
    stack: ['HTML5', 'CSS3', 'JavaScript', 'Vercel'],
    status: 'completed',
    demo: 'https://healthy-fly.vercel.app/',
    github: 'https://github.com/ry9537898-alt/healthy-fly',
  },
  {
    title: 'Hostel Management System',
    subtitle: 'Full Stack Web Application',
    description:
      'A full-stack hostel management system designed to handle student details, room allocation, mess management, complaints and fee management for multiple engineering departments.',
    features: [
      'Student details & room allocation',
      'Department-wise management (CE, Civil, EE, ME)',
      'Hostel mess management',
      'Complaints & fee management',
      'Hostel administration panel',
    ],
    stack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
    status: 'in-progress',
    demo: null,
    github: null,
  },
]

export default function Projects() {
  return (
    <section id="projects" className={styles.section}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="section-label">What I&apos;ve built</p>
          <h2 className="section-title">Projects</h2>
          <div className="section-divider" />
        </motion.div>

        <div className={styles.grid}>
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              className={`card ${styles.card}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className={styles.cardTop}>
                <div className={styles.titleRow}>
                  <div>
                    <h3 className={styles.title}>{p.title}</h3>
                    <p className={styles.subtitle}>{p.subtitle}</p>
                  </div>
                  {p.status === 'in-progress' && (
                    <span className={styles.wip}>
                      <MdConstruction size={13} /> In Progress
                    </span>
                  )}
                </div>

                <p className={styles.desc}>{p.description}</p>

                <ul className={styles.features}>
                  {p.features.map(f => (
                    <li key={f} className={styles.feature}>
                      <span className={styles.featureDot} />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              <div className={styles.cardBottom}>
                <div className={styles.stack}>
                  {p.stack.map(t => (
                    <span key={t} className={styles.tech}>{t}</span>
                  ))}
                </div>

                <div className={styles.links}>
                  <a
                    href={p.github || '#'}
                    target={p.github ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    className={`btn btn-outline ${styles.linkBtn} ${!p.github ? styles.disabled : ''}`}
                    aria-label={p.github ? `View ${p.title} source code on GitHub` : 'GitHub link coming soon'}
                    onClick={e => !p.github && e.preventDefault()}
                  >
                    <FiGithub size={15} /> GitHub
                  </a>
                  <a
                    href={p.demo || '#'}
                    target={p.demo ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    className={`btn btn-primary ${styles.linkBtn} ${!p.demo ? styles.disabled : ''}`}
                    aria-label={p.demo ? `View ${p.title} live demo` : 'Live demo coming soon'}
                    onClick={e => !p.demo && e.preventDefault()}
                  >
                    <FiExternalLink size={15} /> Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
