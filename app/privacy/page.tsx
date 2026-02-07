import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'

export const metadata = {
  title: 'Privacy Policy - ITSX',
  description: 'ITSX Privacy Policy',
}

export default function PrivacyPage() {
  return (
    <>
      <Section className="bg-gradient-to-r from-blue-50 to-blue-100 py-16">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h1 className="text-5xl font-bold text-blue-900 mb-4">Privacy Policy</h1>
          </div>
        </Container>
      </Section>

      <Section className="py-16">
        <Container>
          <div className="max-w-3xl mx-auto prose prose-sm">
            <h2>Introduction</h2>
            <p>
              ITSX ("we" or "us" or "our") operates the website. This page informs you of our
              policies regarding the collection, use, and disclosure of personal data when you use
              our Service and the choices you have associated with that data.
            </p>

            <h2>Information Collection and Use</h2>
            <p>
              We collect several different types of information for various purposes to provide and
              improve our Service to you.
            </p>

            <h3>Types of Data Collected:</h3>
            <ul>
              <li>Personal Data (name, email address, phone number, address)</li>
              <li>Cookies and Usage Data</li>
              <li>Tracking and Analytics information</li>
            </ul>

            <h2>Use of Data</h2>
            <p>ITSX uses the collected data for various purposes:</p>
            <ul>
              <li>To provide and maintain our Service</li>
              <li>To notify you about changes to our Service</li>
              <li>To provide customer support</li>
              <li>To gather analysis or valuable information to improve our Service</li>
            </ul>

            <h2>Security of Data</h2>
            <p>
              The security of your data is important to us but remember that no method of
              transmission over the Internet or method of electronic storage is 100% secure. While
              we strive to use commercially acceptable means to protect your Personal Data, we
              cannot guarantee its absolute security.
            </p>

            <h2>Changes to This Privacy Policy</h2>
            <p>
              We may update our Privacy Policy from time to time. We will notify you of any changes
              by posting the new Privacy Policy on this page and updating the "effective date" at
              the top of this Privacy Policy.
            </p>

            <h2>Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at
              info@its-xpress.com
            </p>
          </div>
        </Container>
      </Section>
    </>
  )
}
