import { Card } from '@/components/ui/Card'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { Star } from 'lucide-react'

const TESTIMONIALS = [
  {
    quote: 'ITS-Xpress has transformed how we handle our international logistics. Their service is exceptional and reliable.',
    author: 'John Smith',
    company: 'Global Enterprises Inc.',
  },
  {
    quote: 'Fast, reliable, and professional. We trust them with our most critical and time-sensitive shipments.',
    author: 'Sarah Johnson',
    company: 'TechStart Solutions',
  },
  {
    quote: 'The tracking system is incredibly detailed and transparent. We always know exactly where our packages are.',
    author: 'Michael Chen',
    company: 'E-Commerce Plus',
  },
]

export function Testimonials() {
  return (
    <Section className="bg-gradient-to-b from-blue-50 to-white">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-blue-900 to-blue-600 bg-clip-text text-transparent mb-4">What Our Customers Say</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Real feedback from businesses we serve
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-3">
          {TESTIMONIALS.map((testimonial, index) => (
            <Card key={index} className="bg-white hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-blue-100">
              <div className="mb-4 flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} className="fill-blue-400 text-blue-400" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">&quot;{testimonial.quote}&quot;</p>
              <div>
                <p className="font-semibold text-navy-900">{testimonial.author}</p>
                <p className="text-sm text-gray-600">{testimonial.company}</p>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  )
}
