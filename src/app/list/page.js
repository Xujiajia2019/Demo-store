"use client"
import { useEffect, useState } from 'react';
import { filterProducts } from '../../../lib/shopify';

export default function ProductLists() {
  const [products, setProducts] = useState([])
  useEffect(() => {
    async function fetchAllProducts() {
      const response = await fetch('/api/products');
      const data = await response.json();
      console.log(data)
      const productList = await filterProducts(data)
      console.log(productList)
      setProducts(productList);
    }
    fetchAllProducts();
  }, []);

  return (
    <section>
      {products.length === 0 ? (
        <p className="py-3 text-lg">{`No products found in this collection`}</p>
      ) : (
        <>
          {products.map((product) => (
            <p key={product.id}>{product.title}</p>
          ))}
        </>
      )}
    </section>
  )
}