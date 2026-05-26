import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { PROJECTS } from '../../data/projects.data'
import { ProjectCard } from './ProjectCard'
import { SectionWrapper } from '../shared/SectionWrapper'
import styles from './ProjectsSection.module.css'

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const cardVariants = {
  hidden:  { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export function ProjectsSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px 0px' })

  return (
    <SectionWrapper id="projects">
      <h2 className="section-title">Projects</h2>

      <motion.div
        ref={ref}
        className={styles.grid}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        {PROJECTS.map(project => (
          <motion.div key={project.name} variants={cardVariants} style={{ height: '100%' }}>
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  )
}
