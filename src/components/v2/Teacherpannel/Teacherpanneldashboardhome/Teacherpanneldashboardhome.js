import Teacherpannelwrapper from "../Teacherpannelwrapper/Teacherpannelwrapper";
import {
    FaUserGraduate, FaBookOpen, FaRegCalendarAlt,
    FaMoneyBillWave, FaClipboardList, FaUsers, FaChartBar, FaClock
} from 'react-icons/fa';
import Teacherpanneldashboardcard from "../Teacherpanneldashboardcard/Teacherpanneldashboardcard";

const Teacherpanneldashboardhome = () => {
    return (
        <Teacherpannelwrapper pageHeading="Teacher Dashboard">
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
                <Teacherpanneldashboardcard
                    title="Total Enrolled Students"
                    value={500}
                    icon={<FaUserGraduate size={25} />}
                    bgcolor="#E8F8F5"
                    iconColor="#1ABC9C"
                />
                <Teacherpanneldashboardcard
                    title="Active Courses"
                    value={12}
                    icon={<FaBookOpen size={25} />}
                    bgcolor="#FDF3E7"
                    iconColor="#F39C12"
                />
                <Teacherpanneldashboardcard
                    title="Scheduled Classes"
                    value={20}
                    icon={<FaRegCalendarAlt size={25} />}
                    bgcolor="#EAF2F8"
                    iconColor="#2980B9"
                />
                <Teacherpanneldashboardcard
                    title="Total Earnings"
                    value={'₹2,75,000'}
                    icon={<FaMoneyBillWave size={25} />}
                    bgcolor="#FEF9E7"
                    iconColor="#D4AC0D"
                />
                <Teacherpanneldashboardcard
                    title="Pending Payouts"
                    value={'₹50,000'}
                    icon={<FaMoneyBillWave size={25} />}
                    bgcolor="#FDEDEC"
                    iconColor="#E74C3C"
                />
                <Teacherpanneldashboardcard
                    title="Total Assignments Checked"
                    value={300}
                    icon={<FaClipboardList size={25} />}
                    bgcolor="#F5EEF8"
                    iconColor="#8E44AD"
                />
                <Teacherpanneldashboardcard
                    title="New Student Requests"
                    value={8}
                    icon={<FaUsers size={25} />}
                    bgcolor="#DCEEFB"
                    iconColor="#2C3E50"
                />
                <Teacherpanneldashboardcard
                    title="Average Rating"
                    value={'4.8/5'}
                    icon={<FaChartBar size={25} />}
                    bgcolor="#EBF5FB"
                    iconColor="#2471A3"
                />
                <Teacherpanneldashboardcard
                    title="Total Teaching Hours"
                    value={120}
                    icon={<FaClock size={25} />}
                    bgcolor="#E8F6F3"
                    iconColor="#16A085"
                />
            </div>
        </Teacherpannelwrapper>
    );
};

export default Teacherpanneldashboardhome;
