import { motion } from 'framer-motion'
import { FiAward, FiExternalLink, FiDownload } from 'react-icons/fi'
import styles from './Certifications.module.css'
import certificate from '../assets/certificate/InfoLabz_Internship_Certificate.pdf'

export default function Certifications() {
  return (
    <section id="certifications" className={styles.section}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="section-label">Credentials</p>
          <h2 className="section-title">Certifications</h2>
          <div className="section-divider" />
        </motion.div>

        <motion.div
          className={`card ${styles.card}`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className={styles.left}>
            <div className={styles.iconWrap}>
              <FiAward size={24} />
            </div>
            <div>
              <h3 className={styles.title}>Flutter / Application Development</h3>
              <p className={styles.issuer}>InfoLab IT Services Pvt. Ltd.</p>
              <p className={styles.date}>July 2026 · Internship Certificate</p>
              <p className={styles.desc}>
                Certificate of completion for a 15-day application development internship,
                covering Flutter UI development, Dart programming and project implementation.
              </p>
            </div>
          </div>

          <div className={styles.actions}>
            <a
              href={certificate}
              target="_blank"
              rel="noopener noreferrer"
              className={`btn btn-outline ${styles.actionBtn}`}
            >
              <FiExternalLink size={15} /> View Certificate
            </a>
            <a
              href={certificate}
              download="InfoLabz_Internship_Certificate.pdf"
              className={`btn btn-primary ${styles.actionBtn}`}
            >
              <FiDownload size={15} /> Download Certificate
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
