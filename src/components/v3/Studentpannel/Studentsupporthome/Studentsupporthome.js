"use client";
import { useState } from "react";
import Studentpannelmodal from '../Studentpannelmodal/Studentpannelmodal';
import Studentpannelwrapper from '../Studentpannelwrapper/Studentpannelwrapper'
import Studentsupportcard from './Studentsupportcard';
import styles from "./page.module.css";

const Studentsupporthome = () => {
    const [openModal, setOpenModal] = useState(false);
    return (
        <>
            <Studentpannelwrapper studentpannelHeading="Support">
                <div className={styles.studentNewTicketContainer}>
                    <button type="button" onClick={() => setOpenModal(true)}>New Ticket</button>
                </div>
                <Studentsupportcard />
            </Studentpannelwrapper>
            <Studentpannelmodal setOpenModal={setOpenModal} openModal={openModal}>
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
            </Studentpannelmodal>
        </>
    )
}

export default Studentsupporthome;
