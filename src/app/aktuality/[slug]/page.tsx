import fs from 'fs'
import Markdown from "markdown-to-jsx"
import matter from "gray-matter"
import getPostMetadata from "@/components/Posts/getPostMetadata";

const getPostContent = (slug: string) => {
    const folder =     "posts/"
    const file = `${folder}${slug}.md`
    const content = fs.readFileSync(file, "utf-8")
    const matterResult = matter(content)
    return matterResult
}

export const generateStaticParams = async () => {
    const posts = getPostMetadata()
    return posts.map((post)=> ({
        slug: post.slug
    }))
}

export default function PostPage(props: any) {

    const slug = props.params.slug
    const post = getPostContent(slug)

    return (
        <>
            <div className="bg-white px-6 py-32 lg:px-8">
                <div className="mx-auto max-w-3xl text-base leading-7 text-gray-700">
                    <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{post.data.title}</h1>
                    <p className="mt-6 text-xl leading-8">
                        {post.data.perex}
                    </p>
                    <div className="mt-10 max-w-2xl">
                        <article className="prose lg:prose-xl">
                            <Markdown>{post.content}</Markdown>
                        </article>
                    </div>
                </div>
            </div>
        </>
    )
}
