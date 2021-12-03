/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */
import { Tab } from '@headlessui/react'
import Image from 'next/image'
import Link from 'next/link'

import { AdminLayout } from 'layouts/AdminLayout'

export default function AdminInstitutionPage() {
  return (
    <>
      <div className="py-6 md:py-10 px-4 md:px-10 bg-white">
        <h1 className="text-xl md:text-2xl font-bold">Institute List</h1>
      </div>

      <div className="pt-6 pb-10 px-4 md:px-10">
        <Tab.Group>
          <Tab.List>
            <Tab
              className={({ selected }) =>
                `text-lg px-10 py-2 border-b-4 hover:bg-white ${
                  selected ? 'border-limeade' : 'border-gray-100'
                }`
              }
            >
              All
            </Tab>
            <Tab
              className={({ selected }) =>
                `text-lg px-10 py-2 border-b-4 hover:bg-white ${
                  selected ? 'border-limeade' : 'border-gray-100'
                }`
              }
            >
              Approved
            </Tab>
            <Tab
              className={({ selected }) =>
                `text-lg px-10 py-2 border-b-4 hover:bg-white ${
                  selected ? 'border-limeade' : 'border-gray-100'
                }`
              }
            >
              Rejected
            </Tab>
          </Tab.List>
          <Tab.Panels className="py-8">
            <Tab.Panel>
              <div className="mb-2">
                <label htmlFor="search-all" className="sr-only">
                  Search
                </label>
                <input
                  id="search-all"
                  type="text"
                  placeholder="Search here..."
                  className="py-2 px-4 max-w-md w-full border-gray-200 border"
                />
              </div>
              <ul className="max-w-7xl space-y-4">
                <li className="flex justify-between items-center md:items-end bg-white shadow rounded-md py-3 md:py-4 px-3 md:px-6">
                  <div className="flex items-center space-x-3 md:space-x-6">
                    <Image
                      src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150"
                      alt="Institution Image"
                      width={150}
                      height={100}
                      className="object-cover"
                    />
                    <div>
                      <p className="sm:text-base md:text-lg font-semibold">
                        Clinic Vidiana
                      </p>
                      <p className="sm:text-base md:text-lg text-gray-600">
                        Beauty Centre
                      </p>
                    </div>
                  </div>
                  <Link href="/admin/institution/123">
                    <a className="px-2 text-sm md:text-base md:px-4 py-1.5 md:py-2 border-limeade text-limeade rounded-md border hover:bg-limeade hover:bg-opacity-10">
                      View Details
                    </a>
                  </Link>
                </li>
                <li className="flex justify-between items-center md:items-end bg-white shadow rounded-md py-3 md:py-4 px-3 md:px-6">
                  <div className="flex items-center space-x-3 md:space-x-6">
                    <Image
                      src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150"
                      alt="Institution Image"
                      width={150}
                      height={100}
                      className="object-cover"
                    />
                    <div>
                      <p className="sm:text-base md:text-lg font-semibold">
                        Clinic Vidiana
                      </p>
                      <p className="sm:text-base md:text-lg text-gray-600">
                        Beauty Centre
                      </p>
                    </div>
                  </div>
                  <Link href="/admin/institution/123">
                    <a className="px-2 text-sm md:text-base md:px-4 py-1.5 md:py-2 border-limeade text-limeade rounded-md border hover:bg-limeade hover:bg-opacity-10">
                      View Details
                    </a>
                  </Link>
                </li>
                <li className="flex justify-between items-center md:items-end bg-white shadow rounded-md py-3 md:py-4 px-3 md:px-6">
                  <div className="flex items-center space-x-3 md:space-x-6">
                    <Image
                      src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150"
                      alt="Institution Image"
                      width={150}
                      height={100}
                      className="object-cover"
                    />
                    <div>
                      <p className="sm:text-base md:text-lg font-semibold">
                        Clinic Vidiana
                      </p>
                      <p className="sm:text-base md:text-lg text-gray-600">
                        Beauty Centre
                      </p>
                    </div>
                  </div>
                  <Link href="/admin/institution/123">
                    <a className="px-2 text-sm md:text-base md:px-4 py-1.5 md:py-2 border-limeade text-limeade rounded-md border hover:bg-limeade hover:bg-opacity-10">
                      View Details
                    </a>
                  </Link>
                </li>
              </ul>
            </Tab.Panel>
            <Tab.Panel>
              <div className="mb-2">
                <label htmlFor="search-all" className="sr-only">
                  Search
                </label>
                <input
                  id="search-all"
                  type="text"
                  placeholder="Search here..."
                  className="py-2 px-4 max-w-md w-full border-gray-200 border"
                />
              </div>
              <ul className="max-w-7xl space-y-4">
                <li className="flex justify-between items-center md:items-end bg-white shadow rounded-md py-3 md:py-4 px-3 md:px-6">
                  <div className="flex items-center space-x-3 md:space-x-6">
                    <Image
                      src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150"
                      alt="Institution Image"
                      width={150}
                      height={100}
                      className="object-cover"
                    />
                    <div>
                      <p className="sm:text-base md:text-lg font-semibold">
                        Clinic Vidiana
                      </p>
                      <p className="sm:text-base md:text-lg text-gray-600">
                        Beauty Centre
                      </p>
                    </div>
                  </div>
                  <Link href="/admin/institution/123">
                    <a className="px-2 text-sm md:text-base md:px-4 py-1.5 md:py-2 border-limeade text-limeade rounded-md border hover:bg-limeade hover:bg-opacity-10">
                      View Details
                    </a>
                  </Link>
                </li>
                <li className="flex justify-between items-center md:items-end bg-white shadow rounded-md py-3 md:py-4 px-3 md:px-6">
                  <div className="flex items-center space-x-3 md:space-x-6">
                    <Image
                      src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150"
                      alt="Institution Image"
                      width={150}
                      height={100}
                      className="object-cover"
                    />
                    <div>
                      <p className="sm:text-base md:text-lg font-semibold">
                        Clinic Vidiana
                      </p>
                      <p className="sm:text-base md:text-lg text-gray-600">
                        Beauty Centre
                      </p>
                    </div>
                  </div>
                  <Link href="/admin/institution/123">
                    <a className="px-2 text-sm md:text-base md:px-4 py-1.5 md:py-2 border-limeade text-limeade rounded-md border hover:bg-limeade hover:bg-opacity-10">
                      View Details
                    </a>
                  </Link>
                </li>
              </ul>
            </Tab.Panel>
            <Tab.Panel>
              <div className="mb-2">
                <label htmlFor="search-all" className="sr-only">
                  Search
                </label>
                <input
                  id="search-all"
                  type="text"
                  placeholder="Search here..."
                  className="py-2 px-4 max-w-md w-full border-gray-200 border"
                />
              </div>
              <ul className="max-w-7xl space-y-4">
                <li className="flex justify-between items-center md:items-end bg-white shadow rounded-md py-3 md:py-4 px-3 md:px-6">
                  <div className="flex items-center space-x-3 md:space-x-6">
                    <Image
                      src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150"
                      alt="Institution Image"
                      width={150}
                      height={100}
                      className="object-cover"
                    />
                    <div>
                      <p className="sm:text-base md:text-lg font-semibold">
                        Clinic Vidiana
                      </p>
                      <p className="sm:text-base md:text-lg text-gray-600">
                        Beauty Centre
                      </p>
                    </div>
                  </div>
                  <Link href="/admin/institution/123">
                    <a className="px-2 text-sm md:text-base md:px-4 py-1.5 md:py-2 border-limeade text-limeade rounded-md border hover:bg-limeade hover:bg-opacity-10">
                      View Details
                    </a>
                  </Link>
                </li>
              </ul>
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>
    </>
  )
}

AdminInstitutionPage.getLayout = function getLayout(page: JSX.Element) {
  return <AdminLayout>{page}</AdminLayout>
}
