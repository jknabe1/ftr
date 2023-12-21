import type { Metadata } from 'next'
import './globals.css'
import Header from './components/Header';
import Footer from '@/app/components/Footer';
import NewsLetter from './components/NewsLetter';
import { Suspense } from 'react';
import Loading from './loading';
import Accessibility from "@/app/components/Accessibility"
  


export const metadata: Metadata = {
  title: 'FTR - FLIP THE RECORD | EN IDEELL KULTURELL TIDSKRIFT',
  description: 'FTR - FLIP THE RECORD | EN IDEELL KULTURELL TIDSKRIFT',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="sv_SE">
      <body className="bg-white border-x-4 border-b-4 border-black font-sans">
      <Suspense fallback={<Loading/>}>
        <Header/>
          {children}
          <NewsLetter/>
          <Footer/>
          <Accessibility/>
          </Suspense>
      </body>
    </html>
  )
}
