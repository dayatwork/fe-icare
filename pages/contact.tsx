import Layout from '@/components/Layout'

export default function Contact() {
  return <div>{/* <h1>Hallo</h1> */}</div>
}

Contact.getLayout = function getLayout(page: JSX.Element) {
  return <Layout>{page}</Layout>
}
