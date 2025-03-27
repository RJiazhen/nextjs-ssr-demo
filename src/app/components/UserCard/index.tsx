import styles from './index.module.scss';

interface UserStats {
  posts: number;
  followers: number;
  following: number;
}

interface UserInfo {
  id: number;
  name: string;
  email: string;
  avatar: string;
  isPremium: boolean;
  joinDate: string;
  subscriptionEnd: string;
  stats: UserStats;
}

async function getUserInfo(): Promise<UserInfo> {
  const response = await fetch('http://localhost:3000/api/user', {
    cache: 'no-store',
  });

  if (!response.ok) {
    throw new Error('Failed to fetch user info');
  }

  return response.json();
}

export default async function UserCard() {
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

      {user.isPremium && (
        <div className={styles.premiumInfo}>
          <p>Premium Member</p>
          <p className={styles.subscriptionEnd}>
            Expires: {new Date(user.subscriptionEnd).toLocaleDateString()}
          </p>
        </div>
      )}
    </div>
  );
}
