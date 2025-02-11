"use client";
import { useState } from "react";
import styles from "./page.module.css";

const Teachercustomtab = ({ tabs }) => {
    const [teacherCustomTab, setTeacherCustomTab] = useState(tabs[0].key); // Default to the first tab

    const renderTTabContent = () => {
        const activeTab = tabs.find((tab) => tab.key === teacherCustomTab);
        return activeTab ? activeTab.content : null;
    };
    return (
        <section>
            <div>
                <ul className={styles.adminTabsContainer}>
                    {tabs.map((tab) => (
                        <li key={tab.key}>
                            <button
                                type="button"
                                onClick={() => setTeacherCustomTab(tab.key)}
                                className={`${teacherCustomTab === tab.key ? styles.adminActiveTabs : ""}`}
                            >
                                {tab.title}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
            <div>{renderTTabContent()}</div>
        </section>
    )
}

export default Teachercustomtab;
