import { type Metadata } from 'next'
import { CallToAction } from '@/components/CallToAction'
import { Faqs } from '@/components/Faqs'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Pricing } from '@/components/Pricing'
import { PrimaryFeatures } from '@/components/PrimaryFeatures'
import { SecondaryFeatures } from '@/components/SecondaryFeatures'
import { Testimonials } from '@/components/Testimonials'

export const metadata: Metadata = {
  title: 'Aktuality',
}

export default function AktualityPage() {
  return (
    <>
    <Header />
    <main>
      <PrimaryFeatures />
      <SecondaryFeatures />
      <CallToAction />
      <Testimonials />
      <Pricing />
      <Faqs />
    </main>
    <Footer />
    </>
  )
}
