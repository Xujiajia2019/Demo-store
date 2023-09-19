import Link from 'next/link';
import Logo from './Logo';

export function Header({ initialData }) {
  console.log(initialData?.brand?.basic_information?.brand_name)
  return (
    <header className="max-w-7xl mx-auto">
      <div className="navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex="0" className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
              {initialData?.products?.size > 9 ?
                <li>
                  <Link
                    href="/list"
                    className="text-neutral-600 underline-offset-4 hover:text-black hover:underline dark:text-neutral-400 dark:hover:text-neutral-300"
                  >
                    All products
                  </Link>
                </li> : null}
              <li>
                <Link
                  href="/about"
                  className="text-neutral-600 underline-offset-4 hover:text-black hover:underline dark:text-neutral-400 dark:hover:text-neutral-300"
                >
                  About
                </Link>
              </li>
            </ul>
          </div>
          <Logo type="pc" brand_name={initialData?.brand?.basic_information?.brand_name}/>

          <ul className="hidden lg:flex lg:items-center gap-6">
            {initialData?.products?.size > 9 ?
                <li>
                  <Link
                    href="/list"
                    className="text-neutral-600 underline-offset-4 hover:text-black hover:underline dark:text-neutral-400 dark:hover:text-neutral-300"
                  >
                    All products
                  </Link>
                </li> : null}
              <li>
                <Link
                  href="/about"
                  className="text-neutral-600 underline-offset-4 hover:text-black hover:underline dark:text-neutral-400 dark:hover:text-neutral-300"
                >
                  About
                </Link>
              </li>
          </ul>
        </div>
      </div>
    </header>
  )
}


