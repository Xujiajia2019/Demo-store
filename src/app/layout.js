import './globals.css'
import { Inter } from 'next/font/google'
import {Header} from '@components/layout/Header';
import {Footer} from '@components/layout/Footer';
import { getData } from 'lib/data';
import postcss from 'postcss';
// import tailwindcss from 'tailwindcss';
import { hexToHSL } from 'lib/utils';
// export const dynamic = 'force-dynamic'

const inter = Inter({ subsets: ['latin'] })

export default async function RootLayout({ children }) {
  let initialData
  try {
    initialData = await getData();
  } catch (error) {
    console.error('Error:', error.message);
  }

  // async function generateCSS(primaryColor) {
  //   const hslColor = hexToHSL(primaryColor);
  //   const result = await postcss().process(`:root { --p: ${hslColor.hue} ${hslColor.saturation} ${hslColor.lightness} }`, { from: undefined });
  //   return result.css;
  // }

  // const css = await generateCSS(initialData.design.primary_color)

  // console.log(`css${css}`)
  // const hslColor = hexToHSL(initialData.design.primary_color);
  return (
    <html lang="en">
      <head>
      {/* <style>
        {`
          :root {
            --p: ${hslColor.hue} ${hslColor.saturation} ${hslColor.lightness};
          }
        `}
      </style> */}
      </head>
      <body className={inter.className}>
        <Header initialData={initialData}/>
        <main className={initialData?.design?.primary_color}>{children}</main>
        <Footer initialData={initialData}/>
      </body>
    </html>
  )
}
