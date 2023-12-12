import { type Metadata } from 'next'
import getPostMetadata from '@/components/Posts/getPostMetadata'
import { Container } from '@/components/Container'
import { FeaturedPosts } from '@/app/aktuality/FeaturedPosts'

export const metadata: Metadata = {
  title: 'Aktuality',
  description:
    'Informace o aktuálním dění okolo protestní akce Lékaři jsou jenom lidi. Novinky z jednání, stanoviska a oficiální prohlášení Sekce mladých lékařů ČLK.',
}

export default function AktualityPage() {
  const posts = getPostMetadata()
  const featuredPost = posts.shift()
  const secondAndThirdPost = posts.splice(0, 2)

  return (
    <main>
      <section
        id="aktuality"
        aria-label="Seznam aktualit, článků o aktuálním dění okolo protestní akce Lékaři jsou jenom lidi."
        className="bg-white py-20 sm:py-32"
      >
        <Container>
          <div className="mx-auto max-w-2xl md:text-center">
            <h2 className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl">
              Aktuality
            </h2>
            <p className="mt-4 text-lg tracking-tight text-slate-700">
              Informace o aktuálním dění okolo protestní akce Lékaři jsou jenom
              lidi. Novinky z jednání, stanoviska a oficiální prohlášení Sekce
              mladých lékařů ČLK.
            </p>
          </div>
        </Container>
        <Container>
          <div className="mx-auto mt-16 grid max-w-7xl grid-cols-1 gap-x-8 gap-y-12 px-6 sm:gap-y-16 lg:grid-cols-2 lg:px-8">
            {featuredPost !== undefined && (
              <FeaturedPosts
                featuredPost={featuredPost}
                secondaryPosts={secondAndThirdPost}
              />
            )}
          </div>
        </Container>
        <Container>
          <div className="mx-auto max-w-2xl">
            <div className="mt-10 space-y-16 pt-10 sm:mt-16 sm:pt-16">
              {posts.map((post) => (
                <article
                  key={post.slug}
                  className="flex max-w-xl flex-col items-start justify-between"
                >
                  <div className="flex items-center gap-x-4 text-xs">
                    <time
                      dateTime={post.date.toString()}
                      className="text-gray-500"
                    >
                      {post.date.toLocaleDateString('cs-CZ', {
                        day: 'numeric',
                        month: 'long',
                        year: 'numeric',
                      })}
                    </time>
                  </div>
                  <div className="group relative">
                    <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                      <a
                        href={`/aktuality/${post.slug}`}
                        className={'group-hover:underline'}
                      >
                        <span className="absolute inset-0" />
                        {post.title}
                      </a>
                    </h3>
                    <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                      {post.perex}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </main>
  )
}
