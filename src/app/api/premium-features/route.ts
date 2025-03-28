import { NextResponse } from 'next/server';

export interface PremiumFeature {
  id: string;
  title: string;
  description: string;
  icon: string;
  category: 'core' | 'exclusive' | 'support';
}

export interface PremiumFeaturesResponse {
  features: PremiumFeature[];
  subscription: {
    status: 'active' | 'expired' | 'trial';
    startDate: string;
    endDate: string;
    daysRemaining: number;
    autoRenew: boolean;
  };
  usage: {
    storageUsed: number;
    storageLimit: number;
    bandwidthUsed: number;
    bandwidthLimit: number;
  };
}

export async function GET() {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 800));

  const premiumFeatures: PremiumFeaturesResponse = {
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

  return NextResponse.json(premiumFeatures);
}
