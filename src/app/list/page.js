"use client"
import { useEffect, useState } from 'react';
import { filterProducts } from '../../../lib/shopify';
import Image from 'next/image';

export default function ProductLists() {
  const [products, setProducts] = useState([])
  useEffect(() => {
    async function fetchAllProducts() {
      const response = await fetch('/api/products');
      const data = await response.json();
      const productList = await filterProducts(data)
      console.log(productList)
      setProducts(productList);
    }
    fetchAllProducts();
  }, []);

  return (
    <section className='container py-8 mx-auto'>
      {products.length === 0 ? (
        <p className="py-3 text-lg">{`No products found in this collection`}</p>
      ) : (
        <>
          <h1 className='text-center mb-4'>All products</h1>
          <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4'>
            {products.map((product) => (
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
                  <a className='btn'>Buy now</a>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </section>
  )
}