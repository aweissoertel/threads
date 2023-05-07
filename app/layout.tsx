import {Poppins} from 'next/font/google';

import './globals.css';

const poppins = Poppins({weight: '200', subsets: ['latin']});

export const metadata = {
  title: 'threads',
  description: 'Be productive or whatever.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
