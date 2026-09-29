import { motion } from 'framer-motion'
import { FiBriefcase, FiCalendar, FiMapPin } from 'react-icons/fi'
import styles from './Experience.module.css'

const points = [
  'Completed a 15-day internship focused on application development using Flutter.',
  'Developed Healthy Fly, a medical equipment and healthcare website as the primary internship project.',
  'Designed and implemented user interfaces using Flutter and Dart.',
  'Worked on responsive application layouts and application functionality.',
  'Gained practical experience in application development, testing and project implementation.',
]

export default function Experience() {
  return (
    <section id="experience">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="section-label">Work history</p>
          <h2 className="section-title">Experience</h2>
          <div className="section-divider" />
        </motion.div>

        <motion.div
          className={`card ${styles.card}`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className={styles.header}>
            <div className={styles.iconWrap}>
              <FiBriefcase size={20} />
            </div>
            <div className={styles.meta}>
              <h3 className={styles.role}>Application Development Intern</h3>
              <p className={styles.company}>InfoLab IT Services Pvt. Ltd.</p>
              <div className={styles.details}>
                <span><FiCalendar size={13} /> 03 July 2026 – 17 July 2026 · 15 Days</span>
                <span><FiMapPin size={13} /> Remote / Online</span>
              </div>
            </div>
            <span className="badge">Internship</span>
          </div>

          <ul className={styles.points}>
            {points.map((p, i) => (
              <li key={i} className={styles.point}>
                <span className={styles.dot} />
                {p}
              </li>
            ))}
          </ul>

          <div className={styles.tags}>
            {['Flutter', 'Dart', 'Git', 'GitHub'].map(t => (
              <span key={t} className={styles.tag}>{t}</span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
