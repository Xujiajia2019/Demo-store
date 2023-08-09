"use client"
import {ImageBanner} from '../components/ImageBanner';
import {ImageCards} from '../components/ImageCards';
import {ImageGrid} from '../components/ImageGrid';
import {ImagewithText} from '../components/ImagewithText';
import {Testimonial} from '../components/Testimonial';
import {SampleProducts} from '../components/SampleProducts';
import { useEffect, useState } from 'react';
import { supabase } from '/api'

const renderComponent = (componentName, props) => {
  switch (componentName) {
    case 'ImageBanner':
      return <ImageBanner {...props} />;
    case 'ImagewithText':
      return <ImagewithText {...props} />;
    case 'FeaturedCollection':
      return <SampleProducts {...props} />;
    case 'ImageCards':
      return <ImageCards {...props} />;
    case 'ImageGrid':
      return <ImageGrid {...props} />;
    case 'Testimonial':
      return <Testimonial {...props} />;
    default:
      return null;
  }
};

export default function Index() {
  const [data, setData] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      let {data, error} = await supabase
        .from('Page data')
        .select('data')
        .order('created_at', { ascending: false })
        .limit(1)
        .single()
      if (error) {
        throw new Error(error);
      } else {
        setData(data.data)
      }
    };
    fetchData();
  }, [])

  return (
    <>
    
    <div>
      {data.map((item, index) => {
        console.log('render')
        const componentName = item['section'];
        const props = item['props'];
        return (
          <div key={`${componentName}-${index}`}>{renderComponent(componentName, props)}</div>
        );
      })}
    </div>
    </>
  );
}
