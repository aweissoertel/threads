import Image from 'next/image';
import {redirect} from 'next/navigation';

import {getServerSession} from 'next-auth';

import styles from './page.module.css';

export default async function Home() {
  const session = await getServerSession();
  if (!session) {
    redirect('/api/auth/signin');
  }

  return (
    <main className={styles.main}>
      <p className={styles.test}>This is some text to highlight the font</p>
    </main>
  );
}
