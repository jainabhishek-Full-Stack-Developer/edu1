import Classescard from "./Classescard";
import styles from "./page.module.css";


const Cancelledclasses = () => {
    return (
        <div>
        <div className={styles.allClassesFilter}>
            <div>
                <input type="date" />
            </div>
            <span>-</span>
            <div>
                <input type="date" />
            </div>
            <div>
                <button type="button">Filter</button>
            </div>
        </div>
        <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap',marginTop:'40px' }}>
            <Classescard type="Paid" title="React Masterclass" teacher="John Doe" time="10:00 AM - 12:00 PM" status="Open" />
            <Classescard type="Demo" title="Next.js Advanced" teacher="Jane Smith" time="2:00 PM - 3:30 PM" status="Closed" />
        </div>
    </div>
    )
}

export default Cancelledclasses;
