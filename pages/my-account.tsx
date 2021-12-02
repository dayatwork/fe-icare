/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */
import { useState, useRef } from 'react'
import { XIcon } from '@heroicons/react/outline'
import { useRouter } from 'next/router'
import { parseCookies } from 'nookies'
import { useEffect } from 'react'

import Layout from '@/components/Layout'

export default function MyAccount() {
  const [photo, setPhoto] = useState<any>('')
  const [img, setImg] = useState('')
  const photoRef = useRef<HTMLInputElement>(null)

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
          My Account
        </h1>
      </div>
      <div className="flex py-10 max-w-7xl mx-auto px-6 space-x-10">
        <div className="pl-6 pr-20 border-r border-gray-200">
          <section>
            <h2 className="text-xl font-semibold mb-4 text-center">
              Profile Picture
            </h2>
            <div className="flex justify-center mb-4">
              <img
                className="object-cover rounded-full w-36 h-36"
                src={
                  img
                    ? img
                    : 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200'
                }
                alt="user photo"
              />
            </div>
            <form className="flex flex-col items-center">
              <label htmlFor="fileupload" id="buttonlabel">
                <span
                  role="button"
                  aria-controls="filename"
                  tabIndex={0}
                  className="block bg-gray-200 hover:bg-gray-300 rounded-md px-4 py-2"
                >
                  upload file
                </span>
              </label>
              <input
                type="file"
                accept=".jpg,.jpeg,.png"
                id="fileupload"
                className="hidden"
                ref={photoRef}
                onChange={(e) => {
                  if (e.target.files) {
                    setPhoto(e.target.files[0])
                    setImg(URL.createObjectURL(e.target.files[0]))
                  }
                }}
              />
              <label htmlFor="filename" className="hidden">
                uploaded file
              </label>

              {photo ? (
                <>
                  <div className="flex space-x-2 items-center mt-4">
                    <span className="">{photo.name}</span>
                    <button
                      onClick={() => {
                        if (photoRef.current) {
                          photoRef.current.value = ''
                        }
                        setPhoto('')
                        setImg('')
                      }}
                      className="p-1 rounded-sm bg-red-50 hover:bg-red-100"
                      type="button"
                    >
                      <span className="sr-only">Delete</span>
                      <XIcon className="w-5 h-5 text-red-500" />
                    </button>
                  </div>
                  <button className="py-2 px-4 bg-limeade text-white hover:bg-verdun-green mt-4">
                    Save Changes
                  </button>
                </>
              ) : null}
            </form>
          </section>
        </div>
        <div className="flex-1 px-6">
          <section className="pb-10 border-b border-gray-200">
            <h2 className="text-xl font-semibold mb-4">Personal Information</h2>
            <form className="space-y-4 ">
              <div className="flex items-center space-x-2">
                <label htmlFor="name" className="whitespace-nowrap w-44">
                  Full Name
                </label>
                <input
                  id="name"
                  type="text"
                  className="appearance-none block w-full px-3 py-2  placeholder-gray-400 focus:outline-none sm:text-sm border border-gray-200"
                />
              </div>
              <div className="flex items-center space-x-2">
                <label htmlFor="birthdate" className="whitespace-nowrap w-44">
                  Date of Birth
                </label>
                <input
                  id="birthdate"
                  type="date"
                  className="appearance-none block w-full px-3 py-2  placeholder-gray-400 focus:outline-none sm:text-sm border border-gray-200"
                />
              </div>
              <div className="flex items-center space-x-2">
                <label htmlFor="mobile" className="whitespace-nowrap w-44">
                  Phone Number
                </label>
                <input
                  id="mobile"
                  type="number"
                  className="appearance-none block w-full px-3 py-2  placeholder-gray-400 focus:outline-none sm:text-sm border border-gray-200"
                />
              </div>
              <div className="flex justify-end">
                <button className="py-2 px-4 bg-limeade text-white hover:bg-verdun-green">
                  Save Changes
                </button>
              </div>
            </form>
          </section>

          <section className="pt-10">
            <h2 className="text-xl font-semibold mb-4">Reset Password</h2>
            <form className="space-y-4 ">
              <div className="flex items-center space-x-2">
                <label
                  htmlFor="old-password"
                  className="whitespace-nowrap w-44"
                >
                  Old Password
                </label>
                <input
                  id="old-password"
                  type="password"
                  className="appearance-none block w-full px-3 py-2  placeholder-gray-400 focus:outline-none sm:text-sm border border-gray-200"
                />
              </div>
              <div className="flex items-center space-x-2">
                <label
                  htmlFor="new-password"
                  className="whitespace-nowrap w-44"
                >
                  New Password
                </label>
                <input
                  id="new-password"
                  type="password"
                  className="appearance-none block w-full px-3 py-2  placeholder-gray-400 focus:outline-none sm:text-sm border border-gray-200"
                />
              </div>
              <div className="flex items-center space-x-2">
                <label
                  htmlFor="confirm-new-password"
                  className="whitespace-nowrap w-44"
                >
                  Repeat New Password
                </label>
                <input
                  id="confirm-new-password"
                  type="password"
                  className="appearance-none block w-full px-3 py-2  placeholder-gray-400 focus:outline-none sm:text-sm border border-gray-200"
                />
              </div>
              <div className="flex justify-end">
                <button className="py-2 px-4 bg-limeade text-white hover:bg-verdun-green">
                  Reset Password
                </button>
              </div>
            </form>
          </section>
        </div>
      </div>
    </div>
  )
}

MyAccount.getLayout = function getLayout(page: JSX.Element) {
  return (
    <Layout className="flex flex-col justify-between min-h-screen bg-white">
      {page}
    </Layout>
  )
}
