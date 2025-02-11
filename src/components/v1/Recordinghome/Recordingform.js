"use client";
import { useState } from "react";
import styles from "./page.module.css"
import { toast } from "react-toastify";


const Recordingform = () => {
      const [days, setDays] = useState('');
    
      const handleRecordingDays = (e) => {
        e.preventDefault();
        if (days !== '') {
    
        }
        else {
          toast.error("Please fill in all required fields.");
    
        }
      }
    
    return (
        <div>
            <h2 className={styles.title}>Manage Days</h2>
            <form>
                <div className={styles.formBox}>
                    <div className={styles.inputGroup}>
                        <label>Set Days</label>
                        <input type="number"  placeholder="Enter Days" onChange={(e) => setDays(e.target.value)} />
                    </div>
                </div>
                <div className={styles.submitBtn}>
                    <button type="submit" onClick={handleRecordingDays}>Submit</button>
                </div>
            </form>
        </div>
    )
}

export default Recordingform;
