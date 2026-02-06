'use client'

import { useState, useEffect } from 'react'
import { CTAButton } from '@/components/cta-button'
import { X } from 'lucide-react'
import { siteConfig } from '@/lib/config'

/**
 * STICKY CTA COMPONENT
 * Mobile-optimized sticky button that appears on scroll
 * Only visible on mobile devices
 *
 * Configuration:
 * - Enable/disable via siteConfig.features.stickyCTA
 * - Checkout URL automatically pulled from siteConfig
 */
interface StickyCTAProps {
  text?: string
  shopifyUrl?: string
}

export function StickyCTA({
  text = 'Get Your Copy Now',
  shopifyUrl = siteConfig.checkout.shopifyUrl,
}: StickyCTAProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [mounted, setMounted] = useState(false)

  // Check if sticky CTA is enabled in config
  if (!siteConfig.features.stickyCTA) return null

  useEffect(() => {
    // Mark as mounted to ensure client-only rendering
    setMounted(true)

    // Check if mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener('resize', checkMobile)

    // Show sticky CTA after scrolling down
    const handleScroll = () => {
      setIsVisible(window.scrollY > 600)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', checkMobile)
    }
  }, [])

  // Don't render until mounted on client
  if (!mounted || !isMobile || !isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-2xl p-4 animate-slide-up">
      <div className="flex items-center gap-4">
        <div className="flex-1">
          <p className="text-sm font-semibold text-gray-900">
            Ready to protect your family?
          </p>
        </div>
        <CTAButton text={text} href={shopifyUrl} size="sm" />
        <button
          onClick={() => setIsVisible(false)}
          className="p-1 hover:bg-gray-100 rounded transition-colors"
          aria-label="Close CTA"
        >
          <X className="w-5 h-5 text-gray-500" />
        </button>
      </div>
    </div>
  )
}
