import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
// Exemple pour `index.js`
import Navbar from '../components/Navbar';
// ... reste du code
export default function Home() {
  return (
    <div className={styles.container}>
      <Navbar />
      {/* ... reste du code */}
    </div>
  );
}

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Mon Portfolio</title>
        <meta name="description" content="Mon portfolio personnel" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Bienvenue sur mon portfolio
        </h1>
        <Image src="/images/profile.jpg" alt="Profil" width={150} height={150} />
      </main>

      <footer className={styles.footer}>
        <p>© 2024 Mon Nom</p>
      </footer>
    </div>
  );
}
