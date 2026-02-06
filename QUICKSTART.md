# Quick Start Guide

Get your landing page up and running in 5 minutes.

## Step 1: Set Up Environment Variables

```bash
# Copy the example file
cp .env.example .env.local
```

Edit `.env.local`:

```env
NEXT_PUBLIC_DEPLOYMENT_TYPE=vercel
NEXT_PUBLIC_SHOPIFY_CHECKOUT_URL=https://your-store.myshopify.com/cart/...
```

## Step 2: Find Your Shopify Checkout URL

**Option A: Direct Cart URL (Recommended)**
1. Go to your Shopify store
2. Add the product to your cart manually
3. Copy the cart URL
4. Paste into `.env.local`

**Option B: Product Add-to-Cart URL**
```
https://your-store.myshopify.com/cart/add?id=PRODUCT_ID&quantity=1
```

Find your product ID in Shopify Admin → Products → Click product → URL shows ID

## Step 3: Configure Your Product

Edit `lib/config.ts`:

```typescript
export const siteConfig = {
  product: {
    name: 'Your Product Name',
    description: 'Your description',
    tagline: 'Your headline',
  },
  // ... rest of config
}
```

## Step 4: Upload Images

Place images in `/public/images/`:
- `book-cover.jpg` (400x600px recommended)
- `bonus-offer.jpg` (600x400px recommended)
- `testimonial-1.jpg` (200x200px recommended)
- `testimonial-2.jpg` (200x200px recommended)
- `testimonial-3.jpg` (200x200px recommended)

Or update URLs in `lib/config.ts` to point to your CDN.

## Step 5: Test Locally

```bash
npm run dev
```

Visit `http://localhost:3000` and test:
- [ ] Mobile layout (use DevTools)
- [ ] All CTA buttons link to checkout
- [ ] Images load correctly
- [ ] Sticky CTA appears on scroll

## Step 6: Deploy

### For Vercel:
```bash
vercel deploy
```

### For Shopify Theme:
Follow the [Shopify Integration Guide](./SHOPIFY_INTEGRATION.md)

---

## Customization Checklist

### Essential
- [ ] Set `NEXT_PUBLIC_SHOPIFY_CHECKOUT_URL` in `.env.local`
- [ ] Update product info in `lib/config.ts`
- [ ] Upload book cover image
- [ ] Upload testimonial images

### Recommended
- [ ] Update testimonial quotes and authors
- [ ] Update FAQ answers
- [ ] Update bonus offer details
- [ ] Update SEO title/description in `layout.tsx`

### Optional
- [ ] Customize color scheme (edit Tailwind classes)
- [ ] Add analytics tracking
- [ ] Enable/disable sections via feature flags

---

## Deployment Types

### Vercel
Works immediately after setup. No additional configuration needed.

### Shopify Custom Theme
1. Read [SHOPIFY_INTEGRATION.md](./SHOPIFY_INTEGRATION.md)
2. Choose: React/Hydrogen or Liquid template
3. Copy components to your theme
4. Update theme settings

---

## Troubleshooting

### CTA button doesn't work
- [ ] Check `.env.local` has `NEXT_PUBLIC_SHOPIFY_CHECKOUT_URL`
- [ ] Verify URL starts with `https://`
- [ ] Ensure product is in stock

### Images not loading
- [ ] Check file paths in `/public/images/`
- [ ] Verify image URLs in `lib/config.ts`
- [ ] For CDN: ensure CORS is enabled

### Mobile layout broken
- [ ] Clear browser cache
- [ ] Check viewport meta tag in `layout.tsx`
- [ ] Test on actual mobile device

### Checkout redirects incorrectly
- [ ] Verify Shopify checkout URL format
- [ ] Check if URL includes cart items
- [ ] Try the URL directly in browser

---

## Next Steps

1. **Read the full documentation**
   - [DEPLOYMENT.md](./DEPLOYMENT.md) - Complete setup guide
   - [SHOPIFY_INTEGRATION.md](./SHOPIFY_INTEGRATION.md) - Shopify theme integration

2. **Customize content**
   - Edit testimonials in `components/testimonials-section.tsx`
   - Edit FAQ in `components/faq-section.tsx`
   - Edit bonus details in `components/bonus-section.tsx`

3. **Optimize performance**
   - Compress images before uploading
   - Test with Lighthouse audit
   - Monitor Core Web Vitals

4. **Set up analytics**
   - Enable `NEXT_PUBLIC_ENABLE_ANALYTICS` in `.env.local`
   - Add Google Analytics ID
   - Track conversion events

---

## Support

For issues or customization help:
1. Check the relevant documentation file
2. Review component comments for configuration options
3. Check browser console for error messages
4. Verify all environment variables are set

The landing page is designed to be drop-in ready with minimal configuration. If something isn't working, check `.env.local` and `lib/config.ts` first!
