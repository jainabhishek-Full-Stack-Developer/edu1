import styles from "./page.module.css";
import { FaGraduationCap, FaLaptopCode, FaClock, FaUsers } from 'react-icons/fa';

const Whychooseus = () => {
    return (
        <section>
            <div>
                <h1 className={styles.whyChooseHeading}>Why Choose Us</h1>
                <p className={styles.whyChooseText}>Learn with experts, build projects, and get career-ready with our excellence-driven education.</p>
            </div>
            <div className={styles.whyChooseContainer}>
                <div className={styles.whySellerCard}>
                    <div>
                        <FaGraduationCap className={styles.whySellerCardIcon} />
                        <h4>Industry-Leading Courses</h4>
                        <ul>
                            <li>Expert-curated content designed by top educators & professionals</li>
                            <li>Covering in-demand fields like technology, business, design, marketing, and more</li>
                        </ul>
                    </div>
                </div>
                <div className={styles.whySellerCard}>
                    <div>
                        <FaLaptopCode className={styles.whySellerCardIcon} />
                        <h4>Interactive & Engaging Learning</h4>
                        <ul>
                            <li>Hands-on projects, quizzes, and real-world case studies</li>
                            <li>Live Q&A sessions and interactive discussions</li>
                        </ul>
                    </div>
                </div>
                <div className={styles.whySellerCard}>
                    <div>
                        <FaClock className={styles.whySellerCardIcon} />
                        <h4>Learn at Your Own Pace</h4>
                        <ul>
                            <li>Flexible schedules to fit your lifestyle</li>
                            <li>Lifetime access to course materials</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Whychooseus;
