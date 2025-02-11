"use client";
import styles from "./page.module.css";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { FaBell } from "react-icons/fa";
import { FaBars } from "react-icons/fa6";
import { SiCoursera, SiGoogleclassroom } from "react-icons/si";
import { IoMdNotificationsOutline } from "react-icons/io";
import { MdOutlineRateReview, MdOutlineSupportAgent } from "react-icons/md";
import Link from "next/link";

const StudentpannelHeader = ({ studentpannelHeading }) => {
    const [studentDropdownOpen, setStudentDropdownOpen] = useState(false);
    const [notificationOpen, setNotificationOpen] = useState(false);
    const userName = "John Doe";
    const initial = userName.charAt(0).toUpperCase();
    const router = useRouter();
    const notificationRef = useRef(null);
    const sidebarRef = useRef(null);
    const [studentMobileSidebar, setStudentMobileSidebar] = useState(false);

    const notifications = [
        { id: 1, message: "New assignment uploaded", time: "2 mins ago" },
        { id: 2, message: "Your test is scheduled for tomorrow", time: "1 hour ago" },
        { id: 3, message: "Course update available", time: "5 hours ago" },
    ];

    const handleStudentLogout = (e) => {
        e.preventDefault();
        router.push('/');
    };

    // Close dropdown if clicked outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (notificationRef.current && !notificationRef.current.contains(event.target)) {
                setNotificationOpen(false);
            }
            if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
                setStudentMobileSidebar(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <>
            <header>
                <div className={styles.studentPannelHeaderWrapper}>
                    <div className={styles.studentPannelHeaderLeftContainer}>
                        <div>
                            <button type="button" onClick={() => setStudentMobileSidebar(!studentMobileSidebar)}><FaBars size={25} /></button>
                        </div>
                        <div className={styles.studentPannelLeftSection}>
                            <h4>{studentpannelHeading}</h4>
                        </div>
                    </div>
                    <div className={styles.studentPannelRightSection}>
                        <div className={styles.notificationWrapper} ref={notificationRef}>
                            <button
                                className={styles.bellButton}
                                aria-label="Notifications"
                                onClick={() => setNotificationOpen(!notificationOpen)}
                            >
                                <FaBell size={28} className={styles.bellIcon} />
                                {notifications.length > 0 && <span className={styles.badge}>{notifications.length}</span>}
                            </button>

                            {notificationOpen && (
                                <div className={styles.notificationDropdown}>
                                    <div className={styles.notificationHeader}>Notifications</div>
                                    {notifications.length > 0 ? (
                                        notifications.map((notif) => (
                                            <div key={notif.id} className={styles.notificationItem}>
                                                <p>{notif.message}</p>
                                                <span className={styles.time}>{notif.time}</span>
                                            </div>
                                        ))
                                    ) : (
                                        <p className={styles.noNotifications}>No new notifications</p>
                                    )}
                                </div>
                            )}
                        </div>
                        <div className={styles.studentPannelProfileWrapper} onClick={() => setStudentDropdownOpen(!studentDropdownOpen)}>
                            <div className={styles.studentPannelAvatar}>{initial}</div>
                            <div className={`${styles.studentPannelDropdown} ${studentDropdownOpen ? styles.active : ""}`}>
                                <button onClick={handleStudentLogout}>Logout</button>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            {
                studentMobileSidebar && (
                    <section className={styles.studentPannelMobileSidebarBox} ref={sidebarRef}>
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
                    </section>
                )
            }
        </>
    );
};

export default StudentpannelHeader;
