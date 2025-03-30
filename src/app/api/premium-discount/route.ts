import { getPremiumDiscount } from '@/lib/api';
import { NextResponse } from 'next/server';

export async function GET() {
  const discountInfo = await getPremiumDiscount();

  return NextResponse.json(discountInfo);
}
