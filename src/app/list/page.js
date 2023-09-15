import { getProducts } from 'lib/shopify';
import { getData } from 'lib/data';
import { Gallery } from '@components/products/Gallery';
// export const dynamic = 'force-dynamic'

export default async function ProductLists() {
  
  let initialData
  try {
    initialData = await getData();
  } catch (error) {
    console.error('Error:', error.message);
  }

  const vendor = initialData?.brand?.basic_information?.vendor

  async function fetchAllProducts(vendor) {
    const response = await getProducts(vendor)
    const data = response
    return data
  }
  const products = await fetchAllProducts(vendor)
  return (
    <section className='container py-8 mx-auto px-4'>
      {products.length === 0 ? (
        <p className="py-3 text-lg">{`No products found in this collection`}</p>
      ) : (
        <>
          <h1 className='text-center mb-4'>All products</h1>
          <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4'>
            {products.map((product) => (
              <div key={product.id} className='h-full'>
                <Gallery product={product} />
              </div>
            ))}
          </div>
        </>
      )}
    </section>
  )
}
