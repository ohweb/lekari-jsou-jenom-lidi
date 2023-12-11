import { Analytics } from '@vercel/analytics/react'
import { Inter, Lexend } from 'next/font/google'
import clsx from 'clsx'

import '@/styles/tailwind.css'
import { type Metadata } from 'next'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

export const metadata: Metadata = {
  title: {
    template: '%s - Lékaři jsou jenom lidi',
    default: 'Lékaři jsou jenom lidi',
  },
  description:
    'Na základě schválení novelizace zákoníku práce, která vstoupí v účinnosti 1. 10. 2023, vypovídáme veškeré dobrovolné přesčasy k 1. 12. 2023.',
}

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const lexend = Lexend({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-lexend',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={clsx(
        'h-full scroll-smooth bg-white antialiased',
        inter.variable,
        lexend.variable,
      )}
    >
      <body className="flex h-full flex-col">
        <Header />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
