'use client'

import { siteConfig } from '@/lib/config'
import { useCallback } from 'react'

/**
 * Hook for deployment-aware checkout handling
 *
 * Automatically adapts checkout behavior based on deployment type:
 * - Vercel: Direct URL navigation to Shopify
 * - Shopify: Adds to cart via Shopify API
 */
export function useCheckout() {
  /**
   * Trigger checkout with optional analytics tracking
   */
  const handleCheckout = useCallback(
    (options?: { trackEvent?: string }) => {
      if (!siteConfig.checkout.shopifyUrl) {
        console.warn('Checkout URL not configured')
        return
      }

      // Track analytics event if enabled
      if (options?.trackEvent && siteConfig.features.analytics) {
        if (typeof window !== 'undefined' && 'gtag' in window) {
          ;(window as any).gtag('event', options.trackEvent)
        }
      }

      // For Vercel: direct navigation
      if (siteConfig.deployment.type === 'vercel') {
        window.location.href = siteConfig.checkout.shopifyUrl
        return
      }

      // For Shopify theme: use Shopify's built-in cart
      if (siteConfig.deployment.type === 'shopify') {
        window.Shopify?.cart?.addItems?.([
          { id: siteConfig.checkout.shopifyUrl, quantity: 1 },
        ])
        return
      }
    },
    []
  )

  return {
    handleCheckout,
    checkoutUrl: siteConfig.checkout.shopifyUrl,
    deploymentType: siteConfig.deployment.type,
  }
}

/**
 * Alternative: Direct checkout configuration for components
 * Usage in components:
 * ```tsx
 * const { getCheckoutProps } = useCheckoutProps()
 * <a {...getCheckoutProps()}>Buy Now</a>
 * ```
 */
export function useCheckoutProps() {
  const { checkoutUrl, deploymentType } = useCheckout()

  const getCheckoutProps = useCallback(
    (options?: {
      target?: '_blank' | '_self'
      rel?: string
      onClick?: () => void
    }) => {
      const isExternalCheckout = deploymentType === 'vercel'

      return {
        href: checkoutUrl,
        target: isExternalCheckout ? (options?.target || '_blank') : '_self',
        rel: isExternalCheckout
          ? options?.rel || 'noopener noreferrer'
          : undefined,
        onClick: options?.onClick,
      }
    },
    [checkoutUrl, deploymentType]
  )

  return {
    getCheckoutProps,
    checkoutUrl,
    isExternal: deploymentType === 'vercel',
  }
}
