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
      Monitor and Track Your Redis TTL Keys with YOUNGKIM
      </motion.h1>
      <motion.div
          className={styles.dashboardImage}
          initial={{ x: 600 }}
          animate={{ x: 0 }}
          transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
        >
          <Image
            width={500}
            height={450}
            layout='intrinsic'
            priority
            src='/team_photos/young_kim.png'
            alt='Screenshot of RediSomm'
          />
      </motion.div>
    </div>
)};

export default Title;