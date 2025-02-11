"use client";
import { useState, useCallback } from "react";
import Custommodal from "../Custommodal";
import styles from "./page.module.css";
import Swal from 'sweetalert2';

const Activestudent = () => {
    const [openModal, setOpenModal] = useState(false);


    const handleDeactiveStudent = useCallback((uuid) => {
        Swal.fire({
            title: 'Are you sure?',
            text: 'Do you want to deactivate this student?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Deactivate it!',
            cancelButtonText: 'No, Cancel',
        }).then((result) => {
            if (result.isConfirmed) {
                // updateStatusCategories({ uuid, status: 1 });
                // refetch();
                Swal.fire('Deactivated!', 'The student has been deactivated.', 'success');
            }
        });
    }, []);



    return (
        <>
            <div className={styles.tableSearchContainer}>
                <input type="search" className={styles.inputField} placeholder="search here..." />
            </div>
            <div className={styles.tableContainer}>
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Student Name</th>
                            <th>Student Email</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>John Doe</td>
                            <td>john@example.com</td>
                            <td>
                                <button type="button" className={styles.tableActiveBtn} onClick={() => handleDeactiveStudent('abc')} >Active</button>
                                <button type="button" className={styles.tableEditBtn} onClick={() => setOpenModal(true)}>View Details</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <Custommodal setOpenModal={setOpenModal} openModal={openModal}>
                <h3 className={styles.formUpdateHeading}>View Student Details</h3>
                <ul className={styles.studentList}>
                    <li className={styles.studentItem}>
                        <strong>Name:</strong> John Doe
                    </li>
                    <li className={styles.studentItem}>
                        <strong> Email:</strong>johndoe@example.com
                    </li>
                    <li className={styles.studentItem}>
                        <strong> Course Name:</strong> Full-Stack Development
                    </li>
                    <li className={styles.studentItem}>
                        <strong> Purchase Date:</strong> 09-02-2025,
                    </li>
                    <li className={styles.studentItem}>
                        <strong> Paid:</strong> Yes
                    </li>
                </ul>
            </Custommodal>
        </>
    )
}

export default Activestudent;
