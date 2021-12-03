import Layout from '@/components/Layout'

export default function MemberBenefit() {
  return (
    <section className="bg-white">
      <div className="bg-limeade py-10">
        <h1 className="text-4xl text-white mb-4 text-center">Member Benefit</h1>
      </div>
    </section>
  )
}

MemberBenefit.getLayout = function getLayout(page: JSX.Element) {
  return (
    <Layout className="flex flex-col justify-between min-h-screen bg-white">
      {page}
    </Layout>
  )
}
