import React from 'react'
import styles from './pagination.module.css'
const Pagination = () => {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.button} aria-disabled="true">Previous</div>
                <div className={styles.button}>Next</div>
            </div>
        </>
    )
}

export default Pagination