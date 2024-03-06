import React from 'react'
import styles from './login.module.css'
const page = () => {
    return (
        <>
            <div className={styles.container}>
                <form action="" className={styles.form}>
                    <h1>Login</h1>
                    <input type="email" placeholder='Enter youe Email' />
                    <input type="password" placeholder='Enter youe Password' />
                    <button>Login</button>
                </form>
            </div>
        </>
    )
}

export default page