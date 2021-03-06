import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import styles from '../styles/Home.module.scss'

const Title = (): JSX.Element => {
    return ( 
    <div className={styles.titleContainer}>
      <motion.h1
      style={{ maxWidth: "500px", margin: "auto" }}
      className={styles.title}
      initial={{ x: -600 }}
      animate={{ x: 0 }}
      transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
      >
      <div className={styles.text}>
      <span className={styles.notAppTitle}>Monitor and Track Your Redis Database With</span> <span className={styles.appTitle}>RediSomm</span>
      </div>
      </motion.h1>
      <motion.div
          className={styles.dashboardImage}
          initial={{ x: 600 }}
          animate={{ x: 0 }}
          transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
        >
          <div className={styles.redisommDemo} >
          <Image
          className='redisomm-demo'
            width={500}
            height={450}
            layout='intrinsic'
            priority
            src='/images/redisomm-demo.png'
            alt='Screenshot of RediSomm'
          />
          </div>
      </motion.div>
    </div>
)};

export default Title;