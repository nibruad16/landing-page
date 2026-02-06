import { Star } from 'lucide-react'

/**
 * SOCIAL PROOF SECTION
 * Displays reviews, ratings, and social proof elements
 * Replace [PLACEHOLDER: ...] with actual reviews and data
 */
export function SocialProofSection() {
  return (
    <section className="bg-gray-50 py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        {/* Headline */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            {/* [PLACEHOLDER: Section Headline] Example: "Trusted by Thousands of Families" */}
            Trusted by Thousands of Families
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {/* [PLACEHOLDER: Section Subtext] */}
          </p>
        </div>

        {/* Rating Summary */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* [PLACEHOLDER: Customize these stats with your actual numbers] */}
          <div className="text-center">
            <div className="text-4xl font-bold text-gray-900 mb-2">
              {/* [PLACEHOLDER: Number - e.g., "50K+" or "4.9" or "2000+"] */}
              50K+
            </div>
            <p className="text-gray-600">
              {/* [PLACEHOLDER: Label - e.g., "Copies Sold" or "5-Star Reviews" or "Families Protected"] */}
              Copies Sold
            </p>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <p className="text-lg font-semibold text-gray-900 mb-1">
              {/* [PLACEHOLDER: Rating - e.g., "4.9 out of 5"] */}
              4.9 out of 5 stars
            </p>
            <p className="text-sm text-gray-600">
              {/* [PLACEHOLDER: Review count - e.g., "Based on 2,000+ reviews"] */}
              Based on 2,000+ reviews
            </p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-gray-900 mb-2">
              {/* [PLACEHOLDER: Number - e.g., "10+" or "$500K+" saved"] */}
              $500K+
            </div>
            <p className="text-gray-600">
              {/* [PLACEHOLDER: Label - e.g., "In Legal Fees Saved" or "Families Protected"] */}
              In Legal Fees Saved
            </p>
          </div>
        </div>

        {/* Review Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Review Card 1 */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <p className="text-gray-700 mb-4">
              {/* [PLACEHOLDER: Review quote] Example: "This guide made everything so simple. I never thought I could do this myself!" */}
              "This guide made everything so simple. I never thought I could do this myself!"
            </p>
            <p className="font-semibold text-gray-900">
              {/* [PLACEHOLDER: Reviewer name] */}
              Sarah M.
            </p>
            <p className="text-sm text-gray-600">
              {/* [PLACEHOLDER: Location or title] Example: "Verified Buyer" or "California" */}
              Verified Buyer
            </p>
          </div>

          {/* Review Card 2 */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <p className="text-gray-700 mb-4">
              {/* [PLACEHOLDER: Review quote] */}
              "Saved me thousands in legal fees and gave me peace of mind."
            </p>
            <p className="font-semibold text-gray-900">
              {/* [PLACEHOLDER: Reviewer name] */}
              James T.
            </p>
            <p className="text-sm text-gray-600">
              {/* [PLACEHOLDER: Location or title] */}
              Verified Buyer
            </p>
          </div>

          {/* Review Card 3 */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <p className="text-gray-700 mb-4">
              {/* [PLACEHOLDER: Review quote] */}
              "The step-by-step instructions were easy to follow. Highly recommend!"
            </p>
            <p className="font-semibold text-gray-900">
              {/* [PLACEHOLDER: Reviewer name] */}
              Maria L.
            </p>
            <p className="text-sm text-gray-600">
              {/* [PLACEHOLDER: Location or title] */}
              Verified Buyer
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
