import { Container } from '@/components/Container'
import getPostMetadata from '@/components/Posts/getPostMetadata'
import { FeaturedPosts } from '@/app/aktuality/FeaturedPosts'

export default function LatestBlogPosts() {
  const posts = getPostMetadata(3)
  const featuredPost = posts.shift()

  return (
    <section
      id="aktuality"
      aria-label="Nejnovější aktuality"
      className="bg-white pb-20 sm:pb-32"
    >
      <Container>
        <div className="mx-auto mt-16 grid max-w-7xl grid-cols-1 gap-x-8 gap-y-12 px-6 sm:gap-y-16 lg:grid-cols-2 lg:px-8">
          {featuredPost !== undefined && (
            <FeaturedPosts featuredPost={featuredPost} secondaryPosts={posts} />
          )}
        </div>
      </Container>
    </section>
  )
}
