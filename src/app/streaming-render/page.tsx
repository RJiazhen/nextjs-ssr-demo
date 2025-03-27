import { Suspense } from 'react';
import styles from '../page.module.css';
import UserCard from '../components/UserCard';
import DiscountCard from '../components/DiscountCard';

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
            <UserCard onUserInfo={() => {}} />
          </Suspense>
        </div>

        <div className={styles.demoSection}>
          <h2>Premium Offer</h2>
          <Suspense
            fallback={
              <div className={styles.loading}>Loading discount info...</div>
            }
          >
            <DiscountCard />
          </Suspense>
        </div>
      </main>
    </div>
  );
}
