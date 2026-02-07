import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { Button } from '@/components/ui/Button'
import { Package, MapPin, Clock, CheckCircle, ArrowRight } from 'lucide-react'

export const metadata = {
  title: 'Track Package - ITSX',
  description: 'Track your package in real-time with ITSX',
}

export default function TrackingPage() {
  return (
    <>
      {/* Hero */}
      <Section className="bg-white py-16 sm:py-24">
        <Container>
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 mb-6">
              <Package className="text-blue-600" size={32} />
            </div>
            <h1 className="text-5xl sm:text-6xl font-bold text-navy-900 mb-6">Track Your Package</h1>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              Enter your tracking number to get real-time updates on your shipment location and estimated delivery.
            </p>
          </div>
        </Container>
      </Section>

      {/* Tracking Form */}
      <Section className="bg-gray-50 py-16 sm:py-20">
        <Container>
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-2xl border border-gray-200 p-8 sm:p-12 shadow-lg">
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-navy-900 mb-3">
                    Tracking Number
                  </label>
                  <input
                    type="text"
                    placeholder="e.g., ITSX-123456789"
                    className="w-full px-4 py-4 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100 transition text-lg"
                  />
                  <p className="text-sm text-gray-600 mt-2">
                    Your tracking number is shown in your shipping confirmation email
                  </p>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold py-4 rounded-lg hover:shadow-lg transition flex items-center justify-center gap-2"
                >
                  Track Package
                  <ArrowRight size={20} />
                </button>
              </form>

              <div className="border-t border-gray-200 mt-8 pt-8">
                <p className="text-center text-gray-700 mb-4">
                  Need help finding your tracking number?
                </p>
                <div className="flex gap-3 flex-col sm:flex-row justify-center">
                  <Button href="/contact" variant="outline" size="sm">
                    Contact Support
                  </Button>
                  <Button href="/quote" variant="secondary" size="sm">
                    Get New Quote
                  </Button>
                </div>
              </div>
            </div>

            {/* Format Info */}
            <div className="bg-blue-50 rounded-xl border border-blue-200 p-6 mt-8">
              <h3 className="font-semibold text-navy-900 mb-4">Tracking Number Format</h3>
              <div className="space-y-2 text-sm text-gray-700">
                <p>
                  <span className="font-semibold">Domestic:</span> ITSX-XXX-XXX-XXX (11 digits)
                </p>
                <p>
                  <span className="font-semibold">International:</span> ITSX-INT-XXXXXXXXX (13 digits)
                </p>
                <p className="text-xs text-gray-600 mt-4">
                  Can&apos;t find your tracking number? Check your email for your shipping confirmation or invoice.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* How Tracking Works */}
      <Section className="bg-white py-16 sm:py-20">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold text-navy-900 mb-4">How Tracking Works</h2>
            <p className="text-lg text-gray-600">Real-time updates every step of the way</p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                number: '1',
                title: 'Package Picked Up',
                description: 'Your shipment is collected and scanned at pickup',
                icon: Package,
              },
              {
                number: '2',
                title: 'In Transit',
                description: 'Real-time location updates as your package moves',
                icon: MapPin,
              },
              {
                number: '3',
                title: 'Out for Delivery',
                description: 'Your package is on its way to you today',
                icon: Clock,
              },
              {
                number: '4',
                title: 'Delivered',
                description: 'Successfully delivered to your destination',
                icon: CheckCircle,
              },
            ].map((step, index) => {
              const Icon = step.icon
              return (
                <div key={index} className="relative">
                  <div className="bg-gray-50 rounded-xl border border-gray-200 p-6 text-center">
                    <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4">
                      <Icon className="text-blue-600" size={24} />
                    </div>
                    <h3 className="font-bold text-navy-900 mb-2">{step.title}</h3>
                    <p className="text-sm text-gray-600">{step.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </Container>
      </Section>

      {/* Popular Routes */}
      <Section className="bg-gray-50 py-16 sm:py-20">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold text-navy-900 mb-4">Popular Routes</h2>
            <p className="text-lg text-gray-600">Typical delivery times from ITSX</p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { from: 'USA', to: 'Europe', time: '7-10 days', price: '$29.99' },
              { from: 'USA', to: 'Asia', time: '10-14 days', price: '$39.99' },
              { from: 'USA', to: 'Canada', time: '3-5 days', price: '$19.99' },
              { from: 'USA', to: 'Australia', time: '12-16 days', price: '$49.99' },
              { from: 'USA', to: 'Latin America', time: '8-12 days', price: '$34.99' },
              { from: 'USA', to: 'Africa', time: '14-18 days', price: '$44.99' },
            ].map((route, index) => (
              <div key={index} className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="text-sm text-gray-600">{route.from} → {route.to}</p>
                    <p className="text-2xl font-bold text-navy-900">{route.time}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-600">Starting at</p>
                    <p className="text-xl font-bold text-blue-600">{route.price}</p>
                  </div>
                </div>
                <Button href="/quote" variant="outline" size="sm" className="w-full">
                  Get Quote
                </Button>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* FAQ */}
      <Section className="bg-white py-16 sm:py-20">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold text-navy-900 mb-4">Tracking FAQs</h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                q: 'How often is my tracking information updated?',
                a: 'Tracking information is updated in real-time as your package moves through our network. International packages may have slightly delayed updates depending on customs clearance.',
              },
              {
                q: 'Why is my package status not updating?',
                a: 'Status updates typically occur within 24 hours of significant movement. During peak seasons or customs delays, updates may take longer. Check your email for detailed tracking links.',
              },
              {
                q: 'Can I change my delivery address after shipping?',
                a: 'Delivery address changes are possible if the package hasn\'t started transit. Contact us immediately with your tracking number for assistance.',
              },
              {
                q: 'What if my package is late?',
                a: 'Our on-time delivery guarantee covers most scenarios. If your package is delayed, please contact our support team with your tracking number for resolution options.',
              },
            ].map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                <h3 className="font-bold text-navy-900 mb-2">{faq.q}</h3>
                <p className="text-gray-700 text-sm">{faq.a}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16 sm:py-20">
        <Container>
          <div className="text-center">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">Ready to Ship?</h2>
            <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
              Get an instant quote for your next shipment or contact our team for personalized assistance
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/quote" size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
                Get Instant Quote
              </Button>
              <Button href="/contact" variant="outline" size="lg">
                Contact Us
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </>
  )
}
