import Link from 'next/link';
import styles from '../styles/index.module.css';

const Navbar = () => (
  <nav className={styles.navbar}>
    <div className={styles.logoContainer}>
      <img src="/nawy_logo.png" alt="Logo" className={styles.logo} />
    </div>
    <div className={styles.navLinks}>
      <Link className={styles.navLink} href="/">
        <a className={styles.navLink}>Home</a>
      </Link>
    </div>
  </nav>
);

export default Navbar;