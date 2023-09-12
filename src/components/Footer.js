import Link from 'next/link';
import LogoSquare from './LogoSquare';

export function Footer({ initialData }) {
  const currentYear = new Date().getFullYear();
  const copyrightDate = 2023 + (currentYear > 2023 ? `-${currentYear}` : '');
  const skeleton = 'w-full h-6 animate-pulse rounded bg-neutral-200 dark:bg-neutral-700';
  const copyrightName = initialData?.brand?.basic_information?.brand_name || '';

  return (
    <footer className="text-sm text-neutral-500 dark:text-neutral-400 border-t border-neutral-200">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-6 py-12 text-sm dark:border-neutral-700 md:flex-row md:gap-12 md:px-4 min-[1320px]:px-0">
        <div className='flex items-center '>
          <Link className="text-black dark:text-white" href="/">
              {initialData?.brand?.basic_information?.logo ? 
                <LogoSquare url={initialData?.brand?.basic_information?.logo}/> :
                <span className="uppercase">{initialData.brand.basic_information.brand_name}</span>
              }
          </Link>
        </div>

        <nav>
          <ul>
            {initialData?.products?.size > 9 ?
            <li>
              <Link
                href="/list"
                className="text-neutral-500 underline-offset-4 hover:text-black hover:underline dark:text-neutral-400 dark:hover:text-neutral-300"
              >
                All products
              </Link>
            </li> : null}
            <li>
              <Link
                href="/about"
                className="block p-2 text-lg underline-offset-4 hover:text-black hover:underline dark:hover:text-neutral-300 md:inline-block md:text-sm">
                About us
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="border-t border-neutral-200 max-w-7xl mx-auto py-6 text-sm dark:border-neutral-700">
        <div className="flex w-full flex-col items-center gap-1 px-4 md:flex-row md:gap-0 md:px-4 min-[1320px]:px-0">
          <p>
            &copy; {copyrightDate} {copyrightName}
            {copyrightName.length && !copyrightName.endsWith('.') ? '.' : ''} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

