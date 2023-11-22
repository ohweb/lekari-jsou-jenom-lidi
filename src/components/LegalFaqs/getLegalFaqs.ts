import fs from "fs";
import matter from "gray-matter";

const getLegalFaqs = () => {
    const folder = "src/app/pravni-poradna/";
    const files = fs.readdirSync(folder)
    const markdownFiles = files.filter((file) => file.endsWith('.md'))
    const matterFiles: matter.GrayMatterFile<string>[] = []
    markdownFiles.map((oneMarkdown) => {
        const content = fs.readFileSync(`${folder}/${oneMarkdown}`, "utf-8")
        matterFiles.push(matter(content))
    })
    return matterFiles
}

export default getLegalFaqs
