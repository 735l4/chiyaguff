import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Header } from '../components/Header'
import { Main } from '../components/Main'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <Main />
    </>
  )
}

export default Home
