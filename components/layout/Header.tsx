'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { NAV_ITEMS } from '@/lib/constants'

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white shadow-lg border-b-2 border-gradient-to-r from-blue-500 to-blue-700">
      <Container className="flex items-center justify-between py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="text-2xl font-bold text-blue-600">ITSX</div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-gray-700 hover:text-primary-500 transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* CTA Buttons - Desktop */}
        <div className="hidden gap-3 sm:flex">
          <Button href="/tracking" variant="outline" size="sm">
            Track
          </Button>
          <Button href="/quote" size="sm">
            Get Quote
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700 hover:text-primary-500"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </Container>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="border-t border-gray-200 bg-white md:hidden">
          <Container className="py-4 space-y-4">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block text-gray-700 hover:text-primary-500 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <div className="border-t border-gray-200 pt-4 space-y-2">
              <Button href="/tracking" variant="outline" className="w-full">
                Track Package
              </Button>
              <Button href="/quote" className="w-full">
                Get Quote
              </Button>
            </div>
          </Container>
        </div>
      )}
    </header>
  )
}
