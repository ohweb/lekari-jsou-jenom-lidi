import { PostMetadata } from '@/components/Posts/PostMetadata'
import fs from 'fs'
import matter from 'gray-matter'

const getPostMetadata = (limit: number = 0): PostMetadata[] => {
  const folder = 'posts/'
  const files = fs.readdirSync(folder)
  const markdownPosts = files.filter((file) => file.endsWith('.md'))

  const metadata = markdownPosts.map((fileName) => {
    const fileContents = fs.readFileSync(`${folder}${fileName}`, 'utf-8')
    const matterResult = matter(fileContents)
    return {
      title: matterResult.data.title,
      perex: matterResult.data.perex,
      date: matterResult.data.date,
      slug: fileName.replace('.md', ''),
    }
  })
  metadata.sort((a, b) => {
    return b.date.getTime() - a.date.getTime()
  })

  return limit > 0 ? metadata.splice(0, limit) : metadata
}

export default getPostMetadata
