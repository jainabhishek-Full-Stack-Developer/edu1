import styles from "./page.module.css";

const Studentclassescard = ({ title, teacher, time, status }) => {
    return (
        <div className={styles.cardClasses}>
            <div className={styles.classesContent}>
                <h2 className={styles.classesCardTitle}>{title}</h2>
                <p className={styles.classesCardTeacher}>👨‍🏫 {teacher}</p>
                <p className={styles.classesCardTime}>⏰ {time}</p>
                <div className={styles.classesTypeSection}>
                    <span className={`${styles.classesCradStatus} ${status === 'Open' ? styles.classesCardOpen : styles.classesCardClosed}`}>
                        {status}
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Studentclassescard;
