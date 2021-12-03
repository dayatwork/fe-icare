/* eslint-disable @next/next/no-img-element */
import useSWR from 'swr'
import { useRouter } from 'next/router'

import Layout from '@/components/Layout'
import { News } from 'mock-data'
import { fetcher } from 'utils'

export default function NewsPage() {
  const router = useRouter()
  const { data } = useSWR<News>(
    () => router.query.id && `/api/news/${router.query.id}`,
    fetcher
  )
  console.log({ data })
  return (
    <div className="max-w-3xl mx-auto py-10 px-6">
      <h1 className="text-6xl font-semibold text-center mb-10">
        {data?.title}
      </h1>
      <p className="text-lg text-center mb-4">{data?.review}</p>
      <img src={data?.image} alt={data?.title} className="mb-8" />
      {data?.body ? (
        <div
          className="prose lg:prose-lg mx-auto"
          dangerouslySetInnerHTML={{ __html: data?.body }}
        ></div>
      ) : null}
    </div>
  )
}

NewsPage.getLayout = function getLayout(page: JSX.Element) {
  return (
    <Layout className="flex flex-col justify-between min-h-screen bg-white">
      {page}
    </Layout>
  )
}
