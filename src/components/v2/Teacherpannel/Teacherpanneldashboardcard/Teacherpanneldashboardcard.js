import styles from "./page.module.css";

const Teacherpanneldashboardcard = ({ title, value, icon, bgcolor, iconColor }) => {
    return (
        <div className={styles.dashboardCard} style={{ backgroundColor: bgcolor }}>
            <div className={styles.dashboardCardIcon} style={{ color: iconColor }}>{icon}</div>
            <div className={styles.dashboardCardInfo}>
                <h4 className={styles.dashboardCardTitle}>{title}</h4>
                <p className={styles.dashboardCardValue}>{value}</p>
            </div>
        </div>
    )
}

export default Teacherpanneldashboardcard;
