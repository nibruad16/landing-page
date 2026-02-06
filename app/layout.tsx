import React from "react"
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'

import './globals.css'

const _geist = Geist({ subsets: ['latin'] })
const _geistMono = Geist_Mono({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'The Living Trust Playbook | Protect Your Family\'s Future',
  description:
    'Step-by-step guide to create a living trust without expensive lawyers. Save thousands and protect your assets today.',
  generator: 'v0.app',
  /* [PLACEHOLDER: Add additional SEO metadata as needed] */
  openGraph: {
    title: 'The Living Trust Playbook',
    description:
      'Complete guide to creating a living trust without lawyers. Save $3,000+.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  )
}
