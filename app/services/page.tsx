import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { Globe, Truck, Package } from 'lucide-react'

export const metadata = {
  title: 'Services - ITSX',
  description: 'Explore ITSX services including international courier, domestic express, and specialized solutions',
}

const SERVICES = [
  {
    icon: Globe,
    title: 'International Courier',
    description: 'Fast, reliable international shipping to 220+ countries with real-time tracking',
  },
  {
    icon: Truck,
    title: 'Domestic Express',
    description: 'Next-day delivery across the nation for urgent shipments',
  },
  {
    icon: Package,
    title: 'Specialized Solutions',
    description: 'Air freight, warehousing, and facilities management tailored to your needs',
  },
]

export default function ServicesPage() {
  return (
    <>
      <Section className="bg-gradient-to-r from-blue-50 to-blue-100 py-16">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-blue-900 mb-4">Our Services</h1>
            <p className="text-xl text-gray-700">
              Comprehensive logistics solutions tailored to your shipping needs
            </p>
          </div>
        </Container>
      </Section>

      <Section className="py-16">
        <Container>
          <div className="grid md:grid-cols-3 gap-8">
            {SERVICES.map((service) => {
              const Icon = service.icon
              return (
                <div key={service.title} className="bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition">
                  <Icon className="text-blue-600 mb-4" size={40} />
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              )
            })}
          </div>

          <div className="mt-16 bg-blue-50 rounded-lg p-8">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Why Choose ITSX?</h2>
            <ul className="grid md:grid-cols-2 gap-4 text-gray-700">
              <li className="flex items-start">
                <span className="text-blue-600 font-bold mr-3">✓</span>
                <span>25+ years of industry experience</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 font-bold mr-3">✓</span>
                <span>100,000+ successful shipments</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 font-bold mr-3">✓</span>
                <span>99.2% on-time delivery rate</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 font-bold mr-3">✓</span>
                <span>24/7 customer support</span>
              </li>
            </ul>
          </div>
        </Container>
      </Section>
    </>
  )
}
