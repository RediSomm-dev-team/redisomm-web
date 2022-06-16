import React from 'react'
import Image from 'next/image'

import styles from '../styles/ParagraphImage.module.scss'

interface ParagraphImageType {
  imageSide:string;
}

const ParagraphImage = ({imageSide}: ParagraphImageType): JSX.Element => {
        {if (imageSide === 'left'){
          return (
            <div className={styles.container}>
              <div className={styles.exampleImg}>
              <Image 
              src='/images/redisomm-keyspace.gif'          
              width={800}
              height={450}
              />
              </div>
              <div className={styles.textContainer}>
                <h3 className={styles.header}>Zoom In On The Metrics That Matter to Develop a Winning <span className={styles.primaryClr} >Time-to-Live Strategy</span>.</h3>
                <p className={styles.paragraph}>
                  RediSomm offers data on individual keyspace misses, allowing 
                  you to develop a strong time-to-live management strategy to 
                  improve the performance of your Redis Database.
                </p>
              </div>
            </div>
        
        )} else {
          return (
            <div className={styles.container}>
              <div className={styles.textContainer}>
              <h3 className={styles.header}>Real Time Monitoring to Keep Your Database <span className={styles.primaryClr} >Quick</span>.</h3>
              <p className={styles.paragraph}>
                Track average object size over time, reducing fragmentation 
                and ensuring your cache database is being used to the fullest.
                And much, much more.
              </p>
              </div>
              <div className={styles.exampleImg}>
              <Image 
              src='/images/redisomm-usage.gif'
              width={800}
              height={450}
              />
              </div>
            </div>
        )}
      }
};

export default ParagraphImage;