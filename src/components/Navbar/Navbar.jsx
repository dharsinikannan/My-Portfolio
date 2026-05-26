import { NavLink } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import styles from './Navbar.module.css'

const NAV_LINKS = [
  { label: 'Home',           to: '/' },
  { label: 'About',          to: '/about' },
  { label: 'Skills',         to: '/skills' },
  { label: 'Projects',       to: '/projects' },
  { label: 'Certifications', to: '/certifications' },
  { label: 'Education',      to: '/education' },
  { label: 'Contact',        to: '/contact' },
]

export function Navbar({ menuOpen, onMenuToggle }) {
  const getLinkClass = ({ isActive }) =>
    `${styles.link} ${isActive ? styles.active : ''}`

  const getMobileLinkClass = ({ isActive }) =>
    `${styles.mobileLink} ${isActive ? styles.active : ''}`

  return (
    <nav className={styles.navbar}>
      <div className={styles.inner}>
        {/* Logo */}
        <NavLink to="/" className={styles.brand} onClick={() => menuOpen && onMenuToggle()}>
          Portfolio
        </NavLink>

        {/* Desktop links */}
        <ul className={styles.links}>
          {NAV_LINKS.map(({ label, to }) => (
            <li key={to}>
              <NavLink to={to} className={getLinkClass} end={to === '/'}>
                {label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Hamburger */}
        <button
          className={styles.hamburger}
          onClick={onMenuToggle}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          <span className={`${styles.bar} ${menuOpen ? styles.barOpen1 : ''}`} />
          <span className={`${styles.bar} ${menuOpen ? styles.barOpen2 : ''}`} />
          <span className={`${styles.bar} ${menuOpen ? styles.barOpen3 : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.ul
            className={styles.mobileMenu}
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2 }}
          >
            {NAV_LINKS.map(({ label, to }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  className={getMobileLinkClass}
                  end={to === '/'}
                  onClick={onMenuToggle}
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </nav>
  )
}
