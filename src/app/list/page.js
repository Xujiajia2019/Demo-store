import { getProducts } from 'lib/shopify';
import { Gallery } from '@components/products/Gallery';
import { supabase } from '/api'
export const dynamic = 'force-dynamic'

export default async function ProductLists() {
  async function getData () {
    let {data, error} = await supabase
    .from('Page data')
    .select('data')
    .order('created_at', { ascending: false })
    .limit(1)
    .single()
  if (data) {
    return data.data
  } else {
    throw new Error(error)
  }
  }
  const initialData = await getData()
  const vendor = `${initialData.brand.basic_information.brand_name}-${initialData.brand.basic_information.vendor}`

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