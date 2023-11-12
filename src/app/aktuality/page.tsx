import { type Metadata } from 'next'
import fs from "fs"

export const metadata: Metadata = {
  title: 'Aktuality',
}

const getPostMetadata = () => {
    const folder = "src/posts/";
    const files = fs.readdirSync(folder)
    const markdownPosts = files.filter((file) => file.endsWith('.md'))
    const slugs = markdownPosts.map((file) => file.replace(".md", ""))
    return slugs
}

export default function AktualityPage() {
    const posts = getPostMetadata()
  return (
    <>
      <main>
          <div className="bg-white py-24 sm:py-32">
              <div className="mx-auto max-w-7xl px-6 lg:px-8">
                  <div className="mx-auto max-w-2xl">
                      <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Aktuality</h2>
                      <p className="mt-2 text-lg leading-8 text-gray-600">
                          Aktuální dění okolo naší akce Lékaři jsou jenom lidi
                      </p>
                      <div className="mt-10 space-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16">
                          {posts.map((post) => (
                              <article key={post} className="flex max-w-xl flex-col items-start justify-between">
                                  <div className="flex items-center gap-x-4 text-xs">
                                      <time dateTime={post} className="text-gray-500">
                                          {post}
                                      </time>
                                  </div>
                                  <div className="group relative">
                                      <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                                          <a href={`/aktuality/${post}`}>
                                              <span className="absolute inset-0" />
                                              {post}
                                          </a>
                                      </h3>
                                      <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{post}</p>
                                  </div>
                              </article>
                          ))}
                      </div>
                  </div>
              </div>
          </div>
      </main>
    </>
  )
}
