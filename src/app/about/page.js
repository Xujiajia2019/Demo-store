import { ImageBanner } from '@components/ImageBanner';
import { Richtext } from '@components/Richtext';
import { getData } from 'lib/data';
export const fetchCache = 'force-no-store';

export default async function Index() {
  let initialData
  try {
    initialData = await getData();
  } catch (error) {
    console.error('Error:', error.message);
  }

  const heading = {
    value: "About us"
  }
  let featuredImage = null
  if (initialData?.brand?.brand_story?.featured_image) {
    featuredImage = {
      image: {
        url: initialData?.brand?.brand_story?.featured_image,
        altText: "About us"
      }
    }
  }
  return (
    <>
      <div>
        <ImageBanner figure={featuredImage} heading={heading} />
        <Richtext content={initialData?.brand?.brand_story?.brand_story} />
      </div>
    </>
  );
}
