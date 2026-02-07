import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { Award, CheckCircle, Clock, Headphones } from 'lucide-react'

const INDICATORS = [
  {
    metric: '25+',
    label: 'Years in Business',
    icon: Award,
  },
  {
    metric: '100K+',
    label: 'Shipments Delivered',
    icon: CheckCircle,
  },
  {
    metric: '99.2%',
    label: 'On-Time Delivery',
    icon: Clock,
  },
  {
    metric: '24/7',
    label: 'Customer Support',
    icon: Headphones,
  },
]

export function TrustIndicators() {
  return (
    <Section className="bg-navy-900 text-white">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">Why Choose ITSX?</h2>
          <p className="text-lg text-blue-200 max-w-2xl mx-auto">
            Proven reliability and excellence in global logistics
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {INDICATORS.map((indicator, index) => {
            const Icon = indicator.icon
            return (
              <div key={index} className="text-center p-6 rounded-xl bg-white bg-opacity-5 border border-white border-opacity-10 hover:bg-opacity-10 transition">
                <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-blue-400 to-blue-600 mb-4">
                  <Icon className="text-white" size={32} />
                </div>
                <p className="text-3xl sm:text-4xl font-bold text-white mb-2">{indicator.metric}</p>
                <p className="text-blue-200 font-medium">{indicator.label}</p>
              </div>
            )
          })}
        </div>
      </Container>
    </Section>
  )
}
