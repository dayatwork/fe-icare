import Layout from '@/components/Layout'

export default function About() {
  return (
    <div className="bg-[#DEB6AD] py-20">
      <h1 className="text-4xl text-white mb-4 text-center">About Us</h1>
      <p className="text-white text-center text-lg">
        Intelligent Clinical Assessment Rehabilitation and Enrinchment (i-Care)
      </p>
    </div>
  )
}

About.getLayout = function getLayout(page: JSX.Element) {
  return (
    <Layout className="flex flex-col justify-between min-h-screen bg-white">
      {page}
    </Layout>
  )
}
