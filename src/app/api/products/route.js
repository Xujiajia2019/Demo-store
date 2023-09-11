import { getProducts } from 'lib/shopify';
import { NextResponse } from 'next/server';

export async function POST(req) {
  try {
    const products = await getProducts();
    return NextResponse.json(products)
  } catch (error) {
    return NextResponse.json({error})
  }
}