import Studentcustomtab from '../Studentcustomtab/Studentcustomtab';
import StudentpanneldashboardCard from '../StudentpanneldashboardCard/StudentpanneldashboardCard';
import Studentpannelwrapper from '../Studentpannelwrapper/Studentpannelwrapper'
import { SiCoursera } from "react-icons/si";
import Studentallclasses from './Studentallclasses';
import Studenttodayclasses from './Studenttodayclasses';


const tabsData = [
    { key: "student-allclasses", title: "All Classes", content: <Studentallclasses /> },
    { key: "student-todayclasses", title: "Today Class", content: <Studenttodayclasses /> },
    
];


const Studentclasseshome = () => {
    return (
        <Studentpannelwrapper studentpannelHeading="Classes">
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                <StudentpanneldashboardCard
                    title="Total Classes"
                    value={10}
                    icon={<SiCoursera size={25} />}
                    bgcolor="#DCEEFB"
                    iconColor="#2C3E50"
                />
                <StudentpanneldashboardCard
                    title="Today Classes"
                    value={6}
                    icon={<SiCoursera size={25} />}
                    bgcolor="#E6F7E6"
                    iconColor="#28A745"
                />               
            </div>
            <div>
                <Studentcustomtab tabs={tabsData} />
            </div>
        </Studentpannelwrapper>
    )
}

export default Studentclasseshome;
