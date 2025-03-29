import { UserInfo } from '@/app/api/user/[id]/route';

export const getUserInfo = async (userId: string): Promise<UserInfo> => {
  const response = await fetch(`http://localhost:3000/api/user/${userId}`, {
    cache: 'no-store',
  });

  if (!response.ok) {
    throw new Error('Failed to fetch user info');
  }

  return response.json();
};
