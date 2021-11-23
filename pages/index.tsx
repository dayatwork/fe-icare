import Layout from '@/components/Layout'

export default function Home() {
  return <div>{/* <h1>Hallo</h1> */}</div>
}

Home.getLayout = function getLayout(page: JSX.Element) {
  return <Layout>{page}</Layout>
}
