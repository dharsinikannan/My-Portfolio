import { CERTIFICATIONS } from '../../data/certifications.data'
import { CertCard } from './CertCard'
import { SectionWrapper } from '../shared/SectionWrapper'
import styles from './CertificationsSection.module.css'

export function CertificationsSection() {
  return (
    <SectionWrapper id="certifications">
      <h2 className="section-title">Certifications</h2>

      <div className={styles.list}>
        {CERTIFICATIONS.map(cert => (
          <CertCard key={cert.name} cert={cert} />
        ))}
      </div>
    </SectionWrapper>
  )
}
