import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'

export const metadata = {
  title: 'Get Quote - ITS-Xpress',
  description: 'Get an instant shipping quote from ITS-Xpress',
}

export default function QuotePage() {
  return (
    <Section background="light" className="min-h-screen">
      <Container>
        <div className="max-w-3xl mx-auto">
          <h1 className="text-5xl font-bold text-navy-900 mb-6">Get Instant Quote</h1>
          <p className="text-lg text-gray-600 mb-8">
            Fill in your shipment details to get an accurate quote in seconds.
          </p>

          <div className="bg-white rounded-lg p-8 shadow-md">
            <form className="space-y-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label className="block text-sm font-semibold text-navy-900 mb-2">
                    Ship From (Country)
                  </label>
                  <input
                    type="text"
                    placeholder="United States"
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-navy-900 mb-2">
                    Ship To (Country)
                  </label>
                  <input
                    type="text"
                    placeholder="Canada"
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary-500 focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid gap-6 sm:grid-cols-3">
                <div>
                  <label className="block text-sm font-semibold text-navy-900 mb-2">
                    Weight (lbs)
                  </label>
                  <input
                    type="number"
                    placeholder="10"
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-navy-900 mb-2">
                    Length (in)
                  </label>
                  <input
                    type="number"
                    placeholder="12"
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-navy-900 mb-2">
                    Width (in)
                  </label>
                  <input
                    type="number"
                    placeholder="8"
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary-500 focus:outline-none"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-primary-500 text-white font-semibold py-3 rounded-lg hover:bg-primary-600 transition"
              >
                Get Quote
              </button>
            </form>
          </div>
        </div>
      </Container>
    </Section>
  )
}
