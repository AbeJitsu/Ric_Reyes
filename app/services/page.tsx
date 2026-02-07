import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { Button } from '@/components/ui/Button'
import { Globe, Truck, Package, ChevronRight, Clock, Shield, Zap, DollarSign, MapPin, CheckCircle } from 'lucide-react'

export const metadata = {
  title: 'Services - ITSX',
  description: 'Explore ITSX services including international courier, domestic express, and specialized solutions',
}

const SERVICES = [
  {
    icon: Globe,
    title: 'International Courier',
    color: 'from-blue-500 to-blue-600',
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-200',
    shortDesc: 'Global shipping made simple',
    description: 'Fast, reliable international shipping to 220+ countries with real-time tracking and competitive rates.',
    features: [
      'Express delivery options',
      'Real-time package tracking',
      'Customs support and documentation',
      'Insurance coverage available',
      'Flexible delivery windows',
      'Phone and email support',
    ],
    benefits: [
      'Reach customers in 220+ countries',
      'Transparent pricing with no hidden fees',
      'Professional handling of international regulations',
      'Weather and disaster protection',
    ],
  },
  {
    icon: Truck,
    title: 'Domestic Express',
    color: 'from-slate-500 to-slate-600',
    bgColor: 'bg-slate-50',
    borderColor: 'border-slate-200',
    shortDesc: 'Next-day delivery nationwide',
    description: 'Next-day delivery across the nation for urgent shipments with flexible pickup and delivery options.',
    features: [
      'Guaranteed next-day delivery',
      'Flexible pickup locations',
      'Evening and weekend delivery',
      'Free package tracking',
      'Same-day service available',
      'Damaged package replacement',
    ],
    benefits: [
      'Meet tight deadlines consistently',
      'No minimum shipment requirements',
      'Pick-up service available',
      'Eco-friendly packaging options',
    ],
  },
  {
    icon: Package,
    title: 'Specialized Solutions',
    color: 'from-gray-600 to-gray-700',
    bgColor: 'bg-gray-50',
    borderColor: 'border-gray-200',
    shortDesc: 'Custom logistics for every need',
    description: 'Air freight, warehousing, facilities management, and custom logistics solutions for enterprise clients.',
    features: [
      'Air freight services',
      'Climate-controlled storage',
      'Inventory management',
      'Dedicated account managers',
      'Custom routing options',
      'Heavy cargo handling',
    ],
    benefits: [
      'Scale your logistics with us',
      'Reduce warehousing costs',
      'Enterprise SLA agreements',
      'Risk management and compliance',
    ],
  },
]

