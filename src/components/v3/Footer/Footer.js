import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import Link from 'next/link';
import styles from './page.module.css'; 

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContainer}>
                <div className={styles.footerSection}>
                    <h3>About CourseHive</h3>
                    <p>Empowering students with the skills they need to succeed in today's fast-paced world. We provide flexible, career-focused learning opportunities that fit your schedule.</p>
                </div>

                <div className={styles.footerSection}>
                    <h3>Quick Links</h3>
                    <ul>
                        <li><Link href="/about-us">About Us</Link></li>
                        <li><Link href="/courses">Our Courses</Link></li>
                        <li><Link href="/contact-us">Contact Us</Link></li>
                        <li><Link href="/">Privacy Policy</Link></li>
                        <li><Link href="/">Terms & Conditions</Link></li>
                    </ul>
                </div>

                <div className={styles.footerSection}>
                    <h3>Follow Us</h3>
                    <div className={styles.socialIcons}>
                        <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></Link>
                        <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></Link>
                        <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></Link>
                        <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></Link>
                    </div>
                </div>
            </div>

            <div className={styles.footerBottom}>
                <p>&copy; {new Date().getFullYear()} CourseHive. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;
