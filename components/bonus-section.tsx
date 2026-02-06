import { Gift, Clock } from 'lucide-react'
import { CTAButton } from '@/components/cta-button'
import { siteConfig } from '@/lib/config'

/**
 * BONUS / FREE GIFT SECTION
 * Increases perceived value and urgency
 *
 * Configuration:
 * - Edit lib/config.ts to customize product details
 * - Update bonus content directly in this component
 */
export function BonusSection() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-blue-50">
      <div className="mx-auto max-w-4xl">
        <div className="bg-white rounded-lg shadow-lg p-8 sm:p-12">
          {/* Main Heading */}
          <div className="text-center mb-10">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Gift className="w-8 h-8 text-blue-600" />
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
                {/* [PLACEHOLDER: Bonus Headline] Example: "Bonus: FREE Tax Optimization Checklist" */}
                Bonus: FREE Tax Optimization Checklist
              </h2>
              <Gift className="w-8 h-8 text-blue-600" />
            </div>
            <p className="text-lg text-gray-600 mb-2">
              {/* [PLACEHOLDER: Bonus Value Statement] Example: "$47 Value - Included FREE" */}
              $47 Value - Included FREE
            </p>
          </div>

          {/* Bonus Description */}
          <div className="mb-8">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              {/* [PLACEHOLDER: Bonus Description] Example: "Learn the 7 tax-saving strategies that could put thousands back in your pocket during trust setup." */}
              Learn the 7 tax-saving strategies that could put thousands back in your pocket
              during trust setup.
            </p>

            {/* Bonus Contents List */}
            <div className="space-y-3 mb-8">
              {/* [PLACEHOLDER: Customize bonus items - use 3-4 items] */}
              <div className="flex items-start gap-3">
                <span className="text-blue-600 font-bold text-lg mt-0.5">✓</span>
                <span className="text-gray-700">
                  Step-by-step tax optimization strategy guide
                </span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-blue-600 font-bold text-lg mt-0.5">✓</span>
                <span className="text-gray-700">
                  State-specific tax reduction strategies
                </span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-blue-600 font-bold text-lg mt-0.5">✓</span>
                <span className="text-gray-700">
                  Downloadable tax planning checklist
                </span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-blue-600 font-bold text-lg mt-0.5">✓</span>
                <span className="text-gray-700">
                  CPA consultation tips to get better results
                </span>
              </div>
            </div>
          </div>

          {/* Limited Time Notice */}
          <div className="flex items-center justify-center gap-2 mb-8 bg-red-50 border border-red-200 rounded p-4">
            <Clock className="w-5 h-5 text-red-600 flex-shrink-0" />
            <p className="text-sm sm:text-base text-red-700 font-semibold">
              {/* [PLACEHOLDER: Urgency/Scarcity Message] Example: "Limited time offer - Bonus expires in 48 hours" */}
              Limited time offer - Bonus expires in 48 hours
            </p>
          </div>

          {/* CTA */}
          <div className="flex justify-center">
            <CTAButton text="Claim Your Copy + Bonus Now" size="lg" />
          </div>
        </div>
      </div>
    </section>
  )
}
