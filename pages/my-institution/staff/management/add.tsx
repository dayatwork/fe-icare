/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/display-name */
import { useState } from 'react'
import Link from 'next/link'

import { InstitutionLayout } from 'layouts/InstitutionLayout'

export default function InstitutionStaff() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [qualification, setQualification] = useState('')
  const [employeeNumber, setEmployeeNumber] = useState('')
  const [role, setRole] = useState('')
  const [image, setImage] = useState('')

  return (
    <>
      <div className="py-6 md:py-10 px-4 md:px-10 bg-white flex justify-between items-center">
        <h1 className="text-xl md:text-2xl font-bold">Add New Staff</h1>
      </div>

      <div className="pt-6 pb-10 px-4 md:px-10">
        <Link href="/my-institution/staff/management">
          <a className="text-limeade hover:underline hover:bg-opacity-10 mb-4 inline-block">
            &larr; Back to Staff List
          </a>
        </Link>
        <form>
          <div className="bg-white p-10 rounded-md shadow max-w-7xl grid grid-cols-1 gap-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Full Name
              </label>
              <div>
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
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <div>
                <input
                  id="email"
                  type="email"
                  className="appearance-none block w-full px-3 py-2  placeholder-gray-400 focus:outline-none sm:text-sm border-b-2 border-gray-300"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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
              <div>
                <input
                  id="phone"
                  type="text"
                  className="appearance-none block w-full px-3 py-2  placeholder-gray-400 focus:outline-none sm:text-sm border-b-2 border-gray-300"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="qualification"
                className="block text-sm font-medium text-gray-700"
              >
                Qualification
              </label>
              <div>
                <input
                  id="qualification"
                  type="text"
                  className="appearance-none block w-full px-3 py-2  placeholder-gray-400 focus:outline-none sm:text-sm border-b-2 border-gray-300"
                  value={qualification}
                  onChange={(e) => setQualification(e.target.value)}
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="employee-number"
                className="block text-sm font-medium text-gray-700"
              >
                Employee No
              </label>
              <div>
                <input
                  id="employee-number"
                  type="text"
                  className="appearance-none block w-full px-3 py-2  placeholder-gray-400 focus:outline-none sm:text-sm border-b-2 border-gray-300"
                  value={employeeNumber}
                  onChange={(e) => setEmployeeNumber(e.target.value)}
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="role"
                className="block text-sm font-medium text-gray-700"
              >
                Role
              </label>
              <div>
                <input
                  id="role"
                  type="text"
                  className="appearance-none block w-full px-3 py-2  placeholder-gray-400 focus:outline-none sm:text-sm border-b-2 border-gray-300"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="image"
                className="block text-sm font-medium text-gray-700"
              >
                image
              </label>
              <div>
                <input
                  id="image"
                  type="file"
                  className="appearance-none block w-full px-3 py-2  placeholder-gray-400 focus:outline-none sm:text-sm border-b-2 border-gray-300"
                  value={image}
                  onChange={(e) => setImage(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className="flex justify-end mt-4 max-w-7xl">
            <button
              className="px-4 py-2 bg-limeade rounded-md text-white hover:bg-opacity-90"
              type="submit"
            >
              Add Staff
            </button>
          </div>
        </form>
      </div>
    </>
  )
}

InstitutionStaff.getLayout = function getLayout(page: JSX.Element) {
  return <InstitutionLayout>{page}</InstitutionLayout>
}
