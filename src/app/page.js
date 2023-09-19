import { ImageBanner } from '@components/ImageBanner';
import { FeaturedProducts } from '@components/products/FeaturedProducts';
import { getData } from 'lib/data';

export default async function Index() {
  
  let initialData
  try {
    initialData = await getData();
  } catch (error) {
    console.error('Error:', error.message);
  }

  return (
    <>
      <div>
        <ImageBanner {...initialData?.homepage_banner} cta="true"/>
        <FeaturedProducts vendor={initialData?.brand?.basic_information?.vendor}/>
      </div>
    </>
  );
}
