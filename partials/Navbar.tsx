import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.scss'

const Navbar = (): JSX.Element => {
  return (
    <div className={styles.navbar}>
      <div className="logo">
        <Image
          priority
          src='/images/wordlogo.png'
          className='logoImage'
          width='363'
          height='102'
          alt='RediSomm logo title'
          />
      </div>
      <div className={styles.rightside}>
        <h3>
          download
        </h3>
        <h3>
          docs
        </h3>
      </div>
    </div>
)};

export default Navbar