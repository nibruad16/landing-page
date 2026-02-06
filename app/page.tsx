import { HeroSection } from '@/components/hero-section'
import { SocialProofSection } from '@/components/social-proof-section'
import { ProblemAgitationSolutionSection } from '@/components/pas-section'
import { FeaturesSection } from '@/components/features-section'
import { BonusSection } from '@/components/bonus-section'
import { TestimonialsSection } from '@/components/testimonials-section'
import { FAQSection } from '@/components/faq-section'
import { StickyCTA } from '@/components/sticky-cta'

/**
 * THE LIVING TRUST PLAYBOOK - LANDING PAGE
 *
 * High-converting sales page for paid traffic (TikTok & Meta)
 * Optimized for performance and mobile-first experience
 *
 * DEPLOYMENT:
 * - Works standalone on Vercel with zero configuration changes
 * - Works as a Shopify theme component with zero configuration changes
 * - All configuration centralized in lib/config.ts and .env.local
 *
 * CUSTOMIZATION:
 * 1. Copy .env.example to .env.local
 * 2. Update lib/config.ts with your product info
 * 3. Set NEXT_PUBLIC_SHOPIFY_CHECKOUT_URL in .env.local
 * 4. Update images (book cover, testimonials, bonuses)
 * 5. Read DEPLOYMENT.md and SHOPIFY_INTEGRATION.md
 *
 * PAGE STRUCTURE:
 * - Hero with book image + headline
 * - Social proof (ratings, reviews, stats)
 * - Problem → Agitation → Solution framework
 * - Features & benefits breakdown
 * - Bonus offer section
 * - Testimonials with social proof
 * - FAQ accordion
 * - Sticky mobile CTA (appears on scroll)
 */
export default function LandingPage() {
  return (
    <main className="w-full bg-white">
      {/* Hero Section */}
      <HeroSection />

      {/* Social Proof Section */}
      <SocialProofSection />

      {/* Problem → Agitation → Solution */}
      <ProblemAgitationSolutionSection />

      {/* Features & Benefits */}
      <FeaturesSection />

      {/* Bonus Offer */}
      <BonusSection />

      {/* Testimonials */}
      <TestimonialsSection />

      {/* FAQ */}
      <FAQSection />

      {/* Sticky Mobile CTA */}
      <StickyCTA />
    </main>
  )
}
