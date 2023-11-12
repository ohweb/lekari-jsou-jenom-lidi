import { CallToAction } from '@/components/CallToAction'
import { Faqs } from '@/components/Faqs'
import { Hero } from '@/components/Hero'
import { PrimaryFeatures } from '@/components/PrimaryFeatures'
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
