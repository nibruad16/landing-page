# Shopify Custom Theme Integration - Step by Step

This guide shows how to integrate the landing page components into a Shopify custom theme.

## Option 1: React/Hydrogen (Recommended)

If your Shopify store uses **Hydrogen** or a headless React setup:

### Installation

1. Copy the component files to your theme:
```bash
cp -r components/ your-shopify-hydrogen-app/app/components/
cp lib/config.ts your-shopify-hydrogen-app/app/lib/
```

2. Create a landing page route:
```
app/
└── routes/
    └── landing.tsx (or landing/index.tsx)
```

3. Use the component:
```typescript
// app/routes/landing.tsx
import { HeroSection } from '~/components/hero-section'
import { SocialProofSection } from '~/components/social-proof-section'
// ... import all sections

export default function LandingPage() {
  return (
    <main>
      <HeroSection />
      <SocialProofSection />
      {/* ... rest of sections */}
    </main>
  )
}
```

---

## Option 2: Traditional Liquid Theme

For a classic Shopify theme using Liquid templates:

### 1. Create Section Files

Create these files in your theme's `/sections` directory:

#### `sections/landing-hero.liquid`
```liquid
{% assign config = 'lib/config' %}
<section class="relative min-h-screen flex items-center justify-center bg-white px-4 py-12 sm:px-6 lg:px-8">
  <div class="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:gap-12 lg:grid-cols-2 items-center">
    <!-- Left: Headline & CTA -->
    <div class="flex flex-col justify-center">
      <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-4">
        {{ section.settings.headline | default: 'Protect Your Family\'s Future' }}
      </h1>

      <p class="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed max-w-lg">
        {{ section.settings.subheading | default: 'A step-by-step playbook to create a living trust without expensive lawyers' }}
      </p>

      <div class="flex flex-col sm:flex-row gap-4">
        <a href="{{ section.settings.checkout_url | default: '/cart' }}" class="inline-block group font-semibold transition-all duration-200 rounded-lg px-8 py-4 text-lg bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl">
          {{ section.settings.cta_text | default: 'Get Your Copy Now' }}
          <svg class="ml-2 inline-block h-4 w-4 transition-transform group-hover:translate-x-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </a>
      </div>
    </div>

    <!-- Right: Book Image -->
    <div class="flex items-center justify-center">
      {% if section.settings.book_image %}
        {{ section.settings.book_image | img_tag: alt: 'The Living Trust Playbook book cover', class: 'w-full max-w-sm h-auto shadow-2xl rounded-lg' }}
      {% else %}
        <div class="w-full max-w-sm h-96 bg-gray-200 rounded-lg flex items-center justify-center">
          <p class="text-gray-500">Book cover image</p>
        </div>
      {% endif %}
    </div>
  </div>
</section>

{% schema %}
{
  "name": "Landing Hero",
  "settings": [
    {
      "type": "text",
      "id": "headline",
      "label": "Headline",
      "default": "Protect Your Family's Future"
    },
    {
      "type": "textarea",
      "id": "subheading",
      "label": "Subheading",
      "default": "A step-by-step playbook to create a living trust without expensive lawyers"
    },
    {
      "type": "text",
      "id": "cta_text",
      "label": "CTA Button Text",
      "default": "Get Your Copy Now"
    },
    {
      "type": "url",
      "id": "checkout_url",
      "label": "Checkout URL"
    },
    {
      "type": "image_picker",
      "id": "book_image",
      "label": "Book Cover Image"
    }
  ],
  "presets": [
    {
      "name": "Landing Hero"
    }
  ]
}
{% endschema %}
```

