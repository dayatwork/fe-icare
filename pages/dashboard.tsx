import Layout from '@/components/Layout'

export default function Dashboard() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl px-4 mx-auto py-14">
        <h1 className="text-4xl mb-10">Dashboard</h1>
      </div>
    </div>
  )
}

Dashboard.getLayout = function getLayout(page: JSX.Element) {
  return (
    <Layout className="flex flex-col justify-between min-h-screen bg-white">
      {page}
    </Layout>
  )
}
