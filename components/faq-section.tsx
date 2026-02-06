'use client'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

/**
 * FAQ SECTION
 * Accessible accordion pattern for common questions
 * Replace [PLACEHOLDER: ...] with your actual FAQs
 */
export function FAQSection() {
  const faqs = [
    {
      question:
        /* [PLACEHOLDER: FAQ Question] */ 'Is a living trust right for me?',
      answer:
        /* [PLACEHOLDER: FAQ Answer] */
        'A living trust is beneficial for most people with assets to protect. This playbook includes a self-assessment to determine if a living trust is right for your situation.',
    },
    {
      question:
        /* [PLACEHOLDER: FAQ Question] */
        'Do I need a lawyer to create a trust?',
      answer:
        /* [PLACEHOLDER: FAQ Answer] */
        'Not necessarily. While complex estates might benefit from legal counsel, The Living Trust Playbook provides everything you need for most personal situations. Our step-by-step guide makes the process accessible to anyone.',
    },
    {
      question:
        /* [PLACEHOLDER: FAQ Question] */
        'How long does it take to set up a trust?',
      answer:
        /* [PLACEHOLDER: FAQ Answer] */
        'With this playbook, you can complete your trust setup over a weekend. Traditional lawyer-based methods typically take weeks or months of back-and-forth communication.',
    },
    {
      question:
        /* [PLACEHOLDER: FAQ Question] */
        'Will a trust help me avoid taxes?',
      answer:
        /* [PLACEHOLDER: FAQ Answer] */
        'A living trust itself doesn\'t reduce taxes, but proper planning can. The included Tax Optimization Checklist bonus covers strategies that can minimize tax impact on your estate.',
    },
    {
      question:
        /* [PLACEHOLDER: FAQ Question] */
        'Can I modify my trust after creating it?',
      answer:
        /* [PLACEHOLDER: FAQ Answer] */
        'Yes! A revocable living trust is flexible. You can modify it anytime during your lifetime. The playbook includes instructions for updating your trust as your circumstances change.',
    },
    {
      question:
        /* [PLACEHOLDER: FAQ Question] */
        'What if I have assets in multiple states?',
      answer:
        /* [PLACEHOLDER: FAQ Answer] */
        'The playbook includes guidance for managing multi-state assets. Each state has specific requirements, and our guide covers the most common situations.',
    },
    {
      question:
        /* [PLACEHOLDER: FAQ Question] */
        'Is this legal in all states?',
      answer:
        /* [PLACEHOLDER: FAQ Answer] */
        'Living trusts are recognized in all 50 states. The playbook includes state-specific guidance to ensure your trust meets your state\'s legal requirements.',
    },
    {
      question:
        /* [PLACEHOLDER: FAQ Question] */
        'Do you offer support if I get stuck?',
      answer:
        /* [PLACEHOLDER: FAQ Answer] */
        /* [PLACEHOLDER: Support info - email, forum, etc.] */
        'Yes! Purchase includes access to our support team and community forum where you can ask questions.',
    },
  ]

  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="mx-auto max-w-3xl">
        {/* Section Heading */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            {/* [PLACEHOLDER: Section Headline] Example: "Frequently Asked Questions" */}
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600">
            {/* [PLACEHOLDER: Section Subtext] */}
            Everything you need to know about creating your living trust
          </p>
        </div>

        {/* Accordion */}
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-white border border-gray-200 rounded-lg mb-3 overflow-hidden"
            >
              <AccordionTrigger className="px-6 py-4 hover:bg-gray-50 font-semibold text-gray-900">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="px-6 py-4 bg-gray-50 text-gray-700 leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* Additional Support CTA */}
        <div className="mt-12 text-center p-6 sm:p-8 bg-blue-50 rounded-lg border border-blue-200">
          <p className="text-gray-700 mb-4">
            {/* [PLACEHOLDER: Support text] */}
            Still have questions? Our support team is here to help.
          </p>
          <a
            href={
              /* [PLACEHOLDER: Support email or contact page link] */
              'mailto:support@example.com'
            }
            className="inline-block text-blue-600 font-semibold hover:text-blue-700 transition-colors"
          >
            {/* [PLACEHOLDER: CTA text] */}
            Contact Us →
          </a>
        </div>
      </div>
    </section>
  )
}
