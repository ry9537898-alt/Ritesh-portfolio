import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { FiMenu, FiX } from 'react-icons/fi'
import styles from './Navbar.module.css'
import resume from '../assets/resume/Ritesh_Yadav_Resume.pdf'

const links = [
  { label: 'Home',         to: '/' },
  { label: 'About',        to: '/about' },
  { label: 'Skills',       to: '/skills' },
  { label: 'Experience',   to: '/experience' },
  { label: 'Projects',     to: '/projects' },
  { label: 'Certifications', to: '/certifications' },
  { label: 'Contact',      to: '/contact' },
]

export default function Navbar({ theme, toggleTheme }) {
  const [open, setOpen]         = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close drawer on route change
  const close = () => setOpen(false)

  const getLinkClass = ({ isActive }) =>
    `${styles.link} ${isActive ? styles.active : ''}`

  const ThemeBtn = () => (
    <button
      className={styles.themeToggle}
      onClick={toggleTheme}
      aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {theme === 'dark' ? '☀️' : '🌙'}
    </button>
  )

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.nav}`}>
        <NavLink to="/" className={styles.logo} onClick={close}>
          <span className={styles.logoAccent}>&lt;</span>RY
          <span className={styles.logoAccent}>/&gt;</span>
        </NavLink>

        <nav className={`${styles.links} ${open ? styles.open : ''}`} aria-label="Main navigation">
          {links.map(l => (
            <NavLink
              key={l.label}
              to={l.to}
              className={getLinkClass}
              onClick={close}
              end={l.to === '/'}
            >
              {l.label}
            </NavLink>
          ))}
          <span className={styles.mobileTheme}><ThemeBtn /></span>
          <a
            href={resume}
            target="_blank"
            rel="noopener noreferrer"
            className={`btn btn-primary ${styles.resumeBtn}`}
            onClick={close}
          >
            Resume
          </a>
        </nav>

        <div className={styles.rightControls}>
          <span className={styles.desktopTheme}><ThemeBtn /></span>
          <button
            className={styles.hamburger}
            onClick={() => setOpen(o => !o)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <FiX size={22} /> : <FiMenu size={22} />}
          </button>
        </div>
      </div>

      {open && <div className={styles.backdrop} onClick={close} />}
    </header>
  )
}
