"use client";
import { useState } from "react";
import styles from "./page.module.css"
import { toast } from "react-toastify";



const Addcourse = () => {
    const [courseName, setCourseName] = useState('');
    const [courseType, setCourseType] = useState('');
    const [coursePrice, setCoursePrice] = useState('');
    const [courseMetaTitle, setCourseMetaTitle] = useState('');
    const [courseMetaDesc, setCourseMetaDesc] = useState('');


    const handleAdminRegister = (e) => {
        e.preventDefault();
        if (courseName !== '' && courseType !== '' && coursePrice !== '' && courseMetaTitle !== '' && courseMetaDesc !== '') {

        }
        else {
            toast.error("Please fill in all required fields.");

        }
    }
    return (
        <div>
            <h2 className={styles.title}>Add Course</h2>
            <form>
                <div className={styles.formBox}>
                    <div className={styles.inputGroup}>
                        <label>Course Name</label>
                        <input type="text" placeholder="Enter Course Name" onChange={(e) => setCourseName(e.target.value)} />
                    </div>
                    <div className={styles.inputGroup}>
                        <label>Course Type</label>
                        <select onChange={(e) => setCourseType(e.target.value)}>
                            <option value="">--select option--</option>
                            <option value="easy">Easy</option>
                            <option value="medium">Medium</option>
                            <option value="hard">Hard</option>
                        </select>
                    </div>
                </div>
                <div className={styles.formBox}>
                    <div className={styles.inputGroup}>
                        <label>Course Price</label>
                        <input type="number" placeholder="Enter Course Price" onChange={(e) => setCoursePrice(e.target.value)} />
                    </div>
                    <div className={styles.inputGroup}>
                        <label>Course Image</label>
                        <input type="file" accept="image/jpeg, image/png" />
                    </div>
                </div>
                <div className={styles.formBox}>
                    <div className={styles.inputGroup}>
                        <label>Course Meta Title</label>
                        <input type="text" placeholder="Enter Course Meta Title" onChange={(e) => setCourseMetaTitle(e.target.value)} />
                    </div>
                    <div className={styles.inputGroup}>
                        <label>Course Meta Description</label>
                        <textarea placeholder="Enter Course Meta Description" rows={8} onChange={(e) => setCourseMetaDesc(e.target.value)}></textarea>
                    </div>
                </div>
                <div className={styles.submitBtn}>
                    <button type="submit" onClick={handleAdminRegister}>Submit</button>
                </div>
            </form>
        </div>
    )
}

export default Addcourse;
