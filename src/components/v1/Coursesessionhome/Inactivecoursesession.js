"use client";
import { useState, useCallback } from "react";
import Custommodal from "../Custommodal";
import styles from "./page.module.css";
import Swal from 'sweetalert2';
import { toast } from "react-toastify";


const Inactivecoursesession = () => {
    const [openModal, setOpenModal] = useState(false);
    const [sessionName, setSessionName] = useState('');
    const [sessionDesc, setSessionDesc] = useState('');
    const [sessionTime, setSessionTime] = useState('');
    const [sessionLink, setSessionLink] = useState('');
    const [sessionGoal, setSessionGoal] = useState('');
    const [courseName, setCourseName] = useState('');


    const handleUpdateSession = (e) => {
        e.preventDefault();
        if (courseName !== '' && sessionName !== '' && sessionDesc !== '' && sessionTime !== '' && sessionLink !== '' && sessionGoal !== '') {
            toast.success("Update Successfully!");
            setOpenModal(false);
        }
        else {
            toast.error("All Field required!")
        }

    }


    const handleDeactiveSession = useCallback((uuid) => {
        Swal.fire({
            title: 'Are you sure?',
            text: 'Do you want to deactivate this Session?',
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
                Swal.fire('Deactivated!', 'The Session has been deactivated.', 'success');
            }
        });
    }, []);

    const handleDeleteSession = useCallback((uuid) => {
        Swal.fire({
            title: 'Are you sure?',
            text: 'Do you want to Delete this Session?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Delete it!',
            cancelButtonText: 'No, Cancel',
        }).then((result) => {
            if (result.isConfirmed) {
                // updateStatusCategories({ uuid, status: 1 });
                // refetch();
                Swal.fire('Deleted!', 'The Session has been Deleted.', 'success');
            }
        });
    }, []);


    return (
        <>
            <div className={styles.tableContainer}>
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Course Name</th>
                            <th>Session Name</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Little Yogi - Gita for Kids (4-6 yrs)</td>
                            <td>Introduction to the Gita: A Journey Begins</td>
                            <td>
                                <button type="button" className={styles.tableDeactiveBtn} onClick={() => handleDeactiveSession('abc')} >Deactive</button>
                                <button type="button" className={styles.tableEditBtn} onClick={() => setOpenModal(true)}>Update</button>
                                <button type="button" className={styles.tableDeleteBtn} onClick={() => handleDeleteSession('abc')}>Delete</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <Custommodal setOpenModal={setOpenModal} openModal={openModal}>
                <h3 className={styles.formUpdateHeading}>Update Session</h3>
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
                        <button type="submit" onClick={handleUpdateSession}>Update</button>
                    </div>
                </form>
            </Custommodal>
        </>
    )
}

export default Inactivecoursesession;
