// import { Inter } from 'next/font/google';
import type { Metadata } from 'next'
import './globals.css'

import { Navbar } from '@/components'
import { ReactQueryProvider } from './ReactQueryProvider'


// const inter = Inter({
//   subsets: ['latin'],
//   display: 'swap'
// })

export const metadata: Metadata = {
  title: 'Hotels&Co',
  description: 'Find your next home in a matter of a click.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {

  return (
    <ReactQueryProvider>
      <html lang="en">
        <body className="flex flex-col h-screen">
          <Navbar />
          {children}
        </body>
      </html>
    </ReactQueryProvider>
  )
}
