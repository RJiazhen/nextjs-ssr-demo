import styles from './index.module.scss';
import { getPremiumDiscount } from '@/lib/api';

export const DiscountCard = async () => {
  const discountInfo = await getPremiumDiscount();

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
