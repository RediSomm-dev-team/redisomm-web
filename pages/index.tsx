import type { NextPage } from 'next'
import Meta from '../partials/Meta'
import Navbar from '../partials/Navbar'
import Title from '../partials/Title'
import TeamContainer from '../partials/TeamContainer'
import FeatureCards from '../partials/FeatureCards'
import TerminalDisplay from '../partials/terminal'
import Carousel from '../partials/CarouselDisplay'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'


const Home: NextPage = () => {

  return (
    <div>
      <Meta />
      <main>
        <Navbar />
        <div className={styles.mainContainer}>
          <Title />
        <FeatureCards />
        <TerminalDisplay command={
              "npm install" 
          }/>
        <Carousel />
        <div className={styles.cardContainer}>
          <h4>Meet the team!</h4>
          <TeamContainer />
        </div>
    
        </div>
      </main>
      <footer>
        Powered By Open Source Labs
      </footer>
    </div>
  )
}

export default Home
