export async function shopifyFetch({ query, variables }) {
  const endpoint = process.env.NEXT_PUBLIC_API_URL;
  const key = process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN;
  try {
    const result = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Shopify-Storefront-Access-Token': key
      },
      body: { query, variables} && JSON.stringify({ query, variables}),
      cache: 'force-cache',
    });

    const body = await result.json()
    if (body.errors) {
      throw body.errors[0]
    }
    return {
      status: result.status,
      body
    };
  } catch (error) {
    console.error('Error:', error);
    return {
      status: 500,
      error: 'Error receiving data'
    };
  }
}

export async function getProducts() {
  const res = await shopifyFetch({
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
  })
  return filterProducts(res)
}

export async function filterProducts(responseData) {
  return responseData.body.data.products.edges.map(item => item.node)
}