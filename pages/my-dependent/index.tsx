/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */
import { useRouter } from 'next/router'
import { parseCookies } from 'nookies'
import { useEffect } from 'react'
import Link from 'next/link'

import Layout from '@/components/Layout'
// import { SidebarNav } from '@/components/SidebarNav'

export default function MyDependent() {
  const router = useRouter()
  const cookies = parseCookies()

  useEffect(() => {
    if (!cookies.accessToken) {
      router.replace('/login')
    }
  }, [cookies.accessToken, router])

  if (!cookies.accessToken) return <div></div>

  return (
    <div>
      <div className="bg-limeade py-10">
        <h1 className="text-2xl text-white text-center font-semibold">
          My Dependent
        </h1>
      </div>
      {/* <div className="max-w-7xl mx-auto flex py-6">
        <div className="w-1/6">
          <SidebarNav navigation={navigation} />
        </div>
      </div> */}
      <div className="max-w-7xl mx-auto py-6 px-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="font-semibold text-2xl">Dependent List</h2>
          <Link href="/my-dependent/add">
            <a className="text-white bg-limeade hover:bg-verdun-green px-4 py-2 transition rounded-md">
              Add New Dependent
            </a>
          </Link>
        </div>
        <ul className="space-y-4">
          <li className="bg-white p-4 rounded-md shadow flex justify-between items-center">
            <div className="flex space-x-4 items-center">
              <div className="">
                <img
                  className="object-cover w-32 h-32"
                  src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&q=80"
                  alt="Father"
                />
              </div>
              <div>
                <p className="text-xl font-semibold">Robert Doe</p>
                <p className="text-limeade">Father</p>
              </div>
            </div>
            <div className="px-4 flex flex-col space-y-2">
              <button className="px-4 py-2 rounded-md text-limeade border border-limeade hover:bg-limeade hover:bg-opacity-10">
                Edit
              </button>
              <button className="px-4 py-2 rounded-md text-red-600 border border-red-600 hover:bg-red-100">
                Delete
              </button>
            </div>
          </li>
          <li className="bg-white p-4 rounded-md shadow flex justify-between items-center">
            <div className="flex space-x-4 items-center">
              <div>
                <img
                  className="object-cover w-32 h-32"
                  src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&q=80"
                  alt="Mother"
                />
              </div>
              <div>
                <p className="text-xl font-semibold">Julia Doe</p>
                <p className="text-limeade">Mother</p>
              </div>
            </div>
            <div className="px-4 flex flex-col space-y-2">
              <button className="px-4 py-2 rounded-md text-limeade border border-limeade hover:bg-limeade hover:bg-opacity-10">
                Edit
              </button>
              <button className="px-4 py-2 rounded-md text-red-600 border border-red-600 hover:bg-red-100">
                Delete
              </button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}

MyDependent.getLayout = function getLayout(page: JSX.Element) {
  return (
    <Layout className="flex flex-col justify-between min-h-screen bg-gray-200">
      {page}
    </Layout>
  )
}
