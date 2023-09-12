import Link from 'next/link';
// import LogoSquare from './LogoSquare';

export function Header({ initialData }) {
  return (
    <header>
      <nav className="relative flex items-center justify-between p-4 lg:px-6">
        <div className="block flex-none md:hidden">
          
        </div>
        <div className="flex w-full items-center">
          <div className="flex w-full md:w-1/3">
            <Link href="/" className="mr-2 flex w-full items-center justify-center md:w-auto lg:mr-6">
                <div className="ml-2 flex-none text-sm font-medium uppercase md:hidden lg:block">
                  {initialData?.brand?.basic_information?.brand_name}
                </div>
              {/* {initialData?.brand?.basic_information?.logo ? 
                <LogoSquare url={initialData?.brand?.basic_information?.logo}/> :
                <div className="ml-2 flex-none text-sm font-medium uppercase md:hidden lg:block">
                  {initialData?.brand?.basic_information?.brand_name}
                </div>
              } */}
            </Link>
            <ul className="hidden gap-6 text-sm md:flex md:items-center">
              {initialData?.products?.size > 9 ?
                <li>
                  <Link
                    href="/about"
                    className="text-neutral-500 underline-offset-4 hover:text-black hover:underline dark:text-neutral-400 dark:hover:text-neutral-300"
                  >
                    All products
                  </Link>
                </li> : null}
              <li>
                <Link
                  href="/about"
                  className="text-neutral-500 underline-offset-4 hover:text-black hover:underline dark:text-neutral-400 dark:hover:text-neutral-300"
                >
                  About
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}


