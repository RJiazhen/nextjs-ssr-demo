import { SyncDailyCheckout } from './components/syncComponent';

interface DailyCheckoutResponse {
  hasCheckedOut: boolean;
  lastCheckoutDate: string | null;
  streakCount: number;
  nextCheckoutAvailable: string;
}

async function getDailyCheckoutStatus(): Promise<DailyCheckoutResponse> {
  const response = await fetch('http://localhost:3000/api/daily-checkout', {
    cache: 'no-store',
  });

  if (!response.ok) {
    throw new Error('Failed to fetch daily checkout status');
  }

  return response.json();
}

export const DailyCheckout = async () => {
  const status = await getDailyCheckoutStatus();
  return <SyncDailyCheckout status={status} />;
};
