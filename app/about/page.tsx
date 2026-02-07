import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'

export const metadata = {
  title: 'About Us - ITS-Xpress',
  description: 'Learn about ITS-Xpress and our commitment to global logistics excellence',
}

export default function AboutPage() {
  return (
    <>
      <Section className="bg-gradient-to-br from-blue-50 via-blue-100 to-white py-20 sm:py-24">
        <Container>
          <h1 className="text-5xl sm:text-6xl font-bold bg-gradient-to-r from-blue-900 to-blue-600 bg-clip-text text-transparent mb-6">About ITSX</h1>
          <p className="text-lg text-gray-700 max-w-3xl">
            ITSX is a trusted partner in global logistics based in Long Island City, NY, delivering packages worldwide with unmatched reliability and care.
          </p>
        </Container>
      </Section>

      <Section className="bg-gradient-to-b from-white to-blue-50">
        <Container>
          <div className="grid gap-12 sm:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-900 to-blue-600 bg-clip-text text-transparent mb-4">Our Story</h2>
              <p className="text-gray-700 mb-4">
                ITSX began with a simple mission: to make international shipping accessible, affordable, and reliable for businesses of all sizes.
              </p>
              <p className="text-gray-700">
                Today, we serve thousands of customers worldwide, from small e-commerce businesses to multinational enterprises, with our headquarters in Long Island City, NY.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-900 to-blue-600 bg-clip-text text-transparent mb-4">Our Mission</h2>
              <p className="text-gray-700 mb-4">
                We&apos;re committed to delivering excellence in every shipment. Whether it&apos;s a single package or a container full, our team works to ensure it arrives safely and on time.
              </p>
              <p className="text-gray-700">
                Transparency, reliability, and customer-first service are at the heart of everything we do.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <Container>
          <h2 className="text-3xl font-bold mb-8 text-center">Our Values</h2>
          <div className="grid gap-8 sm:grid-cols-3">
            {[
              { title: 'Reliability', desc: 'On-time, every time' },
              { title: 'Transparency', desc: 'Real-time tracking and clear pricing' },
              { title: 'Excellence', desc: 'Quality service in every interaction' },
            ].map((value) => (
              <div key={value.title} className="text-center bg-white bg-opacity-10 rounded-lg p-6 backdrop-blur-sm">
                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                <p className="text-blue-100">{value.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>
    </>
  )
}
