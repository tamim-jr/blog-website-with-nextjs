import React from 'react'
import styles from './card.module.css'
import Image from 'next/image'
import Link from 'next/link'


const card = () => {
    return (
        <div className={styles.container}>
            <div className={styles.imageContainer}>
                <Image src="/p1.jpeg" alt="" fill />
            </div>
            <div className={styles.textContainer}>
                <div className={styles.ditail}>
                    <span className={styles.date}>11.02.2023 </span>
                    <span className={styles.category}> CALTURE</span>
                    <Link href="/">
                        <h1>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo, ex.</h1>
                    </Link>
                    <br />
                    <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas fugiat iure maxime similique sunt temporibus quos, culpa id quibusdam quasi alias, ullam nobis ducimus ut commodi! Debitis accusamus ex nisi.</p>
                    <br /> 
                    <Link className={styles.link} href="/">Read More</Link>
                </div>
            </div>
        </div>
    )
}

export default card;