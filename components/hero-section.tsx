'use client';

import { useEffect, useState } from 'react'
import { CTAButton } from '@/components/cta-button'
import { siteConfig } from '@/lib/config'

/**
 * HERO SECTION
 * Contains: Headline, book image, subheading, and primary CTA
 *
 * Configuration:
 * - Edit lib/config.ts to change product info, images, and URLs
 * - Update .env.local with your Shopify checkout URL
 * - Manage images via /admin panel or .env variables
 */
export function HeroSection() {
  const [bookCoverUrl, setBookCoverUrl] = useState(siteConfig.images.bookCover)

  useEffect(() => {
    // Check for stored image in localStorage (from admin panel)
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('bookCoverUrl')
      if (stored) {
        setBookCoverUrl(stored)
      }
    }
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-white px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:gap-12 lg:grid-cols-2 items-center">
        {/* Left: Headline & CTA */}
        <div className="flex flex-col justify-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-4">
            {siteConfig.product.tagline}
          </h1>

          <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed max-w-lg">
            {siteConfig.product.description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <CTAButton text="Get Your Copy Now" size="lg" />
          </div>

          {/* Trust badges (optional) */}
          <div className="mt-8 flex items-center gap-6 text-sm text-gray-600">
            {/* [PLACEHOLDER: Add trust indicators like "50K+ copies sold" or ratings] */}
          </div>
        </div>

        {/* Right: Book Image */}
        <div className="flex items-center justify-center">
          <img
            src={bookCoverUrl || '/placeholder.svg'}
            alt={`${siteConfig.product.name} book cover`}
            width={400}
            height={600}
            className="w-full max-w-sm h-auto shadow-2xl rounded-lg"
            loading="eager"
          />
        </div>
      </div>
    </section>
  )
}
