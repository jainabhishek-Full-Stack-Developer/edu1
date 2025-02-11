import Link from "next/link";
import styles from "./page.module.css";
import { SiCoursera, SiGoogleclassroom } from "react-icons/si";
import { IoMdNotificationsOutline } from "react-icons/io";


const Teacherpannelsidebar = () => {
    const teacherUrl = process.env.NEXT_PUBLIC_TEACHER_URL;

    return (
        <aside className={styles.sideMenu}>
            <div className={styles.brandSection}>
                <div className={styles.sidemenuLogo}>
                    <Link href={`${teacherUrl}teacher-dashboard`}>CourseHive</Link>
                </div>
            </div>
            <div className={styles.dashboardLink}>
                <Link href={`${teacherUrl}teacher-dashboard`}>
                    <span >Dashboard</span>
                </Link>
            </div>
            <div className={styles.dashboardTitle}>
                <Link href={`${teacherUrl}manage-teacher-course`}>
                    <SiCoursera className={styles.icon} />
                    <span>Course</span>
                </Link>
            </div>
            <div className={styles.dashboardTitle}>
                <Link href={`${teacherUrl}manage-teacher-classes`}>
                    <SiGoogleclassroom className={styles.icon} />
                    <span>Classes</span>
                </Link>
            </div>
            <div className={styles.dashboardTitle}>
                <Link href={`${teacherUrl}manage-teacher-notification`}>
                    <IoMdNotificationsOutline className={styles.icon} />
                    <span>Notification</span>
                </Link>
            </div>
        </aside>
    )
}

export default Teacherpannelsidebar
