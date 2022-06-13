import type { NextPage } from 'next'
import Meta from '../partials/Meta'
import Navbar from '../partials/Navbar'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'

const Home: NextPage = () => {

  return (
    <div>
      <Meta />

      <main>
        <Navbar />
      </main>

      <footer>
        Powered By Open Source Labs
      </footer>
    </div>
  )
}

export default Home
