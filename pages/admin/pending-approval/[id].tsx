/* eslint-disable @next/next/no-img-element */
import { Fragment, useState, useRef, useEffect } from 'react'
import { Dialog, Menu, Transition } from '@headlessui/react'
import { BellIcon, MenuAlt2Icon, XIcon } from '@heroicons/react/outline'
import { SearchIcon } from '@heroicons/react/solid'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { destroyCookie, parseCookies } from 'nookies'

const navigation = [
  { name: 'Institute List', href: '/admin/institution' },
  { name: 'Pending Approval', href: '/admin/pending-approval' },
]
const userNavigation = [{ name: 'My Profile', href: '/my-profile' }]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function AdminPendingApprovalPage() {
  const router = useRouter()
  const cookies = parseCookies()
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [rejectOpen, setRejectOpen] = useState(false)
  const [approveOpen, setApproveOpen] = useState(false)
  const cancelButtonRef = useRef(null)

  useEffect(() => {
    if (!cookies.accessToken || !cookies.user) {
      router.replace('/')
    }
  }, [cookies.accessToken, cookies.user, router])

  const handleLogout = () => {
    destroyCookie({}, 'accessToken', { path: '/' })
    destroyCookie({}, 'user', { path: '/' })
    router.replace('/')
  }

  return (
    <div className="h-screen flex overflow-hidden bg-gray-100">
      <Transition.Root show={sidebarOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 flex z-40 md:hidden"
          onClose={setSidebarOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-600 bg-opacity-75" />
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          >
            <div className="relative flex-1 flex flex-col max-w-xs w-full pt-5 pb-4 bg-white">
              <Transition.Child
                as={Fragment}
                enter="ease-in-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in-out duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="absolute top-0 right-0 -mr-12 pt-2">
                  <button
                    type="button"
                    className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                    onClick={() => setSidebarOpen(false)}
                  >
                    <span className="sr-only">Close sidebar</span>
                    <XIcon className="h-6 w-6 text-white" aria-hidden="true" />
                  </button>
                </div>
              </Transition.Child>
              <div className="flex-shrink-0 flex items-center px-4">
                <Link href="/">
                  <a>
                    <img
                      src="/full-logo.png"
                      alt="Logo"
                      className="h-10 object-contain"
                    />
                  </a>
                </Link>
              </div>
              <div className="mt-5 flex-1 h-0 overflow-y-auto">
                <nav className="px-2 space-y-1">
                  {navigation.map((item) => (
                    <Link href={item.href} key={item.href}>
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          router.pathname.startsWith(item.href)
                            ? 'bg-gray-100 text-gray-900'
                            : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900',
                          'group flex items-center px-2 py-2 text-base font-medium rounded-md'
                        )}
                      >
                        {item.name}
                      </a>
                    </Link>
                  ))}
                </nav>
              </div>
            </div>
          </Transition.Child>
          <div className="flex-shrink-0 w-14" aria-hidden="true">
            {/* Dummy element to force sidebar to shrink to fit close icon */}
          </div>
        </Dialog>
      </Transition.Root>

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

      {/* Static sidebar for desktop */}
      <div className="hidden md:flex md:flex-shrink-0">
        <div className="flex flex-col w-64">
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div className="flex flex-col flex-grow border-r border-gray-200 pt-5 pb-4 bg-white overflow-y-auto">
            <div className="flex items-center flex-shrink-0 px-4">
              <Link href="/">
                <a>
                  <img
                    src="/full-logo.png"
                    alt="Logo"
                    className="h-10 object-contain"
                  />
                </a>
              </Link>
            </div>
            <div className="mt-5 flex-grow flex flex-col">
              <nav className="flex-1 px-2 bg-white space-y-2">
                {navigation.map((item) => (
                  <Link href={item.href} key={item.href}>
                    <a
                      key={item.name}
                      className={classNames(
                        router.pathname.startsWith(item.href)
                          ? 'bg-limeade text-white font-medium'
                          : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900',
                        'group flex items-center px-3 py-3 rounded-md'
                      )}
                    >
                      {item.name}
                    </a>
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-0 flex-1 overflow-hidden">
        <div className="relative z-10 flex-shrink-0 flex h-16 bg-white shadow">
          <button
            type="button"
            className="px-4 border-r border-gray-200 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-limeade md:hidden"
            onClick={() => setSidebarOpen(true)}
          >
            <span className="sr-only">Open sidebar</span>
            <MenuAlt2Icon className="h-6 w-6" aria-hidden="true" />
          </button>
          <div className="flex-1 px-4 flex justify-between">
            <div className="flex-1 flex">
              <form className="w-full flex md:ml-0" action="#" method="GET">
                <label htmlFor="search-field" className="sr-only">
                  Search
                </label>
                <div className="relative w-full text-gray-400 focus-within:text-gray-600">
                  <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none">
                    <SearchIcon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <input
                    id="search-field"
                    className="block w-full h-full pl-8 pr-3 py-2 border-transparent text-gray-900 placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-0 focus:border-transparent sm:text-sm"
                    placeholder="Search"
                    type="search"
                    name="search"
                  />
                </div>
              </form>
            </div>
            <div className="ml-4 flex items-center md:ml-6">
              <button
                type="button"
                className="bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-limeade"
              >
                <span className="sr-only">View notifications</span>
                <BellIcon className="h-6 w-6" aria-hidden="true" />
              </button>

              {/* Profile dropdown */}
              <Menu as="div" className="ml-3 relative">
                <div>
                  <Menu.Button className="max-w-xs bg-white flex items-center text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-limeade">
                    <span className="sr-only">Open user menu</span>
                    <img
                      className="h-8 w-8 rounded-full object-cover"
                      src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100"
                      alt=""
                    />
                  </Menu.Button>
                </div>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                    {userNavigation.map((item) => (
                      <Menu.Item key={item.name}>
                        {({ active }) => (
                          <Link href={item.href}>
                            <a
                              className={classNames(
                                active ? 'bg-gray-100' : '',
                                'block px-4 py-2 text-gray-700'
                              )}
                            >
                              {item.name}
                            </a>
                          </Link>
                        )}
                      </Menu.Item>
                    ))}
                    <Menu.Item>
                      <button
                        className="px-4 py-2 rounded-md text-red-500 w-full text-left"
                        onClick={handleLogout}
                      >
                        Logout
                      </button>
                    </Menu.Item>
                  </Menu.Items>
                </Transition>
              </Menu>
            </div>
          </div>
        </div>

        <main className="flex-1 relative overflow-y-auto focus:outline-none">
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
                    <dt className="text-sm text-gray-600">
                      Name of Institution
                    </dt>
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
                  <dt className="text-sm text-gray-600">
                    Institute Certificate
                  </dt>
                  <dd className="font-semibold text-[#0084CE]">
                    certificate.pdf
                  </dd>
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
        </main>
      </div>
    </div>
  )
}
