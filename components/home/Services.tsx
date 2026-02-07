import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { Globe, Truck, Package } from 'lucide-react'

const SERVICES = [
  {
    title: 'International Courier',
    description: 'Fast, reliable shipping to 220+ countries with competitive rates and full tracking.',
    icon: Globe,
  },
  {
    title: 'Domestic Express',
    description: 'Next-day delivery across the nation with flexible pickup and delivery options.',
    icon: Truck,
  },
  {
    title: 'Specialized Solutions',
    description: 'Air freight, warehousing, facilities management, and custom logistics solutions.',
    icon: Package,
  },
]

export function Services() {
  return (
    <Section className="bg-gradient-to-b from-white to-blue-50" id="services">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-blue-900 to-blue-600 bg-clip-text text-transparent mb-4">Our Services</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive logistics solutions tailored to your shipping needs
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-3">
          {SERVICES.map((service, index) => {
            const Icon = service.icon
            return (
              <Card key={index} className="flex flex-col bg-white hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-blue-100">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-blue-400 to-blue-600">
                  <Icon className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-navy-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-6 flex-grow">{service.description}</p>
                <Button href="#" variant="outline" size="sm">
                  Learn More
                </Button>
              </Card>
            )
          })}
        </div>

        <div className="text-center mt-12">
          <Button href="#" size="lg">
            Explore All Services
          </Button>
        </div>
      </Container>
    </Section>
  )
}
