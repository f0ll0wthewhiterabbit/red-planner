import type { Metadata } from 'next'
import { Noto_Sans } from 'next/font/google'

import { SITE_NAME } from '@/constants/seo.contants'

import './globals.css'

const zen = Noto_Sans({
  subsets: ['cyrillic', 'latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-zen',
  style: ['normal'],
})

export const metadata: Metadata = {
  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_NAME}`,
  },
  description: 'Best one for planning',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={zen.className}>{children}</body>
    </html>
  )
}
