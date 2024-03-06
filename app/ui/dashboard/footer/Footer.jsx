import React from 'react'
import styles from './footer.module.css'
const Footer = () => {
    return (
        <>
            <div className={styles.container}>

                <div className={styles.text}>Copyright Anshuman © 2024 - 2025
                    | Visit : <a href="https://www.sabalindia.com" style={{ textDecoration: "none" }}>SABAL INDIA MARKETING PVT. LTD.</a></div>
            </div>
        </>
    )
}

export default Footer