import Layout from '@/components/Layout'

export default function About() {
  return (
    <section className="bg-limeade py-20">
      <h1 className="text-4xl text-white mb-4 text-center">About i-Care</h1>
      <p className="text-white text-center text-lg">
        Intelligent Clinical Assessment Rehabilitation and Enrinchment (i-Care)
      </p>
    </section>
  )
}

About.getLayout = function getLayout(page: JSX.Element) {
  return (
    <Layout className="flex flex-col justify-between min-h-screen bg-white">
      {page}
    </Layout>
  )
}
