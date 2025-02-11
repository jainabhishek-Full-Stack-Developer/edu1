import styles from "./page.module.css";
import Link from "next/link";

const Logo = () => {
    const adminUrl = process.env.NEXT_PUBLIC_ADMIN_URL;
    return (
        <div className={styles.logo}>
            <Link href={adminUrl} aria-label="CourseHive Home">
                <span>CourseHive</span>
            </Link>
        </div>

    )
}

export default Logo;
