'use client'

import { Container } from '@/components/ui/Container'
import { COMPANY_INFO, NAV_ITEMS } from '@/lib/constants'
import { MapPin, Phone, Mail } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t-2 border-blue-500 bg-gradient-to-r from-blue-900 via-blue-950 to-navy-900 text-white">
      <Container className="py-12 sm:py-16">
        {/* Footer Grid */}
        <div className="grid gap-8 sm:grid-cols-3 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-blue-300">
              {COMPANY_INFO.name}
            </h3>
            <p className="text-blue-100 text-sm mb-6">{COMPANY_INFO.tagline}</p>
            <div className="space-y-4 text-sm">
              <div className="flex gap-3">
                <MapPin className="text-blue-300 flex-shrink-0 mt-0.5" size={18} />
                <p className="text-blue-100">{COMPANY_INFO.address}</p>
              </div>
              <div className="flex gap-3">
                <Phone className="text-blue-300 flex-shrink-0 mt-0.5" size={18} />
                <a href={`tel:${COMPANY_INFO.phone}`} className="text-blue-100 hover:text-blue-200 transition">{COMPANY_INFO.phone}</a>
              </div>
              <div className="flex gap-3">
                <Mail className="text-blue-300 flex-shrink-0 mt-0.5" size={18} />
                <a href={`mailto:${COMPANY_INFO.email}`} className="text-blue-100 hover:text-blue-200 transition">{COMPANY_INFO.email}</a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-blue-300">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="text-blue-100 hover:text-blue-200 transition-colors">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Signup */}
          <div>
            <h4 className="font-semibold mb-4 text-blue-300">Stay Updated</h4>
            <p className="text-blue-100 text-sm mb-4">Get shipping tips and exclusive offers delivered to your inbox.</p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-3 py-2 rounded text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
                aria-label="Email for newsletter"
              />
              <button
                className="px-3 py-2 bg-blue-400 text-blue-900 font-semibold rounded hover:bg-blue-300 transition text-sm"
                aria-label="Subscribe to newsletter"
              >
                Join
              </button>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-blue-800 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-6">
            <p className="text-sm text-blue-300">&copy; {currentYear} {COMPANY_INFO.name}. All rights reserved.</p>
            <div className="flex gap-6 text-sm">
              <a href="/privacy" className="text-blue-100 hover:text-blue-200 transition-colors">
                Privacy Policy
              </a>
              <a href="/terms" className="text-blue-100 hover:text-blue-200 transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  )
}
