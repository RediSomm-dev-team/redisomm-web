import React from 'react'
import { useState, useEffect } from "react";
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.scss'
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
      {/* <button className="download-button" role="button">
        download
        </button> */}
         
        <a className="github-button" href="https://github.com/oslabs-beta/RediSomm">
          Github <AiOutlineStar style ={{ backgroundColor: 'transparent' }}/> {stars} 
        </a>
        <button className="doc-button">DOCS</button>
        <a className="article-button" href="https://medium.com/@sammahcarter/how-to-track-individual-keyspace-misses-in-your-redis-databases-84e99fdf7a" target="_blank" rel="noopener noreferrer">Medium Article</a>
      </div>
    </div>
)};


export default Navbar