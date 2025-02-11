import Customtab from '../Customtab/Customtab';
import DashboardCard from '../DashboardCard/DashboardCard';
import Mainwrapper from '../Mainwrapper/Mainwrapper';
import Activeteacher from './Activeteacher';
import Addteacher from './Addteacher';
import Inactiveteacher from './Inactiveteacher';
import { FaUser, FaUserPlus, FaUserMinus } from "react-icons/fa";

const tabsData = [
    { key: "active-teacher", title: "Active Teacher", content: <Activeteacher /> },
    { key: "inactive-teacher", title: "Inactive Teacher", content: <Inactiveteacher /> },
    { key: "add-teacher", title: "Add Teacher", content: <Addteacher /> },
];


const Teachermanagehome = () => {

    return (
        <>
            <Mainwrapper pageHeading="Teacher Manage">
                <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                    <DashboardCard
                        title="Total Teacher"
                        value={10}
                        icon={<FaUser size={25} />}
                        bgcolor="#DCEEFB"
                        iconColor="#2C3E50"
                    />
                    <DashboardCard
                        title="Active Teacher"
                        value={6}
                        icon={<FaUserPlus size={25} />}
                        bgcolor="#E6F7E6"
                        iconColor="#28A745"
                    />
                    <DashboardCard
                        title="Inactive Teacher"
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

export default Teachermanagehome;
