import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { Button } from '@/components/ui/Button'
import { AlertCircle, CheckCircle } from 'lucide-react'

export const metadata = {
  title: 'Terms of Service - ITSX',
  description: 'ITSX Terms of Service - Legal terms and conditions',
}

const TABLE_OF_CONTENTS = [
  { title: 'Agreement to Terms', id: 'agreement' },
  { title: 'Service Description', id: 'service' },
  { title: 'User Responsibilities', id: 'responsibilities' },
  { title: 'Shipping Terms', id: 'shipping' },
  { title: 'Disclaimer', id: 'disclaimer' },
  { title: 'Limitations of Liability', id: 'limitations' },
  { title: 'Modifications', id: 'modifications' },
  { title: 'Governing Law', id: 'governing' },
  { title: 'Contact Us', id: 'contact' },
]

export default function TermsPage() {
  return (
    <>
      {/* Hero */}
      <Section className="bg-white py-16 sm:py-20">
        <Container>
          <div className="flex items-center gap-4 mb-6">
            <div className="h-14 w-14 rounded-lg bg-gray-200 flex items-center justify-center">
              <AlertCircle className="text-gray-700" size={28} />
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-700 uppercase">Legal Agreement</p>
              <h1 className="text-5xl sm:text-6xl font-bold text-navy-900">Terms of Service</h1>
            </div>
          </div>
          <p className="text-lg text-gray-700 max-w-3xl mb-6">
            These Terms of Service govern your use of ITSX services. Please read them carefully before placing any orders.
          </p>
          <p className="text-sm text-gray-600">
            <span className="font-semibold">Last Updated:</span> February 2025
          </p>
        </Container>
      </Section>

      <div className="bg-gray-50 border-t border-gray-200">
        <Container className="py-12 sm:py-16">
          <div className="grid gap-12 lg:grid-cols-4">
            {/* Table of Contents */}
            <div className="lg:col-span-1">
              <div className="sticky top-6 bg-white rounded-xl border border-gray-200 p-6">
                <h3 className="font-bold text-navy-900 mb-4">Quick Navigation</h3>
                <nav className="space-y-2">
                  {TABLE_OF_CONTENTS.map((item) => (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      className="block text-sm text-orange-600 hover:text-orange-700 font-medium"
                    >
                      {item.title}
                    </a>
                  ))}
                </nav>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-xl border border-gray-200 p-8 space-y-8">
                {/* Agreement to Terms */}
                <section id="agreement">
                  <h2 className="text-3xl font-bold text-navy-900 mb-4">Agreement to Terms</h2>
                  <p className="text-gray-700 mb-4">
                    By accessing and using the ITSX website and services, you agree to be bound by these Terms of Service. If you do not agree to abide by any part of these terms, you are not authorized to use our services.
                  </p>
                  <p className="text-gray-700">
                    ITSX reserves the right to update these terms at any time without prior notice. Your continued use of the services constitutes acceptance of the updated terms.
                  </p>
                </section>

                <hr className="border-gray-200" />

                {/* Service Description */}
                <section id="service">
                  <h2 className="text-3xl font-bold text-navy-900 mb-4">Service Description</h2>
                  <p className="text-gray-700 mb-4">
                    ITSX provides international and domestic shipping services. We offer:
                  </p>
                  <ul className="space-y-3 mb-6">
                    {[
                      'International courier services to 220+ countries',
                      'Domestic express delivery across the United States',
                      'Real-time package tracking and notifications',
                      'Insurance options for package protection',
                      'Customer support via phone, email, and online chat',
                    ].map((item, i) => (
                      <li key={i} className="flex gap-3">
                        <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={20} />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </section>

                <hr className="border-gray-200" />

                {/* User Responsibilities */}
                <section id="responsibilities">
                  <h2 className="text-3xl font-bold text-navy-900 mb-4">User Responsibilities</h2>
                  <p className="text-gray-700 mb-6">
                    When using ITSX services, you agree to:
                  </p>

                  <div className="bg-blue-50 rounded-lg border border-blue-200 p-6">
                    <ul className="space-y-3">
                      {[
                        'Provide accurate shipping and contact information',
                        'Comply with all applicable laws and regulations',
                        'Not ship prohibited, illegal, or hazardous items',
                        'Not engage in fraudulent or deceptive practices',
                        'Not attempt to damage or disrupt our services',
                        'Respect the intellectual property rights of ITSX',
                      ].map((item, i) => (
                        <li key={i} className="flex gap-3">
                          <span className="text-blue-600 font-bold">•</span>
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </section>

                <hr className="border-gray-200" />

                {/* Shipping Terms */}
                <section id="shipping">
                  <h2 className="text-3xl font-bold text-navy-900 mb-4">Shipping Terms and Conditions</h2>
                  <p className="text-gray-700 mb-6">
                    <span className="font-semibold">Delivery Estimates:</span> We provide estimated delivery timeframes for planning purposes. These are not guaranteed unless you purchase delivery guarantee protection.
                  </p>
                  <p className="text-gray-700 mb-6">
                    <span className="font-semibold">Liability Limits:</span> Our liability for lost or damaged packages is limited to the declared value or insurance amount (if purchased). We are not liable for consequential or incidental damages.
                  </p>
                  <p className="text-gray-700">
                    <span className="font-semibold">Claims:</span> Claims for lost or damaged packages must be filed within 30 days of the shipment date with supporting documentation.
                  </p>
                </section>

                <hr className="border-gray-200" />

                {/* Disclaimer */}
                <section id="disclaimer">
                  <h2 className="text-3xl font-bold text-navy-900 mb-4">Disclaimer of Warranties</h2>
                  <div className="bg-yellow-50 rounded-lg border border-yellow-200 p-6">
                    <p className="text-yellow-900 text-sm mb-4">
                      ITSX provides services on an "AS IS" and "AS AVAILABLE" basis. We make no warranties, expressed or implied, regarding:
                    </p>
                    <ul className="space-y-2 text-sm text-yellow-900">
                      <li>• Accuracy or completeness of shipping information</li>
                      <li>• Uninterrupted or error-free services</li>
                      <li>• Specific delivery timeframes</li>
                      <li>• Fitness for a particular purpose</li>
                    </ul>
                  </div>
                </section>

                <hr className="border-gray-200" />

                {/* Limitations of Liability */}
                <section id="limitations">
                  <h2 className="text-3xl font-bold text-navy-900 mb-4">Limitations of Liability</h2>
                  <p className="text-gray-700 mb-4">
                    ITSX shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, revenue, data, or use, even if advised of the possibility of such damages.
                  </p>
                  <p className="text-gray-700">
                    Our total liability for any claim shall not exceed the amount you paid for the shipping service.
                  </p>
                </section>

                <hr className="border-gray-200" />

                {/* Modifications */}
                <section id="modifications">
                  <h2 className="text-3xl font-bold text-navy-900 mb-4">Modifications and Discontinuation</h2>
                  <p className="text-gray-700">
                    ITSX reserves the right to modify, suspend, or discontinue services at any time with or without notice. We shall not be liable for any damages arising from such modifications or discontinuations.
                  </p>
                </section>

                <hr className="border-gray-200" />

                {/* Governing Law */}
                <section id="governing">
                  <h2 className="text-3xl font-bold text-navy-900 mb-4">Governing Law and Jurisdiction</h2>
                  <p className="text-gray-700 mb-4">
                    These Terms of Service are governed by and construed in accordance with the laws of the United States, without regard to its conflicts of law principles.
                  </p>
                  <p className="text-gray-700">
                    Any legal action or proceeding arising under these terms shall be exclusively brought in the federal or state courts located in New York, and you consent to the jurisdiction and venue of such courts.
                  </p>
                </section>

                <hr className="border-gray-200" />

                {/* Contact */}
                <section id="contact">
                  <h2 className="text-3xl font-bold text-navy-900 mb-4">Contact Us</h2>
                  <p className="text-gray-700 mb-6">
                    If you have questions about these Terms of Service, please contact us:
                  </p>

                  <div className="bg-gray-50 rounded-lg border border-gray-200 p-6">
                    <p className="text-gray-700 mb-3">
                      <span className="font-bold">Email:</span> info@its-xpress.com
                    </p>
                    <p className="text-gray-700 mb-3">
                      <span className="font-bold">Phone:</span> 1-800-ITSX-001
                    </p>
                    <p className="text-gray-700">
                      <span className="font-bold">Address:</span> Long Island City, NY
                    </p>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* CTA */}
      <Section className="bg-white py-16 sm:py-20">
        <Container>
          <div className="text-center">
            <h2 className="text-3xl font-bold text-navy-900 mb-4">Ready to Ship?</h2>
            <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
              By proceeding, you agree to these terms and conditions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/quote" size="lg">
                Get Started
              </Button>
              <Button href="/contact" variant="outline" size="lg">
                Have Questions?
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </>
  )
}
