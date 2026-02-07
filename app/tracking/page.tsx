import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'

export const metadata = {
  title: 'Track Package - ITS-Xpress',
  description: 'Track your package in real-time with ITS-Xpress',
}

export default function TrackingPage() {
  return (
    <Section background="light" className="min-h-screen">
      <Container>
        <div className="max-w-2xl mx-auto">
          <h1 className="text-5xl font-bold text-navy-900 mb-6">Track Your Package</h1>
          <p className="text-lg text-gray-600 mb-8">
            Enter your tracking number to see real-time updates on your shipment.
          </p>

          <div className="bg-white rounded-lg p-8 shadow-md">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-navy-900 mb-2">
                  Tracking Number
                </label>
                <input
                  type="text"
                  placeholder="e.g., ITSX-123456789"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary-500 focus:outline-none"
                />
              </div>
              <button className="w-full bg-primary-500 text-white font-semibold py-3 rounded-lg hover:bg-primary-600 transition">
                Track Package
              </button>
            </div>
            <p className="text-center text-gray-600 text-sm mt-6">
              Don&apos;t have a tracking number? <a href="/contact" className="text-primary-500 hover:underline">Contact us</a>
            </p>
          </div>
        </div>
      </Container>
    </Section>
  )
}
