import { NavLink } from 'react-router-dom';
import styles from './Nav.module.css';

const LINKS = [
  { to: '/', label: 'Home', end: true },
  { to: '/research', label: 'Research', end: false },
  { to: '/fun', label: 'Fun', end: false },
  { to: '/settings', label: 'Settings', end: false },
  { to: '/about', label: 'About', end: false },
];

export default function Nav() {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <NavLink to="/" className={styles.brand}>
          <span className={`${styles.brandJa} jp`}>日本語</span>
          <span className={styles.brandEn}>nihongo</span>
        </NavLink>
        <nav className={styles.nav}>
          {LINKS.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.end}
              className={({ isActive }) =>
                `${styles.link} ${isActive ? styles.active : ''}`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}
