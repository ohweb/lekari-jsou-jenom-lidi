import fs from "fs"

const getPostContent = (slug: string) => {
    const folder =     "src/posts/"
    const file = `${folder}${slug}.md`
    const content = fs.readFileSync(file, "utf-8")
    return content
}

export default function AktualitaPage(props: any) {

    const slug = props.params.slug
    const content = getPostContent(slug)

    return (
        <>
            <div className="bg-white px-6 py-32 lg:px-8">
                <div className="mx-auto max-w-3xl text-base leading-7 text-gray-700">
                    <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Post title</h1>
                    <p className="mt-6 text-xl leading-8">
                        Post content
                    </p>
                    <div className="mt-10 max-w-2xl">
                        <p>
                            {content}
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}
