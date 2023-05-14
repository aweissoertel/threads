import Image from 'next/image';
import Link from 'next/link';

import {ReactElement} from 'react';

import styles from './NavMenu.module.css';

export default function NavMenu(): ReactElement {
  return (
    <nav className={styles.nav}>
      <Link href='/'>
        <Image src='/next.svg' alt='Next logo' width={150} height={30} color='#fff' />
      </Link>
    </nav>
  );
}
