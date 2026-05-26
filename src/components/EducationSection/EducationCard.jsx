import { motion } from 'framer-motion'
import styles from './EducationCard.module.css'

export function EducationCard({ entry, index }) {
  return (
    <motion.div
      className={styles.card}
      initial={{ opacity: 0, x: -24 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-60px 0px' }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
    >
      <div className={styles.dot} />
      <div className={styles.content}>
        <div className={styles.header}>
          <h3 className={styles.degree}>{entry.degree}</h3>
          <span className={styles.years}>{entry.years}</span>
        </div>
        <p className={styles.institution}>{entry.institution}</p>
        <span className={styles.score}>{entry.score}</span>
      </div>
    </motion.div>
  )
}
