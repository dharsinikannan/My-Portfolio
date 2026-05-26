import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { SKILL_CATEGORIES } from '../../data/skills.data'
import { SkillBadge } from './SkillBadge'
import { SectionWrapper } from '../shared/SectionWrapper'
import styles from './SkillsSection.module.css'

const CATEGORY_ICONS = {
  'Data Engineering': '⚡',
  'Cloud & DevOps':   '☁️',
  'Databases':        '🗄️',
  'Programming':      '💻',
  'Full-Stack':       '🌐',
  'Tools':            '🛠️',
}

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const categoryVariants = {
  hidden:  { opacity: 0, y: 30, scale: 0.97 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: [0.22,1,0.36,1] } },
}

export function SkillsSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px 0px' })

  return (
    <SectionWrapper id="skills">
      <h2 className="section-title">Skills</h2>

      <motion.div
        ref={ref}
        className={styles.grid}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        {SKILL_CATEGORIES.map(category => (
          <motion.div
            key={category.label}
            className={styles.category}
            variants={categoryVariants}
          >
            <div className={styles.categoryHeader}>
              <span className={styles.categoryIcon}>{CATEGORY_ICONS[category.label]}</span>
              <h3 className={styles.categoryLabel}>{category.label}</h3>
            </div>
            <div className={styles.badges}>
              {category.skills.map((skill, i) => (
                <SkillBadge key={skill.name} name={skill.name} icon={skill.icon} delay={i * 0.05} />
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  )
}
