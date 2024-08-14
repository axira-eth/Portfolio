import Head from 'next/head';
import styles from '../styles/Home.module.scss';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Brody's Portfolio</title>
        <meta name="description" content="Get in touch with Brody" />
      </Head>
      <header className={styles.header}>
        <h1>Hello, I'm Brody</h1>
        <p>I'm a developer exploring the boundaries of web3 and beyond. Feel free to reach out to me!</p>
      </header>
      <main className={styles.main}>
        <a href="mailto:your-email@example.com" className={styles.contactLink}>Contact Me</a>
      </main>
    </div>
  );
}