const PROCESS_STEPS = [
  {
    number: '1',
    title: 'Get a Quote',
    description: 'Enter your shipment details and get an instant rate',
  },
  {
    number: '2',
    title: 'Schedule Pickup',
    description: 'Choose a convenient time for us to pick up your package',
  },
  {
    number: '3',
    title: 'Track in Real-Time',
    description: 'Monitor your shipment every step of the journey',
  },
  {
    number: '4',
    title: 'Guaranteed Delivery',
    description: 'Your package arrives safely and on time',
  },
]

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <Section className="bg-white py-16 sm:py-20">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl sm:text-6xl font-bold text-navy-900 mb-6">Our Services</h1>
            <p className="text-xl text-gray-700 mb-8">
              Comprehensive logistics solutions tailored to your shipping needs. From small packages to enterprise solutions, we've got you covered.
            </p>
            <Button href="/quote" size="lg">
              Get Instant Quote
            </Button>
          </div>
        </Container>
      </Section>

      {/* Detailed Services */}
      <Section className="bg-gray-50 py-16 sm:py-20">
        <Container>
          <div className="space-y-16">
            {SERVICES.map((service, index) => {
              const Icon = service.icon
              const isEven = index % 2 === 0

              return (
                <div key={service.title}>
                  <div className={`grid gap-12 lg:grid-cols-2 items-center ${!isEven && 'lg:grid-cols-2 lg:auto-cols-max'}`}>
                    {/* Content */}
                    <div className={isEven ? 'order-1' : 'order-2 lg:order-1'}>
                      <div className="inline-flex gap-3 items-center mb-4">
                        <div className={`h-12 w-12 rounded-lg bg-gradient-to-br ${service.color} flex items-center justify-center`}>
                          <Icon className="text-white" size={24} />
                        </div>
                        <span className={`text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r ${service.color}`}>
                          {service.shortDesc.toUpperCase()}
                        </span>
                      </div>

                      <h2 className="text-4xl font-bold text-navy-900 mb-4">{service.title}</h2>
                      <p className="text-lg text-gray-700 mb-8">{service.description}</p>

                      {/* Features Grid */}
                      <div className="grid sm:grid-cols-2 gap-4 mb-8">
                        {service.features.map((feature, i) => (
                          <div key={i} className="flex gap-3">
                            <CheckCircle className="text-emerald-500 flex-shrink-0 mt-1" size={20} />
                            <p className="text-gray-700">{feature}</p>
                          </div>
                        ))}
                      </div>

                      <Button href="/quote" variant="primary" size="lg">
                        Get Quote for {service.title.split(' ')[0]}
                        <ChevronRight className="ml-2" size={20} />
                      </Button>
                    </div>

                    {/* Card */}
                    <div className={isEven ? 'order-2' : 'order-1 lg:order-2'}>
                      <div className={`${service.bgColor} border ${service.borderColor} rounded-2xl p-8 sticky top-20`}>
                        <h3 className="text-2xl font-bold text-navy-900 mb-6">Key Benefits</h3>
                        <div className="space-y-4 mb-8">
                          {service.benefits.map((benefit, i) => (
                            <div key={i} className="flex gap-4">
                              <div className={`h-10 w-10 rounded-full bg-gradient-to-br ${service.color} flex items-center justify-center flex-shrink-0`}>
                                <span className="text-white font-semibold text-sm">✓</span>
                              </div>
                              <div>
                                <p className="text-gray-900 font-medium">{benefit}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                        <a href="/contact" className="text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-700 hover:underline flex items-center gap-2">
                          Request a Custom Quote
                          <ChevronRight size={16} />
                        </a>
                      </div>
                    </div>
                  </div>

                  {index < SERVICES.length - 1 && <div className="my-12 border-t border-gray-300" />}
                </div>
              )
            })}
          </div>
        </Container>
      </Section>

      {/* How It Works */}
      <Section className="bg-white py-16 sm:py-20">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold text-navy-900 mb-4">How It Works</h2>
            <p className="text-lg text-gray-600">Simple, transparent process from quote to delivery</p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {PROCESS_STEPS.map((step, index) => (
              <div key={step.number} className="relative">
                <div className="bg-blue-50 rounded-xl p-8 border border-blue-200">
                  <div className="h-12 w-12 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white font-bold text-lg mb-4">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-bold text-navy-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>

                {index < PROCESS_STEPS.length - 1 && (
                  <div className="hidden lg:block absolute top-1/4 -right-4 transform translate-x-full">
                    <ChevronRight className="text-blue-300" size={32} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Why Choose ITSX */}
      <Section className="bg-navy-900 text-white py-16 sm:py-20">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">Why Choose ITSX?</h2>
            <p className="text-lg text-blue-100 max-w-2xl mx-auto">
              30+ years of trusted service with a track record of excellence
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="bg-white bg-opacity-5 rounded-xl p-6 border border-white border-opacity-10">
              <Clock className="text-blue-300 mb-4" size={32} />
              <h3 className="text-lg font-bold mb-2">Fast Delivery</h3>
              <p className="text-blue-100 text-sm">Express options available for urgent shipments</p>
            </div>

            <div className="bg-white bg-opacity-5 rounded-xl p-6 border border-white border-opacity-10">
              <Shield className="text-emerald-300 mb-4" size={32} />
              <h3 className="text-lg font-bold mb-2">Full Protection</h3>
              <p className="text-blue-100 text-sm">Comprehensive insurance and damage coverage</p>
            </div>

            <div className="bg-white bg-opacity-5 rounded-xl p-6 border border-white border-opacity-10">
              <DollarSign className="text-orange-300 mb-4" size={32} />
              <h3 className="text-lg font-bold mb-2">Best Rates</h3>
              <p className="text-blue-100 text-sm">Competitive pricing with volume discounts</p>
            </div>

            <div className="bg-white bg-opacity-5 rounded-xl p-6 border border-white border-opacity-10">
              <Zap className="text-yellow-300 mb-4" size={32} />
              <h3 className="text-lg font-bold mb-2">24/7 Support</h3>
              <p className="text-blue-100 text-sm">Always available to answer your questions</p>
            </div>
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16 sm:py-20">
        <Container>
          <div className="text-center">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
              Get an instant quote or contact our team for a custom solution
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/quote" size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
                Get Instant Quote
              </Button>
              <Button href="/contact" variant="outline" size="lg">
                Contact Sales Team
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </>
  )
}
