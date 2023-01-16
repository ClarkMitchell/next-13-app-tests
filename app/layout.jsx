import './globals.css';
import { Inter } from '@next/font/google';
import Link from 'next/link';
import styles from './page.module.css';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.jsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <main className={styles.main}>
          {children}

          <div className={styles.grid}>
            <Link href="/docs" className={styles.card}>
              <h2 className={inter.className}>
                Docs <span>-&gt;</span>
              </h2>
              <p className={inter.className}>
                Find in-depth information about Next.js features and API.
              </p>
            </Link>

            <Link href="/templates" className={styles.card}>
              <h2 className={inter.className}>
                Templates <span>-&gt;</span>
              </h2>
              <p className={inter.className}>
                Explore the Next.js 13 playground.
              </p>
            </Link>

            <Link href="/deploy" className={styles.card}>
              <h2 className={inter.className}>
                Deploy <span>-&gt;</span>
              </h2>
              <p className={inter.className}>
                Instantly deploy your Next.js site to a shareable URL with
                Vercel.
              </p>
            </Link>
          </div>
        </main>
      </body>
    </html>
  );
}
