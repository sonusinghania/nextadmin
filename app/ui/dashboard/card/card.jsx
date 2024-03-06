// card.jsx
import React from 'react';
import { MdSupervisedUserCircle } from 'react-icons/md';
import styles from './card.module.css';

const Card = ({ inquiryType }) => {
    const getInquiryIcon = () => {
        switch (inquiryType) {
            case 'car':
                return <MdSupervisedUserCircle size={24} />;
            // Add more cases for other inquiry types if needed
            default:
                return <MdSupervisedUserCircle size={24} />;
        }
    };

    return (
        <div className={styles.container}>
            {getInquiryIcon()}
            <div className={styles.texts}>
                <span>{inquiryType} Inquiry</span>
            </div>
        </div>
    );
};

export default Card;
