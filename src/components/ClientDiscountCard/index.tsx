import { useEffect } from 'react';
import { useState } from 'react';
import styles from './index.module.scss';

interface DiscountInfo {
  discountPercentage: number;
  originalPrice: number;
  discountedPrice: number;
  validUntil: string;
  features: string[];
}

async function getDiscountInfo(): Promise<DiscountInfo> {
  const response = await fetch('/api/premium-discount', {
    cache: 'no-store',
  });

  if (!response.ok) {
    throw new Error('Failed to fetch discount info');
  }

  return response.json();
}

export const ClientDiscountCard = () => {
  const [discountInfo, setDiscountInfo] = useState<DiscountInfo | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDiscount = async () => {
      try {
        const discountInfo = await getDiscountInfo();
        setDiscountInfo(discountInfo);
      } catch (error) {
        console.error('Error fetching discount:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchDiscount();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (!discountInfo) return <div>No discount available</div>;

  return (
    <div className={styles.discountCard}>
      <div className={styles.discountHeader}>
        <h3>Special Premium Offer</h3>
        <div className={styles.discountBadge}>
          {discountInfo.discountPercentage}% OFF
        </div>
      </div>

      <div className={styles.priceSection}>
        <div className={styles.priceInfo}>
          <span className={styles.originalPrice}>
            ${discountInfo.originalPrice}
          </span>
          <span className={styles.discountedPrice}>
            ${discountInfo.discountedPrice}
          </span>
        </div>
        <p className={styles.savings}>
          You save $
          {(discountInfo.originalPrice - discountInfo.discountedPrice).toFixed(
            2,
          )}
        </p>
      </div>

      <div className={styles.featuresSection}>
        <h4>Premium Features</h4>
        <ul className={styles.featuresList}>
          {discountInfo.features.map((feature, index) => (
            <li key={index}>
              <span className={styles.checkmark}>✓</span>
              {feature}
            </li>
          ))}
        </ul>
      </div>

      <div className={styles.offerFooter}>
        <p className={styles.offerValidUntil}>
          Offer valid until{' '}
          {new Date(discountInfo.validUntil).toLocaleDateString()}
        </p>
        <button className={styles.upgradeButton}>Upgrade to Premium</button>
      </div>
    </div>
  );
};
