'use client';

import { Suspense } from 'react';
import styles from './page.module.scss';
import { useParams } from 'next/navigation';
import { ClientUserCard } from '@/components/ClienUserCard';
export default function ClientRender() {
  const { id } = useParams<{ id: string }>();

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Client Render Demo</h1>
        <p>This page demonstrates client-side rendering with React Suspense</p>

        <div className={styles.demoSection}>
          <Suspense
            fallback={
              <div className={styles.loading}>Loading user info...</div>
            }
          >
            <ClientUserCard id={id} />
          </Suspense>
        </div>
      </main>
    </div>
  );
}
