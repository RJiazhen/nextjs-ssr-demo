import styles from './index.module.scss';
import { UserInfo } from '@/app/api/user/route';
import PremiumFeatures from '@/app/components/PremiumFeatures';
import { Suspense } from 'react';
import DiscountCard from '@/app/components/DiscountCard';
import { DailyCheckout } from '@/app/components/DailyCheckout';

const getUserInfo = async (): Promise<UserInfo> => {
  const response = await fetch('http://localhost:3000/api/user', {
    cache: 'no-store',
  });

  if (!response.ok) {
    throw new Error('Failed to fetch user info');
  }

  return response.json();
};

export const SsrUserCard = async () => {
  const user = await getUserInfo();

  return (
    <div className={styles.userCard}>
      <div className={styles.userHeader}>
        <div className={styles.avatarContainer}>
          {user.isPremium && (
            <div className={styles.premiumBadge}>
              <span>⭐</span>
            </div>
          )}
        </div>
        <div className={styles.userInfo}>
          <h3>{user.name}</h3>
          <p className={styles.email}>{user.email}</p>
        </div>
      </div>

      <div className={styles.userStats}>
        <div className={styles.statItem}>
          <span className={styles.statValue}>{user.stats.posts}</span>
          <span className={styles.statLabel}>Posts</span>
        </div>
        <div className={styles.statItem}>
          <span className={styles.statValue}>{user.stats.followers}</span>
          <span className={styles.statLabel}>Followers</span>
        </div>
        <div className={styles.statItem}>
          <span className={styles.statValue}>{user.stats.following}</span>
          <span className={styles.statLabel}>Following</span>
        </div>
      </div>

      {user.isPremium ? (
        <Suspense fallback={<div>Loading...</div>}>
          <PremiumFeatures />
        </Suspense>
      ) : (
        <Suspense fallback={<div>Loading...</div>}>
          <DiscountCard />
        </Suspense>
      )}
      <Suspense fallback={<div>Loading...</div>}>
        <DailyCheckout />
      </Suspense>
    </div>
  );
};
