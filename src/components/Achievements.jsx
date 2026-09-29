import { motion } from 'framer-motion'
import styles from './Achievements.module.css'

const achievements = [
  {
    medal: '🥇',
    title: 'State-Level Gold Medal',
    event: 'Shot Put',
    level: 'State Level',
    color: 'gold',
  },
  {
    medal: '🥉',
    title: 'National Bronze Medal',
    event: 'Shot Put',
    level: 'National Level',
    color: 'bronze',
  },
]

export default function Achievements() {
  return (
    <section id="achievements">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="section-label">Beyond coding</p>
          <h2 className="section-title">Achievements</h2>
          <div className="section-divider" />
        </motion.div>

        <div className={styles.grid}>
          {achievements.map((a, i) => (
            <motion.div
              key={a.title}
              className={`card ${styles.card} ${styles[a.color]}`}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <span className={styles.medal}>{a.medal}</span>
              <div>
                <h3 className={styles.title}>{a.title}</h3>
                <p className={styles.event}>{a.event}</p>
                <span className={`${styles.levelBadge} ${styles[`badge_${a.color}`]}`}>
                  {a.level}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          className={styles.note}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Sports achievements in Shot Put at state and national level competitions.
        </motion.p>
      </div>
    </section>
  )
}
