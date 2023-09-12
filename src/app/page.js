import { ImageBanner } from '@components/ImageBanner';
import { FeaturedProducts } from '@components/products/FeaturedProducts';
import { supabase } from '/api'

export default async function Index() {
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
  return (
    <>
      <div>
        <ImageBanner {...initialData.homepage_banner} />
        <FeaturedProducts/>
      </div>
    </>
  );
}
