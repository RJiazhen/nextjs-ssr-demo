'use client';

import { useState, useEffect } from 'react';
import styles from '../../index.module.scss';

interface DailyCheckoutResponse {
  hasCheckedOut: boolean;
  lastCheckoutDate: string | null;
  streakCount: number;
  nextCheckoutAvailable: string;
}

interface SyncDailyCheckoutProps {
  status: DailyCheckoutResponse;
}

export const SyncDailyCheckout = ({ status }: SyncDailyCheckoutProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;

      if (scrollPosition > windowHeight / 2) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className={`${styles.dailyCheckoutWrapper} ${
        isVisible ? styles.visible : ''
      }`}
    >
      <div className={styles.dailyCheckout}>
        <div className={styles.checkoutHeader}>
          <h3>Checkout</h3>
          <div
            className={`${styles.checkoutStatus} ${
              status.hasCheckedOut ? styles.checked : ''
            }`}
          >
            {status.hasCheckedOut ? '✓' : '✗'}
          </div>
        </div>
        <div className={styles.streakInfo}>
          <div className={styles.streakCount}>
            <span className={styles.streakNumber}>{status.streakCount}</span>
            <span className={styles.streakLabel}>Day Streak 🔥</span>
          </div>
        </div>
        {!status.hasCheckedOut && (
          <button className={styles.checkoutButton}>Check In</button>
        )}
      </div>
    </div>
  );
};
