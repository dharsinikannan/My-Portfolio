import styles from './ParticleBackground.module.css'

export function ParticleBackground({ count = 6 }) {
  const blobs = Array.from({ length: count }, (_, i) => ({
    key: i,
    style: {
      '--duration': `${7 + i * 1.5}s`,
      '--delay':    `${i * 0.8}s`,
      '--tx':       `${(i % 2 === 0 ? 1 : -1) * (20 + i * 8)}px`,
      '--ty':       `${-30 - i * 10}px`,
      width:  `${180 + i * 40}px`,
      height: `${180 + i * 40}px`,
      left:   `${10 + i * 14}%`,
      top:    `${15 + (i % 3) * 25}%`,
      background: i % 3 === 0
        ? `rgba(139, 94, 60, 0.18)`
        : i % 3 === 1
        ? `rgba(196, 149, 106, 0.22)`
        : `rgba(107, 143, 113, 0.15)`,
    },
  }))

  return (
    <div className={styles.container} aria-hidden="true">
      {blobs.map(({ key, style }) => (
        <span key={key} className={styles.blob} style={style} />
      ))}
    </div>
  )
}
