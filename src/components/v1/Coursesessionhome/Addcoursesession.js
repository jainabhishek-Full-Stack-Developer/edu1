"use client";
import { useState } from "react";
import styles from "./page.module.css"
import { toast } from "react-toastify";


const Addcoursesession = () => {
    const [sessionName, setSessionName] = useState('');
    const [sessionDesc, setSessionDesc] = useState('');
    const [sessionTime, setSessionTime] = useState('');
    const [sessionLink, setSessionLink] = useState('');
    const [sessionGoal, setSessionGoal] = useState('');
    const [courseName, setCourseName] = useState('');

    const handleCoursesession = (e) => {
        e.preventDefault();
        if (sessionName !== ''  && sessionDesc !== ''  && sessionTime !== ''  && sessionLink !== ''  && sessionGoal !== '' && courseName !== '') {

        }
        else {
            toast.error("Please fill in all required fields.");

        }
    }

    return (
        <div>
            <h2 className={styles.title}>Add Course Session</h2>
            <form>
                <div className={styles.formBox}>
                    <div className={styles.inputGroup}>
                        <label>Course Name</label>
                        <select onChange={(e) => setCourseName(e.target.value)}>
                            <option value="">--select option--</option>
                            <option value="easy">Little Yogi - Gita for Kids (4-6 yrs)</option>
                            <option value="medium">Little Yogi - Gita for Kids (7-9 yrs)</option>
                            <option value="hard">Little Yogi - Gita for Kids (10+ yrs)</option>
                        </select>
                    </div>
                    <div className={styles.inputGroup}>
                        <label>Session Name</label>
                        <input type="text" placeholder="Enter Session Name" onChange={(e) => setSessionName(e.target.value)} />
                    </div>
                </div>
                <div className={styles.formBox}>
                    <div className={styles.inputGroup}>
                        <label>Session Description</label>
                        <input type="text" placeholder="Enter Session Description" onChange={(e) => setSessionDesc(e.target.value)} />
                    </div>
                    <div className={styles.inputGroup}>
                        <label>Session Time</label>
                        <input type="text" placeholder="Enter Session Time" onChange={(e) => setSessionTime(e.target.value)} />
                    </div>
                </div>
                <div className={styles.formBox}>
                    <div className={styles.inputGroup}>
                        <label>Select Session</label>
                        <select onChange={(e) => setSessionLink(e.target.value)}>
                            <option value="">--select option--</option>
                            <option value="easy">Krishna’s Secret Message</option>
                            <option value="medium">Arjuna’s Big Question</option>
                            <option value="hard">Being a Little Yogi</option>
                        </select>
                    </div>
                    <div className={styles.inputGroup}>
                        <label>Session Goal</label>
                        <input type="text" placeholder="Enter Session Goal" onChange={(e) => setSessionGoal(e.target.value)} />
                    </div>
                </div>
                <div className={styles.submitBtn}>
                    <button type="submit" onClick={handleCoursesession}>Submit</button>
                </div>
            </form>
        </div>
    )
}

export default Addcoursesession
