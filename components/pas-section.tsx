import { AlertCircle, TrendingUp, CheckCircle } from 'lucide-react'
import { CTAButton } from '@/components/cta-button'

/**
 * PROBLEM → AGITATION → SOLUTION SECTION
 * Classic copywriting formula for high conversion
 * Replace [PLACEHOLDER: ...] with your copy
 */
export function ProblemAgitationSolutionSection() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="mx-auto max-w-4xl">
        {/* PROBLEM */}
        <div className="mb-12 sm:mb-16">
          <div className="flex items-start gap-4 mb-6">
            <AlertCircle className="w-8 h-8 text-red-500 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                {/* [PLACEHOLDER: Problem Statement] Example: "Most People Have No Proper Estate Plan" */}
                Most People Have No Proper Estate Plan
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                {/* [PLACEHOLDER: Problem Description] */}
                Without a living trust, your family faces probate court, delays, and unnecessary expenses.
              </p>
            </div>
          </div>
        </div>

        {/* AGITATION */}
        <div className="mb-12 sm:mb-16 bg-red-50 border-l-4 border-red-500 p-6 sm:p-8 rounded-r-lg">
          <div className="flex items-start gap-4 mb-6">
            <TrendingUp className="w-8 h-8 text-red-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                {/* [PLACEHOLDER: Agitation/Consequence Headline] Example: "Without a Trust, Here's What Happens" */}
                Without a Trust, Here's What Happens
              </h3>
              <ul className="space-y-3 text-gray-700">
                {/* [PLACEHOLDER: List of problems/consequences - use 4-5 items] */}
                <li className="flex items-center gap-2">
                  <span className="text-red-500 font-bold">•</span>
                  <span>Your family pays thousands in probate court fees</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-red-500 font-bold">•</span>
                  <span>Legal disputes delay inheritance by months or years</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-red-500 font-bold">•</span>
                  <span>Your wishes might not be honored</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-red-500 font-bold">•</span>
                  <span>Family relationships strain under estate conflict</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* SOLUTION */}
        <div className="mb-12 sm:mb-16 bg-green-50 border-l-4 border-green-500 p-6 sm:p-8 rounded-r-lg">
          <div className="flex items-start gap-4 mb-6">
            <CheckCircle className="w-8 h-8 text-green-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                {/* [PLACEHOLDER: Solution Headline] Example: "Introducing: The Living Trust Playbook" */}
                Introducing: The Living Trust Playbook
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                {/* [PLACEHOLDER: Solution Overview] */}
                A complete, step-by-step guide to creating your own living trust—without expensive lawyers.
              </p>
              <ul className="space-y-3 text-gray-700 mb-8">
                {/* [PLACEHOLDER: Solution benefits - use 4-5 items] */}
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span>Save thousands in legal fees</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span>Avoid probate court entirely</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span>Ensure your wishes are followed</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span>Give your family instant peace of mind</span>
                </li>
              </ul>
              <CTAButton
                text="Get Your Copy Now"
                href={
                  /* [PLACEHOLDER: Shopify Checkout URL] */
                  'https://example-store.myshopify.com/cart/...'
                }
                size="lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
