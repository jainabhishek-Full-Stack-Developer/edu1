import Mainwrapper from "../Mainwrapper/Mainwrapper";
import Customtab from '../Customtab/Customtab';
import DashboardCard from '../DashboardCard/DashboardCard';
import { FaDollarSign } from "react-icons/fa";
import Paymentsuccess from "./Paymentsuccess";
import Paymentunsuccess from "./Paymentunsuccess";


const tabsData = [
    { key: "active-admin", title: "Payment Success", content: < Paymentsuccess /> },
    { key: "inactive-admin", title: "Payment Unsuccess", content: <Paymentunsuccess /> },
];


const Managepaymenthome = () => {
    return (
        <Mainwrapper pageHeading="Manage Payment">
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                <DashboardCard
                    title="Total Payment"
                    value={10}
                    icon={<FaDollarSign size={25} />}
                    bgcolor="#DCEEFB"
                    iconColor="#2C3E50"
                />
                <DashboardCard
                    title="Total Payment in Amount"
                    value={60000}
                    icon={<FaDollarSign size={25} />}
                    bgcolor="#E6F7E6"
                    iconColor="#28A745"
                />
                <DashboardCard
                    title="Success Payment"
                    value={6}
                    icon={<FaDollarSign size={25} />}
                    bgcolor="#E6F7E6"
                    iconColor="#28A745"
                />
                <DashboardCard
                    title="Unsuccess Payment"
                    value={4}
                    icon={<FaDollarSign size={25} />}
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

export default Managepaymenthome;
