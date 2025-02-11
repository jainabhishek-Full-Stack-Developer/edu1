import TeacherDashboardCard from "../Teacherpanneldashboardcard/Teacherpanneldashboardcard";
import { FaUserGraduate, FaRegCalendarAlt, FaChartBar } from 'react-icons/fa';
import Teacherpannelwrapper from "../Teacherpannelwrapper/Teacherpannelwrapper";
import Teachercustomtab from "../Teachercustomtab/Teachercustomtab";
import Teacherallclasses from "./Teacherallclasses";
import Teachertodayclasses from "./Teachertodayclasses";
import Teachercancelledclasses from "./Teachercancelledclasses";



const tabsData = [
    { key: "teacher-all-classes", title: "All Classes", content: <Teacherallclasses /> },
    { key: "teacher-today-classes", title: "Today Classes", content: <Teachertodayclasses /> },
    { key: "teacher-cancelled-classes", title: "Cancelled Classes", content: <Teachercancelledclasses /> },
];


const Teacherclassescontent = () => {
    return (
        <Teacherpannelwrapper pageHeading="Manage Classes">
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
                <TeacherDashboardCard
                    title="Total Classes Conducted"
                    value={50}
                    icon={<FaRegCalendarAlt size={25} />}
                    bgcolor="#EAF2F8"
                    iconColor="#2980B9"
                />
                <TeacherDashboardCard
                    title="Total Enrolled Students"
                    value={500}
                    icon={<FaUserGraduate size={25} />}
                    bgcolor="#E8F8F5"
                    iconColor="#1ABC9C"
                />
                <TeacherDashboardCard
                    title="Average Attendance"
                    value={'85%'}
                    icon={<FaChartBar size={25} />}
                    bgcolor="#EBF5FB"
                    iconColor="#2471A3"
                />
            </div>
            <div>
                <Teachercustomtab tabs={tabsData} />
            </div>

        </Teacherpannelwrapper>
    )
}

export default Teacherclassescontent;
