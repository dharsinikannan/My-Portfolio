import { motion } from 'framer-motion'
import styles from './SectionWrapper.module.css'

export function SectionWrapper({ id, className = '', children, delay = 0 }) {
  return (
    <motion.section
      id={id}
      className={`${styles.section} ${className}`}
      initial={{ opacity: 0, y: 32 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut', delay }}
    >
      {children}
    </motion.section>
  )
}
