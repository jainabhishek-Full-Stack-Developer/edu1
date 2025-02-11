import Mainwrapper from "../Mainwrapper/Mainwrapper";
import Customtab from '../Customtab/Customtab';
import DashboardCard from '../DashboardCard/DashboardCard';
import { SiCoursera } from "react-icons/si";
import Acivecoursesession from "./Acivecoursesession";
import Inactivecoursesession from "./Inactivecoursesession";
import Addcoursesession from "./Addcoursesession";

const tabsData = [
    { key: "active-course", title: "Active Course Session", content: <Acivecoursesession /> },
    { key: "inactive-course", title: "Inactive Course Session", content: <Inactivecoursesession /> },
    { key: "add-course", title: "Add Course Session", content: <Addcoursesession /> },
];



const Coursesessionhome = () => {
    return (
        <Mainwrapper pageHeading="Course Session Manage">
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                <DashboardCard
                    title="Total Course Session"
                    value={10}
                    icon={<SiCoursera size={25} />}
                    bgcolor="#DCEEFB"
                    iconColor="#2C3E50"
                />
                <DashboardCard
                    title="Active Course Session"
                    value={6}
                    icon={<SiCoursera size={25} />}
                    bgcolor="#E6F7E6"
                    iconColor="#28A745"
                />
                <DashboardCard
                    title="Inactive Course Session"
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

export default Coursesessionhome;
