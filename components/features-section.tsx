import { BookOpen, FileText, Users, Shield, Clock, Award } from 'lucide-react'

/**
 * FEATURES & BENEFITS SECTION
 * Scannable breakdown of what's included in the book
 * Replace [PLACEHOLDER: ...] with your features
 */
export function FeaturesSection() {
  const features = [
    {
      icon: BookOpen,
      title: 'Complete Step-by-Step Guide',
      description:
        /* [PLACEHOLDER: Feature description] */
        'Everything you need to create a living trust, explained clearly without legal jargon.',
    },
    {
      icon: FileText,
      title: 'Ready-to-Use Templates',
      description:
        /* [PLACEHOLDER: Feature description] */
        'Downloadable trust documents you can customize for your state.',
    },
    {
      icon: Shield,
      title: 'Asset Protection Strategies',
      description:
        /* [PLACEHOLDER: Feature description] */
        'Learn how to protect your assets and minimize taxes for your heirs.',
    },
    {
      icon: Users,
      title: 'Beneficiary Planning',
      description:
        /* [PLACEHOLDER: Feature description] */
        'Detailed guidance on naming beneficiaries and executors.',
    },
    {
      icon: Clock,
      title: 'Fast Implementation',
      description:
        /* [PLACEHOLDER: Feature description] */
        'Complete your trust in a weekend, not months of lawyer appointments.',
    },
    {
      icon: Award,
      title: 'State-Specific Guidance',
      description:
        /* [PLACEHOLDER: Feature description] */
        'Customized instructions for your state\'s trust requirements.',
    },
  ]

  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="mx-auto max-w-6xl">
        {/* Section Heading */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            {/* [PLACEHOLDER: Section Headline] Example: "What's Inside The Playbook" */}
            What's Inside The Playbook
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {/* [PLACEHOLDER: Section Subtext] */}
            Everything you need to protect your family and assets
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="bg-white p-6 sm:p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center justify-center w-14 h-14 rounded-full bg-blue-100 mb-4">
                  <Icon className="w-7 h-7 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
