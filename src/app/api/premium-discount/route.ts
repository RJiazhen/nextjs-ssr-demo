import { getPremiumDiscount } from '@/lib/api';
import { NextResponse } from 'next/server';

export async function GET() {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 800));

  const discountInfo = getPremiumDiscount();

  return NextResponse.json(discountInfo);
}
