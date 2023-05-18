import {Poppins} from 'next/font/google';

import '@app/globals.css';
import NavMenu from '@app/navMenu/NavMenu';
import AuthProvider from '@app/util/AuthProvider';

import SideBar from './SideBar';
import styles from './layout.module.css';

const poppins = Poppins({weight: '300', subsets: ['latin']});

export const metadata = {
  title: 'threads',
  description: 'Be productive or whatever.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <AuthProvider>
      <html lang='en'>
        <body className={poppins.className}>
          <div className={styles.container}>
            <div className={styles.navMenu}>
              <NavMenu />
            </div>
            <div className={styles.sideBar}>
              <SideBar />
            </div>
            <div className={styles.content}>{children}</div>
          </div>
        </body>
      </html>
    </AuthProvider>
  );
}
