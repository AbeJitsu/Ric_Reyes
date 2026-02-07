import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { Award, Package, Globe, Zap } from 'lucide-react'

export function Hero() {
  return (
    <Section className="py-20 sm:py-24 lg:py-32 bg-white">
      <Container>
        <div className="max-w-4xl">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-navy-900 leading-tight mb-6">
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

        {/* Stats - Modern Card Design */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 mt-16 sm:mt-20">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 border border-blue-200 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3 mb-3">
              <div className="h-10 w-10 rounded-lg bg-blue-500 flex items-center justify-center">
                <Award className="text-white" size={20} />
              </div>
              <p className="text-3xl sm:text-4xl font-bold text-blue-600">25+</p>
            </div>
            <p className="text-sm font-medium text-gray-700">Years Operating</p>
          </div>

          <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-xl p-6 border border-emerald-200 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3 mb-3">
              <div className="h-10 w-10 rounded-lg bg-emerald-500 flex items-center justify-center">
                <Package className="text-white" size={20} />
              </div>
              <p className="text-3xl sm:text-4xl font-bold text-emerald-600">100K+</p>
            </div>
            <p className="text-sm font-medium text-gray-700">Deliveries</p>
          </div>

          <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-6 border border-orange-200 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3 mb-3">
              <div className="h-10 w-10 rounded-lg bg-orange-500 flex items-center justify-center">
                <Globe className="text-white" size={20} />
              </div>
              <p className="text-3xl sm:text-4xl font-bold text-orange-600">220+</p>
            </div>
            <p className="text-sm font-medium text-gray-700">Countries Served</p>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 border border-purple-200 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3 mb-3">
              <div className="h-10 w-10 rounded-lg bg-purple-500 flex items-center justify-center">
                <Zap className="text-white" size={20} />
              </div>
              <p className="text-3xl sm:text-4xl font-bold text-purple-600">99.2%</p>
            </div>
            <p className="text-sm font-medium text-gray-700">On-Time Rate</p>
          </div>
        </div>
      </Container>
    </Section>
  )
}
