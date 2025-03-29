import { Suspense } from 'react';
import styles from './page.module.scss';
import { SsrUserCard } from '@/components/ssr-component/SsrUserCard';

export default async function StreamingRender({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Streaming Render Demo</h1>
        <p>
          This page demonstrates streaming server-side rendering with React
          Suspense
        </p>

        <div className={styles.demoSection}>
          <Suspense
            fallback={
              <div className={styles.loading}>Loading user info...</div>
            }
          >
            <SsrUserCard id={id} />
          </Suspense>
        </div>
      </main>
    </div>
  );
}
