/* eslint-disable @next/next/no-img-element */
import { Fragment, useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import * as VisuallyHidden from '@radix-ui/react-visually-hidden'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import { Menu, Transition, Popover } from '@headlessui/react'
import { parseCookies, destroyCookie } from 'nookies'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'Centres', href: '/centres' },
]

const moreNavigation = [
  { name: 'Member Benefit', href: '/member-benefit' },
  { name: 'About Us', href: '/about' },
  { name: 'Contact Us', href: '/contact' },
]

const userNavigation = [
  { name: 'Register Institution', href: '/register-institution' },
  { name: 'My Institution', href: '/my-institution/customers' },
  { name: 'My Centre', href: '/my-centre/customers' },
  { name: 'My Account', href: '/my-account' },
  { name: 'My Booking', href: '/my-booking' },
  { name: 'Admin', href: '/admin/institution' },
]

export const Navbar = () => {
  const router = useRouter()
  const cookies = parseCookies()
  const [loggedIn, setLoggedId] = useState(false)
  const [showBanner, setShowBanner] = useState(true)

  useEffect(() => {
    if (cookies.accessToken) {
      setLoggedId(true)
    }
  }, [cookies.accessToken])

  const handleLogout = () => {
    destroyCookie({}, 'accessToken')
    destroyCookie({}, 'user')
    setLoggedId(false)
    router.replace('/')
  }

  return (
    <header className="shadow-md bg-white">
      {router.pathname === '/' && showBanner && (
        <div className="bg-[#FFF1BF] text-gray-800 py-4">
          <div className="text-center relative max-w-7xl mx-auto">
            <p className="text-sm md:text-base">
              Book Healtcare & Wellness Centre Instantly near you.{' '}
              <Link href="/book">
                <a className="block md:inline text-limeade font-bold hover:text-verdun-green">
                  Book Now
                </a>
              </Link>
            </p>
            <button
              onClick={() => setShowBanner(false)}
              className="absolute top-0 right-6 text-limeade hover:text-verdun-green hover:bg-limeade hover:bg-opacity-30 p-1 rounded-sm"
            >
              <span className="sr-only">Close Banner</span>
              <XIcon className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}
      <Popover>
        <div className="max-w-7xl mx-auto py-4  px-2  flex justify-between items-center">
          <Link href="/">
            <a>
              <img
                src="/full-logo.png"
                alt="Logo"
                className="h-10 object-contain"
              />
            </a>
          </Link>
          <nav className="hidden md:block">
            <ul className="flex space-x-10">
              <li>
                <Link href="/">
                  <a
                    className={` ${
                      router.pathname === '/'
                        ? 'text-limeade font-semibold'
                        : 'text-gray-500 hover:text-gray-800'
                    }`}
                  >
                    Home
                  </a>
                </Link>
              </li>

              <li>
                <Link href="/services">
                  <a
                    className={` ${
                      router.pathname === '/services'
                        ? 'text-limeade font-semibold'
                        : 'text-gray-500 hover:text-gray-800'
                    }`}
                  >
                    Services
                  </a>
                </Link>
              </li>

              <li>
                <Link href="/centres">
                  <a
                    className={` ${
                      router.pathname === '/centres'
                        ? 'text-limeade font-semibold'
                        : 'text-gray-500 hover:text-gray-800'
                    }`}
                  >
                    Centres
                  </a>
                </Link>
              </li>
            </ul>
          </nav>
          <div className="items-center space-x-6 hidden md:flex">
            {loggedIn ? (
              <Menu as="nav" className="relative">
                <Menu.Button className="flex items-center space-x-2">
                  <div className="flex flex-col items-end mt-0.5">
                    <p className="text-sm mr-4">
                      {JSON.parse(cookies.user)?.name}
                    </p>
                    <p className="text-xs text-gray-600 mr-4">
                      {JSON.parse(cookies.user)?.email}
                    </p>
                  </div>
                  <Image
                    width={37}
                    height={37}
                    className="object-cover rounded-full"
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100"
                    alt="user photo"
                  />
                </Menu.Button>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items
                    as="ul"
                    className="absolute right-0 origin-top-right shadow-lg flex flex-col z-10 border-gray-400 border-1 mt-2 bg-gray-50 divide-y divide-gray-200"
                  >
                    <div>
                      <Menu.Item
                        as="li"
                        className="block whitespace-nowrap py-2 px-4"
                      >
                        {({ active }) => (
                          <Link href="/register-institution">
                            <a
                              className={`block ${
                                active ? 'text-limeade' : 'text-gray-600'
                              }`}
                            >
                              Register Institution
                            </a>
                          </Link>
                        )}
                      </Menu.Item>
                      <Menu.Item
                        as="li"
                        className="block whitespace-nowrap py-2 px-4"
                      >
                        {({ active }) => (
                          <Link href="/my-institution/customers">
                            <a
                              className={`block ${
                                active ? 'text-limeade' : 'text-gray-600'
                              }`}
                            >
                              My Institution
                            </a>
                          </Link>
                        )}
                      </Menu.Item>
                      <Menu.Item
                        as="li"
                        className="block whitespace-nowrap py-2 px-4"
                      >
                        {({ active }) => (
                          <Link href="/my-centre/customers">
                            <a
                              className={`block ${
                                active ? 'text-limeade' : 'text-gray-600'
                              }`}
                            >
                              My Centre
                            </a>
                          </Link>
                        )}
                      </Menu.Item>
                    </div>
                    <div>
                      <Menu.Item
                        as="li"
                        className="block whitespace-nowrap py-2 px-4"
                      >
                        {({ active }) => (
                          <Link href="/my-account">
                            <a
                              className={`block ${
                                active ? 'text-limeade' : 'text-gray-600'
                              }`}
                            >
                              My Account
                            </a>
                          </Link>
                        )}
                      </Menu.Item>
                      <Menu.Item
                        as="li"
                        className="block whitespace-nowrap py-2 px-4"
                      >
                        {({ active }) => (
                          <Link href="/my-booking">
                            <a
                              className={`block ${
                                active ? 'text-limeade' : 'text-gray-600'
                              }`}
                            >
                              My Booking
                            </a>
                          </Link>
                        )}
                      </Menu.Item>
                    </div>
                    <div>
                      <Menu.Item
                        as="li"
                        className="block whitespace-nowrap py-2 px-4"
                      >
                        {({ active }) => (
                          <Link href="/admin/institution">
                            <a
                              className={`block ${
                                active ? 'text-limeade' : 'text-gray-600'
                              }`}
                            >
                              Admin
                            </a>
                          </Link>
                        )}
                      </Menu.Item>
                    </div>
                    <Menu.Item
                      as="li"
                      className="block whitespace-nowrap py-2 px-4"
                    >
                      {({ active }) => (
                        <button
                          className={`block w-full text-left ${
                            active ? 'text-red-700' : 'text-red-600'
                          }`}
                          onClick={handleLogout}
                        >
                          Logout
                        </button>
                      )}
                    </Menu.Item>
                  </Menu.Items>
                </Transition>
              </Menu>
            ) : (
              <>
                <Link href="/login">
                  <a className="px-4 py-1.5 bg-limeade hover:bg-verdun-green rounded-full text-white transition">
                    Login
                  </a>
                </Link>
              </>
            )}
            <Menu as="nav" className="relative">
              <Menu.Button className="p-2 hover:bg-gray-200 rounded-md transition">
                <MenuIcon className="w-5 h-5" />
                <VisuallyHidden.Root>Others Menu</VisuallyHidden.Root>
              </Menu.Button>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items
                  as="ul"
                  className="absolute right-0 origin-top-right shadow-lg flex flex-col p-4 z-10 border-gray-400 border-1 mt-2 bg-gray-50"
                >
                  <Menu.Item
                    as="li"
                    className="block whitespace-nowrap py-2 px-4"
                  >
                    {({ active }) => (
                      <span
                        className={`${
                          active ? 'text-limeade' : 'text-gray-600'
                        }`}
                        // href="/download"
                      >
                        Download i-Care Apps
                      </span>
                    )}
                  </Menu.Item>
                  <Menu.Item
                    as="li"
                    className="block whitespace-nowrap py-2 px-4"
                  >
                    {({ active }) => (
                      <Link href="/member-benefit">
                        <a
                          className={`block ${
                            active ? 'text-limeade' : 'text-gray-600'
                          }`}
                        >
                          Member Benefit
                        </a>
                      </Link>
                    )}
                  </Menu.Item>
                  <Menu.Item
                    as="li"
                    className="block whitespace-nowrap py-2 px-4"
                  >
                    {({ active }) => (
                      <Link href="/contact">
                        <a
                          className={`block ${
                            active ? 'text-limeade' : 'text-gray-600'
                          }`}
                        >
                          Contact us
                        </a>
                      </Link>
                    )}
                  </Menu.Item>
                  <Menu.Item
                    as="li"
                    className="block whitespace-nowrap py-2 px-4"
                  >
                    {({ active }) => (
                      <Link href="/about">
                        <a
                          className={`block ${
                            active ? 'text-limeade' : 'text-gray-600'
                          }`}
                        >
                          About us
                        </a>
                      </Link>
                    )}
                  </Menu.Item>
                </Menu.Items>
              </Transition>
            </Menu>
          </div>
          <div className="flex items-center md:hidden">
            <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-limeade">
              <span className="sr-only">Open main menu</span>
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <Transition
            as={Fragment}
            enter="duration-150 ease-out"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="duration-100 ease-in"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Popover.Panel
              focus
              className="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
            >
              <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
                <div className="px-5 pt-4 flex items-center justify-between">
                  <div>
                    <img
                      className="h-8 w-auto"
                      src="/full-logo.png"
                      alt="Logo"
                    />
                  </div>
                  <div className="-mr-2">
                    <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-limeade">
                      <span className="sr-only">Close main menu</span>
                      <XIcon className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
                <div className="px-2 pt-2 pb-3 space-y-3 divide-y divide-gray-200">
                  <div className="space-y-1">
                    {navigation.map((item) => (
                      <Link key={item.name} href={item.href}>
                        <a
                          className={`block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 ${
                            router.pathname === item.href
                              ? 'text-limeade font-semibold'
                              : 'text-gray-500 hover:text-gray-800'
                          }`}
                        >
                          {item.name}
                        </a>
                      </Link>
                    ))}
                  </div>
                  <div className="space-y-1 pt-2">
                    {moreNavigation.map((item) => (
                      <Link key={item.name} href={item.href}>
                        <a
                          className={`block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 ${
                            router.pathname === item.href
                              ? 'text-limeade font-semibold'
                              : 'text-gray-500 hover:text-gray-800'
                          }`}
                        >
                          {item.name}
                        </a>
                      </Link>
                    ))}
                  </div>
                  {loggedIn && (
                    <>
                      {cookies?.user && (
                        <div className="flex space-x-3 items-center px-3 pt-3">
                          <Image
                            width={37}
                            height={37}
                            className="object-cover rounded-full"
                            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100"
                            alt="user photo"
                          />
                          <div className="flex flex-col mt-0.5">
                            <p className="mr-4">
                              {JSON.parse(cookies.user)?.name}
                            </p>
                            <p className="text-sm text-gray-600 mr-4 -mt-1">
                              {JSON.parse(cookies.user)?.email}
                            </p>
                          </div>
                        </div>
                      )}
                      <div className="space-y-1 pt-2">
                        {userNavigation.map((item) => (
                          <Link key={item.name} href={item.href}>
                            <a
                              className={`block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 ${
                                router.pathname === item.href
                                  ? 'text-limeade font-semibold'
                                  : 'text-gray-500 hover:text-gray-800'
                              }`}
                            >
                              {item.name}
                            </a>
                          </Link>
                        ))}
                      </div>
                    </>
                  )}
                </div>
                {loggedIn ? (
                  <button
                    onClick={handleLogout}
                    className="block w-full px-5 py-3 text-center font-semibold text-red-500 bg-gray-50 hover:bg-gray-100"
                  >
                    Log out
                  </button>
                ) : (
                  <Link href="/login">
                    <a className="block w-full px-5 py-3 text-center font-semibold text-limeade bg-gray-50 hover:bg-gray-100">
                      Log in
                    </a>
                  </Link>
                )}
              </div>
            </Popover.Panel>
          </Transition>
        </div>
      </Popover>
    </header>
  )
}
