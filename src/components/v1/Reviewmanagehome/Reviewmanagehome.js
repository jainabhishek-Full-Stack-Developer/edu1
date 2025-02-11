import Customtab from '../Customtab/Customtab';
import DashboardCard from '../DashboardCard/DashboardCard';
import Mainwrapper from '../Mainwrapper/Mainwrapper';
import { FaUser, FaUserPlus, FaUserMinus } from "react-icons/fa";
import Reviewdetails from './Reviewdetails';

const tabsData = [
    { key: "manage-review", title: "Review", content: <Reviewdetails /> },
];


const Reviewmanagehome = () => {

    return (
        <>
            <Mainwrapper pageHeading="Review Manage">
                <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                    <DashboardCard
                        title="Total Review"
                        value={1000}
                        icon={<FaUser size={25} />}
                        bgcolor="#DCEEFB"
                        iconColor="#2C3E50"
                    />
                </div>
                <div>
                    <Customtab tabs={tabsData} />
                </div>
            </Mainwrapper>
        </>

    )
}

export default Reviewmanagehome;
