
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { HeaderV } from '../components/HeaderV'
import { BodyContainer } from '../components/BodyContainer'
const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
     <HeaderV/>
    <BodyContainer/>
      
    </div>
  )
}

export default Home
