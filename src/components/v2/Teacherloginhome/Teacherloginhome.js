"use client";
import Link from "next/link";
import styles from "./page.module.css";
import { useState } from "react";
import Logo from "@/components/Logo/Logo";
import { useRouter } from "next/navigation";


const Teacherloginhome = () => {
    const [teacherEmail, setTeacherEmail] = useState('demo@gmail.com');
    const [teacherPassword, setTeacherPassword] = useState('demo@#456');
    const router = useRouter();
    const teacherPannelUrl = process.env.NEXT_PUBLIC_TEACHER_URL;

    const handleTeacherLogin = (e) => {
        e.preventDefault();
        if (teacherEmail !== '' && teacherPassword !== '') {
            router.push(`${teacherPannelUrl}teacher-dashboard`);
        }
        else {

        }
    }

    return (
        <section>
            <div className={styles.loginTeacherWrapper}>
                <Logo />
                <h1 className={styles.loginTeacherWelcomeTitle}>Welcome Back!</h1>
                <p className={styles.loginTeacherWelcomeText}>Sign in to access your pannel</p>
                <form>
                    <div className={styles.loginTeacherInputContainer}>
                        <input type="text" className={styles.loginTeacherInputField} defaultValue={teacherEmail} placeholder="Email address" onChange={(e) => setTeacherEmail(e.target.value)} />
                    </div>
                    <div className={styles.loginTeacherInputContainer}>
                        <input type="password" className={styles.loginTeacherInputField} defaultValue={teacherPassword} placeholder="Password" onChange={(e) => setTeacherPassword(e.target.value)} />
                    </div>
                    <div className={styles.loginTeacherForgetPassword}>
                        <Link href={`${teacherPannelUrl}forget-password`}>Forget Password?</Link>
                    </div>
                    <div className={styles.loginTeacherBtn} onClick={handleTeacherLogin}>
                        <button type="submit">Sign In</button>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Teacherloginhome;
