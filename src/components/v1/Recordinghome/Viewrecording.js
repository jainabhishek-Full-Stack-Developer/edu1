"use client";
import Link from "next/link";
import styles from "./page.module.css";

const Viewrecording = () => {

    const adminUrl = process.env.NEXT_PUBLIC_ADMIN_URL;

    return (
        <div className={styles.tableContainer}>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>courseName</th>
                        <th>Student Name</th>
                        <th>TeacherName</th>
                        <th>Date & Time</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>React Basics</td>
                        <td>John Doe</td>
                        <td>Jane Smith</td>
                        <td>09-02-2025 10:00 AM - 10:45 AM</td>
                        <td>
                            <Link href={`${adminUrl}videoid=dddd`} >Viewrecording</Link>

                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Viewrecording;
