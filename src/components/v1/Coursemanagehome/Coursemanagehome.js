import Mainwrapper from '../Mainwrapper/Mainwrapper';
import Customtab from '../Customtab/Customtab';
import DashboardCard from '../DashboardCard/DashboardCard';
import { SiCoursera } from "react-icons/si";
import Inactivecourse from './Inactivecourse';
import Addcourse from './Addcourse';
import Activecourse from './Activecourse';


const tabsData = [
    { key: "active-course", title: "Active Course", content: <Activecourse/> },
    { key: "inactive-course", title: "Inactive Course", content: <Inactivecourse /> },
    { key: "add-course", title: "Add Course", content: <Addcourse /> },
];


const Coursemanagehome = () => {
    return (
        <Mainwrapper pageHeading="Course Manage">
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                <DashboardCard
                    title="Total Course"
                    value={10}
                    icon={<SiCoursera size={25} />}
                    bgcolor="#DCEEFB"
                    iconColor="#2C3E50"
                />
                <DashboardCard
                    title="Active Course"
                    value={6}
                    icon={<SiCoursera size={25} />}
                    bgcolor="#E6F7E6"
                    iconColor="#28A745"
                />
                <DashboardCard
                    title="Inactive Course"
                    value={4}
                    icon={<SiCoursera size={25} />}
                    bgcolor="#F8D7DA"
                    iconColor="#DC3545"
                />
            </div>
            <div>
                <Customtab tabs={tabsData} />
            </div>
        </Mainwrapper>

    )
}

export default Coursemanagehome;
