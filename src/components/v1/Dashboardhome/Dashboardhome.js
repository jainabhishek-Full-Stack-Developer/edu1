import { FaUserGraduate, FaChalkboardTeacher, FaUsers, FaBook, FaRupeeSign, FaClipboardList, FaMoneyBillWave, FaRegCalendarAlt, FaUserShield, FaChartLine } from 'react-icons/fa';
import DashboardCard from '../DashboardCard/DashboardCard';
import Mainwrapper from '../Mainwrapper/Mainwrapper';

const Dashboardhome = () => {
  return (
    <Mainwrapper pageHeading="Dashboard">
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
        <DashboardCard
          title="Total Users"
          value={1500}
          icon={<FaUsers size={25} />}
          bgcolor="#DCEEFB"
          iconColor="#2C3E50"
        />
        <DashboardCard
          title="Total Students"
          value={1200}
          icon={<FaUserGraduate size={25} />}
          bgcolor="#E8F8F5"
          iconColor="#1ABC9C"
        />
        <DashboardCard
          title="Total Teachers"
          value={150}
          icon={<FaChalkboardTeacher size={25} />}
          bgcolor="#FDEDEC"
          iconColor="#E74C3C"
        />
        <DashboardCard
          title="Total Courses"
          value={50}
          icon={<FaBook size={25} />}
          bgcolor="#FDF3E7"
          iconColor="#F39C12"
        />
        <DashboardCard
          title="Total Revenue"
          value={'₹5,00,000'}
          icon={<FaRupeeSign size={25} />}
          bgcolor="#EAF2F8"
          iconColor="#2980B9"
        />
        <DashboardCard
          title="Total Enrollments"
          value={3000}
          icon={<FaClipboardList size={25} />}
          bgcolor="#F5EEF8"
          iconColor="#8E44AD"
        />
        <DashboardCard
          title="Pending Payouts"
          value={'₹1,50,000'}
          icon={<FaMoneyBillWave size={25} />}
          bgcolor="#FEF9E7"
          iconColor="#D4AC0D"
        />
        <DashboardCard
          title="Upcoming Classes"
          value={25}
          icon={<FaRegCalendarAlt size={25} />}
          bgcolor="#E8F6F3"
          iconColor="#16A085"
        />
        <DashboardCard
          title="Admin Users"
          value={5}
          icon={<FaUserShield size={25} />}
          bgcolor="#F9EBEA"
          iconColor="#C0392B"
        />
        <DashboardCard
          title="Site Traffic"
          value={'20K/month'}
          icon={<FaChartLine size={25} />}
          bgcolor="#EBF5FB"
          iconColor="#2471A3"
        />
      </div>
    </Mainwrapper>
  );
};

export default Dashboardhome;
