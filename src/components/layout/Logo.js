import Link from 'next/link';
export default function Logo({ brand_name, type, logo }) {
  return (
    <Link href="/" className="w-full items-center justify-center md:w-auto lg:me-6">
        <div className="flex-none text-lg font-bold uppercase md:block">
          {brand_name}
        </div>
      {/* {initialData?.brand?.basic_information?.logo ? 
        <LogoSquare url={initialData?.brand?.basic_information?.logo}/> :
        <div className="ml-2 flex-none text-sm font-medium uppercase md:hidden lg:block">
          {initialData?.brand?.basic_information?.brand_name}
        </div>
      } */}
    </Link>
  );
}
