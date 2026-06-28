import { Link } from 'react-router-dom';
import type { Module } from '../types';
import styles from './ModuleCard.module.css';

export default function ModuleCard({ module }: { module: Module }) {
  const count = module.entries.length;
  return (
    <Link to={`/research/${module.id}`} className={styles.card}>
      <div className={styles.top}>
        <span className={`${styles.ja} jp`}>{module.titleJa}</span>
        <span className={styles.count}>
          {count > 0 ? `${count} entries` : 'coming soon'}
        </span>
      </div>
      <h3 className={styles.title}>{module.title}</h3>
      <p className={styles.desc}>{module.description}</p>
      <ul className={styles.subs}>
        {module.submodules.map((s) => (
          <li key={s.id} className={styles.sub}>
            {s.title}
          </li>
        ))}
      </ul>
    </Link>
  );
}
