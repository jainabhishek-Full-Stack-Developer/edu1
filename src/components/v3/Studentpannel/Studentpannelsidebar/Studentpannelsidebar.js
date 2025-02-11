import Link from "next/link";
import styles from "./page.module.css";
import { SiCoursera, SiGoogleclassroom } from "react-icons/si";
import { IoMdNotificationsOutline } from "react-icons/io";
import { MdOutlineRateReview, MdOutlineSupportAgent } from "react-icons/md";


const Studentpannelsidebar = () => {
    return (
        <aside className={styles.studentPannelSideMenu}>
            <div className={styles.studentPannelBrandSection}>
                <div className={styles.stduentPannelLogo}>
                    <Link href="/student-dashboard" aria-label="CourseHive Home">
                        <span>CourseHive</span>
                    </Link>
                </div>
            </div>
            <div className={styles.studentPannelDashboardLink}>
                <Link href="/student-dashboard">
                    <span >Dashboard</span>
                </Link>
            </div>
            <div className={styles.studentPannelSubmenuContainer}>
                <div className={styles.dashboardTitle}>
                    <Link href="/student-courses">
                        <SiCoursera className={styles.icon} />
                        <span>Enrolled Courses</span>
                    </Link>
                </div>
                <div className={styles.dashboardTitle}>
                    <Link href="/student-classes">
                        <SiGoogleclassroom className={styles.icon} />
                        <span>Classes</span>
                    </Link>
                </div>
                <div className={styles.dashboardTitle}>
                    <Link href="/student-support">
                        <MdOutlineSupportAgent className={styles.icon} />
                        <span>Support</span>
                    </Link>
                </div>
                <div className={styles.dashboardTitle}>
                    <Link href="/student-notification">
                        <IoMdNotificationsOutline className={styles.icon} />
                        <span>Notification</span>
                    </Link>
                </div>
                <div className={styles.dashboardTitle}>
                    <Link href="/student-review">
                        <MdOutlineRateReview className={styles.icon} />
                        <span>Reviews</span>
                    </Link>
                </div>
            </div>
        </aside>
    )
}

export default Studentpannelsidebar;
