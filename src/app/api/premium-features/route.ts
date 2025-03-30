import { NextResponse } from 'next/server';
import { getPremiumFeatures } from '@/lib/api';
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
  const premiumFeatures = await getPremiumFeatures();

  return NextResponse.json(premiumFeatures);
}
