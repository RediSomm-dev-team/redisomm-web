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
          src='/team_photos/young_kim.png'
          className='logoImage'
          width='363'
          height='102'
          alt='RediSomm logo title'
          />
      </div>
      <div className={styles.rightside}>
      <button className="download-button" role="button">
        download
        </button>
        <button className="github-button" >
          Github  <AiOutlineStar /> {stars}
        </button>
        <button className="doc-button">DOCS</button>
      </div>
    </div>
)};

export default Navbar