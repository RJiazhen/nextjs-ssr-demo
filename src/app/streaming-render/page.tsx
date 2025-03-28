import { Suspense } from 'react';
import styles from '../page.module.css';
import { SsrUserCard } from '@/app/components/ssr-component/SsrUserCard';

export default function StreamingRender() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Streaming Render Demo</h1>
        <p> 
          This page demonstrates streaming server-side rendering with React
          Suspense
        </p>

        <div className={styles.demoSection}>
          <h2>User Profile</h2>
          <Suspense
            fallback={
              <div className={styles.loading}>Loading user info...</div>
            }
          >
            <SsrUserCard />
          </Suspense>
        </div>
      </main>
    </div>
  );
}
