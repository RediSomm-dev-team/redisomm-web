import React from 'react'
import { useState, useEffect } from "react";
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Navbar.module.scss'
import { AiOutlineStar } from "react-icons/ai";

const Navbar = (): JSX.Element => {
  const [stars, setStars] = useState(undefined)

  useEffect(() => {
    fetch("https://api.github.com/repos/oslabs-beta/RediSomm")
      .then((data) => data.json())
      .then((data) => setStars(data.stargazers_count));
  }, []);

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
        <a className={styles.button} id={styles.github} href="https://github.com/oslabs-beta/RediSomm">
          Github <AiOutlineStar style ={{ backgroundColor: 'transparent' }}/> {stars}
        </a>
        <button className={styles.button} id={styles.docs} >Documentation</button>
        <a className={styles.button} id="medium" type='submit' href="https://medium.com/@cartersamj/how-to-track-individual-keyspace-misses-in-your-redis-databases-84e99fdf7a" target="_blank" rel="noopener noreferrer"><span>Medium Article</span></a>
      </div>
    </div>
)};


export default Navbar