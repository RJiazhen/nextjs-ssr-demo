import { NextResponse } from 'next/server';

interface DiscountInfo {
  discountPercentage: number;
  originalPrice: number;
  discountedPrice: number;
  validUntil: string;
  features: string[];
}

export async function GET() {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 800));

  const discountInfo: DiscountInfo = {
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

  return NextResponse.json(discountInfo);
}
