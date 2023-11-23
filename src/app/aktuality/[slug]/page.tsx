import fs from 'fs'
import Markdown from 'markdown-to-jsx'
import matter from 'gray-matter'
import getPostMetadata from '@/components/Posts/getPostMetadata'
import React from 'react'
import { NextPageProps } from '@/libs/NextPageProps'
import Image from 'next/image'
import backgroundImage from '@/images/background-faqs.jpg'
import { Container } from '@/components/Container'

const getPostContent = (slug: string) => {
  const folder = 'posts/'
  const file = `${folder}${slug}.md`
  const content = fs.readFileSync(file, 'utf-8')
  return matter(content)
}

export const generateStaticParams = async () => {
  const posts = getPostMetadata()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export default function PostPage(props: NextPageProps) {
  const slug = props.params.slug
  const post = getPostContent(slug)

  return (
    <section
      id="single-article"
      aria-labelledby="article-title"
      className="relative py-20 sm:py-32"
    >
      <Container className="relative">
        <div className="mx-auto max-w-3xl text-base leading-7 text-gray-700">
          <div className="md:text-center">
            <h2
              id="article-title"
              className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl"
            >
              {post.data.title}
            </h2>
            <h3 className="text-lg">
              <time
                dateTime={post.data.date.toString()}
                className="text-gray-500"
              >
                {post.data.date.toLocaleDateString('cs-CZ', {
                  day: 'numeric',
                  month: 'long',
                  year: 'numeric',
                })}
              </time>
            </h3>
            <p className="mt-4 text-xl tracking-tight text-slate-700">
              {post.data.perex}
            </p>
          </div>

          <div className="mt-16 text-justify">
            <Markdown className="prose max-w-3xl">{post.content}</Markdown>
          </div>
        </div>
      </Container>
    </section>
  )
}
