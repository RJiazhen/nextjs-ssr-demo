import { ClientDiscountCard } from '@/components/ClientDiscountCard';
import { ClientPremiumFeatures } from '@/components/ClientPremiumFeatures';
import { useEffect, useState } from 'react';
import styles from './index.module.scss';

interface User {
  name: string;
  email: string;
  stats: {
    posts: number;
    followers: number;
    following: number;
  };
  isPremium: boolean;
}

interface ClientUserCardProps {
  id: string;
}

const getUserInfo = async (id: string) => {
  const response = await fetch(`/api/user/${id}`);

  if (!response.ok) {
    throw new Error('Failed to fetch user info');
  }

  return response.json();
};

export function ClientUserCard({ id }: ClientUserCardProps) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const data = await getUserInfo(id);
        setUser(data);
      } catch (error) {
        console.error('Error fetching user:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (!user) return <div>No user found</div>;

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

      {user.isPremium ? <ClientPremiumFeatures /> : <ClientDiscountCard />}
    </>
  );
}
