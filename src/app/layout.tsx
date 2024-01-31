import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'HomeYou',
  description: 'Encontre o melhor para você',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className='overflow-x-hidden scroll-smooth' lang="pt-br">
      <body className={montserrat.className}>
        {children}
      </body>
    </html>
  )
}
