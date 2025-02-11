import Link from "next/link";
import styles from "./page.module.css";
import Logo from "@/components/Logo/Logo";

const Header = () => {

  return (
    <header className={styles.header}>
      <Logo />
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li><Link href="/" aria-label="Go to Home">Home</Link></li>
          <li><Link href="/courses" aria-label="Browse Courses">Courses</Link></li>
          <li><Link href="/about-us" aria-label="Learn About Us">About</Link></li>
          <li><Link href="/contact-us" aria-label="Contact Us">Contact</Link></li>
        </ul>
        <div className={styles.auth}>
          <Link href="/sign-in" className={styles.loginBtn}>Login</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
