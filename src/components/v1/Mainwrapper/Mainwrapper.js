import Adminfooter from "../Adminfooter/Adminfooter";
import Adminheader from "../Adminheader/Adminheader";
import Adminsidebar from "../Adminsidebar/Adminsidebar";
import styles from "./page.module.css";


const Mainwrapper = ({ children, pageHeading }) => {
    return (
        <main className={styles.adminPanel}>
            <div>
                <Adminsidebar />
            </div>
            <div className={styles.mainContent}>
                <div className={styles.headerBox}>
                    <Adminheader pageHeading={pageHeading}/>
                </div>
                <section className={styles.contentBox}>
                    {children}
                </section>
                <div className={styles.footerBox}>
                    <Adminfooter />
                </div>
            </div>
        </main>

    )
}

export default Mainwrapper;
