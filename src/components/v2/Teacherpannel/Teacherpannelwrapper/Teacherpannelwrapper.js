import Teacherpannelfooter from "../Teacherpannelfooter/Teacherpannelfooter";
import Teacherpannelheader from "../Teacherpannelheader/Teacherpannelheader";
import Teacherpannelsidebar from "../Teacherpannelsidebar/Teacherpannelsidebar";
import styles from "./page.module.css";


const Teacherpannelwrapper = ({ children, pageHeading }) => {
    return (
        <main className={styles.adminPanel}>
        <div>
            <Teacherpannelsidebar/>
        </div>
        <div className={styles.mainContent}>
            <div className={styles.headerBox}>
                <Teacherpannelheader pageHeading={pageHeading}/>
            </div>
            <section className={styles.contentBox}>
                {children}
            </section>
            <div className={styles.footerBox}>
                <Teacherpannelfooter />
            </div>
        </div>
    </main>

    )
}

export default Teacherpannelwrapper;
