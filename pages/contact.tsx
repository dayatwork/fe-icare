import Layout from '@/components/Layout'

export default function Contact() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl px-4 mx-auto py-14">
        <h1 className="text-4xl mb-10">Contact Us</h1>
        <div className="space-y-4 max-w-md">
          <p>60149106631</p>
          <p>
            Technovation Park Universiti Teknologi Malaysia 81310 Johor Bahru,
            Johor, Malaysia.
          </p>
          <p>general@icare.com</p>
        </div>
      </div>
    </div>
  )
}

Contact.getLayout = function getLayout(page: JSX.Element) {
  return (
    <Layout className="flex flex-col justify-between min-h-screen bg-white">
      {page}
    </Layout>
  )
}
