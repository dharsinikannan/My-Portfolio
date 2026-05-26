import { motion } from 'framer-motion'
import styles from './CTAButton.module.css'

export function CTAButton({ href, label, variant = 'primary', external = false, onClick }) {
  const externalProps = external
    ? { target: '_blank', rel: 'noopener noreferrer' }
    : {}

  return (
    <motion.a
      href={href}
      className={`${styles.btn} ${variant === 'outline' ? styles.outline : styles.primary}`}
      whileHover={{ scale: 1.05, opacity: 0.9 }}
      whileTap={{ scale: 0.97 }}
      transition={{ duration: 0.1 }}
      onClick={onClick}
      {...externalProps}
    >
      {label}
    </motion.a>
  )
}
