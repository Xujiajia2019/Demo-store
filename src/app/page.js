import {ImageBanner} from '../components/ImageBanner';
import { supabase } from '/api'
import { SampleProducts } from '@/components/SampleProducts';


export default function Index() {
  async function getData () {
    let {data, error} = await supabase
    .from('Page data')
    .select('data')
    .order('created_at', { ascending: false })
    .limit(1)
    .single()

  if (data) {
    return data.data.homepageBanner.props
  } else {
    throw new Error(error)
  }
  }
  const banner = getData()

  return (
    <>
      <div>
        <ImageBanner {...banner} />
        <SampleProducts/>
      </div>
    </>
  );
}
