import Customtab from "../Customtab/Customtab";
import Mainwrapper from "../Mainwrapper/Mainwrapper";
import Notificationdata from "./Notificationdata";

const tabsData = [
    { key: "active-notification", title: "Notification", content: <Notificationdata /> },
];

const Managenotificationhome = () => {
    return (
        <Mainwrapper pageHeading="Notification">
            <div>
                <Customtab tabs={tabsData} />
            </div>
        </Mainwrapper>
    )
}

export default Managenotificationhome;
