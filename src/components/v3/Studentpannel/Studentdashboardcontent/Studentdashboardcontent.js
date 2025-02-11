import styles from "./page.module.css";
import StudentpanneldashboardCard from "../StudentpanneldashboardCard/StudentpanneldashboardCard";
import Studentpannelwrapper from "../Studentpannelwrapper/Studentpannelwrapper";
import { FaChalkboardTeacher, FaBook, FaClock } from "react-icons/fa";

const Studentdashboardcontent = () => {
    return (
        <Studentpannelwrapper studentpannelHeading="Dashboard">
            <div className={styles.dashboard}>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
                    <StudentpanneldashboardCard
                        title="Total Enrolled Courses"
                        value={8}
                        icon={<FaBook size={25} />}
                        bgcolor="#fdfa72"
                        iconColor="#8B8000"
                    />
                    <StudentpanneldashboardCard
                        title="Completed Classes"
                        value={24}
                        icon={<FaChalkboardTeacher size={25} />}
                        bgcolor="#ADD8E6"
                        iconColor="#1E3A8A"
                    />
                    <StudentpanneldashboardCard
                        title="Pending Classes"
                        value={3}
                        icon={<FaChalkboardTeacher size={25} />}
                        bgcolor="#FFB6C1"
                        iconColor="#8B0000"
                    />
                    <StudentpanneldashboardCard
                        title="Upcoming Classes Today"
                        value={2}
                        icon={<FaClock size={25} />}
                        bgcolor="#98FB98"
                        iconColor="#006400"
                    />
                </div>
                <div className={styles.sectionContainer}>
                    {/* Upcoming Classes */}
                    <div className={styles.section}>
                        <h2>Upcoming Classes</h2>
                        <ul>
                            <li>Mathematics - 10:00 AM</li>
                            <li>Physics - 2:00 PM</li>
                            <li>History - 4:30 PM</li>
                        </ul>
                    </div>

                    {/* Enrolled Courses */}
                    <div className={styles.section}>
                        <h2>Enrolled Courses</h2>
                        <ul>
                            <li>Mathematics</li>
                            <li>Physics</li>
                            <li>History</li>
                        </ul>
                    </div>

                    {/* Recent Activities */}
                    <div className={styles.section}>
                        <h2>Recent Activities</h2>
                        <ul>
                            <li>Attended Physics class</li>
                            <li>Submitted History assignment</li>
                            <li>Interacted with Mathematics instructor</li>
                        </ul>
                    </div>
                </div>
            </div>
        </Studentpannelwrapper>
    )
}

export default Studentdashboardcontent;
