import { motion } from 'framer-motion'
import { FiBook } from 'react-icons/fi'
import styles from './Education.module.css'

const education = [
  {
    degree: 'Bachelor of Engineering — Computer Engineering',
    institution: 'Government Engineering College, Palanpur, Gujarat',
    board: 'Gujarat Technological University (GTU)',
    period: '2023 – 2027',
    detail: '7th Semester · CGPA: 6.59',
    current: true,
  },
  {
    degree: 'HSC — 12th Standard',
    institution: 'NIOS (National Institute of Open Schooling)',
    board: '',
    period: '2023',
    detail: 'Percentage: 66%',
    current: false,
  },
  {
    degree: 'SSC — 10th Standard',
    institution: 'CBSE (Central Board of Secondary Education)',
    board: '',
    period: '2021',
    detail: 'Percentage: 52%',
    current: false,
  },
]

export default function Education() {
  return (
    <section id="education">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="section-label">Academic background</p>
          <h2 className="section-title">Education</h2>
          <div className="section-divider" />
        </motion.div>

        <div className={styles.timeline}>
          {education.map((e, i) => (
            <motion.div
              key={e.degree}
              className={styles.item}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <div className={styles.iconCol}>
                <div className={`${styles.iconWrap} ${e.current ? styles.active : ''}`}>
                  <FiBook size={16} />
                </div>
                {i < education.length - 1 && <div className={styles.line} />}
              </div>

              <div className={`card ${styles.card}`}>
                <div className={styles.cardHeader}>
                  <div>
                    <h3 className={styles.degree}>{e.degree}</h3>
                    <p className={styles.institution}>{e.institution}</p>
                    {e.board && <p className={styles.board}>{e.board}</p>}
                  </div>
                  <div className={styles.right}>
                    <span className={styles.period}>{e.period}</span>
                    {e.current && <span className="badge">Current</span>}
                  </div>
                </div>
                <p className={styles.detail}>{e.detail}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
