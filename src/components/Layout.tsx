import { Outlet } from 'react-router-dom';
import Nav from './Nav';
import styles from './Layout.module.css';

export default function Layout() {
  return (
    <div className={styles.shell}>
      <Nav />
      <main className={`container ${styles.main}`}>
        <Outlet />
      </main>
      <footer className={styles.footer}>
        <div className="container">
          訓読み first · a personal nihongo collection
        </div>
      </footer>
    </div>
  );
}
