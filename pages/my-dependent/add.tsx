/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */
import { useRouter } from 'next/router'
import { parseCookies } from 'nookies'
import { useEffect, useState } from 'react'
import Link from 'next/link'

import Layout from '@/components/Layout'
// import { SidebarNav } from '@/components/SidebarNav'

export default function AddNewDependent() {
  const router = useRouter()
  const cookies = parseCookies()
  const [name, setName] = useState('')
  const [relation, setRelation] = useState('')

  useEffect(() => {
    if (!cookies.accessToken) {
      router.replace('/login')
    }
  }, [cookies.accessToken, router])

  if (!cookies.accessToken) return <div></div>

  return (
    <div className="bg-white">
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
        <Link href="/my-dependent">
          <a className="text-limeade hover:underline">
            &larr; Back to Dependent List
          </a>
        </Link>
        <div className="py-8">
          <h2 className="font-semibold text-2xl text-center">
            Add New Dependent
          </h2>
          <form className="mt-14 w-full max-w-xl mx-auto px-6">
            <div className="space-y-6 mb-14">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Name
                </label>
                <div className="mt-1">
                  <input
                    id="name"
                    type="text"
                    className="appearance-none block w-full px-3 py-2  placeholder-gray-400 focus:outline-none sm:text-sm border-b-2 border-gray-300"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="relation"
                  className="block text-sm font-medium text-gray-700"
                >
                  Relationship
                </label>
                <div className="mt-1">
                  <input
                    id="relation"
                    type="text"
                    className="appearance-none block w-full px-3 py-2  placeholder-gray-400 focus:outline-none sm:text-sm border-b-2 border-gray-300"
                    value={relation}
                    onChange={(e) => setRelation(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div className="flex justify-end">
              <button className="text-white bg-limeade hover:bg-verdun-green px-4 py-2 ">
                Add Dependent
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

AddNewDependent.getLayout = function getLayout(page: JSX.Element) {
  return (
    <Layout className="flex flex-col justify-between min-h-screen bg-white">
      {page}
    </Layout>
  )
}
