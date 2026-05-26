import styles from './PhotoPlaceholder.module.css'

export function PhotoPlaceholder({ src, alt = 'Deepadharsini K', size = 220 }) {
  const style = { width: size, height: size }

  if (src) {
    return (
      <img
        src={src}
        alt={alt}
        className={styles.photo}
        style={style}
        loading="lazy"
      />
    )
  }

  return (
    <div className={styles.placeholder} style={style} aria-label={alt}>
      <span className={styles.initials}>DK</span>
    </div>
  )
}
