/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */
import { useState } from 'react'
import { useRouter } from 'next/router'
import { parseCookies } from 'nookies'
import { useEffect } from 'react'

import Layout from '@/components/Layout'

export default function RegisterInstitution() {
  const [institutionName, setInstitutionName] = useState('')
  const [institutionAddress, setInstitutionAddress] = useState('')
  const [establishDate, setEstablishDate] = useState('')
  const [officeNumber, setOfficeNumber] = useState('')
  const [businessType, setBusinesType] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [ssmCertificate, setSsmCertificate] = useState('')
  const [email, setEmail] = useState('')

  const router = useRouter()
  const cookies = parseCookies()

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
          Register Institution
        </h1>
      </div>
      <div className="flex py-10 bg-white  space-x-10">
        <form className="w-full max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 gap-x-20 gap-y-10">
            <div>
              <label
                htmlFor="institution-name"
                className="block text-sm font-medium text-gray-700"
              >
                Institution Name
              </label>
              <div className="mt-1">
                <input
                  id="institution-name"
                  type="text"
                  className="appearance-none block w-full px-3 py-2  placeholder-gray-400 focus:outline-none sm:text-sm border-b-2 border-gray-300"
                  value={institutionName}
                  onChange={(e) => setInstitutionName(e.target.value)}
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="institution-address"
                className="block text-sm font-medium text-gray-700"
              >
                Address of Institution
              </label>
              <div className="mt-1">
                <input
                  id="institution-address"
                  type="text"
                  className="appearance-none block w-full px-3 py-2  placeholder-gray-400 focus:outline-none sm:text-sm border-b-2 border-gray-300"
                  value={institutionAddress}
                  onChange={(e) => setInstitutionAddress(e.target.value)}
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="establish-date"
                className="block text-sm font-medium text-gray-700"
              >
                Established Since
              </label>
              <div className="mt-1">
                <input
                  id="establish-date"
                  type="date"
                  className="appearance-none block w-full px-3 py-2  placeholder-gray-400 focus:outline-none sm:text-sm border-b-2 border-gray-300"
                  value={establishDate}
                  onChange={(e) => setEstablishDate(e.target.value)}
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="office-number"
                className="block text-sm font-medium text-gray-700"
              >
                Office Number
              </label>
              <div className="mt-1">
                <input
                  id="office-number"
                  type="text"
                  className="appearance-none block w-full px-3 py-2  placeholder-gray-400 focus:outline-none sm:text-sm border-b-2 border-gray-300"
                  value={officeNumber}
                  onChange={(e) => setOfficeNumber(e.target.value)}
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="business-type"
                className="block text-sm font-medium text-gray-700"
              >
                Type of Business
              </label>
              <div className="mt-1">
                <select
                  id="business-type"
                  className="appearance-none block w-full px-3 py-2  placeholder-gray-400 focus:outline-none sm:text-sm border-b-2 border-gray-300"
                  value={businessType}
                  onChange={(e) => setBusinesType(e.target.value)}
                >
                  <option value="">Choose type of business</option>
                  <option value="A">Type 1</option>
                  <option value="B">Type 2</option>
                </select>
              </div>
            </div>
            <div>
              <label
                htmlFor="phone-number"
                className="block text-sm font-medium text-gray-700"
              >
                Phone Number
              </label>
              <div className="mt-1">
                <input
                  id="phone-number"
                  type="text"
                  className="appearance-none block w-full px-3 py-2  placeholder-gray-400 focus:outline-none sm:text-sm border-b-2 border-gray-300"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="ssm-certificate"
                className="block text-sm font-medium text-gray-700"
              >
                SSM Certificate
              </label>
              <div className="mt-1">
                <input
                  id="ssm-certificate"
                  type="file"
                  className="appearance-none block w-full px-3 py-2  placeholder-gray-400 focus:outline-none sm:text-sm border-b-2 border-gray-300"
                  value={ssmCertificate}
                  onChange={(e) => setSsmCertificate(e.target.value)}
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  type="email"
                  className="appearance-none block w-full px-3 py-2  placeholder-gray-400 focus:outline-none sm:text-sm border-b-2 border-gray-300"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className="flex justify-end mt-6">
            <button className="text-white bg-limeade hover:bg-verdun-green px-4 py-2 ">
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

RegisterInstitution.getLayout = function getLayout(page: JSX.Element) {
  return (
    <Layout className="flex flex-col justify-between min-h-screen bg-white">
      {page}
    </Layout>
  )
}
