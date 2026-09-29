import { FiGithub, FiLinkedin, FiArrowDown } from 'react-icons/fi'
import { motion } from 'framer-motion'
import styles from './Hero.module.css'
import resume from '../assets/resume/Ritesh_Yadav_Resume.pdf'
import profilePhoto from '../assets/images/profile.jpg'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: 'easeOut' },
})

export default function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      <div className={`container ${styles.inner}`}>

        {/* Left — text content */}
        <div className={styles.content}>
          <motion.p className={styles.greeting} {...fadeUp(0.1)}>
            Hi, I&apos;m
          </motion.p>

          <motion.h1 className={styles.name} {...fadeUp(0.2)}>
            Yadav Ritesh<br />
            <span className={styles.nameAccent}>Parshuram</span>
          </motion.h1>

          <motion.h2 className={styles.role} {...fadeUp(0.3)}>
            <span className={styles.rolePrefix}>{'< '}</span>
            Full Stack Developer
            <span className={styles.rolePrefix}>{' />'}</span>
          </motion.h2>

          <motion.p className={styles.tagline} {...fadeUp(0.4)}>
            Computer Engineering student passionate about building modern,
            responsive and user-friendly web applications.
          </motion.p>

          <motion.div className={styles.actions} {...fadeUp(0.5)}>
            <a href="#projects" className="btn btn-primary">View Projects</a>
            <a href="#contact" className="btn btn-outline">Contact Me</a>
            <a
              href={resume}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
              download="Ritesh_Yadav_Resume.pdf"
            >
              Download Resume
            </a>
          </motion.div>

          <motion.div className={styles.socials} {...fadeUp(0.6)}>
            <a
              href="https://github.com/ry9537898-alt"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className={styles.socialLink}
            >
              <FiGithub size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/ritesh-yadav"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className={styles.socialLink}
            >
              <FiLinkedin size={20} />
            </a>
          </motion.div>
        </div>

        {/* Right — profile photo */}
        <motion.div
          className={styles.photoWrap}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
        >
          <div className={styles.photoRing}>
            <img
              src={profilePhoto}
              alt="Ritesh Yadav - Full Stack Developer"
              className={styles.photo}
            />
          </div>
        </motion.div>

      </div>

      <motion.a
        href="#about"
        className={styles.scroll}
        aria-label="Scroll down"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <FiArrowDown size={20} />
      </motion.a>

      <div className={styles.glow} aria-hidden="true" />
    </section>
  )
}
