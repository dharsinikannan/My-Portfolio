import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Navbar } from './components/Navbar/Navbar'
import { HeroSection } from './components/HeroSection/HeroSection'
import { AboutSection } from './components/AboutSection/AboutSection'
import { SkillsSection } from './components/SkillsSection/SkillsSection'
import { ProjectsSection } from './components/ProjectsSection/ProjectsSection'
import { CertificationsSection } from './components/CertificationsSection/CertificationsSection'
import { EducationSection } from './components/EducationSection/EducationSection'
import { ContactSection } from './components/ContactSection/ContactSection'

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div style={{ background: 'var(--bg-primary)', minHeight: '100vh' }}>
      <Navbar menuOpen={menuOpen} onMenuToggle={() => setMenuOpen(o => !o)} />
      <main style={{ paddingTop: '64px' }}>
        <Routes>
          <Route path="/"               element={<HeroSection />} />
          <Route path="/about"          element={<AboutSection />} />
          <Route path="/skills"         element={<SkillsSection />} />
          <Route path="/projects"       element={<ProjectsSection />} />
          <Route path="/certifications" element={<CertificationsSection />} />
          <Route path="/education"      element={<EducationSection />} />
          <Route path="/contact"        element={<ContactSection />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
