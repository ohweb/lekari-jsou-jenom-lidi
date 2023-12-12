import { PostMetadata } from '@/components/Posts/PostMetadata'
import PostPreview from '@/components/Posts/PostPreview'

export function FeaturedPosts({
  featuredPost,
  secondaryPosts,
}: {
  featuredPost: PostMetadata
  secondaryPosts: PostMetadata[]
}) {
  return (
    <>
      <article className="mx-auto w-full max-w-2xl lg:mx-0 lg:max-w-lg">
        <time
          dateTime={featuredPost.date.toString()}
          className="block text-sm leading-6 text-gray-600"
        >
          {featuredPost.date.toLocaleDateString('cs-CZ', {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
          })}
        </time>
        <h2
          id="featured-post"
          className="mt-4 font-display text-3xl tracking-tight text-gray-900 sm:text-4xl"
        >
          <a href={`/aktuality/${featuredPost.slug}`}>{featuredPost.title}</a>
        </h2>
        <p className="mt-4 text-lg leading-8 text-gray-600">
          {featuredPost.perex}
        </p>
        <div className="mt-4 flex flex-col justify-between gap-6 sm:mt-8 sm:flex-row-reverse sm:gap-8 lg:mt-4 lg:flex-col">
          <div className="flex">
            <a
              href={`/aktuality/${featuredPost.slug}`}
              className="text-sm font-semibold leading-6 text-cyan-500"
              aria-describedby="featured-post"
            >
              Pokračovat ve čtení <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div>
      </article>
      <div className="mx-auto w-full max-w-2xl border-t border-gray-900/10 pt-12 sm:pt-16 lg:mx-0 lg:max-w-none lg:border-t-0 lg:pt-0">
        <div className="-my-12 divide-y divide-gray-900/10">
          {secondaryPosts.map((post) => (
            <PostPreview post={post} key={post.slug} />
          ))}
        </div>
      </div>
    </>
  )
}
