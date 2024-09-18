// src/components/Navbar.js
import Link from 'next/link';
import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Link href="/">Accueil</Link>
      <Link href="/about">À propos</Link>
      <Link href="/projects">Projets</Link>
      <Link href="/contact">Contact</Link>
    </nav>
  );
}
