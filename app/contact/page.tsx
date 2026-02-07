import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { Button } from '@/components/ui/Button'
import { Phone, Mail, MapPin, Clock, MessageSquare, Zap } from 'lucide-react'
import { COMPANY_INFO } from '@/lib/constants'

export const metadata = {
  title: 'Contact Us - ITSX',
  description: 'Get in touch with ITSX for support or quotes',
}

const OFFICE_HOURS = [
  { day: 'Monday - Friday', hours: '8:00 AM - 8:00 PM EST' },
  { day: 'Saturday', hours: '9:00 AM - 5:00 PM EST' },
  { day: 'Sunday', hours: 'By appointment' },
  { day: '24/7', hours: 'Emergency support available' },
]

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <Section className="bg-white py-16 sm:py-24">
        <Container>
          <div className="text-center mb-12">
            <h1 className="text-5xl sm:text-6xl font-bold text-navy-900 mb-6">Get in Touch</h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Have a question? We&apos;d love to hear from you. Our team is available 24/7 to help.
            </p>
          </div>
        </Container>
      </Section>

      {/* Contact Methods */}
      <Section className="bg-gray-50 py-16 sm:py-20">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-16">
            {/* Toll Free */}
            <div className="bg-white rounded-xl border border-gray-200 p-8 hover:shadow-lg transition">
              <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center mb-4">
                <Phone className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold text-navy-900 mb-2">Toll Free</h3>
              <p className="text-gray-600 mb-4">Call us anytime, available 24/7</p>
              <a href={`tel:${COMPANY_INFO.phone}`} className="text-blue-600 font-semibold text-lg hover:text-blue-700">
                {COMPANY_INFO.phone}
              </a>
            </div>

            {/* Local Phone */}
            <div className="bg-white rounded-xl border border-gray-200 p-8 hover:shadow-lg transition">
              <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-slate-500 to-slate-600 flex items-center justify-center mb-4">
                <Phone className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold text-navy-900 mb-2">Local</h3>
              <p className="text-gray-600 mb-2">Long Island City, NY</p>
              <a href={`tel:${COMPANY_INFO.phoneLocal}`} className="text-blue-600 font-semibold text-lg hover:text-blue-700">
                {COMPANY_INFO.phoneLocal}
              </a>
            </div>

            {/* Email */}
            <div className="bg-white rounded-xl border border-gray-200 p-8 hover:shadow-lg transition">
              <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-gray-600 to-gray-700 flex items-center justify-center mb-4">
                <Mail className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold text-navy-900 mb-2">Email</h3>
              <p className="text-gray-600 mb-4">Response within 2 hours</p>
              <a href={`mailto:${COMPANY_INFO.email}`} className="text-blue-600 font-semibold hover:text-blue-700 break-all">
                {COMPANY_INFO.email}
              </a>
            </div>
          </div>

          {/* Main Grid - Office & Form */}
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Office Info */}
            <div>
              <h2 className="text-3xl font-bold text-navy-900 mb-8">Our Office</h2>

              {/* Address Card */}
              <div className="bg-white rounded-xl border border-gray-200 p-8 mb-8">
                <div className="flex gap-4 mb-6">
                  <MapPin className="text-blue-600 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold text-navy-900 mb-2">Headquarters</h3>
                    <p className="text-gray-700">{COMPANY_INFO.address}</p>
                  </div>
                </div>
              </div>

              {/* Office Hours */}
              <div className="bg-blue-50 rounded-xl border border-blue-200 p-8">
                <div className="flex gap-3 mb-6">
                  <Clock className="text-blue-600 flex-shrink-0 mt-1" size={24} />
                  <h3 className="font-semibold text-navy-900">Office Hours</h3>
                </div>
                <div className="space-y-3">
                  {OFFICE_HOURS.map((hour, index) => (
                    <div key={index} className="flex justify-between items-start">
                      <p className="text-gray-700 font-medium">{hour.day}</p>
                      <p className="text-gray-600 text-right">{hour.hours}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-navy-900 mb-8">Send us a Message</h2>
              <form className="bg-white rounded-xl border border-gray-200 p-8 space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-navy-900 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100 transition"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-navy-900 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100 transition"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-navy-900 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    placeholder="How can we help?"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100 transition"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-navy-900 mb-2">
                    Message
                  </label>
                  <textarea
                    placeholder="Tell us more about your inquiry..."
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100 transition resize-none"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold py-3 rounded-lg hover:shadow-lg transition"
                >
                  Send Message
                </button>

                <p className="text-xs text-gray-600 text-center">
                  We'll get back to you within 2 hours during business hours
                </p>
              </form>
            </div>
          </div>
        </Container>
      </Section>

      {/* Quick Help Section */}
      <Section className="bg-white py-16 sm:py-20">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold text-navy-900 mb-4">FAQ</h2>
            <p className="text-lg text-gray-600">Quick answers to common questions</p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: Zap,
                question: 'How do I track my package?',
                answer: 'Use your tracking number at our tracking page to get real-time updates on your shipment location and status.',
              },
              {
                icon: MessageSquare,
                question: 'What if my package is damaged?',
                answer: 'Contact our support team immediately with photos. We provide comprehensive damage coverage and replacement options.',
              },
              {
                icon: Clock,
                question: 'What are delivery timeframes?',
                answer: 'International: 7-14 business days. Domestic Express: Next day. Check your quote for exact timeframes.',
              },
            ].map((faq, index) => {
              const Icon = faq.icon
              return (
                <div key={index} className="bg-gray-50 rounded-xl border border-gray-200 p-6 hover:shadow-lg transition">
                  <Icon className="text-blue-600 mb-4" size={28} />
                  <h3 className="font-bold text-navy-900 mb-3">{faq.question}</h3>
                  <p className="text-gray-700 text-sm">{faq.answer}</p>
                </div>
              )
            })}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-700 mb-4">Can't find your answer?</p>
            <Button href="#" size="lg">
              Contact Our Support Team
            </Button>
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16 sm:py-20">
        <Container>
          <div className="text-center">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
              Get an instant quote or let us know how we can help with your shipping needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/quote" size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
                Get Instant Quote
              </Button>
              <Button href="/services" variant="outline" size="lg">
                Explore Services
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </>
  )
}
