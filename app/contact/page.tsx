import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { Phone, Mail, MapPin } from 'lucide-react'
import { COMPANY_INFO } from '@/lib/constants'

export const metadata = {
  title: 'Contact Us - ITSX',
  description: 'Get in touch with ITSX for support or quotes',
}

export default function ContactPage() {
  return (
    <>
      <Section className="bg-gradient-to-br from-blue-50 via-blue-100 to-white py-20 sm:py-24">
        <Container>
          <h1 className="text-5xl sm:text-6xl font-bold bg-gradient-to-r from-blue-900 to-blue-600 bg-clip-text text-transparent mb-6">Get in Touch</h1>
          <p className="text-lg text-gray-700 max-w-3xl">
            Have a question? We&apos;d love to hear from you. Contact us via phone, email, or the form below.
          </p>
        </Container>
      </Section>

      <Section className="bg-gradient-to-b from-white to-blue-50">
        <Container>
          <div className="grid gap-12 sm:grid-cols-2 mb-12">
            <div>
              <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-900 to-blue-600 bg-clip-text text-transparent mb-6">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <Phone className="text-blue-600 flex-shrink-0" size={24} />
                  <div>
                    <h3 className="font-semibold text-blue-900">Toll Free</h3>
                    <p className="text-gray-700">{COMPANY_INFO.phone}</p>
                    <p className="text-sm text-gray-500">Available 24/7</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Phone className="text-blue-600 flex-shrink-0" size={24} />
                  <div>
                    <h3 className="font-semibold text-blue-900">Local</h3>
                    <p className="text-gray-700">{COMPANY_INFO.phoneLocal}</p>
                    <p className="text-sm text-gray-500">Long Island City, NY</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Mail className="text-blue-600 flex-shrink-0" size={24} />
                  <div>
                    <h3 className="font-semibold text-blue-900">Email</h3>
                    <p className="text-gray-700">{COMPANY_INFO.email}</p>
                    <p className="text-sm text-gray-500">Response within 2 hours</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <MapPin className="text-blue-600 flex-shrink-0" size={24} />
                  <div>
                    <h3 className="font-semibold text-blue-900">Office</h3>
                    <p className="text-gray-700">{COMPANY_INFO.address}</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-navy-900 mb-6">Send us a message</h2>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary-500 focus:outline-none"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary-500 focus:outline-none"
                />
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary-500 focus:outline-none"
                />
                <textarea
                  placeholder="Message"
                  rows={4}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary-500 focus:outline-none resize-none"
                />
                <button
                  type="submit"
                  className="w-full bg-primary-500 text-white font-semibold py-3 rounded-lg hover:bg-primary-600 transition"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </Container>
      </Section>
    </>
  )
}
