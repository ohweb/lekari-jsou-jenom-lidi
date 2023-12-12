import { Container } from '@/components/Container'
import React from 'react'
import Image from 'next/image'
import mediaOutputs from '@/app/medialni-vystupy/media-outputs-press'
import { Metadata } from 'next'

function QuoteIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    // biome-ignore lint/a11y/noSvgWithoutTitle: Quote sign on background is aria-hidden anyway.
    <svg aria-hidden="true" width={105} height={78} {...props}>
      <path d="M25.086 77.292c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622C1.054 58.534 0 53.411 0 47.686c0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C28.325 3.917 33.599 1.507 39.324 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Zm54.24 0c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622-2.11-4.52-3.164-9.643-3.164-15.368 0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C82.565 3.917 87.839 1.507 93.564 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Z" />
    </svg>
  )
}

export const metadata: Metadata = {
  title: 'Mediální výstupy',
  description:
    'Souhrn článků a videí v online médiích, kde se můžete setkat s tématy, která řešíme v rámci akce Lékaři jsou jenom lidi.',
}

export default function MedialniVystupyPage() {
  const sortedMediaOutputs = mediaOutputs.sort((a, b) => {
    return b.date.getTime() - a.date.getTime()
  })
  return (
    <main>
      <section
        id="testimonials"
        aria-label="What our customers are saying"
        className="bg-slate-50 py-20 sm:py-32"
      >
        <Container>
          <div className="mx-auto max-w-2xl md:text-center">
            <h2 className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl">
              Mediální výstupy
            </h2>
            <p className="mt-4 text-lg tracking-tight text-slate-700">
              Souhrn článků a videí na internetu, kde se můžete setkat s tématy
              která řešíme.
            </p>
          </div>
          <ul className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:gap-8 lg:mt-20 lg:max-w-none lg:grid-cols-2">
            {sortedMediaOutputs.map((mediaArticle, mediaArticleIndex) => (
              // biome-ignore lint/suspicious/noArrayIndexKey: loaded staticaly, index can't change
              <li key={mediaArticleIndex} className="">
                <a href={mediaArticle.link} target="_blank" rel="noreferrer">
                  <figure className="relative rounded-2xl bg-white p-6 shadow-xl shadow-slate-900/10">
                    <QuoteIcon className="absolute left-6 top-6 fill-slate-100" />
                    <figcaption className="relative flex items-center justify-between">
                      <div className="max-w-sm">
                        <div className="font-display text-base text-slate-900">
                          {mediaArticle.title}
                        </div>
                        <div className="mt-1 text-sm text-slate-500">
                          {mediaArticle.date.toLocaleDateString('cs-CZ', {
                            day: 'numeric',
                            month: 'numeric',
                            year: 'numeric',
                          })}
                          &nbsp;-&nbsp;
                          {mediaArticle.source.name}
                        </div>
                      </div>
                      <div className="overflow-hidden rounded-full bg-slate-50">
                        <Image
                          className="h-14 w-14 object-cover"
                          src={mediaArticle.source.image}
                          alt={`logo ${mediaArticle.source.name}`}
                          width={56}
                          height={56}
                        />
                      </div>
                    </figcaption>
                    <blockquote className="relative mt-6 border-t border-slate-100 pt-6">
                      <p className="line-clamp-5 text-lg tracking-tight text-slate-900">
                        {mediaArticle.perex}
                      </p>
                    </blockquote>
                  </figure>
                </a>
              </li>
            ))}
          </ul>
        </Container>
      </section>
    </main>
  )
}
