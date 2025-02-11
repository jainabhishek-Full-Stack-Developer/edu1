import styles from "./page.module.css";

const Teacherclassescard = ({ title, teacher, time, status, type }) => {
    return (
        <div className={styles.card}>
            <div className={styles.content}>
                <h2 className={styles.title}>{title}</h2>
                <p className={styles.teacher}>👨‍🏫 {teacher}</p>
                <p className={styles.time}>⏰ {time}</p>
                <div className={styles.classesTypeSection}>
                    <span className={styles.classesType}>
                        {type}
                    </span>
                    <span className={`${styles.status} ${status === 'Open' ? styles.open : styles.closed}`}>
                        {status}
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Teacherclassescard;
