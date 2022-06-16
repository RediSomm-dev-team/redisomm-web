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
              <Image 
              src='/images/redisomm-keyspace.gif'
              width={800}
              height={450}
              />
              <p className={styles.paragraph}>
                RediSomm offers individual keyspace misses, allowing you to develop a strong time-to-live management strategy, improving the performance of your Redis Database
              </p>
            </div>
        
        )} else {
          return (
            <div className={styles.container}>
              <p className={styles.paragraph}>
                Track average object size over time, reducing fragmentation and ensuring your cache database is being used to the fullest.
              </p>
              <Image 
              src='/images/redisomm-usage.gif'
              width={800}
              height={450}
              />
            </div>
        )}
      }
};

export default ParagraphImage;