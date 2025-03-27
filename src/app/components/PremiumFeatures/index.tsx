import styles from './index.module.scss';

interface PremiumFeature {
  id: string;
  title: string;
  description: string;
  icon: string;
  category: 'core' | 'exclusive' | 'support';
}

interface PremiumFeaturesResponse {
  features: PremiumFeature[];
  subscription: {
    status: 'active' | 'expired' | 'trial';
    startDate: string;
    endDate: string;
    daysRemaining: number;
    autoRenew: boolean;
  };
  usage: {
    storageUsed: number;
    storageLimit: number;
    bandwidthUsed: number;
    bandwidthLimit: number;
  };
}

async function getPremiumFeatures(): Promise<PremiumFeaturesResponse> {
  const response = await fetch('http://localhost:3000/api/premium-features', {
    cache: 'no-store',
  });

  if (!response.ok) {
    throw new Error('Failed to fetch premium features');
  }

  return response.json();
}

function LoadingPremiumFeatures() {
  return (
    <div className={styles.premiumFeatures}>
      <div className={styles.loadingSpinner}></div>
      <p>Loading premium features...</p>
    </div>
  );
}

export default async function PremiumFeatures() {
  const data = await getPremiumFeatures();

  return (
    <div className={styles.premiumFeatures}>
      <div className={styles.subscriptionStatus}>
        <h3>Subscription Status</h3>
        <div className={styles.statusInfo}>
          <div className={styles.statusBadge}>
            {data.subscription.status === 'active' ? 'Active' : 'Expired'}
          </div>
          <div className={styles.dates}>
            <p>
              Started:{' '}
              {new Date(data.subscription.startDate).toLocaleDateString()}
            </p>
            <p>
              Ends: {new Date(data.subscription.endDate).toLocaleDateString()}
            </p>
            <p>Days remaining: {data.subscription.daysRemaining}</p>
          </div>
          {data.subscription.autoRenew && (
            <p className={styles.autoRenew}>Auto-renewal enabled</p>
          )}
        </div>
      </div>

      <div className={styles.usageStats}>
        <h3>Usage Statistics</h3>
        <div className={styles.statsGrid}>
          <div className={styles.statCard}>
            <h4>Storage</h4>
            <div className={styles.progressBar}>
              <div
                className={styles.progress}
                style={{
                  width: `${
                    (data.usage.storageUsed / data.usage.storageLimit) * 100
                  }%`,
                }}
              ></div>
            </div>
            <p>
              {data.usage.storageUsed}GB / {data.usage.storageLimit}GB
            </p>
          </div>
          <div className={styles.statCard}>
            <h4>Bandwidth</h4>
            <div className={styles.progressBar}>
              <div
                className={styles.progress}
                style={{
                  width: `${
                    (data.usage.bandwidthUsed / data.usage.bandwidthLimit) * 100
                  }%`,
                }}
              ></div>
            </div>
            <p>
              {data.usage.bandwidthUsed}GB / {data.usage.bandwidthLimit}GB
            </p>
          </div>
        </div>
      </div>

      <div className={styles.featuresList}>
        <h3>Premium Features</h3>
        <div className={styles.featuresGrid}>
          {data.features.map((feature) => (
            <div
              key={feature.id}
              className={styles.featureCard}
            >
              <span className={styles.featureIcon}>{feature.icon}</span>
              <h4>{feature.title}</h4>
              <p>{feature.description}</p>
              <span className={styles.featureCategory}>{feature.category}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
