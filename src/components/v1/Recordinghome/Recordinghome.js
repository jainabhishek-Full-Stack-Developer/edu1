import Mainwrapper from "../Mainwrapper/Mainwrapper";
import Customtab from '../Customtab/Customtab';
import Viewrecording from "./Viewrecording";
import Recordingform from "./Recordingform";
import DashboardCard from '../DashboardCard/DashboardCard';
import { BiVideoRecording } from "react-icons/bi";


const tabsData = [
    { key: "view-recording", title: "View Recording", content: <Viewrecording /> },
    { key: "time-recording", title: "Manage Days", content: <Recordingform /> },
];



const Recordinghome = () => {
    return (
        <Mainwrapper pageHeading="Manage Recording">
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                <DashboardCard
                    title="Total Recording"
                    value={10}
                    icon={<BiVideoRecording size={25} />}
                    bgcolor="#DCEEFB"
                    iconColor="#2C3E50"
                />
            </div>
            <div>
                <Customtab tabs={tabsData} />
            </div>
        </Mainwrapper>

    )
}

export default Recordinghome;
