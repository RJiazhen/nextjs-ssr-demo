import { NextResponse } from 'next/server';

// Simulated user data

export type UserInfo = {
  id: number;
  name: string;
  email: string;
  isPremium: boolean;
  joinDate: string;
  subscriptionEnd: string;
  stats: {
    posts: number;
    followers: number;
    following: number;
  };
};

export async function GET() {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const userInfo = {
    id: 1,
    name: 'John Doe',
    email: 'john@example.com',
    isPremium: Math.random() > 0.5,
    joinDate: '2024-01-15',
    subscriptionEnd: '2024-12-31',
    stats: {
      posts: Math.floor(Math.random() * 100),
      followers: Math.floor(Math.random() * 1000),
      following: Math.floor(Math.random() * 100),
    },
  };

  return NextResponse.json(userInfo);
}
