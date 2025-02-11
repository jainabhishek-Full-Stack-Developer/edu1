"use client";
import { useState, useCallback } from "react";
import Custommodal from "../Custommodal";
import styles from "./page.module.css";
import Swal from 'sweetalert2';
import { toast } from "react-toastify";

const Activeteacher = () => {
    const [openModal, setOpenModal] = useState(false);
    const [username, setUsername] = useState('John Doe');
    const [email, setEmail] = useState('john@example.com');
    const [password, setPassword] = useState('hhjjiiojjiook');


    const handleUpdateTeacher = (e) => {
        e.preventDefault();
        if (username !== '' && email !== '' && password !== '') {
            toast.success("Update Successfully!");
            setOpenModal(false);
        }
        else {
            toast.error("All Field required!")
        }

    }




    const handleDeactiveTeacher = useCallback((uuid) => {
        Swal.fire({
            title: 'Are you sure?',
            text: 'Do you want to deactivate this teacher?',
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
                Swal.fire('Deactivated!', 'The teacher has been deactivated.', 'success');
            }
        });
    }, []);

    const handleDeleteTeacher = useCallback((uuid) => {
        Swal.fire({
            title: 'Are you sure?',
            text: 'Do you want to Delete this teacher?',
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
                Swal.fire('Deleted!', 'The teacher has been Deleted.', 'success');
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
                            <th>Name</th>
                            <th>Email</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>John Doe</td>
                            <td>john@example.com</td>
                            <td>
                                <button type="button" className={styles.tableActiveBtn} onClick={() => handleDeactiveTeacher('abc')} >Active</button>
                                <button type="button" className={styles.tableEditBtn} onClick={() => setOpenModal(true)}>Update</button>
                                <button type="button" className={styles.tableDeleteBtn} onClick={() => handleDeleteTeacher('abc')}>Delete</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <Custommodal setOpenModal={setOpenModal} openModal={openModal}>
                <h3 className={styles.formUpdateHeading}>Update Teacher</h3>
                <form>
                    <div className={styles.formBox}>
                        <div className={styles.inputGroup}>
                            <label htmlFor="username">Username</label>
                            <input type="text" placeholder="Enter Username" defaultValue={username} onChange={(e) => setUsername(e.target.value)} />
                        </div>
                        <div className={styles.inputGroup}>
                            <label htmlFor="email">Email</label>
                            <input type="email" placeholder="Enter Email" defaultValue={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                    </div>
                    <div className={styles.formBox}>
                        <div className={styles.inputGroup}>
                            <label htmlFor="password">Password</label>
                            <input type="password" placeholder="Enter Password" defaultValue={password} onChange={(e) => setPassword(e.target.value)} />
                        </div>
                    </div>
                    <div className={styles.submitBtn}>
                        <button type="submit" onClick={handleUpdateTeacher}>Update</button>
                    </div>
                </form>
            </Custommodal>
        </>
    )
}

export default Activeteacher;
