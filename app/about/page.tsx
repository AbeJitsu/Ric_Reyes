import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { Button } from '@/components/ui/Button'
import { Award, Globe, Heart, Zap, Users, TrendingUp, MapPin, Briefcase } from 'lucide-react'

export const metadata = {
  title: 'About Us - ITSX',
  description: 'Learn about ITSX and our commitment to global logistics excellence',
}

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <Section className="bg-white py-20 sm:py-24">
        <Container>
          <h1 className="text-5xl sm:text-6xl font-bold text-navy-900 mb-6 max-w-3xl">
            Delivering Trust, Shipping Excellence
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mb-8">
            ITSX is a trusted partner in global logistics based in Long Island City, NY, delivering packages worldwide with unmatched reliability and care for over 25 years.
          </p>
          <Button href="/services" size="lg">
            Explore Our Services
          </Button>
        </Container>
      </Section>

      {/* Our Story & Mission */}
      <Section className="bg-gray-50 py-16 sm:py-20">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <div className="inline-flex items-center gap-2 mb-4">
                <div className="h-2 w-2 bg-blue-600 rounded-full" />
                <span className="text-sm font-semibold text-blue-600 uppercase">Our Foundation</span>
              </div>
              <h2 className="text-4xl font-bold text-navy-900 mb-6">Our Story</h2>
              <p className="text-lg text-gray-700 mb-4">
                ITSX began with a simple mission: to make international shipping accessible, affordable, and reliable for businesses of all sizes. What started as a small logistics operation has grown into a trusted partner serving thousands of customers worldwide.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                From small e-commerce businesses to multinational enterprises, we've been there at every step of their growth. Our Long Island City headquarters is home to a dedicated team passionate about logistics excellence.
              </p>
              <div className="flex gap-4 flex-wrap">
                <div>
                  <p className="text-3xl font-bold text-blue-600">25+</p>
                  <p className="text-sm text-gray-600">Years Operating</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-emerald-600">100K+</p>
                  <p className="text-sm text-gray-600">Successful Shipments</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-orange-600">220+</p>
                  <p className="text-sm text-gray-600">Countries Served</p>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 rounded-2xl border border-blue-200 p-8 h-full flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 mb-4">
                <div className="h-2 w-2 bg-emerald-600 rounded-full" />
                <span className="text-sm font-semibold text-emerald-600 uppercase">Our Mission</span>
              </div>
              <h3 className="text-2xl font-bold text-navy-900 mb-6">Committed to Excellence</h3>
              <p className="text-gray-700 mb-6">
                We&apos;re committed to delivering excellence in every shipment. Whether it&apos;s a single package or a container full, our team works to ensure it arrives safely and on time.
              </p>
              <p className="text-gray-700 mb-8">
                Transparency, reliability, and customer-first service are at the heart of everything we do. We believe in building lasting relationships with our customers through trust and consistent performance.
              </p>
              <a href="/contact" className="text-sm font-semibold text-blue-600 hover:text-blue-700 inline-flex items-center gap-2">
                Get in Touch
                <span>→</span>
              </a>
            </div>
          </div>
        </Container>
      </Section>

      {/* Our Values */}
      <Section className="bg-white py-16 sm:py-20">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold text-navy-900 mb-4">Our Core Values</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              These principles guide every decision we make and every package we ship
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-3">
            {[
              {
                icon: Zap,
                title: 'Reliability',
                desc: 'On-time delivery, every time. We stand behind our commitments with 99.2% on-time performance.',
                color: 'from-blue-500 to-blue-600',
              },
              {
                icon: Globe,
                title: 'Transparency',
                desc: 'Real-time tracking and clear pricing. No hidden fees, no surprises—just honest service.',
                color: 'from-emerald-500 to-emerald-600',
              },
              {
                icon: Heart,
                title: 'Excellence',
                desc: 'Quality service in every interaction. We treat your packages like our own.',
                color: 'from-orange-500 to-orange-600',
              },
            ].map((value) => {
              const Icon = value.icon
              return (
                <div key={value.title} className="bg-gray-50 rounded-2xl border border-gray-200 p-8 hover:shadow-lg transition">
                  <div className={`h-14 w-14 rounded-lg bg-gradient-to-br ${value.color} flex items-center justify-center mb-6`}>
                    <Icon className="text-white" size={28} />
                  </div>
                  <h3 className="text-2xl font-bold text-navy-900 mb-3">{value.title}</h3>
                  <p className="text-gray-700">{value.desc}</p>
                </div>
              )
            })}
          </div>
        </Container>
      </Section>

      {/* Milestones */}
      <Section className="bg-navy-900 text-white py-16 sm:py-20">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">Our Journey</h2>
            <p className="text-lg text-blue-100 max-w-2xl mx-auto">
              Key moments that shaped ITSX into the leader it is today
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="bg-white bg-opacity-5 rounded-xl p-6 border border-white border-opacity-10">
              <p className="text-sm font-semibold text-blue-300 mb-2">2000</p>
              <h3 className="text-xl font-bold mb-2">Founded</h3>
              <p className="text-blue-100">ITSX begins operations with a vision to revolutionize logistics</p>
            </div>

            <div className="bg-white bg-opacity-5 rounded-xl p-6 border border-white border-opacity-10">
              <p className="text-sm font-semibold text-emerald-300 mb-2">2008</p>
              <h3 className="text-xl font-bold mb-2">Global Expansion</h3>
              <p className="text-blue-100">Extended service to 100+ countries worldwide</p>
            </div>

            <div className="bg-white bg-opacity-5 rounded-xl p-6 border border-white border-opacity-10">
              <p className="text-sm font-semibold text-orange-300 mb-2">2016</p>
              <h3 className="text-xl font-bold mb-2">Tech Innovation</h3>
              <p className="text-blue-100">Launched advanced real-time tracking system</p>
            </div>

            <div className="bg-white bg-opacity-5 rounded-xl p-6 border border-white border-opacity-10">
              <p className="text-sm font-semibold text-yellow-300 mb-2">2024</p>
              <h3 className="text-xl font-bold mb-2">Modern Era</h3>
              <p className="text-blue-100">Serving 220+ countries with 100K+ deliveries</p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Why Choose Us */}
      <Section className="bg-gray-50 py-16 sm:py-20">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold text-navy-900 mb-4">Why Choose ITSX?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              What sets us apart from the competition
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: TrendingUp,
                title: 'Industry Experience',
                desc: 'Over 25 years of proven expertise in global logistics and shipping',
              },
              {
                icon: Users,
                title: 'Customer First',
                desc: '24/7 support team dedicated to solving your shipping challenges',
              },
              {
                icon: Globe,
                title: 'Global Network',
                desc: 'Operations spanning 220+ countries with local expertise',
              },
              {
                icon: Briefcase,
                title: 'Enterprise Ready',
                desc: 'Solutions scalable from startups to Fortune 500 companies',
              },
              {
                icon: Award,
                title: 'Quality Assured',
                desc: '99.2% on-time delivery rate backed by comprehensive insurance',
              },
              {
                icon: MapPin,
                title: 'Local Presence',
                desc: 'Headquartered in Long Island City with offices worldwide',
              },
            ].map((item, index) => {
              const Icon = item.icon
              return (
                <div key={index} className="bg-white rounded-xl p-8 border border-gray-200 hover:shadow-lg transition">
                  <Icon className="text-blue-600 mb-4" size={32} />
                  <h3 className="text-xl font-bold text-navy-900 mb-3">{item.title}</h3>
                  <p className="text-gray-700">{item.desc}</p>
                </div>
              )
            })}
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16 sm:py-20">
        <Container>
          <div className="text-center">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">Ready to Partner With Us?</h2>
            <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
              Join thousands of businesses that trust ITSX for their shipping needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/quote" size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
                Get Started Today
              </Button>
              <Button href="/contact" variant="outline" size="lg">
                Learn More
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </>
  )
}
