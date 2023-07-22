import Image from 'next/image'
import { Inter } from 'next/font/google'
import HeadMeta from '@/components/HeadMeta'
import Header from '@/components/Layout/Header'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <HeadMeta title="Sport Shop" />
    <Header />
    
    </>
  )
}
