import Customtab from '../Customtab/Customtab';
import DashboardCard from '../DashboardCard/DashboardCard';
import Mainwrapper from '../Mainwrapper/Mainwrapper';
import Activestudent from './Activestudent';
import Inactivestduent from './Inactivestduent';
import { FaUser, FaUserPlus, FaUserMinus } from "react-icons/fa";

const tabsData = [
    { key: "active-student", title: "Active Student", content: <Activestudent /> },
    { key: "inactive-student", title: "Inactive Student", content: <Inactivestduent /> },
];


const Studentmanagehome = () => {
    return (
        <>
            <Mainwrapper pageHeading="Manage Student">
                <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                    <DashboardCard
                        title="Total Student"
                        value={10}
                        icon={<FaUser size={25} />}
                        bgcolor="#DCEEFB"
                        iconColor="#2C3E50"
                    />
                    <DashboardCard
                        title="Active Student"
                        value={6}
                        icon={<FaUserPlus size={25} />}
                        bgcolor="#E6F7E6"
                        iconColor="#28A745"
                    />
                    <DashboardCard
                        title="Inactive Student"
                        value={4}
                        icon={<FaUserMinus size={25} />}
                        bgcolor="#F8D7DA"
                        iconColor="#DC3545"
                    />
                </div>
                <div>
                    <Customtab tabs={tabsData} />
                </div>
            </Mainwrapper>
        </>

    )
}

export default Studentmanagehome;
