import Image from 'next/image'
export function Gallery({ product }) {
  return (
  <div className="card w-96 bg-base-100 shadow-xl w-full h-full">
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
  );
}
