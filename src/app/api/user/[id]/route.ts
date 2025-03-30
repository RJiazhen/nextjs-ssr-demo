import { NextResponse } from 'next/server';
import { getUserInfo } from '@/lib/api';
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
  if (!id) {
    return NextResponse.json({ error: 'User ID is required' }, { status: 400 });
  }
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const userInfo = getUserInfo(id);

  return NextResponse.json(userInfo);
}
