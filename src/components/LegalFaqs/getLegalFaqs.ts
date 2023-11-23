import fs from 'fs'
import matter from 'gray-matter'

const getLegalFaqs = () => {
  const folder = 'src/app/pravni-poradna/'
  const files = fs.readdirSync(folder)
  const markdownFiles = files.filter((file) => file.endsWith('.md'))
  const matterFiles: matter.GrayMatterFile<string>[] = []
  markdownFiles.map((oneMarkdown) => {
    const content = fs.readFileSync(`${folder}/${oneMarkdown}`, 'utf-8')
    matterFiles.push(matter(content))
  })

  // as per request from @marie.svobodova we are ordering from the newest to the oldest
  return matterFiles.sort((a, b) => {
    return b.data.id - a.data.id
  })
}

export default getLegalFaqs
