import Customtab from '../Customtab/Customtab';
import DashboardCard from '../DashboardCard/DashboardCard';
import Mainwrapper from '../Mainwrapper/Mainwrapper';
import Activeadmin from './Activeadmin';
import Addadmin from './Addadmin';
import Inactiveadmin from './Inactiveadmin';
import { FaUser, FaUserPlus, FaUserMinus } from "react-icons/fa";

const tabsData = [
    { key: "active-admin", title: "Active Admin", content: <Activeadmin /> },
    { key: "inactive-admin", title: "Inactive Admin", content: <Inactiveadmin /> },
    { key: "add-admin", title: "Add Admin", content: <Addadmin /> },
];


const Adminmanagehome = () => {
    return (
        <>
            <Mainwrapper pageHeading="Admin Manage">
                <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                    <DashboardCard
                        title="Total Admin"
                        value={10}
                        icon={<FaUser size={25} />}
                        bgcolor="#DCEEFB"
                        iconColor="#2C3E50"
                    />
                    <DashboardCard
                        title="Active Admin"
                        value={6}
                        icon={<FaUserPlus size={25} />}
                        bgcolor="#E6F7E6"
                        iconColor="#28A745"
                    />
                    <DashboardCard
                        title="Inactive Admin"
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

export default Adminmanagehome;
