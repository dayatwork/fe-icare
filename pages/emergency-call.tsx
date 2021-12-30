import { useState } from 'react'
import Layout from '@/components/Layout'

export default function EmergencyCall() {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  return (
    <section className="bg-white">
      <div className="bg-red-600 py-6 md:py-10">
        <h1 className="text-3xl md:text-4xl text-white text-center">
          Emergency
        </h1>
      </div>
      <div className="max-w-7xl mx-auto px-6 py-10">
        <h2 className="text-2xl font-semibold mb-2 text-center">
          Emergency Form
        </h2>
        <p className="text-center text-gray-600">
          Please enter your phone number to allow police to track your location
        </p>
        <form className="mt-10 w-full max-w-xl mx-auto px-6">
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
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700"
              >
                Phone Number
              </label>
              <div className="mt-1">
                <input
                  id="phone"
                  type="text"
                  className="appearance-none block w-full px-3 py-2  placeholder-gray-400 focus:outline-none sm:text-sm border-b-2 border-gray-300"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className="flex justify-end">
            <button className="text-white bg-red-600 hover:bg-red-500 px-4 py-2 ">
              Start Emergency Call
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}

EmergencyCall.getLayout = function getLayout(page: JSX.Element) {
  return (
    <Layout className="flex flex-col justify-between min-h-screen bg-white">
      {page}
    </Layout>
  )
}
