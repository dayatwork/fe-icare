/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */
import { Tab } from '@headlessui/react'
import { PrinterIcon } from '@heroicons/react/outline'
import { useRouter } from 'next/router'
import { parseCookies } from 'nookies'
import { useEffect } from 'react'

import Layout from '@/components/Layout'
// import { SidebarNav } from '@/components/SidebarNav'

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function MyBooking() {
  // const navigation = [
  //   { name: 'To Pay', href: '#', current: true },
  //   { name: 'Upcoming', href: '#', current: false },
  //   { name: 'Completed', href: '#', current: false },
  //   { name: 'Cancelled', href: '#', current: false },
  // ]

  const router = useRouter()
  const cookies = parseCookies()

  useEffect(() => {
    if (!cookies.accessToken) {
      router.replace('/login')
    }
  }, [cookies.accessToken, router])

  if (!cookies.accessToken) return null

  const tabs = ['To Pay', 'Upcoming', 'Completed', 'Cancelled']

  return (
    <div>
      <div className="bg-limeade py-10">
        <h1 className="text-2xl text-white text-center font-semibold">
          My Booking
        </h1>
      </div>
      {/* <div className="max-w-7xl mx-auto flex py-6">
        <div className="w-1/6">
          <SidebarNav navigation={navigation} />
        </div>
      </div> */}
      <div className="max-w-7xl mx-auto flex py-6">
        <Tab.Group vertical>
          <div className="flex items-start w-full space-x-10">
            <Tab.List className="bg-white space-y-1 w-1/6 py-4 shadow-md rounded-md">
              {tabs.map((tab) => (
                <Tab
                  key={tab}
                  className={({ selected }) =>
                    classNames(
                      selected
                        ? 'text-limeade border-limeade font-bold'
                        : 'border-transparent text-gray-600 hover:bg-gray-50 hover:text-gray-900',
                      'w-full group flex items-center px-6 py-2 border-r-4'
                    )
                  }
                >
                  {tab}
                </Tab>
              ))}
            </Tab.List>
            <Tab.Panels className="flex-1">
              <Tab.Panel>
                <ul className="flex flex-col items-stretch space-y-4">
                  <BookingItme />
                </ul>
              </Tab.Panel>
              <Tab.Panel>
                <ul className="flex flex-col items-stretch space-y-4">
                  <BookingItme />
                  <BookingItme />
                </ul>
              </Tab.Panel>
              <Tab.Panel>
                <ul className="flex flex-col items-stretch space-y-4">
                  <BookingItme />
                  <BookingItme />
                  <BookingItme />
                  <BookingItme />
                </ul>
              </Tab.Panel>
              <Tab.Panel>
                <ul className="flex flex-col items-stretch space-y-4">
                  <BookingItme />
                  <BookingItme />
                  <BookingItme />
                  <BookingItme />
                </ul>
              </Tab.Panel>
            </Tab.Panels>
          </div>
        </Tab.Group>
      </div>
    </div>
  )
}

const BookingItme = () => {
  return (
    <li className="bg-white shadow p-6 rounded-md">
      <div className="flex justify-between pb-6 border-b border-gray-200">
        <div className="flex space-x-6">
          <img
            src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&q=80"
            alt="Person"
            className="object-cover w-36 h-28"
          />
          <div className="flex-1">
            <p className="font-semibold text-lg">
              1-Hour full Body Massage Yeo Beuty & Spa
            </p>
            <p className="text-gray-500 mb-2">Vibes Spa</p>
          </div>
        </div>
        <div>
          <div className="py-5 px-4 bg-gray-100">
            <p className="text-center">Tue, 21 September</p>
            <p className="text-2xl font-bold text-center">10:10 am</p>
          </div>
          <p className="space-x-2 mt-4 text-right pr-2">
            <span className="text-lg text-gray-500 line-through">RM868</span>
            <span className="text-xl text-limeade font-semibold">RM268</span>
          </p>
        </div>
      </div>
      <div className="mt-5 flex justify-between px-2">
        <p className="text-sm text-gray-600">
          Payment Date: Tuesday, 21 September 2021, 10:03 am
        </p>
        <div>
          <p className=" space-x-4">
            <span className="font-semibold text-lg">Total Price</span>
            <span className="text-2xl text-limeade font-semibold">RM268</span>
          </p>
          <div className="flex justify-end mt-4">
            <button className="py-2 pl-3 pr-4 bg-gray-200 border hover:bg-gray-300 transition font-semibold border-gray-600 inline-flex items-center">
              <PrinterIcon className="w-5 h-5 mr-2" />
              Receipt
            </button>
          </div>
        </div>
      </div>
    </li>
  )
}

MyBooking.getLayout = function getLayout(page: JSX.Element) {
  return (
    <Layout className="flex flex-col justify-between min-h-screen bg-gray-200">
      {page}
    </Layout>
  )
}
