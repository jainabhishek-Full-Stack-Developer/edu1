import Mainwrapper from "../Mainwrapper/Mainwrapper";
import DashboardCard from '../DashboardCard/DashboardCard';
import { SiCoursera } from "react-icons/si";
import Customtab from "../Customtab/Customtab";
import Allclasses from "./Allclasses";
import Todayclasses from "./Todayclasses";
import Cancelledclasses from "./Cancelledclasses";


const tabsData = [
    { key: "all-classes", title: "All Classes", content: <Allclasses /> },
    { key: "today-classes", title: "Today Classes", content: <Todayclasses /> },
    { key: "cancelled-classes", title: "Cancelled Classes", content: <Cancelledclasses /> },
];


const Classmanagehome = () => {
    return (
        <Mainwrapper pageHeading="Manage Classes">
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                <DashboardCard
                    title="Total Classes"
                    value={10}
                    icon={<SiCoursera size={25} />}
                    bgcolor="#DCEEFB"
                    iconColor="#2C3E50"
                />
                <DashboardCard
                    title="Today Classes"
                    value={6}
                    icon={<SiCoursera size={25} />}
                    bgcolor="#E6F7E6"
                    iconColor="#28A745"
                />
                <DashboardCard
                    title="Cancelled Classes"
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

export default Classmanagehome;
