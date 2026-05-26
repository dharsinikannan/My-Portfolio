import { motion } from 'framer-motion'
import styles from './SocialLink.module.css'

export function SocialLink({ href, label, icon }) {
  return (
    <motion.a
      href={href}
      aria-label={label}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.link}
      whileHover={{ scale: 1.2, color: 'var(--accent)' }}
      transition={{ duration: 0.15 }}
    >
      {icon}
    </motion.a>
  )
}
