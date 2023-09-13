import Link from 'next/link';

export function Footer({ initialData }) {
  const currentYear = new Date().getFullYear();
  const copyrightDate = 2023 + (currentYear > 2023 ? `-${currentYear}` : '');
  const copyrightName = initialData?.brand?.basic_information?.brand_name || '';

  return (
    <footer className="footer footer-center py-4 bg-base-200 text-base-content rounded">
      <div>
        <nav className="grid grid-flow-col gap-4">
          {initialData?.products?.size > 9 ?
            <Link
              href="/list"
              className="block p-2 text-lg underline-offset-4 hover:text-black hover:underline dark:hover:text-neutral-300 md:inline-block md:text-sm"
            >
              All products
            </Link>
             : null}
            <Link
              href="/about"
              className="block p-2 text-lg underline-offset-4 hover:text-black hover:underline dark:hover:text-neutral-300 md:inline-block md:text-sm">
              About us
            </Link>
            <Link
              href="/privacy-policy"
              className="block p-2 text-lg underline-offset-4 hover:text-black hover:underline dark:hover:text-neutral-300 md:inline-block md:text-sm">
              Privacy Policy
            </Link>
        </nav> 
      </div>

      <nav className="grid grid-flow-row gap-6">
        <div className="grid grid-flow-row gap-2">
          <p className="text-lg">Contact us</p>
          <div>Email: <span>{initialData?.brand?.contact?.email}</span></div>
          {initialData?.brand?.contact?.phone ? <div>Address: <span>{initialData.brand.contact.phone}</span></div> : null}
          {initialData?.brand?.contact?.address ? <div>Address: <span>{initialData.brand.contact.address}</span></div> : null}
        </div>
        <div className="grid grid-flow-row gap-2">
          <div className="grid grid-flow-col gap-4">
            {initialData?.brand?.contact?.twitter ? <Link href=""><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg></Link> : null }
            {initialData?.brand?.contact?.youtube ? <Link href=""><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></Link> : null }
            {initialData?.brand?.contact?.facebook ? <Link href=""><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></Link> : null }
          </div>
        </div>
      </nav> 
      <aside>
        <p>
          &copy; {copyrightDate} {copyrightName}
          {copyrightName.length && !copyrightName.endsWith('.') ? '.' : ''} All rights reserved.
        </p>
      </aside>
    </footer>
  )
}

