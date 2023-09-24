import React from 'react'
import styles from './burger.module.css'
import Link from 'next/link'
const Burger = () => {
    return (
        <div>
            <div className={styles.burger}>
                <div className={styles.line}></div>
                <div className={styles.line}></div>
                <div className={styles.line}></div>
            </div>
            
        </div>
    )
}

export default Burger