#### `sections/landing-testimonials.liquid`
```liquid
<section class="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-white">
  <div class="mx-auto max-w-6xl">
    <!-- Section Heading -->
    <div class="text-center mb-12 sm:mb-16">
      <h2 class="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
        {{ section.settings.heading | default: 'Real Success Stories from Real Families' }}
      </h2>
      <p class="text-lg text-gray-600 max-w-2xl mx-auto">
        {{ section.settings.subheading | default: 'See how others just like you have taken control of their financial future' }}
      </p>
    </div>

    <!-- Testimonials Grid -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      {% for i in (1..3) %}
        {% assign testimonial_key = 'testimonial_' | append: i %}
        <div class="bg-gray-50 p-8 rounded-lg border border-gray-200 hover:border-blue-300 transition-colors">
          <!-- Quote Mark -->
          <svg class="w-8 h-8 text-blue-600 mb-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <path d="M3 21c3 0 7-1 7-8V5c0-1.25-4.4-4-7-4s-7 2.75-7 4v12c0 7 4 8 7 8z"></path>
          </svg>

          <!-- Quote -->
          <p class="text-lg text-gray-800 font-medium mb-6 leading-relaxed">
            {{ section.settings[testimonial_key | append: '_quote'] | default: 'Default testimonial quote' }}
          </p>

          <!-- Author -->
          <div class="flex items-center gap-4">
            {% if section.settings[testimonial_key | append: '_image'] %}
              {{ section.settings[testimonial_key | append: '_image'] | img_tag: class: 'w-12 h-12 rounded-full object-cover' }}
            {% endif %}
            <div>
              <p class="font-semibold text-gray-900">
                {{ section.settings[testimonial_key | append: '_author'] | default: 'Name' }}
              </p>
              <p class="text-sm text-gray-600">
                {{ section.settings[testimonial_key | append: '_location'] | default: 'Location' }}
              </p>
            </div>
          </div>
        </div>
      {% endfor %}
    </div>
  </div>
</section>

{% schema %}
{
  "name": "Landing Testimonials",
  "settings": [
    {
      "type": "text",
      "id": "heading",
      "label": "Section Heading",
      "default": "Real Success Stories from Real Families"
    },
    {
      "type": "textarea",
      "id": "subheading",
      "label": "Section Subheading",
      "default": "See how others just like you have taken control of their financial future"
    },
    {
      "type": "header",
      "content": "Testimonial 1"
    },
    {
      "type": "textarea",
      "id": "testimonial_1_quote",
      "label": "Quote",
      "default": "I was overwhelmed about setting up a trust, but this playbook made it incredibly simple."
    },
    {
      "type": "text",
      "id": "testimonial_1_author",
      "label": "Author Name",
      "default": "Jennifer P."
    },
    {
      "type": "text",
      "id": "testimonial_1_location",
      "label": "Location",
      "default": "Texas"
    },
    {
      "type": "image_picker",
      "id": "testimonial_1_image",
      "label": "Author Image"
    },
    {
      "type": "header",
      "content": "Testimonial 2"
    },
    {
      "type": "textarea",
      "id": "testimonial_2_quote",
      "label": "Quote",
      "default": "My family now has peace of mind knowing everything is set up properly."
    },
    {
      "type": "text",
      "id": "testimonial_2_author",
      "label": "Author Name",
      "default": "David M."
    },
    {
      "type": "text",
      "id": "testimonial_2_location",
      "label": "Location",
      "default": "California"
    },
    {
      "type": "image_picker",
      "id": "testimonial_2_image",
      "label": "Author Image"
    },
    {
      "type": "header",
      "content": "Testimonial 3"
    },
    {
      "type": "textarea",
      "id": "testimonial_3_quote",
      "label": "Quote",
      "default": "The step-by-step instructions were so clear."
    },
    {
      "type": "text",
      "id": "testimonial_3_author",
      "label": "Author Name",
      "default": "Michelle R."
    },
    {
      "type": "text",
      "id": "testimonial_3_location",
      "label": "Location",
      "default": "New York"
    },
    {
      "type": "image_picker",
      "id": "testimonial_3_image",
      "label": "Author Image"
    }
  ],
  "presets": [
    {
      "name": "Landing Testimonials"
    }
  ]
}
{% endschema %}
```

### 2. Create Landing Page Template

Create `templates/page.landing.liquid`:
```liquid
{% section 'landing-hero' %}
{% section 'landing-social-proof' %}
{% section 'landing-pas' %}
{% section 'landing-features' %}
{% section 'landing-bonus' %}
{% section 'landing-testimonials' %}
{% section 'landing-faq' %}
```

### 3. Ensure Tailwind CSS is Available

Your theme's `config/settings_schema.json` or main CSS file must include Tailwind utilities. Add to your theme's CSS:

```css
@import 'tailwindcss/base';
@import 'tailwindcss/components';
@import 'tailwindcss/utilities';
```

Or include the Tailwind CDN in your `theme.liquid`:
```html
<link href="https://cdn.tailwindcss.com" rel="stylesheet">
```

### 4. Create Page in Shopify Admin

1. Go to **Shopify Admin** → **Content** → **Pages**
2. Click **Add page**
3. Create a page named "Landing"
4. In the page editor, add the sections you created
5. Publish the page

---

## Option 3: Shopify Page Builder Integration

For apps like Pagefly, Leadpages, or Kajabi:

### Export HTML

1. Build the page in Vercel first to see the full HTML
2. Export the page as HTML (or screenshot components)
3. Import into your page builder
4. Customize theme colors and fonts

### Checkout Integration

Link checkout buttons to:
```
https://your-store.myshopify.com/cart/add?id=PRODUCT_ID&quantity=1
```

Or use Shopify's built-in cart:
```
/cart
```

---

## Testing the Integration

1. **Desktop**: Visit the landing page URL and verify layout
2. **Mobile**: Test on iPhone/Android for responsiveness
3. **Checkout**: Click CTA button and verify cart redirects correctly
4. **Performance**: Run Lighthouse audit (target 90+ scores)

---

## Support

For issues:
- Check Shopify theme logs in Admin
- Verify image URLs are accessible
- Test in Shopify's theme preview before publishing
- Monitor conversion events in Google Analytics
