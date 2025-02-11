import Teachercustomtab from "../Teachercustomtab/Teachercustomtab";
import Teacherpannelwrapper from "../Teacherpannelwrapper/Teacherpannelwrapper";
import Teachernotificationdata from "./Teachernotificationdata";

const tabsData = [
    { key: "teacher-notification", title: "Notification", content: <Teachernotificationdata /> },
];

const Teachernotificationhome = () => {
    return (
        <Teacherpannelwrapper pageHeading="Notification">
            <div>
                <Teachercustomtab tabs={tabsData} />
            </div>
        </Teacherpannelwrapper>
    )
}

export default Teachernotificationhome;
