import { PostMetadata } from '@/components/Posts/PostMetadata'

const PostPreview = ({ post }: { post: PostMetadata }) => {
  return (
    <article className="py-12">
      <div className="group relative max-w-xl">
        <time
          dateTime={post.date.toString()}
          className="block text-sm leading-6 text-gray-600"
        >
          {post.date.toLocaleDateString('cs-CZ', {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
          })}
        </time>
        <h2 className="mt-2 text-lg font-semibold text-gray-900 group-hover:text-gray-600">
          <a
            href={`/aktuality/${post.slug}`}
            className={'group-hover:underline'}
          >
            <span className="absolute inset-0" />
            {post.title}
          </a>
        </h2>
        <p className="mt-4 text-sm leading-6 text-gray-600">{post.perex}</p>
      </div>
    </article>
  )
}
export default PostPreview
