import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Link from 'next/link';
import './globals.scss';
import styles from './layout.module.scss';
import githubIcon from '@/assets/img/icon-github.svg';
import Image from 'next/image';
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Next.js SSR Demo',
  description: 'A demonstration of Next.js Server-Side Rendering features',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className={styles.container}>
          <header className={styles.header}>
            <div className={styles.headerContent}>
              <Link
                href="/"
                className={styles.logo}
              >
                Next.js SSR Demo
              </Link>
              <Link
                href="https://github.com/RJiazhen/nextjs-ssr-demo"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.githubIcon}
              >
                <Image
                  src={githubIcon}
                  alt="GitHub"
                  width={24}
                  height={24}
                />
              </Link>
            </div>
          </header>
          <main className={styles.main}>{children}</main>
          <footer className={styles.footer}>
            <p>Built with Next.js and React Suspense</p>
          </footer>
        </div>
      </body>
    </html>
  );
}
