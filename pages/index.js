import Head from 'next/head';
import Image from 'next/Image';
import styles from '../styles/Home.module.css';
import Header from '../components/header.js';
import Footer from '../components/footer';



export default function Home() {
  return (
    <div>
      <Header>
        </Header>
        <main>Main Content Display Here</main>
        <Footer></Footer>
      </div>
  )
}