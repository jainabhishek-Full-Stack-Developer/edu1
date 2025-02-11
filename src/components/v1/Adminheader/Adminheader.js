"use client";
import styles from "./page.module.css";
import { useState, useRef, useEffect } from "react";
import { FaBell, FaBars, FaDollarSign } from "react-icons/fa";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { RiAdminFill } from "react-icons/ri";
import { GiTeacher } from "react-icons/gi";
import { PiStudent } from "react-icons/pi";
import { SiCoursera, SiSession, SiGoogleclassroom } from "react-icons/si";
import { BiVideoRecording } from "react-icons/bi";
import { IoMdNotificationsOutline } from "react-icons/io";
import { MdOutlineRateReview, MdOutlineSupportAgent } from "react-icons/md";



const Adminheader = ({ pageHeading }) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [notificationOpen, setNotificationOpen] = useState(false);
    const [adminMobileSidebar, setAdminMobileSidebar] = useState(false);
    const userName = "John Doe";
    const initial = userName.charAt(0).toUpperCase();
    const router = useRouter();
    const notificationRef = useRef(null);
    const adminUrl = process.env.NEXT_PUBLIC_ADMIN_URL;
    const sidebarMRef = useRef(null);

    const notifications = [
        { id: 1, message: "New assignment uploaded", time: "2 mins ago" },
        { id: 2, message: "Your test is scheduled for tomorrow", time: "1 hour ago" },
        { id: 3, message: "Course update available", time: "5 hours ago" },
    ];


    const handleAdminLogout = (e) => {
        e.preventDefault();
        router.push(`${adminUrl}`);

    }

    // Close dropdown if clicked outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (notificationRef.current && !notificationRef.current.contains(event.target)) {
                setNotificationOpen(false);
            }
            if (sidebarMRef.current && !sidebarMRef.current.contains(event.target)) {
                setAdminMobileSidebar(false);
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
                <div className={styles.adminHeaderWrapper}>
                    <div className={styles.adminHeaderLeftSide}>
                        <div>
                            <button type="button" onClick={() => setAdminMobileSidebar(!adminMobileSidebar)}><FaBars size={25} /></button>
                        </div>
                        <div className={styles.leftSection}>
                            <h4>{pageHeading}</h4>
                        </div>
                    </div>
                    <div className={styles.rightSection}>
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
                        <div className={styles.profileWrapper} onClick={() => setDropdownOpen(!dropdownOpen)}>
                            <div className={styles.avatar}>{initial}</div>
                            {dropdownOpen && (
                                <div className={styles.dropdown}>
                                    <button onClick={handleAdminLogout}>Logout</button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </header>
            {
                adminMobileSidebar && (
                    <section className={styles.adminPannelMobileSidebar} ref={sidebarMRef}>
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
                    </section>
                )
            }

        </>
    )
}

export default Adminheader;
