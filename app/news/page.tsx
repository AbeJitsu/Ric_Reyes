import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { Button } from '@/components/ui/Button'
import { ArrowRight, Calendar, Tag } from 'lucide-react'

export const metadata = {
  title: 'News - ITSX',
  description: 'Latest news and updates from ITSX',
}

const NEWS_ITEMS = [
  {
    date: 'March 2025',
    category: 'Product',
    categoryColor: 'from-blue-500 to-blue-600',
    title: 'ITSX Launches New Tracking Portal',
    excerpt: 'Experience real-time package tracking with our completely redesigned customer portal featuring enhanced analytics and improved user interface.',
    readTime: '5 min read',
  },
  {
    date: 'February 2025',
    category: 'Expansion',
    categoryColor: 'from-emerald-500 to-emerald-600',
    title: 'Expanded Service to 50 New Countries',
    excerpt: 'We are excited to announce service expansion to 50 additional countries worldwide, bringing ITSX logistics to over 270 countries.',
    readTime: '3 min read',
  },
  {
    date: 'January 2025',
    category: 'Milestone',
    categoryColor: 'from-orange-500 to-orange-600',
    title: '100,000 Shipments Milestone Reached',
    excerpt: 'ITSX celebrates the successful delivery of our 100,000th shipment. Thank you to our customers and team for making this possible.',
    readTime: '4 min read',
  },
  {
    date: 'December 2024',
    category: 'Achievement',
    categoryColor: 'from-purple-500 to-purple-600',
    title: 'Holiday Season Success',
    excerpt: 'Record-breaking holiday season delivery rates with 99.5% on-time performance, surpassing our industry-leading standards.',
    readTime: '6 min read',
  },
  {
    date: 'November 2024',
    category: 'Update',
    categoryColor: 'from-pink-500 to-pink-600',
    title: 'New Partnership Strengthens Global Network',
    excerpt: 'Strategic partnership announcement with leading logistics providers in Asia-Pacific region enhances our service capabilities.',
    readTime: '5 min read',
  },
  {
    date: 'October 2024',
    category: 'Sustainability',
    categoryColor: 'from-green-500 to-green-600',
    title: 'Carbon-Neutral Shipping Initiative',
    excerpt: 'Launching our new eco-friendly shipping options allowing customers to offset carbon footprint on international deliveries.',
    readTime: '7 min read',
  },
]

export default function NewsPage() {
  const [featuredArticle, ...otherArticles] = NEWS_ITEMS

  return (
    <>
      {/* Hero */}
      <Section className="bg-white py-16 sm:py-20">
        <Container>
          <div className="text-center mb-12">
            <h1 className="text-5xl sm:text-6xl font-bold text-navy-900 mb-6">ITSX News</h1>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              Stay updated with the latest news, announcements, and insights from ITSX
            </p>
          </div>
        </Container>
      </Section>

      {/* Featured Article */}
      <Section className="bg-gray-50 py-12 sm:py-16">
        <Container>
          <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-lg hover:shadow-2xl transition">
            <div className="grid gap-8 lg:grid-cols-2 items-stretch">
              {/* Image Placeholder */}
              <div className="bg-gradient-to-br from-blue-100 to-blue-200 h-full min-h-96 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">📰</div>
                  <p className="text-gray-600">Featured Article Image</p>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 flex flex-col justify-center">
                <div className="flex items-center gap-4 mb-4 flex-wrap">
                  <div className={`px-3 py-1 rounded-full text-white text-sm font-semibold bg-gradient-to-r ${featuredArticle.categoryColor}`}>
                    {featuredArticle.category}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Calendar size={16} />
                    {featuredArticle.date}
                  </div>
                  <div className="text-sm text-gray-600">{featuredArticle.readTime}</div>
                </div>

                <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 mb-4">{featuredArticle.title}</h2>
                <p className="text-lg text-gray-700 mb-6">{featuredArticle.excerpt}</p>

                <a href="#" className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 group">
                  Read Full Article
                  <ArrowRight className="group-hover:translate-x-1 transition" size={20} />
                </a>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* All Articles Grid */}
      <Section className="bg-white py-16 sm:py-20">
        <Container>
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-navy-900 mb-4">Latest Articles</h2>
            <p className="text-gray-600">More news and updates from ITSX</p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {otherArticles.map((article, index) => (
              <article key={index} className="bg-gray-50 rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col">
                {/* Image Placeholder */}
                <div className="bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg h-48 mb-6 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-4xl mb-2">📄</div>
                    <p className="text-sm text-gray-600">Article Image</p>
                  </div>
                </div>

                {/* Category Badge */}
                <div className="mb-3">
                  <span className={`inline-block px-3 py-1 rounded-full text-white text-xs font-semibold bg-gradient-to-r ${article.categoryColor}`}>
                    {article.category}
                  </span>
                </div>

                {/* Meta */}
                <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                  <div className="flex items-center gap-1">
                    <Calendar size={14} />
                    {article.date}
                  </div>
                  <span>{article.readTime}</span>
                </div>

                {/* Title & Excerpt */}
                <h3 className="text-xl font-bold text-navy-900 mb-3 flex-grow">{article.title}</h3>
                <p className="text-gray-700 mb-6 flex-grow">{article.excerpt}</p>

                {/* Read More Link */}
                <a href="#" className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 group">
                  Read More
                  <ArrowRight className="group-hover:translate-x-1 transition" size={18} />
                </a>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      {/* Newsletter Signup */}
      <Section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16 sm:py-20">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <h2 className="text-4xl sm:text-5xl font-bold mb-4">Stay in the Loop</h2>
              <p className="text-lg text-blue-100 mb-6">
                Get the latest news, updates, and shipping tips delivered straight to your inbox. No spam, just valuable content.
              </p>
              <ul className="space-y-3 text-blue-100">
                <li className="flex items-center gap-3">
                  <span className="h-2 w-2 bg-blue-300 rounded-full" />
                  Weekly shipping insights and tips
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-2 w-2 bg-blue-300 rounded-full" />
                  Exclusive early access to new features
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-2 w-2 bg-blue-300 rounded-full" />
                  Special promotions and offers
                </li>
              </ul>
            </div>

            <div className="bg-white bg-opacity-10 rounded-2xl border border-white border-opacity-20 p-8 backdrop-blur-sm">
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold mb-2">Email Address</label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Name (Optional)</label>
                  <input
                    type="text"
                    placeholder="Your name"
                    className="w-full px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-white text-blue-600 font-semibold py-3 rounded-lg hover:bg-blue-50 transition"
                >
                  Subscribe to Newsletter
                </button>
              </form>
              <p className="text-sm text-blue-100 mt-4 text-center">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </Container>
      </Section>
    </>
  )
}
