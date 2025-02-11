import Link from "next/link";
import Coursecard from "../Coursecard/Coursecard";
import styles from "./page.module.css";
import { generateSlug } from "@/utils/utils";
const courses = [
    { image: "/images/c1.jpg", title: "Introduction to Gita for Kids", type: "easy" },
    { image: "/images/c2.jpg", title: "Krishna's Teachings for Beginners", type: "easy" },
    { image: "/images/c1.jpg", title: "Understanding Dharma (7-9 yrs)", type: "medium" },
    { image: "/images/c2.jpg", title: "Karma Yoga Basics", type: "medium" },
    { image: "/images/c1.jpg", title: "Bhakti Yoga for Kids", type: "easy" },
    { image: "/images/c2.jpg", title: "Path to Moksha (10+ yrs)", type: "hard" },
    { image: "/images/c1.jpg", title: "Understanding Krishna's Words", type: "medium" },
    { image: "/images/c2.jpg", title: "Soul and the Eternal Journey", type: "hard" },
    { image: "/images/c1.jpg", title: "Duties of a Warrior (10+ yrs)", type: "hard" },
    { image: "/images/c2.jpg", title: "Importance of Meditation", type: "medium" },
    { image: "/images/c1.jpg", title: "Self-Realization and Gita", type: "hard" },
    { image: "/images/c2.jpg", title: "Control of Mind & Senses", type: "medium" },
    { image: "/images/c1.jpg", title: "Power of Devotion", type: "easy" },
    { image: "/images/c2.jpg", title: "Teachings of Lord Krishna", type: "easy" },
    { image: "/images/c1.jpg", title: "Life Lessons from Gita", type: "medium" },
    { image: "/images/c2.jpg", title: "The Science of Yoga", type: "medium" },
    { image: "/images/c1.jpg", title: "The Three Gunas", type: "hard" },
    { image: "/images/c2.jpg", title: "Dharma in Daily Life", type: "easy" },
    { image: "/images/c1.jpg", title: "Secrets of the Universe", type: "hard" },
    { image: "/images/c2.jpg", title: "Understanding the Supreme", type: "medium" },
    { image: "/images/c1.jpg", title: "Karma & Its Consequences", type: "hard" },
    { image: "/images/c2.jpg", title: "Faith and Surrender", type: "medium" },
    { image: "/images/c1.jpg", title: "God’s Plan for You", type: "easy" },
    { image: "/images/c2.jpg", title: "The Art of Detachment", type: "medium" },
    { image: "/images/c1.jpg", title: "Wisdom of the Bhagavad Gita", type: "hard" },
    { image: "/images/c2.jpg", title: "The Divine Charioteer", type: "medium" },
    { image: "/images/c1.jpg", title: "The Battle Within", type: "hard" },
    { image: "/images/c2.jpg", title: "How to Attain Liberation", type: "medium" },
    { image: "/images/c1.jpg", title: "Gita’s Message of Love", type: "easy" },
    { image: "/images/c2.jpg", title: "Beyond Birth and Death", type: "hard" },
    { image: "/images/c1.jpg", title: "Finding Inner Peace", type: "easy" },
    { image: "/images/c2.jpg", title: "Krishna’s Infinite Forms", type: "medium" },
    { image: "/images/c1.jpg", title: "Living a Righteous Life", type: "medium" },
    { image: "/images/c2.jpg", title: "Gita’s Teachings on Leadership", type: "hard" },
    { image: "/images/c1.jpg", title: "Overcoming Fear through Gita", type: "easy" }
];






const Allcoursecontent = () => {
    return (
        <section>
            <div>
                <h1 className={styles.coursesHeading}>Enhance Skills, Advance</h1>
                <p className={styles.coursesText}>
                    Gain industry-relevant skills through hands-on projects and expert mentorship.
                    Advance your career with practical knowledge designed for real-world success.
                </p>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", justifyContent: "center", padding: "40px" }}>
                {courses.map((course, index) => (
                    <Link key={index} href={`course/${generateSlug(course.title)}`}>
                        <Coursecard key={index} {...course} />
                    </Link>
                ))}
            </div>
        </section>
    )
}

export default Allcoursecontent
