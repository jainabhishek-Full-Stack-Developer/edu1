"use client";
import Link from "next/link";
import styles from "./page.module.css";
import Logo from "@/components/Logo/Logo";
import { FaBars } from "react-icons/fa";
import { useState, useRef, useEffect } from "react";

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const sidebarRef = useRef(null);

  // Function to close sidebar when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setIsSidebarOpen(false);
      }
    };

    if (isSidebarOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isSidebarOpen]);

  return (
    <>
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
          <div className={styles.studentPannelHeader}>
            <button type="button" onClick={() => setIsSidebarOpen(true)}>
              <FaBars size={23} />
            </button>
          </div>
        </nav>
      </header>

      {/* Sidebar */}
      <aside
        ref={sidebarRef}
        className={`${styles.mobileSidebar} ${isSidebarOpen ? styles.open : ""}`}
      >
        <div className={styles.sidebarHeader}>
          <Logo />
        </div>
        <nav className={styles.mobileNav}>
          <ul className={styles.mobileNavList}>
            <li><Link href="/" aria-label="Go to Home" onClick={() => setIsSidebarOpen(false)}>Home</Link></li>
            <li><Link href="/courses" aria-label="Browse Courses" onClick={() => setIsSidebarOpen(false)}>Courses</Link></li>
            <li><Link href="/about-us" aria-label="Learn About Us" onClick={() => setIsSidebarOpen(false)}>About</Link></li>
            <li><Link href="/contact-us" aria-label="Contact Us" onClick={() => setIsSidebarOpen(false)}>Contact</Link></li>
          </ul>
          <div className={styles.mobileAuth}>
            <Link href="/sign-in" className={styles.loginBtn} onClick={() => setIsSidebarOpen(false)}>Login</Link>
          </div>
        </nav>
      </aside>
    </>
  );
};

export default Header;
