import { CallToAction } from '@/components/CallToAction'
import { Faqs } from '@/components/Faqs'
import { Hero } from '@/components/Hero'
import { Pricing } from '@/components/Pricing'
import { PrimaryFeatures } from '@/components/PrimaryFeatures'
import { SecondaryFeatures } from '@/components/SecondaryFeatures'
import { Testimonials } from '@/components/Testimonials'
import LatestBlogPosts from '@/components/LatestBlogPosts'

export default function Home() {
  return (
    <main>
      <Hero />
      <LatestBlogPosts/>
      <PrimaryFeatures />
      <CallToAction />
      <Testimonials />
      <Faqs />
    </main>
  )
}
