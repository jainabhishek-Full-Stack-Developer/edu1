"use client";
import Logo from "@/components/Logo/Logo";
import styles from "./page.module.css";
import { useState } from "react";

const Teacherforgetpasscontent = () => {
    const [forgetTeacherEmail, setForgetTeacherEmail] = useState('');

    const handleForgetTeacherLogin = (e) => {
        e.preventDefault();
        if (forgetTeacherEmail !== '') {

        }
        else {

        }
    }

    return (
        <section>
            <div className={styles.forgetTeacherWrapper}>
                <Logo/>
                <h1 className={styles.forgetTeacherWelcomeTitle}>Forgot Your Password?</h1>
                <p className={styles.forgetTeacherWelcomeText}>Enter your email to receive an OTP to reset your password</p>
                <form>
                    <div className={styles.forgetTeacherInputContainer}>
                        <input type="text" className={styles.forgetTeacherInputField} placeholder="Email address" onChange={(e) => setForgetTeacherEmail(e.target.value)} />
                    </div>
                    <div className={styles.forgetTeacherBtn} onClick={handleForgetTeacherLogin}>
                        <button type="submit">Forget Password</button>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Teacherforgetpasscontent;
