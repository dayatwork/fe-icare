/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import { useState, useRef, Fragment } from 'react'
import { Transition, Dialog } from '@headlessui/react'

import { AdminLayout } from 'layouts/AdminLayout'

export default function AdminPendingApprovalPage() {
  const [rejectOpen, setRejectOpen] = useState(false)
  const [approveOpen, setApproveOpen] = useState(false)
  const cancelButtonRef = useRef(null)

  return (
    <>
      {/* Reject Modal */}
      <Transition.Root show={rejectOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed z-10 inset-0 overflow-y-auto"
          initialFocus={cancelButtonRef}
          onClose={setRejectOpen}
        >
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <div className="inline-block align-bottom bg-white text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                <div className="bg-white">
                  <div className="sm:flex sm:items-start">
                    <div className="text-center sm:text-left w-full">
                      <Dialog.Title
                        as="h3"
                        className="text-lg leading-6 font-semibold text-white bg-red-500 py-4 px-6"
                      >
                        Confirm Reject
                      </Dialog.Title>
                      <div className="px-6 py-4">
                        <p>Are you sure to reject?</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                  <button
                    type="button"
                    className="w-full inline-flex justify-center border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
                    onClick={() => setRejectOpen(false)}
                  >
                    Reject
                  </button>
                  <button
                    type="button"
                    className="mt-3 w-full inline-flex justify-center border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                    onClick={() => setRejectOpen(false)}
                    ref={cancelButtonRef}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      {/* Approve Modal */}
      <Transition.Root show={approveOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed z-10 inset-0 overflow-y-auto"
          initialFocus={cancelButtonRef}
          onClose={setApproveOpen}
        >
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <div className="inline-block align-bottom bg-white text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                <div className="bg-white">
                  <div className="sm:flex sm:items-start">
                    <div className="text-center sm:text-left w-full">
                      <Dialog.Title
                        as="h3"
                        className="text-lg leading-6 font-semibold text-white bg-limeade py-4 px-6"
                      >
                        Confirm Approve
                      </Dialog.Title>
                      <div className="px-6 py-4">
                        <p>Are you sure to approve?</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                  <button
                    type="button"
                    className="w-full inline-flex justify-center border border-transparent shadow-sm px-4 py-2 bg-limeade text-base font-medium text-white hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-limeade sm:ml-3 sm:w-auto sm:text-sm"
                    onClick={() => setApproveOpen(false)}
                  >
                    Approve
                  </button>
                  <button
                    type="button"
                    className="mt-3 w-full inline-flex justify-center border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                    onClick={() => setApproveOpen(false)}
                    ref={cancelButtonRef}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
      <div className="py-6 md:py-10 px-4 md:px-10 bg-white">
        <h1 className="text-xl md:text-2xl font-bold">Clinic Vidiana</h1>
      </div>
      <div className="py-10 px-4 md:px-10">
        <Link href="/admin/pending-approval">
          <a className="text-limeade hover:underline hover:bg-opacity-10 mb-4 inline-block">
            &larr; Back to Institute Pending Approval
          </a>
        </Link>
        <div className="bg-white shadow rounded-lg p-4 sm:p-6 lg:p-10 max-w-7xl">
          <dl className="space-y-4 md:space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
              <div>
                <dt className="text-sm text-gray-600">Name of Institution</dt>
                <dd className="font-semibold">Clinics Vidiana Sdn Bhd</dd>
              </div>
              <div>
                <dt className="text-sm text-gray-600">Office Number</dt>
                <dd className="font-semibold">03-12283941</dd>
              </div>
              <div>
                <dt className="text-sm text-gray-600">Established Since</dt>
                <dd className="font-semibold">12-12-2020</dd>
              </div>
              <div>
                <dt className="text-sm text-gray-600">Phone Number</dt>
                <dd className="font-semibold">013-12283941</dd>
              </div>
              <div>
                <dt className="text-sm text-gray-600">Type of Bussiness</dt>
                <dd className="font-semibold">Beauty Centre</dd>
              </div>
              <div>
                <dt className="text-sm text-gray-600">Email</dt>
                <dd className="font-semibold">admin@clinicsvidiana.com</dd>
              </div>
            </div>
            <div>
              <dt className="text-sm text-gray-600">Institute Certificate</dt>
              <dd className="font-semibold text-[#0084CE]">certificate.pdf</dd>
            </div>
            <div>
              <dt className="text-sm text-gray-600">Address</dt>
              <dd className="font-semibold max-w-lg">
                Pusat Pentadbiran Universiti Teknologi Malaysia, V01 Block B
                Level 2 Faculty of Bioscience and Medical Engineering, 80990
                Johor Bahru, Johor
              </dd>
            </div>
          </dl>
        </div>
        <div className="flex justify-end mt-6 px-2 space-x-4 max-w-7xl">
          <button
            className="px-2 w-32 py-2 bg-[#D30000] text-white rounded-md hover:bg-opacity-80"
            onClick={() => setRejectOpen(true)}
          >
            Reject
          </button>
          <button
            className="px-2 w-32 py-2 bg-limeade text-white rounded-md hover:bg-opacity-80"
            onClick={() => setApproveOpen(true)}
          >
            Approve
          </button>
        </div>
      </div>
    </>
  )
}

AdminPendingApprovalPage.getLayout = function getLayout(page: JSX.Element) {
  return <AdminLayout>{page}</AdminLayout>
}
