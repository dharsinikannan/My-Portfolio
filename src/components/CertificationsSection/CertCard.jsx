import { motion } from 'framer-motion'
import styles from './CertCard.module.css'

export function CertCard({ cert }) {
  const inner = (
    <motion.div
      className={`${styles.card} ${cert.credentialUrl ? styles.clickable : ''}`}
      whileHover={{ scale: 1.02, borderColor: 'var(--accent)' }}
      transition={{ duration: 0.2 }}
    >
      <div className={styles.icon}>🏆</div>
      <div className={styles.info}>
        <h3 className={styles.name}>{cert.name}</h3>
        <p className={styles.issuer}>{cert.issuer}</p>
        {cert.credentialUrl && (
          <span className={styles.viewBadge}>View Credential ↗</span>
        )}
      </div>
    </motion.div>
  )

  if (cert.credentialUrl) {
    return (
      <a
        href={cert.credentialUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.link}
      >
        {inner}
      </a>
    )
  }

  return inner
}
