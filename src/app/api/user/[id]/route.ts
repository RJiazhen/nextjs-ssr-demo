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

export async function GET(request: Request) {
  const id = request.url.split('/').pop();
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const userInfo = {
    id: Number(id),
    name: 'John Doe',
    email: 'john@example.com',
    isPremium: Number(id) % 2 === 0,
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
