import React from 'react'
import styles from './navbar.module.css'
import Image from 'next/image'
import Link from 'next/link'
import AuthLinks from '../authLinks/authLinks'
import ThemeToggle from '../themeToggle/ThemeToggle'
const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>BlogHunter</div>
      <div className={styles.links}>
      <Link href='/' className={styles.link}>Home</Link>
        <Link href='/' className={styles.link}>About</Link>
        <Link href='/' className={styles.link}>Contact</Link>
        <AuthLinks />
        <ThemeToggle />
      </div>
      <div className={styles.social}>
        <Image src='/facebook.png' alt='' width={24} height={24} />
        <Image src='/instagram.png' alt='' width={24} height={24} />
        <Image src='/tiktok.png' alt='' width={24} height={24} />
        <Image src='/youtube.png' alt='' width={24} height={24} />
      </div>
    </div>
  )
}

export default Navbar