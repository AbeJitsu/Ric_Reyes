import { Hero } from '@/components/home/Hero'
import { Services } from '@/components/home/Services'
import { TrustIndicators } from '@/components/home/TrustIndicators'
import { Testimonials } from '@/components/home/Testimonials'
import { ContactCTA } from '@/components/home/ContactCTA'

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <TrustIndicators />
      <Testimonials />
      <ContactCTA />
    </>
  )
}
