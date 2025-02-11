import styles from "./page.module.css";


const Teacherpannelfooter = () => {
    return (
        <footer className={styles.footer}>
      <p>© {new Date().getFullYear()} CourseHive. All rights reserved.</p>      
    </footer>
    )
}

export default Teacherpannelfooter;
