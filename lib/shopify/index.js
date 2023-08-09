import Client from "shopify-buy";

export async function shopifyFetch({ query, variables }) {
  const endpoint = process.env.API_URL;
  const key = process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN;
  try {
    const result = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Shopify-Storefront-Access-Token': key
      },
      body: { query, variables } && JSON.stringify({ query, variables })
    });

    return {
      status: result.status,
      body: await result.json()
    };
  } catch (error) {
    console.error('Error:', error);
    return {
      status: 500,
      error: 'Error receiving data'
    };
  }
}

export async function getAllProducts() {
  return shopifyFetch({
    query: `{
        products(first: 200) {
          edges {
            node {
              title
              handle
              featuredImage {
                url
              }
            }
          }
        }
      }`
  });
}

export async function filterProducts(responseData) {
  return responseData.body.data.products.edges.map(item => item.node)
}

export const shopifyClient = Client.buildClient({
  storefrontAccessToken: process.env.SHOPIFY_STORE_FRONT_ACCESS_TOKEN,
  domain: process.env.SHOPIFY_STORE_DOMAIN,
});

export const parseShopifyResponse = (response) =>  JSON.parse(JSON.stringify(response));