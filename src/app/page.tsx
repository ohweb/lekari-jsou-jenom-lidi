import { CallToAction } from '@/components/CallToAction'
import { Faqs } from '@/components/Faqs'
import { Hero } from '@/components/Hero'
import { PrimaryFeatures } from '@/components/PrimaryFeatures'
import { Testimonials } from '@/components/Testimonials'
import LatestBlogPosts from '@/components/LatestBlogPosts'
import fs from "fs";

const getPostMetadata = () => {
    const folder = "src/posts/";
    const files = fs.readdirSync(folder)
    const markdownPosts = files.filter((file) => file.endsWith('.md'))
    const slugs = markdownPosts.map((file) => file.replace(".md", ""))
    return slugs
}

export default function Home() {
    const posts = getPostMetadata()
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
