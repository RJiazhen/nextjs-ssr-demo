import { UserInfo } from '@/app/api/user/[id]/route';
import { request } from '@/lib/request';

export const getUserInfo = (userId: string) => {
  return request<UserInfo>(`/api/user/${userId}`);
};
