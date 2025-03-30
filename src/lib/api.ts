export const getUserInfo = (userId: string) => {
  const userInfo = {
    id: Number(userId),
    name: 'John Doe',
    email: 'john@example.com',
    isPremium: Number(userId) % 2 === 0,
    joinDate: '2024-01-15',
    subscriptionEnd: '2024-12-31',
    stats: {
      posts: Math.floor(Math.random() * 100),
      followers: Math.floor(Math.random() * 1000),
      following: Math.floor(Math.random() * 100),
    },
  };

  return userInfo;
};
