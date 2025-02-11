"use client";
import { useState } from "react";
import styles from "./page.module.css"
import { toast } from "react-toastify";

const Addadmin = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleAdminRegister = (e) => {
    e.preventDefault();
    if (username !== '' && email !== '' && password !== '') {

    }
    else {
      toast.error("Please fill in all required fields.");

    }
  }


  return (
    <div>
      <h2 className={styles.title}>Add Admin</h2>
      <form>
        <div className={styles.formBox}>
          <div className={styles.inputGroup}>
            <label htmlFor="username">Username</label>
            <input type="text" id="username" placeholder="Enter Username" onChange={(e) => setUsername(e.target.value)} />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Enter Email" onChange={(e) => setEmail(e.target.value)} />
          </div>
        </div>
        <div className={styles.formBox}>
          <div className={styles.inputGroup}>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="Enter Password" onChange={(e) => setPassword(e.target.value)} />
          </div>
        </div>
        <div className={styles.submitBtn}>
          <button type="submit" onClick={handleAdminRegister} >Submit</button>
        </div>
      </form>
    </div>
  )
}

export default Addadmin;
