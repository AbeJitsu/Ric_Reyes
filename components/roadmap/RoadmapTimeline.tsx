import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { Check } from 'lucide-react'

const PHASES = [
  {
    phase: 1,
    name: 'Essential Features',
    timeline: 'Weeks 1-8',
    status: 'In Progress',
    features: [
      'Real-time package tracking (no login)',
      'Instant quote calculator',
      'Mobile-responsive design',
      'Live chat support',
      'Online booking system',
      'Modern navigation',
      'SSL & security',
    ],
  },
  {
    phase: 2,
    name: 'Enhanced Features',
    timeline: 'Weeks 9-16',
    status: 'Planned',
    features: [
      'Customer dashboard',
      'Shipment history',
      'Advanced tracking',
      'Photo proof delivery',
      'Blog platform',
      'Email marketing',
      'SEO optimization',
    ],
  },
  {
    phase: 3,
    name: 'Premium Features',
    timeline: 'Weeks 17-24',
    status: 'Planned',
    features: [
      'API integrations',
      'White-label pages',
      'Analytics dashboard',
      'Multi-language support',
      'Bulk shipping tools',
      'Custom reporting',
    ],
  },
]

export function RoadmapTimeline() {
  return (
    <Section className="bg-gradient-to-b from-blue-50 to-white">
      <Container>
        <div className="text-center mb-12">
          <h1 className="text-5xl sm:text-6xl font-bold bg-gradient-to-r from-blue-900 to-blue-600 bg-clip-text text-transparent mb-4">Product Roadmap</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our vision for transforming ITSX into a modern, feature-rich logistics platform
          </p>
        </div>

        <div className="space-y-8 max-w-4xl mx-auto">
          {PHASES.map((phase, index) => (
            <div key={phase.phase} className="relative">
              {/* Timeline connector */}
              {index < PHASES.length - 1 && (
                <div className="absolute left-6 top-24 h-8 w-0.5 bg-gradient-to-b from-blue-600 to-transparent" />
              )}

              {/* Phase card */}
              <div className="relative pl-20">
                {/* Timeline dot */}
                <div className="absolute left-0 top-0 h-12 w-12 flex items-center justify-center">
                  <div className="h-12 w-12 rounded-full bg-white border-4 border-blue-600 flex items-center justify-center shadow-lg">
                    <span className="font-bold text-blue-600">{phase.phase}</span>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-6 shadow-lg border-l-4 border-blue-600 hover:shadow-xl transition-all">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-900 to-blue-600 bg-clip-text text-transparent">{phase.name}</h3>
                      <p className="text-gray-600">{phase.timeline}</p>
                    </div>
                    <span className={`px-4 py-2 rounded font-semibold text-sm ${
                      phase.status === 'In Progress'
                        ? 'bg-gradient-to-r from-blue-400 to-blue-500 text-white'
                        : 'bg-gray-100 text-gray-600'
                    }`}>
                      {phase.status}
                    </span>
                  </div>

                  <ul className="grid gap-3 sm:grid-cols-2">
                    {phase.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex gap-3 text-gray-700">
                        <Check size={20} className="flex-shrink-0 text-success mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Summary */}
        <div className="mt-16 bg-gradient-to-br from-blue-50 to-white rounded-lg p-8 text-center max-w-2xl mx-auto shadow-lg border border-blue-200">
          <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-900 to-blue-600 bg-clip-text text-transparent mb-4">About this redesign</h3>
          <p className="text-gray-700 mb-4">
            We're rebuilding ITSX from the ground up to be the modern logistics platform our customers deserve. Built with Next.js, Tailwind CSS, and cutting-edge web technologies.
          </p>
          <p className="text-gray-700">
            Our goal: deliver a fast, mobile-friendly, and feature-rich experience that makes shipping simple and transparent.
          </p>
        </div>
      </Container>
    </Section>
  )
}
