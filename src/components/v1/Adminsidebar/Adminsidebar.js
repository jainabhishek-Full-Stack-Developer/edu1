import Link from "next/link";
import styles from "./page.module.css";
import { RiAdminFill } from "react-icons/ri";
import { GiTeacher } from "react-icons/gi";
import { PiStudent } from "react-icons/pi";
import { SiCoursera, SiSession, SiGoogleclassroom } from "react-icons/si";
import { BiVideoRecording } from "react-icons/bi";
import { IoMdNotificationsOutline } from "react-icons/io";
import { MdOutlineRateReview, MdOutlineSupportAgent } from "react-icons/md";
import { FaDollarSign } from "react-icons/fa";

const Adminsidebar = () => {
    const adminUrl = process.env.NEXT_PUBLIC_ADMIN_URL;

    return (
        <aside className={styles.sideMenu}>
            <div className={styles.brandSection}>
                <div className={styles.sidemenuLogo}>
                    <Link href={`${adminUrl}dashboard`}>CourseHive</Link>
                </div>
            </div>
            <div className={styles.dashboardLink}>
                <Link href={`${adminUrl}dashboard`}>
                    <span >Dashboard</span>
                </Link>
            </div>
            <div className={styles.dashboardTitle}>
                <Link href={`${adminUrl}manage-admin`}>
                    <RiAdminFill className={styles.icon} />
                    <span>Admin</span>
                </Link>
            </div>
            <div className={styles.dashboardTitle}>
                <Link href={`${adminUrl}manage-teacher`}>
                    <GiTeacher className={styles.icon} />
                    <span>Teacher</span>
                </Link>
            </div>
            <div className={styles.dashboardTitle}>
                <Link href={`${adminUrl}manage-student`}>
                    <PiStudent className={styles.icon} />
                    <span>Student</span>
                </Link>
            </div>
            <div className={styles.dashboardTitle}>
                <Link href={`${adminUrl}manage-course-content`}>
                    <SiCoursera className={styles.icon} />
                    <span>Course</span>
                </Link>
            </div>
            <div className={styles.dashboardTitle}>
                <Link href={`${adminUrl}manage-course-session`}>
                    <SiSession className={styles.icon} />
                    <span>Session</span>
                </Link>
            </div>
            <div className={styles.dashboardTitle}>
                <Link href={`${adminUrl}manage-class`}>
                    <SiGoogleclassroom className={styles.icon} />
                    <span>Classes</span>
                </Link>
            </div>
            <div className={styles.dashboardTitle}>
                <Link href={`${adminUrl}manage-support`}>
                    <MdOutlineSupportAgent className={styles.icon} />
                    <span>Support</span>
                </Link>
            </div>
            <div className={styles.dashboardTitle}>
                <Link href={`${adminUrl}manage-recording`}>
                    <BiVideoRecording className={styles.icon} />
                    <span>Recording</span>
                </Link>
            </div>
            <div className={styles.dashboardTitle}>
                <Link href={`${adminUrl}manage-notification`}>
                    <IoMdNotificationsOutline className={styles.icon} />
                    <span>Notification</span>
                </Link>
            </div>
            <div className={styles.dashboardTitle}>
                <Link href={`${adminUrl}manage-review`}>
                    <MdOutlineRateReview className={styles.icon} />
                    <span>Reviews</span>
                </Link>
            </div>
            <div className={styles.dashboardTitle}>
                <Link href={`${adminUrl}manage-payment`}>
                    <FaDollarSign className={styles.icon} />
                    <span>Payment</span>
                </Link>
            </div>
        </aside>
    )
}

export default Adminsidebar;
