import styles from './index.module.scss';
import { PremiumFeatures } from '@/app/components/PremiumFeatures';
import { Suspense } from 'react';
import { DiscountCard } from '@/app/components/DiscountCard';
import { getUserInfo } from '@/app/lib/api';

export const SsrUserCard = async ({ id }: { id: string }) => {
  const user = await getUserInfo(id);

  return (
    <>
      <div className={styles.userCard}>
        <div className={styles.userHeader}>
          <div className={styles.avatarContainer}>
            <div className={styles.avatar}>{user.name.charAt(0)}</div>
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
    </>
  );
};
