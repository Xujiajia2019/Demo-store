import {ImageBanner} from '../components/ImageBanner';
import { SampleProducts } from '@/components/SampleProducts';

export default function Index(initialData) {
  return (
    <>
      <div>
        <ImageBanner {...initialData} />
        <SampleProducts/>
      </div>
    </>
  );
}
