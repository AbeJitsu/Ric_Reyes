import { Card } from '@/components/ui/Card'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { Star, Quote } from 'lucide-react'

const TESTIMONIALS = [
  {
    quote: 'ITS-Xpress has transformed how we handle our international logistics. Their service is exceptional and reliable.',
    author: 'John Smith',
    company: 'Global Enterprises Inc.',
    rating: 5,
  },
  {
    quote: 'Fast, reliable, and professional. We trust them with our most critical and time-sensitive shipments.',
    author: 'Sarah Johnson',
    company: 'TechStart Solutions',
    rating: 5,
  },
  {
    quote: 'The tracking system is incredibly detailed and transparent. We always know exactly where our packages are.',
    author: 'Michael Chen',
    company: 'E-Commerce Plus',
    rating: 5,
  },
]

export function Testimonials() {
  return (
    <Section className="bg-gray-50">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-navy-900 mb-4">What Our Customers Say</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Real feedback from businesses we serve
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-3">
          {TESTIMONIALS.map((testimonial, index) => (
            <Card key={index} className="bg-white hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-200 flex flex-col">
              <div className="mb-4 flex gap-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={18} className="fill-blue-400 text-blue-400" />
                ))}
              </div>
              <Quote className="text-blue-300 mb-3" size={32} />
              <p className="text-gray-700 mb-6 italic flex-grow">&quot;{testimonial.quote}&quot;</p>
              <div className="border-t border-gray-200 pt-4">
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
