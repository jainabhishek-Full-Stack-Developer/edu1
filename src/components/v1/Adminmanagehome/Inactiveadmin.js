"use client";
import { useState, useCallback } from "react";
import Custommodal from "../Custommodal";
import styles from "./page.module.css";
import Swal from 'sweetalert2';
import { toast } from "react-toastify";

const Inactiveadmin = () => {
    const [openModal, setOpenModal] = useState(false);
    const [username, setUsername] = useState('John Doe');
    const [email, setEmail] = useState('john@example.com');
    const [password, setPassword] = useState('hhjjiiojjiook');


    const handleUpdateAdmin = (e) => {
        e.preventDefault();
        if (username !== '' && email !== '' && password !== '') {
            toast.success("Update Successfully!");
            setOpenModal(false);
        }
        else {
            toast.error("All Field required!")
        }

    }




    const handleActiveAdmin = useCallback((uuid) => {
        Swal.fire({
            title: 'Are you sure?',
            text: 'Do you want to Activate this admin?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Activate it!',
            cancelButtonText: 'No, Cancel',
        }).then((result) => {
            if (result.isConfirmed) {
                // updateStatusCategories({ uuid, status: 1 });
                // refetch();
                Swal.fire('Activate!', 'The Admin has been Activate.', 'success');
            }
        });
    }, []);

    const handleDeleteAdmin = useCallback((uuid) => {
        Swal.fire({
            title: 'Are you sure?',
            text: 'Do you want to Delete this admin?',
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
                Swal.fire('Deleted!', 'The admin has been Deleted.', 'success');
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
                                <button type="button" className={styles.tableDeactiveBtn} onClick={() => handleActiveAdmin('abc')} >Deactive</button>
                                <button type="button" className={styles.tableEditBtn} onClick={() => setOpenModal(true)}>Update</button>
                                <button type="button" className={styles.tableDeleteBtn} onClick={() => handleDeleteAdmin('abc')}>Delete</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <Custommodal setOpenModal={setOpenModal} openModal={openModal}>
                <h3 className={styles.formUpdateHeading}>Update Admin</h3>
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
                        <button type="submit" onClick={handleUpdateAdmin}>Update</button>
                    </div>
                </form>
            </Custommodal>
        </>
    )
}

export default Inactiveadmin;
