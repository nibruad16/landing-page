# The Living Trust Playbook - Deployment Guide

This landing page is designed to work seamlessly in **two environments**:
1. **Vercel** - Standalone Next.js deployment
2. **Shopify Custom Theme** - Embedded in a Shopify store

## Quick Start

### 1. Configuration (Both Deployments)

Copy `.env.example` to `.env.local` and fill in your values:

```bash
cp .env.example .env.local
```

Edit `.env.local`:
- `NEXT_PUBLIC_DEPLOYMENT_TYPE`: Set to `'vercel'` or `'shopify'`
- `NEXT_PUBLIC_SHOPIFY_CHECKOUT_URL`: Your Shopify checkout/cart URL

Edit `lib/config.ts`:
- Product name, description, tagline
- Image URLs for book cover, bonuses, testimonials
- Feature flags (enable/disable sections)

---

## Vercel Standalone Deployment

Perfect for running as a dedicated landing page on Vercel with paid traffic (TikTok, Meta).

### Setup

1. **Environment Variables**
   ```env
   NEXT_PUBLIC_DEPLOYMENT_TYPE=vercel
   NEXT_PUBLIC_SHOPIFY_CHECKOUT_URL=https://your-store.myshopify.com/cart/...
   ```

2. **Create Shopify Checkout Link**
   - Go to your Shopify store
   - Add your product to cart manually
   - Copy the cart URL: `https://your-store.myshopify.com/cart/...`
   - Paste into `.env.local`

3. **Images**
   - Upload book cover and bonus images to:
     - `/public/images/book-cover.jpg`
     - `/public/images/bonus-offer.jpg`
     - `/public/images/testimonial-1.jpg` (etc.)
   - Or use a CDN and update URLs in `lib/config.ts`

4. **Deploy to Vercel**
   ```bash
   vercel deploy
   ```

### Features Available
- ✅ Full page control and customization
- ✅ Direct checkout links
- ✅ Analytics and conversion tracking
- ✅ Custom domain support
- ✅ A/B testing via Vercel Analytics

### Customization Checklist
- [ ] Update product info in `lib/config.ts`
- [ ] Replace image URLs (book cover, testimonials, bonuses)
- [ ] Update testimonial content
- [ ] Update FAQ answers
- [ ] Set `NEXT_PUBLIC_SHOPIFY_CHECKOUT_URL`
- [ ] Update SEO title/description in `layout.tsx`
- [ ] Test on mobile (primary traffic source)

---

## Shopify Custom Theme Integration

Embed this component into a custom Shopify theme for maximum control over the storefront.

### Setup

1. **Copy Component Files to Theme**

Your Shopify theme structure typically looks like:
```
shopify-theme/
├── assets/
├── config/
├── layout/
├── sections/
└── snippets/
```

You'll need to adapt the React components to Shopify Liquid templates:

```
shopify-theme/
└── sections/
    ├── landing-hero.liquid
    ├── landing-social-proof.liquid
    ├── landing-features.liquid
    ├── landing-bonus.liquid
    ├── landing-testimonials.liquid
    └── landing-faq.liquid
```

2. **Create Liquid Adapter**

If using a custom theme with React support (like Hydrogen or a headless setup):
- Copy the React components as-is
- Use a Liquid wrapper to include them
- Ensure Tailwind CSS is available in your theme

If using a traditional Liquid theme:
- Convert React components to `.liquid` files
- Manually translate JSX to HTML
- Reference the components below

3. **Environment Configuration**

Set in your Shopify Theme Settings (usually in `config/settings_schema.json`):
```json
{
  "name": "Checkout URL",
  "id": "shopify_url",
  "type": "url",
  "default": "/cart"
}
```

### Feature Flags in Shopify

Edit `lib/config.ts` for your theme settings:
```typescript
features: {
  stickyCTA: true,      // Show sticky mobile button
  testimonials: true,   // Show customer stories
  faq: true,            // Show FAQ accordion
  bonus: true,          // Show bonus offer
}
```

