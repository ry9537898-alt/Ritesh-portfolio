import { motion } from 'framer-motion'
import { FiMapPin, FiMail, FiPhone } from 'react-icons/fi'
import styles from './About.module.css'

const info = [
  { icon: <FiMapPin size={16} />, label: 'Palanpur, Gujarat, India' },
  { icon: <FiMail size={16} />, label: 'ry9537898@gmail.com', href: 'https://mail.google.com/mail/u/0/?view=cm&fs=1&to=ry9537898@gmail.com', external: true },
  { icon: <FiPhone size={16} />, label: '+91 95378 98027', href: 'https://wa.me/919537898027', external: true },
]

export default function About() {
  return (
    <section id="about">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="section-label">Get to know me</p>
          <h2 className="section-title">About Me</h2>
          <div className="section-divider" />
        </motion.div>

        <div className={styles.grid}>
          <motion.div
            className={styles.text}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <p>
              I&apos;m a Computer Engineering student at{' '}
              <strong>Government Engineering College, Palanpur</strong> (GTU),
              currently in my 7th semester. I&apos;m focused on becoming a
              Full Stack Developer and enjoy building practical, real-world
              web applications.
            </p>
            <p>
              I work with <strong>JavaScript, React.js, Node.js, Express.js,
              MongoDB and SQL</strong> to build full-stack applications. I also
              have hands-on experience with <strong>Flutter and Dart</strong>{' '}
              from my internship at InfoLab IT Services.
            </p>
            <p>
              I enjoy turning ideas into working products — from designing
              clean UIs to building reliable backend APIs. I&apos;m continuously
              learning and improving my skills through projects and real-world
              experience.
            </p>

            <div className={styles.infoList}>
              {info.map(({ icon, label, href, external }) => (
                <div key={label} className={styles.infoItem}>
                  <span className={styles.infoIcon}>{icon}</span>
                  {href
                    ? <a href={href} className={styles.infoLink} {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>{label}</a>
                    : <span>{label}</span>
                  }
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className={styles.statsGrid}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {[
              { value: '2+', label: 'Projects Built' },
              { value: '15d', label: 'Internship' },
              { value: '6.59', label: 'CGPA' },
              { value: '🥉🥇', label: 'Sports Medals' },
            ].map(({ value, label }) => (
              <div key={label} className={`card ${styles.statCard}`}>
                <span className={styles.statValue}>{value}</span>
                <span className={styles.statLabel}>{label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
