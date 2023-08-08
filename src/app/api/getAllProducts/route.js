import { shopifyClient, parseShopifyResponse } from 'lib/shopify';
import { NextResponse } from 'next/server';

export async function GET(req) {
  if (req.method === "GET") {
    try {
      const products = await shopifyClient.product.fetchAll();
      const parsedProducts = parseShopifyResponse(products);
      return NextResponse.json(parsedProducts)
    } catch (error) {
      return NextResponse.json({error})
    }
  } else {
    return NextResponse.json({ error: "Method not allowed", status:405 });
  }
  
}
