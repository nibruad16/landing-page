'use client'

import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import { siteConfig } from '@/lib/config'

interface CTAButtonProps {
  text?: string
  href?: string
  variant?: 'primary' | 'secondary'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  onClick?: () => void
  /**
   * If true, uses config.checkout.shopifyUrl instead of href prop
   * Useful for components that automatically pull from config
   */
  useConfigUrl?: boolean
}

/**
 * Reusable CTA Button Component
 * Supports both Vercel standalone and Shopify theme deployments.
 *
 * @param text - Button text. Default: "Get Your Copy Now"
 * @param href - Direct URL. If useConfigUrl=true, uses config instead
 * @param variant - Visual style. Default: 'primary'
 * @param size - Button size. Default: 'md'
 * @param useConfigUrl - Use siteConfig.checkout.shopifyUrl instead of href
 */
export function CTAButton({
  text = 'Get Your Copy Now',
  href,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  useConfigUrl = true,
}: CTAButtonProps) {
  const baseClasses =
    'group font-semibold transition-all duration-200 rounded-lg'

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  }

  const variantClasses = {
    primary:
      'bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl',
    secondary: 'border-2 border-blue-600 text-blue-600 hover:bg-blue-50',
  }

  // Determine URL: config > passed href > none
  const finalUrl = useConfigUrl
    ? siteConfig.checkout.shopifyUrl
    : href || siteConfig.checkout.shopifyUrl

  const isPlaceholder =
    finalUrl === 'https://example-store.myshopify.com/cart/...'

  // Log warning in development if using placeholder URL
  if (typeof window !== 'undefined' && isPlaceholder) {
    console.warn(
      '[v0] CTA Button: Shopify checkout URL is not configured. Please set NEXT_PUBLIC_SHOPIFY_CHECKOUT_URL in .env.local'
    )
  }

  if (finalUrl && !isPlaceholder) {
    return (
      <a
        href={finalUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-block ${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
      >
        {text}
        <ArrowRight className="ml-2 inline-block h-4 w-4 transition-transform group-hover:translate-x-1" />
      </a>
    )
  }

  // Fallback: if no URL configured, render as disabled button
  return (
    <Button
      disabled
      className={`${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className} opacity-60 cursor-not-allowed`}
    >
      {text}
      <ArrowRight className="ml-2 h-4 w-4" />
    </Button>
  )
}
