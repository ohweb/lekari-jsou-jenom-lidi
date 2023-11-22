// Generic standin interface for Next PageProps
// @see https://github.com/vercel/next.js/discussions/46131#discussioncomment-7163420
export interface NextPageProps<SlugType = string> {
  params: { slug: SlugType }
  searchParams?: { [key: string]: string | string[] | undefined }
}
