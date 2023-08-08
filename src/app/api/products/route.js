import { getAllProducts } from 'lib/shopify';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const products = await getAllProducts();
    console.log(products)
    return NextResponse.json(products)
  } catch (error) {
    return NextResponse.json({error})
  }
}