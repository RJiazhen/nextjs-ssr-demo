import PremiumFeatures from '../components/PremiumFeatures';
import styles from './page.module.scss';

export default function PremiumPage() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <h1 className={styles.title}>Premium Features</h1>
        <p className={styles.description}>
          Access exclusive features and enhanced capabilities with our premium
          subscription.
        </p>
        <PremiumFeatures />
      </div>
    </main>
  );
}
