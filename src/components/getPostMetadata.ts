import {PostMetadata} from "@/components/PostMetadata";
import fs from "fs";
import matter from "gray-matter";

const getPostMetadata = (): PostMetadata[] => {
    const folder = "posts/";
    const files = fs.readdirSync(folder)
    const markdownPosts = files.filter((file) => file.endsWith('.md'))

    return markdownPosts.map((fileName) => {
        const fileContents = fs.readFileSync(`${folder}${fileName}`, 'utf-8')
        const matterResult = matter(fileContents)
        return {
            title: matterResult.data.title,
            perex: matterResult.data.perex,
            date: matterResult.data.date,
            slug: fileName.replace('.md', '')
        }
    })
}

export default getPostMetadata
