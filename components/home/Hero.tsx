import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'

export function Hero() {
  return (
    <Section className="py-20 sm:py-24 lg:py-32 bg-gradient-to-br from-blue-50 via-blue-100 to-white">
      <Container>
        <div className="max-w-4xl">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-blue-900 to-blue-600 bg-clip-text text-transparent leading-tight mb-6">
            Ship Anywhere, Anytime, with Confidence
          </h1>
          <p className="text-lg sm:text-xl text-gray-700 mb-8 max-w-2xl leading-relaxed">
            ITSX delivers your packages globally with reliable service. Get instant quotes and real-time tracking for complete peace of mind.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button href="/quote" size="lg">
              Get Instant Quote
            </Button>
            <Button href="/tracking" variant="outline" size="lg">
              Track Package
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 mt-16 sm:mt-20">
          <div>
            <p className="text-3xl sm:text-4xl font-bold text-primary-500">25+</p>
            <p className="text-sm text-gray-600 mt-1">Years Operating</p>
          </div>
          <div>
            <p className="text-3xl sm:text-4xl font-bold text-primary-500">100K+</p>
            <p className="text-sm text-gray-600 mt-1">Deliveries</p>
          </div>
          <div>
            <p className="text-3xl sm:text-4xl font-bold text-primary-500">220+</p>
            <p className="text-sm text-gray-600 mt-1">Countries Served</p>
          </div>
          <div>
            <p className="text-3xl sm:text-4xl font-bold text-primary-500">99.2%</p>
            <p className="text-sm text-gray-600 mt-1">On-Time Rate</p>
          </div>
        </div>
      </Container>
    </Section>
  )
}
