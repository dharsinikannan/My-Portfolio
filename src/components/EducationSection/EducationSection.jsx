import { EDUCATION } from '../../data/education.data'
import { EducationCard } from './EducationCard'
import { SectionWrapper } from '../shared/SectionWrapper'
import styles from './EducationSection.module.css'

export function EducationSection() {
  return (
    <SectionWrapper id="education">
      <h2 className="section-title">Education</h2>

      <div className={styles.timeline}>
        {EDUCATION.map((entry, index) => (
          <EducationCard key={entry.degree} entry={entry} index={index} />
        ))}
      </div>
    </SectionWrapper>
  )
}
