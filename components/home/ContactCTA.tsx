import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { Phone, Mail, ArrowRight } from 'lucide-react'
import { COMPANY_INFO } from '@/lib/constants'

export function ContactCTA() {
  return (
    <Section className="bg-navy-900 text-white">
      <Container>
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">Ready to Ship?</h2>
            <p className="text-lg text-blue-100 mb-8">
              Get a quote in seconds or contact our team for personalized support. We're available 24/7 to help with your shipping needs.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button href="/quote" size="lg">
                Get Instant Quote
                <ArrowRight className="ml-2" size={20} />
              </Button>
              <Button href="/contact" variant="outline" size="lg">
                Contact Us
              </Button>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="bg-white bg-opacity-5 rounded-xl p-6 border border-white border-opacity-10 hover:bg-opacity-10 transition">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <Phone className="text-blue-300" size={28} />
                </div>
                <div>
                  <p className="font-semibold mb-2">Toll Free</p>
                  <p className="text-white mb-1">{COMPANY_INFO.phone}</p>
                  <p className="text-blue-200 text-sm">Available 24/7</p>
                </div>
              </div>
            </div>

            <div className="bg-white bg-opacity-5 rounded-xl p-6 border border-white border-opacity-10 hover:bg-opacity-10 transition">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <Phone className="text-emerald-300" size={28} />
                </div>
                <div>
                  <p className="font-semibold mb-2">Local</p>
                  <p className="text-white mb-1">{COMPANY_INFO.phoneLocal}</p>
                  <p className="text-blue-200 text-sm">Long Island City, NY</p>
                </div>
              </div>
            </div>

            <div className="bg-white bg-opacity-5 rounded-xl p-6 border border-white border-opacity-10 hover:bg-opacity-10 transition">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <Mail className="text-orange-300" size={28} />
                </div>
                <div>
                  <p className="font-semibold mb-2">Email</p>
                  <p className="text-white mb-1">{COMPANY_INFO.email}</p>
                  <p className="text-blue-200 text-sm">Response within 2 hours</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-lg bg-white bg-opacity-20">
                  <ArrowRight className="text-white" size={20} />
                </div>
                <div>
                  <p className="font-semibold mb-1">Chat Support</p>
                  <p className="text-blue-50 text-sm">Available on our website for instant help</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}
