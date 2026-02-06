import { Quote } from 'lucide-react'
import { siteConfig } from '@/lib/config'

/**
 * TESTIMONIALS SECTION
 * Detailed customer success stories and quotes
 *
 * Configuration:
 * - Edit the testimonials array below with actual customer stories
 * - Update image URLs in .env or directly in the testimonials array
 * - Enable/disable this section via siteConfig.features.testimonials
 */
export function TestimonialsSection() {
  if (!siteConfig.features.testimonials) return null

  const testimonials = [
    {
      quote:
        '"I was overwhelmed about setting up a trust, but this playbook made it incredibly simple. I saved over $3,000 in lawyer fees!"',
      author: 'Jennifer P.',
      location: 'Texas',
      image: siteConfig.images.testimonialImages.user1,
    },
    {
      quote:
        '"My family now has peace of mind knowing everything is set up properly. Highly recommended for anyone serious about protecting their assets."',
      author: 'David M.',
      location: 'California',
      image: siteConfig.images.testimonialImages.user2,
    },
    {
      quote:
        '"The step-by-step instructions were so clear. I finished my trust in a single weekend instead of waiting months for attorney appointments."',
      author: 'Michelle R.',
      location: 'New York',
      image: siteConfig.images.testimonialImages.user3,
    },
  ]

  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="mx-auto max-w-6xl">
        {/* Section Heading */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            {/* [PLACEHOLDER: Section Headline] Example: "Real Success Stories from Real Families" */}
            Real Success Stories from Real Families
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {/* [PLACEHOLDER: Section Subtext] */}
            See how others just like you have taken control of their financial future
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-50 p-8 rounded-lg border border-gray-200 hover:border-blue-300 transition-colors"
            >
              {/* Quote Mark */}
              <Quote className="w-8 h-8 text-blue-600 mb-4" />

              {/* Quote */}
              <p className="text-lg text-gray-800 font-medium mb-6 leading-relaxed">
                {testimonial.quote}
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.author}
                  width={48}
                  height={48}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-gray-900">
                    {testimonial.author}
                  </p>
                  <p className="text-sm text-gray-600">
                    {testimonial.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
