import { ImageBanner } from '@components/ImageBanner';
import { Richtext } from '@components/Richtext';
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

  const heading = {
    value: "About us"
  }
  let featuredImage = null
  if (initialData?.brand?.brand_story?.featured_image) {
    featuredImage = {
      image: {
        url: initialData.brand.brand_story.featured_image,
        altText: "About us"
      }
    }
  }
  return (
    <>
      <div>
        <ImageBanner figure={featuredImage} heading={heading} />
        <Richtext content={initialData.brand.brand_story.brand_story} />
      </div>
    </>
  );
}
