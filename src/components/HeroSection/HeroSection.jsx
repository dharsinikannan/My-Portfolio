import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { ParticleBackground } from './ParticleBackground'
import { PhotoPlaceholder } from './PhotoPlaceholder'
import { CTAButton } from './CTAButton'
import profilePhoto from '../../assets/profile.jpeg'
import styles from './HeroSection.module.css'

const ROLES = [
  'Software Engineer',
  'Data Engineer',
  'Full-Stack Developer',
  'Cloud Enthusiast',
]

function TypewriterText({ words }) {
  const [index, setIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = words[index]
    let timeout

    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80)
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 1800)
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 45)
    } else if (deleting && displayed.length === 0) {
      setDeleting(false)
      setIndex((index + 1) % words.length)
    }

    return () => clearTimeout(timeout)
  }, [displayed, deleting, index, words])

  return (
    <span className={styles.typewriter}>
      {displayed}
      <span className={styles.cursor}>|</span>
    </span>
  )
}

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.18 } },
}

const itemVariants = {
  hidden:  { opacity: 0, y: 48 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}

const photoVariants = {
  hidden:  { opacity: 0, scale: 0.8, rotate: -4 },
  visible: { opacity: 1, scale: 1, rotate: 0, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.2 } },
}

export function HeroSection() {
  const navigate = useNavigate()

  return (
    <section className={styles.hero}>
      <ParticleBackground count={7} />

      {/* Decorative rings */}
      <div className={styles.ring1} />
      <div className={styles.ring2} />

      <div className={styles.content}>
        <motion.div
          className={styles.textSide}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className={styles.badge}>
            ✦ Available for opportunities
          </motion.div>

          <motion.h1 variants={itemVariants} className={styles.name}>
            Deepadharsini K
          </motion.h1>

          <motion.h2 variants={itemVariants} className={styles.roleRow}>
            <TypewriterText words={ROLES} />
          </motion.h2>

          <motion.p variants={itemVariants} className={styles.tagline}>
            Building real-time pipelines, cloud-native systems, and full-stack apps
            that turn data into decisions.
          </motion.p>

          <motion.div variants={itemVariants} className={styles.stats}>
            <div className={styles.stat}>
              <span className={styles.statNum}>4+</span>
              <span className={styles.statLabel}>Projects</span>
            </div>
            <div className={styles.statDivider} />
            <div className={styles.stat}>
              <span className={styles.statNum}>2</span>
              <span className={styles.statLabel}>Certifications</span>
            </div>
            <div className={styles.statDivider} />
            <div className={styles.stat}>
              <span className={styles.statNum}>25+</span>
              <span className={styles.statLabel}>Skills</span>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className={styles.ctas}>
            <CTAButton
              href="/contact"
              label="Get in Touch"
              variant="primary"
              onClick={e => { e.preventDefault(); navigate('/contact') }}
            />
            <CTAButton
              href="https://github.com/dharsinikannan"
              label="View GitHub"
              variant="outline"
              external
            />
          </motion.div>
        </motion.div>

        <motion.div
          className={styles.photoSide}
          variants={photoVariants}
          initial="hidden"
          animate="visible"
        >
          <div className={styles.photoFrame}>
            <div className={styles.photoGlow} />
            <PhotoPlaceholder src={profilePhoto} size={280} />
          </div>
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        className={styles.scrollHint}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <motion.div
          className={styles.scrollLine}
          animate={{ scaleY: [0, 1, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.div>
    </section>
  )
}
