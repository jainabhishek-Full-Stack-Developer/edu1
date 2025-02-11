"use client";
import { useState } from "react";
import Custommodal from "../Custommodal";
import styles from "./page.module.css";


const Reviewdetails = () => {
    const [openModal, setOpenModal] = useState(false);

    return (
        <>
            <div className={styles.tableContainer}>
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Course Name</th>
                            <th>Studnet Name</th>
                            <th>Review Rating</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Little Yogi - Gita for Kids (4-6 yrs)</td>
                            <td>John Doe</td>
                            <td>4.0</td>
                            <td>
                                <button type="button" className={styles.tableEditBtn} onClick={() => setOpenModal(true)}>View Review</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <Custommodal setOpenModal={setOpenModal} openModal={openModal}>
                <h3 className={styles.formUpdateHeading}>View Review</h3>
                <div className={styles.reviewContainer}>
                    <ul className={styles.reviewList}>
                        <li><strong>Course Name:</strong> Little Yogi - Gita for Kids</li>
                        <li><strong>Student:</strong> Aarav Sharma (STU12345)</li>
                        <li><strong>Rating:</strong> ⭐ 5/5</li>
                        <li><strong>Date:</strong> 2025-02-08 10:30 AM</li>
                    </ul>
                </div>
            </Custommodal>
        </>
    )
}

export default Reviewdetails;
