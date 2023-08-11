'use client'
import Image from 'next/image'
import { useEffect, useState } from 'react';


export function SampleProducts({
  heading,
  description,
  blocks,
}) {
  const [products, setProducts] = useState([])
  useEffect(() => {
    async function fetchAllProducts() {
      const response = await fetch('/api/products', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({'PRODUCTS': 'XIXI'})
      });
      const data = await response.json();
      setProducts(data);
    }
    fetchAllProducts();
  }, [])
  return (
    <section className='container mx-auto flex px-5 py-8 flex-col items-center'>
      <div className="flex flex-col items-baseline justify-between gap-4 px-6 py-8 sm:px-8 md:px-12 dark:from-contrast/60 dark:text-primary from-primary/60">
        {heading?.value && (
          <h1 className="mb-5 text-5xl font-bold">{heading.value}</h1>
        )}
        {description?.value && (
          <p className="mb-5">{description.value}</p>
        )}
      </div>
      <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4'>
        {products.slice(0, 4).map((product) => (
          <div key={product.id} className="card w-96 bg-base-100 shadow-xl">
            <figure>
              <Image
                className="object-cover w-full"
                src={product.featuredImage ? product.featuredImage.url : "https://cdn.shopifycdn.net/s/files/1/0723/7559/9411/files/img-placeholder.jpg?v=1685346613"}
                sizes="(min-width: 768px) 50vw, 100vw"
                width={500}
                height={500}
                alt={product.title}
              />   
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">{product.title}</h2>
            </div>
          </div>
        ))}
      </div>
      <a href='/list' className='btn'>View all</a>
    </section>
  );
}
