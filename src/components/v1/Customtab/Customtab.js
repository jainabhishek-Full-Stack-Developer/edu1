"use client";
import { useState } from "react";
import styles from "./page.module.css";

const Customtab = ({ tabs }) => {
    const [customTab, setCustomTab] = useState(tabs[0].key); // Default to the first tab

    const renderTabContent = () => {
        const activeTab = tabs.find((tab) => tab.key === customTab);
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
                                onClick={() => setCustomTab(tab.key)}
                                className={`${customTab === tab.key ? styles.adminActiveTabs : ""}`}
                            >
                                {tab.title}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
            <div>{renderTabContent()}</div>
        </section>
    )
}

export default Customtab;
