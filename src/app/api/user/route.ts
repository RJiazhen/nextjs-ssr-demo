import { NextResponse } from 'next/server';

// Simulated user data
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

export async function GET() {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return NextResponse.json(userInfo);
}
