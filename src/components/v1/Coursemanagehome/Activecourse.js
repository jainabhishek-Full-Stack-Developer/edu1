"use client";
import { useState, useCallback } from "react";
import Custommodal from "../Custommodal";
import styles from "./page.module.css";
import Swal from 'sweetalert2';
import { toast } from "react-toastify";


const Activecourse = () => {
    const [openModal, setOpenModal] = useState(false);
    const [courseName, setCourseName] = useState('');
    const [courseType, setCourseType] = useState('');

    const handleUpdateCourse = (e) => {
        e.preventDefault();
        if (courseName !== '' && courseType !== '') {
            toast.success("Update Successfully!");
            setOpenModal(false);
        }
        else {
            toast.error("All Field required!")
        }

    }


    const handleDeactiveCourse = useCallback((uuid) => {
        Swal.fire({
            title: 'Are you sure?',
            text: 'Do you want to deactivate this course?',
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
                Swal.fire('Deactivated!', 'The course has been deactivated.', 'success');
            }
        });
    }, []);

    const handleDeleteCourse = useCallback((uuid) => {
        Swal.fire({
            title: 'Are you sure?',
            text: 'Do you want to Delete this course?',
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
                Swal.fire('Deleted!', 'The course has been Deleted.', 'success');
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
                            <th>Type</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Little Yogi - Gita for Kids (4-6 yrs)</td>
                            <td>Easy</td>
                            <td>
                                <button type="button" className={styles.tableActiveBtn} onClick={() => handleDeactiveCourse('abc')} >Active</button>
                                <button type="button" className={styles.tableEditBtn} onClick={() => setOpenModal(true)}>Update</button>
                                <button type="button" className={styles.tableDeleteBtn} onClick={() => handleDeleteCourse('abc')}>Delete</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <Custommodal setOpenModal={setOpenModal} openModal={openModal}>
                <h3 className={styles.formUpdateHeading}>Update Course</h3>
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
                            <label>Course Image</label>
                            <input type="file" accept="image/jpeg, image/png" />
                        </div>
                    </div>
                    <div className={styles.submitBtn}>
                        <button type="submit" onClick={handleUpdateCourse}>Submit</button>
                    </div>
                </form>
            </Custommodal>
        </>
    )
}

export default Activecourse;
