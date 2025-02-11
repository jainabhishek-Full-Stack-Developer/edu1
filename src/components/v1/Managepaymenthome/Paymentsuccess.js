"use client";
import { useState } from "react";
import styles from "./page.module.css";
import Custommodal from "../Custommodal";

const Paymentsuccess = () => {
    const [openModal, setOpenModal] = useState(false);
    return (
        <>
            <div className={styles.tableContainer}>
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Course Name</th>
                            <th>Student Name</th>
                            <th>Payment Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Little Yogi - Gita for Kids (4-6 yrs)</td>
                            <td>John</td>
                            <td>
                                <span className={styles.tableActiveBtn}>Paid</span>
                                <button type="button" onClick={() => setOpenModal(true)} className={styles.tableEditBtn} >View Details</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <Custommodal setOpenModal={setOpenModal} openModal={openModal}>
                <h3 className={styles.formUpdateHeading}>Payment Details</h3>
                <ul className={styles.paymentList}>
                    <li><strong>Order ID:</strong> #123456</li>
                    <li><strong>Course Name:</strong> Little Yogi - Gita for Kids (4-6 yrs)</li>
                    <li><strong>Student ID:</strong> #23556</li>
                    <li><strong>Student Name:</strong> John</li>
                    <li><strong>Student Email:</strong> john@gmail.com</li>
                    <li><strong>Payment Method:</strong> Credit Card</li>
                    <li><strong>Card Number:</strong> **** **** **** 1234</li>
                    <li><strong>Transaction ID:</strong> TXN789XYZ</li>
                    <li><strong>Amount Paid:</strong> ₹1,500</li>
                    <li><strong>Payment Status:</strong> <span className={styles.success}>Successful</span></li>
                </ul>
            </Custommodal>
        </>

    )
}

export default Paymentsuccess;
