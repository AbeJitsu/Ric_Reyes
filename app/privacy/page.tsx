import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { Button } from '@/components/ui/Button'
import { Shield, Lock, Eye } from 'lucide-react'

export const metadata = {
  title: 'Privacy Policy - ITSX',
  description: 'ITSX Privacy Policy - Your data security and privacy',
}

const TABLE_OF_CONTENTS = [
  { title: 'Introduction', id: 'introduction' },
  { title: 'Information Collection', id: 'collection' },
  { title: 'How We Use Your Data', id: 'usage' },
  { title: 'Data Security', id: 'security' },
  { title: 'Your Rights', id: 'rights' },
  { title: 'Changes to Policy', id: 'changes' },
  { title: 'Contact Us', id: 'contact' },
]

export default function PrivacyPage() {
  return (
    <>
      {/* Hero */}
      <Section className="bg-white py-16 sm:py-20">
        <Container>
          <div className="flex items-center gap-4 mb-6">
            <div className="h-14 w-14 rounded-lg bg-blue-100 flex items-center justify-center">
              <Shield className="text-blue-600" size={28} />
            </div>
            <div>
              <p className="text-sm font-semibold text-blue-600 uppercase">Protecting Your Information</p>
              <h1 className="text-5xl sm:text-6xl font-bold text-navy-900">Privacy Policy</h1>
            </div>
          </div>
          <p className="text-lg text-gray-700 max-w-3xl mb-6">
            We are committed to protecting your privacy. This policy explains how ITSX collects, uses, and safeguards your information.
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
                <h3 className="font-bold text-navy-900 mb-4">On This Page</h3>
                <nav className="space-y-2">
                  {TABLE_OF_CONTENTS.map((item) => (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      className="block text-sm text-blue-600 hover:text-blue-700 font-medium"
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
                {/* Introduction */}
                <section id="introduction">
                  <h2 className="text-3xl font-bold text-navy-900 mb-4">Introduction</h2>
                  <p className="text-gray-700 mb-4">
                    ITSX ("we," "us," "our," or "Company") operates the ITSX website. We are committed to protecting your privacy and ensuring you have a positive experience on our website.
                  </p>
                  <p className="text-gray-700">
                    This Privacy Policy explains our practices regarding information collection, use, and disclosure. By accessing and using our website, you agree to the terms of this Privacy Policy. If you do not agree with any part of this policy, please do not use our services.
                  </p>
                </section>

                <hr className="border-gray-200" />

                {/* Information Collection */}
                <section id="collection">
                  <h2 className="text-3xl font-bold text-navy-900 mb-4">Information Collection and Use</h2>
                  <p className="text-gray-700 mb-6">
                    We collect information from you in various ways to provide and improve our services:
                  </p>

                  <div className="bg-blue-50 rounded-lg border border-blue-200 p-6 mb-6">
                    <h3 className="font-bold text-navy-900 mb-4">Types of Data We Collect</h3>
                    <ul className="space-y-3">
                      {[
                        'Personal Data: name, email address, phone number, mailing address',
                        'Shipping Information: package dimensions, weight, contents, destination',
                        'Payment Data: processed securely by third-party providers',
                        'Cookies and Usage Data: how you interact with our website',
                        'Device Information: IP address, browser type, operating system',
                      ].map((item, i) => (
                        <li key={i} className="flex gap-3">
                          <span className="text-blue-600 font-bold">•</span>
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <p className="text-gray-700">
                    We collect this information directly from you when you use our website, place an order, or contact us for support.
                  </p>
                </section>

                <hr className="border-gray-200" />

                {/* Data Usage */}
                <section id="usage">
                  <h2 className="text-3xl font-bold text-navy-900 mb-4">How We Use Your Data</h2>
                  <p className="text-gray-700 mb-6">
                    We use collected information for the following purposes:
                  </p>

                  <div className="grid gap-4 sm:grid-cols-2 mb-6">
                    {[
                      { title: 'Service Provision', desc: 'Process shipments and provide tracking information' },
                      { title: 'Communication', desc: 'Send updates, confirmations, and support responses' },
                      { title: 'Improvement', desc: 'Analyze usage patterns to enhance our services' },
                      { title: 'Legal Compliance', desc: 'Meet regulatory and legal requirements' },
                    ].map((item, i) => (
                      <div key={i} className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                        <h4 className="font-bold text-navy-900 mb-2">{item.title}</h4>
                        <p className="text-sm text-gray-700">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </section>

                <hr className="border-gray-200" />

                {/* Security */}
                <section id="security">
                  <h2 className="text-3xl font-bold text-navy-900 mb-4">Data Security</h2>
                  <p className="text-gray-700 mb-4">
                    The security of your personal data is extremely important to us. We implement comprehensive security measures to protect your information:
                  </p>

                  <div className="bg-yellow-50 rounded-lg border border-yellow-200 p-6 mb-6">
                    <h4 className="font-bold text-yellow-900 mb-3">Important Note</h4>
                    <p className="text-sm text-yellow-900">
                      No method of transmission over the Internet or electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your data, we cannot guarantee absolute security. You use our services at your own risk.
                    </p>
                  </div>

                  <p className="text-gray-700">
                    We use industry-standard encryption, secure server protocols, and limited access controls to safeguard your information.
                  </p>
                </section>

                <hr className="border-gray-200" />

                {/* Rights */}
                <section id="rights">
                  <h2 className="text-3xl font-bold text-navy-900 mb-4">Your Privacy Rights</h2>
                  <p className="text-gray-700 mb-6">
                    Depending on your location, you may have the following rights:
                  </p>

                  <ul className="space-y-3">
                    {[
                      'Access: Request a copy of your personal data we hold',
                      'Correction: Request correction of inaccurate or incomplete data',
                      'Deletion: Request deletion of your data (right to be forgotten)',
                      'Opt-out: Unsubscribe from marketing communications',
                      'Portability: Receive your data in a portable format',
                    ].map((item, i) => (
                      <li key={i} className="flex gap-3">
                        <span className="text-blue-600 font-bold">✓</span>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>

                  <p className="text-gray-700 mt-6">
                    To exercise these rights, please contact us at info@its-xpress.com with your request.
                  </p>
                </section>

                <hr className="border-gray-200" />

                {/* Changes */}
                <section id="changes">
                  <h2 className="text-3xl font-bold text-navy-900 mb-4">Changes to This Policy</h2>
                  <p className="text-gray-700">
                    We may update this Privacy Policy from time to time to reflect changes in our practices, technology, or legal requirements. We will notify you of material changes by posting the updated policy on this page and updating the "Last Updated" date. Your continued use of our services constitutes your acceptance of the revised policy.
                  </p>
                </section>

                <hr className="border-gray-200" />

                {/* Contact */}
                <section id="contact">
                  <h2 className="text-3xl font-bold text-navy-900 mb-4">Contact Us</h2>
                  <p className="text-gray-700 mb-6">
                    If you have questions or concerns about this Privacy Policy, please contact us:
                  </p>

                  <div className="bg-blue-50 rounded-lg border border-blue-200 p-6">
                    <p className="text-gray-700 mb-3">
                      <span className="font-bold">Email:</span> info@its-xpress.com
                    </p>
                    <p className="text-gray-700 mb-3">
                      <span className="font-bold">Phone:</span> {process.env.COMPANY_PHONE || '1-800-ITSX-001'}
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
            <h2 className="text-3xl font-bold text-navy-900 mb-4">Questions About Your Privacy?</h2>
            <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
              Our support team is here to help with any privacy-related questions or concerns
            </p>
            <Button href="/contact" size="lg">
              Contact Our Team
            </Button>
          </div>
        </Container>
      </Section>
    </>
  )
}
