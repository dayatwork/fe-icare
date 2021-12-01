/* eslint-disable @next/next/no-img-element */
import { Fragment, useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import * as VisuallyHidden from '@radix-ui/react-visually-hidden'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import { Menu, Transition } from '@headlessui/react'
import { parseCookies, destroyCookie } from 'nookies'

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
    destroyCookie(null, 'accessToken')
    setLoggedId(false)
    router.replace('/')
  }

  return (
    <header className="shadow-md bg-white">
      {router.pathname === '/' && showBanner && (
        <div className="bg-[#FFF1BF] text-gray-800 py-4">
          <div className="text-center relative max-w-7xl mx-auto">
            <p>
              Book Healtcare & Wellness Centre Instantly near you.{' '}
              <Link href="/book">
                <a className="text-limeade font-bold hover:text-verdun-green">
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
        <nav>
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
        <div className="flex items-center space-x-6">
          {loggedIn ? (
            <Menu as="nav" className="relative">
              <Menu.Button className="flex items-center space-x-2">
                <p className="text-sm mr-4">Zahrina Anwar</p>
                <Image
                  width={35}
                  height={35}
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
                  className="absolute right-0 origin-top-right shadow-lg flex flex-col p-4 z-10 border-gray-400 border-1 mt-2 bg-gray-50"
                >
                  <Menu.Item as="li" className="block whitespace-nowrap p-1">
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
                  <Menu.Item as="li" className="block whitespace-nowrap p-1">
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
                  <Menu.Item as="li" className="block whitespace-nowrap p-1">
                    {({ active }) => (
                      <button
                        className={`block ${
                          active ? 'text-limeade' : 'text-gray-600'
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
                <Menu.Item as="li" className="block whitespace-nowrap p-1">
                  {({ active }) => (
                    <span
                      className={`${active ? 'text-limeade' : 'text-gray-600'}`}
                      // href="/download"
                    >
                      Download i-Care Apps
                    </span>
                  )}
                </Menu.Item>
                <Menu.Item as="li" className="block whitespace-nowrap p-1">
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
                <Menu.Item as="li" className="block whitespace-nowrap p-1">
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
                <Menu.Item as="li" className="block whitespace-nowrap p-1">
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
      </div>
    </header>
  )
}
