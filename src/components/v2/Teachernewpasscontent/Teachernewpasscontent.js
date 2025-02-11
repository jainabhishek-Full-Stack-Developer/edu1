"use client";
import Logo from "@/components/Logo/Logo";
import styles from "./page.module.css";
import { useState } from "react";
import { useRouter } from 'next/navigation';

const Teachernewpasscontent = () => {
    const [teahcerNPassword, setTeacherNPassword] = useState('');
    const [teahcerCPassword, setTeacherCPassword] = useState('');
    const router = useRouter();

    const handleTeacherNPassword = (e) => {
        e.preventDefault();
        if (teahcerNPassword !== '' && teahcerCPassword !== '') {
            router.push('/sign-in');
        }
        else {

        }
    }

    return (
        <section>
            <div className={styles.resetPassTeacherWrapper}>
                <Logo />
                <h1 className={styles.resetPassTeacherWelcomeTitle}>Set Your New Password</h1>
                <p className={styles.resetPassTeacherWelcomeText}>Create a new password to regain access to your course</p>
                <form>
                    <div className={styles.resetPassTeacherInputContainer}>
                        <input type="password" className={styles.resetPassTeacherInputField} placeholder="New Password" onChange={(e) => setTeacherNPassword(e.target.value)} />
                    </div>
                    <div className={styles.resetPassTeacherInputContainer}>
                        <input type="password" className={styles.resetPassTeacherInputField} placeholder="Confirm Password" onChange={(e) => setTeacherCPassword(e.target.value)} />
                    </div>
                    <div className={styles.resetPassTeacherBtn} onClick={handleTeacherNPassword}>
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Teachernewpasscontent;
