import Image from 'next/image';

import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <p className={styles.test}>This is some text to highlight the font</p>
    </main>
  );
}
