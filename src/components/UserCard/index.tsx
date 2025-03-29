import styles from './index.module.scss';
import { PremiumFeatures } from '@/components/PremiumFeatures';
import { DiscountCard } from '@/components/DiscountCard';
import { getUserInfo } from '@/lib/api';

export const UserCard = async ({ id }: { id: string }) => {
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

      {user.isPremium ? <PremiumFeatures /> : <DiscountCard />}
    </>
  );
};
