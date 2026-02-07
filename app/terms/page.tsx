import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'

export const metadata = {
  title: 'Terms of Service - ITSX',
  description: 'ITSX Terms of Service',
}

export default function TermsPage() {
  return (
    <>
      <Section className="bg-gradient-to-r from-blue-50 to-blue-100 py-16">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h1 className="text-5xl font-bold text-blue-900 mb-4">Terms of Service</h1>
          </div>
        </Container>
      </Section>

      <Section className="py-16">
        <Container>
          <div className="max-w-3xl mx-auto prose prose-sm">
            <h2>Agreement to Terms</h2>
            <p>
              These Terms of Service constitute a legally binding agreement made between you, whether
              personally or on behalf of an entity, and ITSX regarding your use of the website.
            </p>

            <h2>Use License</h2>
            <p>
              Permission is granted to temporarily download one copy of the materials (information or
              software) on ITSX website for personal, non-commercial transitory viewing only. This is
              the grant of a license, not a transfer of title, and under this license you may not:
            </p>
            <ul>
              <li>Modifying or copying the materials</li>
              <li>Using the materials for any commercial purpose or for any public display</li>
              <li>Attempting to decompile or reverse engineer any software contained on the website</li>
              <li>Removing any copyright or other proprietary notations from the materials</li>
              <li>Transferring the materials to another person or "mirroring" the materials on another server</li>
            </ul>

            <h2>Disclaimer</h2>
            <p>
              The materials on ITSX website are provided on an 'as is' basis. ITSX makes no warranties,
              expressed or implied, and hereby disclaims and negates all other warranties including,
              without limitation, implied warranties or conditions of merchantability, fitness for a
              particular purpose, or non-infringement of intellectual property or other violation of rights.
            </p>

            <h2>Limitations</h2>
            <p>
              In no event shall ITSX or its suppliers be liable for any damages (including, without
              limitation, damages for loss of data or profit, or due to business interruption) arising out
              of the use or inability to use the materials on ITSX website.
            </p>

            <h2>Accuracy of Materials</h2>
            <p>
              The materials appearing on ITSX website could include technical, typographical, or
              photographic errors. ITSX does not warrant that any of the materials on the website are
              accurate, complete, or current.
            </p>

            <h2>Links</h2>
            <p>
              ITSX has not reviewed all of the sites linked to its website and is not responsible for
              the contents of any such linked site. The inclusion of any link does not imply endorsement
              by ITSX of the site. Use of any such linked website is at the user's own risk.
            </p>

            <h2>Modifications</h2>
            <p>
              ITSX may revise these Terms of Service for the website at any time without notice. By using
              this website, you are agreeing to be bound by the then current version of these Terms of Service.
            </p>

            <h2>Governing Law</h2>
            <p>
              These Terms of Service and any separate agreements we provide to clarify its Terms of Service
              are governed by and construed in accordance with the laws of the United States.
            </p>

            <h2>Contact Us</h2>
            <p>
              If you have any questions about these Terms of Service, please contact us at
              info@its-xpress.com
            </p>
          </div>
        </Container>
      </Section>
    </>
  )
}
