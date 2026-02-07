import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { Phone, Mail } from 'lucide-react'
import { COMPANY_INFO } from '@/lib/constants'

export function ContactCTA() {
  return (
    <Section className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 text-white">
      <Container>
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">Ready to Ship?</h2>
          <p className="text-lg text-blue-100 mb-8">
            Get a quote in seconds or contact our team for personalized support
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button href="/quote" size="lg">
              Get Instant Quote
            </Button>
            <Button href="/contact" variant="outline" size="lg">
              Contact Us
            </Button>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 text-left mt-12 pt-8 border-t border-blue-700">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <Phone className="text-blue-300" size={24} />
              </div>
              <div>
                <p className="font-semibold mb-1">Toll Free</p>
                <p className="text-white">{COMPANY_INFO.phone}</p>
                <p className="text-blue-100 text-sm">Local: {COMPANY_INFO.phoneLocal}</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <Mail className="text-blue-300" size={24} />
              </div>
              <div>
                <p className="font-semibold mb-1">Email</p>
                <p className="text-white">{COMPANY_INFO.email}</p>
                <p className="text-blue-100 text-sm">Response within 2 hours</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}
