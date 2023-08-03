import Image from 'next/image'
import { Inter } from 'next/font/google'
import HeadMeta from '@/components/HeadMeta'
import Header from '@/components/Layout/Header'
import Bannerv2 from '@/components/Layout/Bannerv2'
import Product from '@/components/Layout/Product'

// import Banner from '@/components/Layout/Banner'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <HeadMeta title="Sport Shop" />
    <Header />
    {/* <Banner/> */}
  <Bannerv2/>
<Product/>
    </>
  )
}
