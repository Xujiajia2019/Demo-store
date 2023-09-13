import Image from 'next/image'
import { getProducts } from 'lib/shopify';
import { Gallery } from '@components/products/Gallery';
// import Link from 'next/link';

export async function FeaturedProducts({ vendor }) {
  async function fetchAllProducts(vendor) {
    const response = await getProducts(vendor)
    const data = response
    return data
  }
  const products = await fetchAllProducts(vendor)
  return (
    <section className='container mx-auto flex px-5 py-8 flex-col items-center'>
      <div className="flex flex-col items-baseline justify-between gap-4 px-6 py-8 sm:px-8 md:px-12 dark:from-contrast/60 dark:text-primary from-primary/60">
        <h1 className="mb-5 text-5xl font-bold">Featured products</h1>
      </div>
      <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4'>
        {products.slice(0, 8).map((product) => ( 
            <div key={product.id} className='h-full'>
              <Gallery product={product} />
            </div>
        ))}
      </div>
      {products.length > 4 ? <a href='/list' className='btn btn-primary mt-4'>View all</a> : null} 
    </section>
  );
}
