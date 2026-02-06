/**
 * DEPLOYMENT CONFIGURATION
 *
 * This configuration supports both Vercel and Shopify deployments.
 * Customize these values for your specific use case.
 */

export const siteConfig = {
  // Product Information
  product: {
    name: 'The Living Trust Playbook',
    description: 'Step-by-step guide to create a living trust without expensive lawyers',
    tagline: 'Protect Your Family\'s Future',
  },

  // Checkout Configuration
  checkout: {
    // For Vercel standalone: Full Shopify cart URL
    // For Shopify theme: Use just the product URL or leave empty to use Shopify's built-in cart
    shopifyUrl:
      process.env.NEXT_PUBLIC_SHOPIFY_CHECKOUT_URL ||
      'https://example-store.myshopify.com/cart/...',

    // Alternative: If using Shopify theme, set this to your product handle
    // productHandle: 'the-living-trust-playbook',

    // Price for display (optional)
    price: '$47',

    // For analytics/conversion tracking
    conversionEvent: 'purchase',
  },

  // Image Configuration
  images: {
    // Book cover image URL
    bookCover:
      process.env.NEXT_PUBLIC_BOOK_COVER_URL || '/images/book-cover.jpg',

    // Bonus offer image
    bonusImage:
      process.env.NEXT_PUBLIC_BONUS_IMAGE_URL || '/images/bonus-offer.jpg',

    // Testimonial images
    testimonialImages: {
      user1:
        process.env.NEXT_PUBLIC_TESTIMONIAL_1_IMAGE ||
        '/images/testimonial-1.jpg',
      user2:
        process.env.NEXT_PUBLIC_TESTIMONIAL_2_IMAGE ||
        '/images/testimonial-2.jpg',
      user3:
        process.env.NEXT_PUBLIC_TESTIMONIAL_3_IMAGE ||
        '/images/testimonial-3.jpg',
    },
  },

  // SEO Configuration
  seo: {
    title: 'The Living Trust Playbook | Protect Your Family\'s Future',
    description:
      'Step-by-step guide to create a living trust without expensive lawyers. Save thousands and protect your assets today.',
    keywords: [
      'living trust',
      'estate planning',
      'trust creation',
      'family protection',
      'legal documents',
    ],
  },

  // Feature Flags
  features: {
    // Show sticky mobile CTA on scroll
    stickyCTA: true,

    // Enable analytics tracking
    analytics: process.env.NEXT_PUBLIC_ENABLE_ANALYTICS === 'true',

    // Show testimonials section
    testimonials: true,

    // Show FAQ section
    faq: true,

    // Show bonus offer
    bonus: true,
  },

  // Deployment Type Detection
  deployment: {
    // 'vercel' | 'shopify' - Auto-detected from environment
    type: (process.env.NEXT_PUBLIC_DEPLOYMENT_TYPE ||
      'vercel') as 'vercel' | 'shopify',

    // For Shopify theme integration
    shopifyStoreName: process.env.NEXT_PUBLIC_SHOPIFY_STORE,
    shopifyAccessToken: process.env.NEXT_PUBLIC_SHOPIFY_ACCESS_TOKEN,
  },
} as const

export type SiteConfig = typeof siteConfig
