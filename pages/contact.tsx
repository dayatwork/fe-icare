import Layout from '@/components/Layout'

export default function Contact() {
  return (
    <section className="bg-white">
      <div className="bg-limeade py-6 md:py-10 px-4">
        <h1 className="text-3xl md:text-4xl text-white mb-4 text-center">
          Contact Us
        </h1>
        <p className="text-white text-center md:text-lg">
          Got any enquiries? Reach us here
        </p>
      </div>
      <div className="max-w-7xl mx-auto px-6 py-10 md:py-16 space-y-4 md:space-y-6">
        <p>60149106631</p>
        <p>
          Technovation Park Universiti Teknologi Malaysia 81310 Johor Bahru,
          Johor, Malaysia.
        </p>
        <p>general@icare.com</p>
      </div>
    </section>
  )
}

Contact.getLayout = function getLayout(page: JSX.Element) {
  return (
    <Layout className="flex flex-col justify-between min-h-screen bg-white">
      {page}
    </Layout>
  )
}
