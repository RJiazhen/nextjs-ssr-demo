import Link from 'next/link';
import styles from './page.module.css';
import { getPages } from '../utils/getPages';

export default function Home() {
  const pages = getPages();

  /** pages transform [*] path to real url */
  const pagesWithoutId = pages.map((page) => {
    return {
      ...page,
      path: page.path.replace('[id]', '/1'),
    };
  });

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.navigation}>
          <h2>Available Pages:</h2>
          <ul>
            {pagesWithoutId.map((page) => (
              <li key={page.path}>
                <Link
                  href={page.path}
                  className={styles.link}
                >
                  {page.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </main>
    </div>
  );
}
