import { motion } from 'framer-motion'
import { FiMail, FiPhone, FiMapPin, FiGithub, FiLinkedin, FiSend } from 'react-icons/fi'
import styles from './Contact.module.css'

const contactItems = [
  {
    icon: <FiMail size={18} />,
    label: 'Email',
    value: 'ry9537898@gmail.com',
    href: 'https://mail.google.com/mail/u/0/?view=cm&fs=1&to=ry9537898@gmail.com',
    external: true,
  },
  {
    icon: <FiPhone size={18} />,
    label: 'Phone',
    value: '+91 95378 98027',
    href: 'https://wa.me/919537898027',
    external: true,
  },
  {
    icon: <FiMapPin size={18} />,
    label: 'Location',
    value: 'Palanpur, Gujarat, India',
    href: null,
    external: false,
  },
]

const socials = [
  {
    icon: <FiGithub size={20} />,
    label: 'GitHub',
    handle: 'ry9537898-alt',
    href: 'https://github.com/ry9537898-alt',
  },
  {
    icon: <FiLinkedin size={20} />,
    label: 'LinkedIn',
    handle: 'Ritesh Yadav',
    href: 'https://www.linkedin.com/in/ritesh-yadav',
  },
]

export default function Contact() {
  return (
    <section id="contact" className={styles.section}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="section-label">Get in touch</p>
          <h2 className="section-title">Contact Me</h2>
          <div className="section-divider" />
        </motion.div>

        <div className={styles.grid}>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <p className={styles.intro}>
              I&apos;m open to internship opportunities, freelance projects and
              collaborations. Feel free to reach out — I&apos;ll get back to you
              as soon as possible.
            </p>

            <div className={styles.contactList}>
              {contactItems.map(({ icon, label, value, href, external }) => {
                const Tag = href ? 'a' : 'div'
                const linkProps = href ? {
                  href,
                  ...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {}),
                } : {}
                return (
                  <Tag
                    key={label}
                    className={`${styles.contactItem} ${href ? styles.contactItemLink : ''}`}
                    {...linkProps}
                  >
                    <span className={styles.contactIcon}>{icon}</span>
                    <div className={styles.contactText}>
                      <p className={styles.contactLabel}>{label}</p>
                      <p className={styles.contactValue}>{value}</p>
                    </div>
                  </Tag>
                )
              })}
            </div>

            <div className={styles.socials}>
              {socials.map(({ icon, label, handle, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`card ${styles.socialCard}`}
                >
                  <span className={styles.socialIcon}>{icon}</span>
                  <div>
                    <p className={styles.socialLabel}>{label}</p>
                    <p className={styles.socialHandle}>{handle}</p>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <form
              className={`card ${styles.form}`}
              onSubmit={e => {
                e.preventDefault()
                window.location.href = `mailto:ry9537898@gmail.com?subject=${encodeURIComponent(e.target.subject.value)}&body=${encodeURIComponent(e.target.message.value)}`
              }}
            >
              <h3 className={styles.formTitle}>Send a Message</h3>

              <div className={styles.field}>
                <label htmlFor="name">Name</label>
                <input id="name" name="name" type="text" placeholder="Your name" required />
              </div>

              <div className={styles.field}>
                <label htmlFor="email">Email</label>
                <input id="email" name="email" type="email" placeholder="your@email.com" required />
              </div>

              <div className={styles.field}>
                <label htmlFor="subject">Subject</label>
                <input id="subject" name="subject" type="text" placeholder="Subject" required />
              </div>

              <div className={styles.field}>
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows={4} placeholder="Your message..." required />
              </div>

              <button type="submit" className={`btn btn-primary ${styles.submitBtn}`}>
                <FiSend size={15} /> Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
