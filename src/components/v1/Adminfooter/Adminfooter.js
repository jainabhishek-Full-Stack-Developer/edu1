import styles from "./page.module.css";

const AdminFooter = () => {
  return (
    <footer className={styles.footer}>
      <p>© {new Date().getFullYear()} CourseHive. All rights reserved.</p>      
    </footer>
  );
};

export default AdminFooter;
