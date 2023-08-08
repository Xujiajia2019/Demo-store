"use client"
import { useEffect, useState } from 'react';

export default function ProductLists() {
  const [products, setProducts] = useState([])
  useEffect(() => {
    async function fetchAllProducts() {
      const response = await fetch('/api/products');
      const data = await response.json();
      setProducts(data);
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