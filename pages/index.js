import Head from 'next/head';
import dynamic from 'next/dynamic';
import styles from '../styles/Home.module.scss';

const DynamicPattern = dynamic(() => import('../components/DynamicPattern'), { ssr: false });

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Brody's Portfolio</title>
        <meta name="description" content="Brody's Portfolio Landing Page" />
      </Head>
      <DynamicPattern />
      <div className={styles.intro}>
        <h1>Hello, I'm Brody</h1>
        <p>I'm a developer exploring the boundaries of web3 and beyond. This is just the beginning.</p>
      </div>
    </div>
  );
}
