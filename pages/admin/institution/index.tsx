/* eslint-disable @next/next/no-img-element */
import { Fragment, useState, useEffect } from 'react'
import { Dialog, Menu, Transition, Tab } from '@headlessui/react'
import { BellIcon, MenuAlt2Icon, XIcon } from '@heroicons/react/outline'
import { SearchIcon } from '@heroicons/react/solid'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Image from 'next/image'
import { destroyCookie, parseCookies } from 'nookies'

const navigation = [
  { name: 'Institute List', href: '/admin/institution' },
  { name: 'Pending Approval', href: '/admin/pending-approval' },
]
const userNavigation = [{ name: 'My Profile', href: '/my-account' }]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function AdminInstitutionPage() {
  const router = useRouter()
  const cookies = parseCookies()
  const [sidebarOpen, setSidebarOpen] = useState(false)

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
                          router.pathname === item.href
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
                        router.pathname === item.href
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
        </main>
      </div>
    </div>
  )
}
