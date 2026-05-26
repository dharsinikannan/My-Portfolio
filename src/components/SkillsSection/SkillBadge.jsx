import { motion } from 'framer-motion'
import styles from './SkillBadge.module.css'

export function SkillBadge({ name, icon, delay = 0 }) {
  return (
    <motion.span
      className={styles.badge}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35, delay, ease: [0.22,1,0.36,1] }}
      whileHover={{ scale: 1.1, y: -2, boxShadow: '0 6px 20px rgba(122,79,45,0.2)' }}
    >
      {icon && <span className={styles.icon}>{icon}</span>}
      {name}
    </motion.span>
  )
}
