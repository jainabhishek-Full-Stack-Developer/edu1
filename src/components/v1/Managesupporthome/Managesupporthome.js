"use client";
import { useState } from "react";
import Mainwrapper from "../Mainwrapper/Mainwrapper";
import Supportcard from "./Supportcard";
import styles from "./page.module.css";
import Custommodal from "../Custommodal";

const Managesupporthome = () => {
    const [openModal, setOpenModal] = useState(false);
    return (
        <>
            <Mainwrapper pageHeading="Support">
                <div className={styles.studentNewTicketContainer}>
                    <button type="button" onClick={() => setOpenModal(true)}>New Ticket</button>
                </div>
                <Supportcard />
            </Mainwrapper>
            <Custommodal setOpenModal={setOpenModal} openModal={openModal}>
                <h3 className={styles.formUpdateHeading}>Create New Ticket</h3>
                <form>
                    <div className={styles.formBox}>
                        <div className={styles.inputGroup}>
                            <label>Subject to appeal</label>
                            <input type="text" placeholder="Enter Subject to appeal" />
                        </div>
                    </div>
                    <div className={styles.formBox}>
                        <div className={styles.inputGroup}>
                            <label>Message</label>
                            <textarea rows={6} placeholder="Enter Message"></textarea>
                        </div>
                    </div>
                    <div className={styles.submitBtn}>
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </Custommodal>
        </>
    )
}

export default Managesupporthome;
