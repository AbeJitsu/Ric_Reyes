import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'

export const metadata = {
  title: 'News - ITSX',
  description: 'Latest news and updates from ITSX',
}

const NEWS_ITEMS = [
  {
    date: 'March 2025',
    title: 'ITSX Launches New Tracking Portal',
    excerpt: 'Experience real-time package tracking with our completely redesigned customer portal.',
  },
  {
    date: 'February 2025',
    title: 'Expanded Service to 50 New Countries',
    excerpt: 'We are excited to announce service expansion to 50 additional countries worldwide.',
  },
  {
    date: 'January 2025',
    title: '100,000 Shipments Milestone Reached',
    excerpt: 'ITSX celebrates the successful delivery of our 100,000th shipment.',
  },
  {
    date: 'December 2024',
    title: 'Holiday Season Success',
    excerpt: 'Record-breaking holiday season delivery rates with 99.5% on-time performance.',
  },
]

export default function NewsPage() {
  return (
    <>
      <Section className="bg-gradient-to-r from-blue-50 to-blue-100 py-16">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-blue-900 mb-4">ITSX News</h1>
            <p className="text-xl text-gray-700">
              Stay updated with the latest news and announcements
            </p>
          </div>
        </Container>
      </Section>

      <Section className="py-16">
        <Container>
          <div className="max-w-3xl mx-auto">
            {NEWS_ITEMS.map((item, index) => (
              <article key={index} className="mb-8 pb-8 border-b border-gray-200 last:border-0">
                <div className="text-sm font-semibold text-blue-600 mb-2">{item.date}</div>
                <h2 className="text-2xl font-bold text-gray-900 mb-3">{item.title}</h2>
                <p className="text-gray-600 mb-4">{item.excerpt}</p>
                <a href="#" className="text-blue-600 font-semibold hover:text-blue-700">
                  Read More →
                </a>
              </article>
            ))}
          </div>
        </Container>
      </Section>
    </>
  )
}