### Image Handling in Shopify

Use Shopify's CDN for images:
```typescript
images: {
  bookCover: '{{ section.settings.book_image | img_url: "400x600" }}',
  bonusImage: '{{ section.settings.bonus_image | img_url: "600x400" }}',
}
```

### Styling in Shopify

The components use Tailwind CSS. Ensure your Shopify theme includes Tailwind:

```html
<!-- theme.liquid -->
<link rel="stylesheet" href="{{ 'tailwind.css' | asset_url }}">
```

Or compile Tailwind into your theme's main CSS file.

### Customization Checklist
- [ ] Copy components to `/sections/`
- [ ] Convert React to Liquid (if needed)
- [ ] Configure product URLs in theme settings
- [ ] Upload images to Shopify media library
- [ ] Update image URLs in config
- [ ] Test checkout flow
- [ ] Verify responsive layout on mobile

---

## Shared Configuration

Both deployments use the same config system. Edit `lib/config.ts`:

### Product Information
```typescript
product: {
  name: 'The Living Trust Playbook',
  description: '...',
  tagline: 'Protect Your Family\'s Future',
}
```

### Checkout Configuration
```typescript
checkout: {
  shopifyUrl: process.env.NEXT_PUBLIC_SHOPIFY_CHECKOUT_URL,
  price: '$47',
  conversionEvent: 'purchase',
}
```

### Feature Flags
```typescript
features: {
  stickyCTA: true,       // Sticky mobile CTA on scroll
  analytics: false,      // Enable analytics tracking
  testimonials: true,    // Show testimonials
  faq: true,             // Show FAQ
  bonus: true,           // Show bonus offer
}
```

---

## Component Architecture

All components are configuration-driven and support both deployments:

- **CTA Button** (`components/cta-button.tsx`)
  - Pulls from `siteConfig.checkout.shopifyUrl`
  - Falls back to Button if no URL configured

- **Hero Section** (`components/hero-section.tsx`)
  - Product name, description from config
  - Book image from config

- **Testimonials** (`components/testimonials-section.tsx`)
  - Can be disabled via feature flag
  - Image URLs from config

- **FAQ** (`components/faq-section.tsx`)
  - Can be disabled via feature flag
  - Fully customizable content

- **Bonus Section** (`components/bonus-section.tsx`)
  - Bonus image from config
  - High-value offer messaging

---

## Troubleshooting

### Shopify URL Not Working
- Ensure your Shopify store is set to accept direct cart URLs
- Check that the product is in stock and available
- Verify the checkout URL format: `https://your-store.myshopify.com/cart/...`

### Images Not Loading
- Verify image URLs in `.env.local` or `lib/config.ts`
- For Shopify: ensure images are uploaded to media library
- For Vercel: ensure images exist in `/public/images/`

### Checkout Button Not Appearing
- Check `.env.local` has `NEXT_PUBLIC_SHOPIFY_CHECKOUT_URL`
- Verify URL is not the placeholder value
- Check browser console for errors

### Mobile Layout Issues
- Ensure Tailwind CSS is properly configured
- Test in mobile browser (iPhone/Android)
- Check viewport meta tags in `layout.tsx`

---

## Performance Tips

1. **Optimize Images**
   - Use WebP format where possible
   - Compress PNG/JPG images
   - Use appropriate dimensions (400x600 for book cover)

2. **CSS**
   - Use the production Tailwind build
   - Minimize CSS file size
   - Leverage browser caching

3. **JavaScript**
   - Minimal third-party scripts
   - Keep JS bundle size low
   - Use React lazy loading for components

4. **Monitoring**
   - Set up analytics to track conversions
   - Monitor page speed with Lighthouse
   - Test on real mobile devices

---

## Support & Customization

For custom modifications:
- All components are in `/components/`
- Configuration is centralized in `lib/config.ts`
- Styles use Tailwind CSS (easily customizable)
- No hard-coded values or magic strings

Edit the components directly to add features, modify styling, or integrate with additional services.
