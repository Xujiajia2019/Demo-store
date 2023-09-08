import './globals.css'
import { Inter } from 'next/font/google'
import {Header} from '../components/Header';
import {Footer} from '../components/Footer';
import { supabase } from '/api'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
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
  const initialData = getData()

  return (
    <html lang="en">
      <body className={inter.className}>
        <Header initialData={initialData}/>
        {children}
        <Footer initialData={initialData}/>
      </body>
    </html>
  )
}
