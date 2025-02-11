"use client";
import { useState } from "react";
import styles from "./page.module.css";
import { MdOutlineMail } from "react-icons/md";
import { TbLockPassword } from "react-icons/tb";
import Logo from "@/components/Logo/Logo";
import { useRouter } from "next/navigation";


const Login = () => {
    const [email, setEmail] = useState('John');
    const [password, setPassword] = useState('John@2566');
    const [msg, setMsg] = useState('');
    const router = useRouter();

    const handleLogin = (e) => {
        e.preventDefault();
        if (email !== '' && password !== '') {
            router.push(`${process.env.NEXT_PUBLIC_ADMIN_URL}dashboard`);

        } else {
            setMsg('Invalid Credentials');
        }

    }

    return (
        <section className={styles.loginWrapper}>
            <div className={styles.loginWrapperBox} >
                <div>
                    <Logo />
                    <p className={styles.loginDescription}>Login to access your admin</p>
                </div>
                <form>
                    <div className={styles.inputContainer}>
                        <MdOutlineMail size={20} className={styles.inputIcon} />
                        <input type="email" className={styles.inputField} defaultValue={email} placeholder="Enter Email" onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className={styles.inputContainer}>
                        <TbLockPassword size={20} className={styles.inputIcon} />
                        <input type="password" className={styles.inputField} defaultValue={password} placeholder="Enter Password" onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <button
                        type="button"
                        className={styles.loginBtn}
                        onClick={handleLogin}
                        disabled={email === '' || password === ''}
                    >
                        Login
                    </button>

                </form>
                <div className={styles.errorMsg}>
                    <span >{msg}</span>
                </div>
            </div>
        </section>

    )
}

export default Login
