import './globals.css'
import { Inter } from 'next/font/google'
import {Header} from '../components/Header';
import {Footer} from '../components/Footer';
import { supabase } from '/api'
import postcss from 'postcss';
// import tailwindcss from 'tailwindcss';
import { hexToHSL } from 'lib/utils';
export const dynamic = 'force-dynamic'

const inter = Inter({ subsets: ['latin'] })

export default async function RootLayout({ children }) {
  async function getData () {
    let {data, error} = await supabase
    .from('Page data')
    .select('data')
    .order('created_at', { ascending: false })
    .limit(1)
    .single()
    if (data) {
      return data.data
    } else {
      throw new Error(error)
    }
  }
  const initialData = await getData()

  // async function generateCSS(primaryColor) {
  //   const hslColor = hexToHSL(primaryColor);
  //   const result = await postcss().process(`:root { --p: ${hslColor.hue} ${hslColor.saturation} ${hslColor.lightness} }`, { from: undefined });
  //   return result.css;
  // }

  // const css = await generateCSS(initialData.design.primary_color)

  // console.log(`css${css}`)
  const hslColor = hexToHSL(initialData.design.primary_color);
  return (
    <html lang="en">
      <head>
      <style>
        {`
          :root {
            --p: ${hslColor.hue} ${hslColor.saturation} ${hslColor.lightness};
          }
        `}
      </style>
      </head>
      <body className={inter.className}>
        <Header initialData={initialData}/>
        <main className={initialData?.design?.primary_color}>{children}</main>
        <Footer initialData={initialData}/>
      </body>
    </html>
  )
}
