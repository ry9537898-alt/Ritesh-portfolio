import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <a href="#hero" className={styles.logo}>
          <span className={styles.accent}>&lt;</span>RY
          <span className={styles.accent}>/&gt;</span>
        </a>

        <p className={styles.copy}>
          © {new Date().getFullYear()} Yadav Ritesh Parshuram. Built with React.js.
        </p>

        <div className={styles.socials}>
          <a href="https://github.com/ry9537898-alt" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FiGithub size={18} />
          </a>
          <a href="https://www.linkedin.com/in/ritesh-yadav" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FiLinkedin size={18} />
          </a>
          <a href="mailto:ry9537898@gmail.com" aria-label="Email">
            <FiMail size={18} />
          </a>
        </div>
      </div>
    </footer>
  )
}
