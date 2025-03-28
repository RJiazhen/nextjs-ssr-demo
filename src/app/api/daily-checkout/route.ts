import { NextResponse } from 'next/server';

export interface DailyCheckoutResponse {
  hasCheckedOut: boolean;
  lastCheckoutDate: string | null;
  streakCount: number;
  nextCheckoutAvailable: string;
}

export async function GET() {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 500));


  const hasCheckedOut = Math.random() > 0.5;

  // Simulate checking if user has checked out today
  const today = new Date();
  const lastCheckout = hasCheckedOut
    ? new Date(today)
    : new Date(today.getDate() - 1);

  const response: DailyCheckoutResponse = {
    hasCheckedOut,
    lastCheckoutDate: lastCheckout.toISOString(),
    streakCount: Math.floor(Math.random() * 10), // User has a 5-day streak
    nextCheckoutAvailable: new Date(today.setHours(0, 0, 0, 0)).toISOString(), // Next checkout available at midnight
  };

  return NextResponse.json(response);
}
