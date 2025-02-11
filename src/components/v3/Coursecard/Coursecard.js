import styles from "./page.module.css";

const TypeBadge = ({ type }) => {
    return <span className={`${styles.badge} ${styles[type.toLowerCase()]}`}>{type}</span>;
};
const Coursecard = ({ image, title, type }) => {
    return (
        <div className={styles.courseCard}>
            <div className={styles.imageWrapper} style={{ backgroundImage: `url(${image})` }}>
            <div className={styles.overlay}></div>
                <TypeBadge type={type} />
            </div>
            <div className={styles.cardContent}>
                <h4 className={styles.courseTitle}>{title}</h4>
            </div>
        </div>
    )
}

export default Coursecard;
