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

export const getPremiumDiscount = () => {
  const discountInfo = {
    discountPercentage: 20,
    originalPrice: 99.99,
    discountedPrice: 79.99,
    validUntil: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(), // 7 days from now
    features: [
      'Ad-free experience',
      'Exclusive content access',
      'Priority support',
      'Early access to new features',
    ],
  };

  return discountInfo;
};

export const getPremiumFeatures = () => {
  const premiumFeatures = {
    features: [
      {
        id: 'storage',
        title: 'Unlimited Storage',
        description: 'Store and access your files without any size limitations',
        icon: '💾',
        category: 'core',
      },
      {
        id: 'bandwidth',
        title: 'High Bandwidth',
        description: 'Fast download and upload speeds for all your content',
        icon: '⚡',
        category: 'core',
      },
      {
        id: 'priority',
        title: 'Priority Support',
        description: 'Get help from our support team within 24 hours',
        icon: '🎯',
        category: 'support',
      },
      {
        id: 'exclusive',
        title: 'Exclusive Content',
        description: 'Access premium-only content and early releases',
        icon: '🌟',
        category: 'exclusive',
      },
      {
        id: 'analytics',
        title: 'Advanced Analytics',
        description: 'Detailed insights and statistics for your account',
        icon: '📊',
        category: 'exclusive',
      },
    ],
    subscription: {
      status: 'active',
      startDate: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString(), // 30 days ago
      endDate: new Date(Date.now() + 60 * 24 * 60 * 60 * 1000).toISOString(), // 60 days from now
      daysRemaining: 60,
      autoRenew: true,
    },
    usage: {
      storageUsed: 256, // GB
      storageLimit: 1024, // GB
      bandwidthUsed: 500, // GB
      bandwidthLimit: 2000, // GB
    },
  };

  return premiumFeatures;
};
