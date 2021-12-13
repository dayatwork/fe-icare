/* eslint-disable @next/next/no-img-element */
import React, { Fragment, useState, useEffect } from 'react'
import { Dialog, Menu, Transition, Disclosure } from '@headlessui/react'
import { BellIcon, MenuAlt2Icon, XIcon } from '@heroicons/react/outline'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { destroyCookie, parseCookies } from 'nookies'
// const navigation = [
//   { name: 'Customer List', href: '/my-institution/customers' },
//   { name: 'Services', href: '/my-institution/services' },
//   { name: 'Staff', href: '/my-institution/staff' },
// ]
const userNavigation = [{ name: 'My Profile', href: '/my-account' }]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

// type Navigation = {
//   name: string
//   href: string
// }

// type Props = {
//   navigation: Navigation[]
//   userNavigation: Navigation[]
// }

const navigation = [
  { name: 'Customers', current: true, href: '/my-institution/customers' },
  { name: 'Services', current: true, href: '/my-institution/services' },
  {
    name: 'Finance',
    current: false,
    href: '/my-institution/finance',
    children: [
      {
        name: 'Services Pricing',
        href: '/my-institution/finance/service-pricing',
      },
      { name: 'Report', href: '/my-institution/finance/report' },
    ],
  },
  {
    name: 'Staff',
    current: false,
    href: '/my-institution/staff',
    children: [
      { name: 'Staff Management', href: '/my-institution/staff/management' },
      { name: 'Staff Schedule', href: '/my-institution/staff/schedule' },
      { name: 'Report', href: '/my-institution/staff/report' },
    ],
  },
]

export const InstitutionLayout: React.FC = ({ children }) => {
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
                <nav
                  className="flex-1 px-2 space-y-1 bg-white"
                  aria-label="Sidebar"
                >
                  {navigation.map((item) =>
                    !item.children ? (
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
                    ) : (
                      <Disclosure
                        as="div"
                        key={item.name}
                        className="space-y-1"
                      >
                        {({ open }) => (
                          <>
                            <Disclosure.Button
                              className={classNames(
                                item.current
                                  ? 'bg-gray-100 text-gray-900'
                                  : 'bg-white text-gray-600 hover:bg-gray-50 hover:text-gray-900',
                                'group w-full flex items-center pl-3 pr-1 py-3 text-left font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500'
                              )}
                            >
                              <span className="flex-1">{item.name}</span>
                              <svg
                                className={classNames(
                                  open
                                    ? 'text-gray-400 rotate-90'
                                    : 'text-gray-300',
                                  'ml-3 flex-shrink-0 h-5 w-5 transform group-hover:text-gray-400 transition-colors ease-in-out duration-150'
                                )}
                                viewBox="0 0 20 20"
                                aria-hidden="true"
                              >
                                <path
                                  d="M6 6L14 10L6 14V6Z"
                                  fill="currentColor"
                                />
                              </svg>
                            </Disclosure.Button>
                            <Disclosure.Panel className="space-y-1">
                              {item.children.map((subItem) => {
                                return (
                                  <Link href={subItem.href} key={subItem.href}>
                                    <a
                                      key={subItem.name}
                                      className={classNames(
                                        router.pathname === subItem.href
                                          ? 'bg-limeade text-white font-medium'
                                          : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900',
                                        'group flex items-center px-3 py-3 rounded-md'
                                      )}
                                    >
                                      {subItem.name}
                                    </a>
                                  </Link>
                                )
                              })}
                            </Disclosure.Panel>
                          </>
                        )}
                      </Disclosure>
                    )
                  )}
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
          {/* <div className="flex flex-col flex-grow border-r border-gray-200 pt-5 pb-4 bg-white overflow-y-auto">
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
          </div> */}
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
              <nav
                className="flex-1 px-2 space-y-1 bg-white"
                aria-label="Sidebar"
              >
                {navigation.map((item) =>
                  !item.children ? (
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
                  ) : (
                    <Disclosure
                      as="div"
                      key={item.name}
                      className="space-y-1"
                      defaultOpen={router.pathname.startsWith(item.href)}
                    >
                      {({ open }) => (
                        <>
                          <Disclosure.Button
                            className={classNames(
                              item.current
                                ? 'bg-gray-100 text-gray-900'
                                : 'bg-white text-gray-600 hover:bg-gray-50 hover:text-gray-900',
                              'group w-full flex items-center pl-3 pr-1 py-3 text-left font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500'
                            )}
                          >
                            <span className="flex-1">{item.name}</span>
                            <svg
                              className={classNames(
                                open
                                  ? 'text-gray-400 rotate-90'
                                  : 'text-gray-300',
                                'ml-3 flex-shrink-0 h-5 w-5 transform group-hover:text-gray-400 transition-colors ease-in-out duration-150'
                              )}
                              viewBox="0 0 20 20"
                              aria-hidden="true"
                            >
                              <path
                                d="M6 6L14 10L6 14V6Z"
                                fill="currentColor"
                              />
                            </svg>
                          </Disclosure.Button>
                          <Disclosure.Panel className="space-y-1">
                            {item.children.map((subItem) => {
                              console.log()
                              return (
                                <a
                                  key={subItem.name}
                                  href={subItem.href}
                                  // className="group w-full flex items-center pl-11 pr-2 py-2 text-sm font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50"
                                  className={classNames(
                                    router.pathname.startsWith(subItem.href)
                                      ? 'bg-limeade text-white font-medium'
                                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900',
                                    'group w-full flex items-center pl-11 pr-2 py-2 font-medium rounded-md'
                                  )}
                                >
                                  {subItem.name}
                                </a>
                              )
                            })}
                          </Disclosure.Panel>
                        </>
                      )}
                    </Disclosure>
                  )
                )}
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
            <div className="flex-1 flex items-center">
              <p className="text-center w-full text-xl font-bold">
                E-LIFE SOLUTIONS PLT{' '}
                <span className="text-sm font-normal text-gray-600 te">
                  (G-19023)
                </span>
              </p>
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
          {children}
        </main>
      </div>
    </div>
  )
}
