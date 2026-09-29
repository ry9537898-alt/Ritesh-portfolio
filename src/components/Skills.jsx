import { motion } from 'framer-motion'
import {
  FaJava, FaJs, FaHtml5, FaCss3Alt, FaReact,
  FaNodeJs, FaGitAlt, FaGithub, FaDatabase,
} from 'react-icons/fa'
import {
  SiExpress, SiMongodb, SiMysql, SiVercel,
  SiFlutter, SiDart,
} from 'react-icons/si'
import { VscVscode } from 'react-icons/vsc'
import { TbApi } from 'react-icons/tb'
import styles from './Skills.module.css'

const categories = [
  {
    title: 'Programming',
    skills: [
      { name: 'Java', icon: <FaJava /> },
      { name: 'JavaScript', icon: <FaJs /> },
      { name: 'SQL', icon: <FaDatabase /> },
    ],
  },
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML5', icon: <FaHtml5 /> },
      { name: 'CSS3', icon: <FaCss3Alt /> },
      { name: 'React.js', icon: <FaReact /> },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node.js', icon: <FaNodeJs /> },
      { name: 'Express.js', icon: <SiExpress /> },
      { name: 'REST APIs', icon: <TbApi /> },
    ],
  },
  {
    title: 'Database',
    skills: [
      { name: 'MongoDB', icon: <SiMongodb /> },
      { name: 'MySQL', icon: <SiMysql /> },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', icon: <FaGitAlt /> },
      { name: 'GitHub', icon: <FaGithub /> },
      { name: 'VS Code', icon: <VscVscode /> },
      { name: 'Vercel', icon: <SiVercel /> },
    ],
  },
  {
    title: 'Mobile',
    skills: [
      { name: 'Flutter', icon: <SiFlutter /> },
      { name: 'Dart', icon: <SiDart /> },
    ],
  },
]

export default function Skills() {
  return (
    <section id="skills" className={styles.section}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="section-label">What I work with</p>
          <h2 className="section-title">Technical Skills</h2>
          <div className="section-divider" />
        </motion.div>

        <div className={styles.grid}>
          {categories.map((cat, ci) => (
            <motion.div
              key={cat.title}
              className={`card ${styles.category}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: ci * 0.07 }}
            >
              <h3 className={styles.catTitle}>{cat.title}</h3>
              <div className={styles.skillList}>
                {cat.skills.map(skill => (
                  <div key={skill.name} className={styles.skill}>
                    <span className={styles.skillIcon}>{skill.icon}</span>
                    <span className={styles.skillName}>{skill.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
