// page.jsx
import React from 'react';
import Card from '../ui/dashboard/card/card';
import styles from '../ui/dashboard/dashboard.module.css';

const Page = () => {
    return (
        <>
            <div className={styles.wrapper}>
                <div className={styles.main}>
                    <div className={styles.cards}>
                        {/* First card with car inquiry */}
                        <Card inquiryType="Car" />

                        {/* Second card with default (e.g., generic) inquiry */}
                        <Card inquiryType="Hotel" />

                        {/* Third card with another type of inquiry (modify as needed) */}
                        <Card inquiryType="Flight" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Page;
