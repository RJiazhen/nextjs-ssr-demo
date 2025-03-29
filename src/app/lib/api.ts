import { UserInfo } from '@/app/api/user/route';

export const getUserInfo = async (): Promise<UserInfo> => {
  const response = await fetch('http://localhost:3000/api/user', {
    cache: 'no-store',
  });

  if (!response.ok) {
    throw new Error('Failed to fetch user info');
  }

  return response.json();
};
