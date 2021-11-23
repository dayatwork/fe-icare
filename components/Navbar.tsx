/* eslint-disable @next/next/no-img-element */
import { Fragment } from 'react'
import Link from 'next/link'
import * as VisuallyHidden from '@radix-ui/react-visually-hidden'
import { MenuIcon } from '@heroicons/react/outline'
import { Menu, Transition } from '@headlessui/react'

export const Navbar = () => {
  return (
    <header className="py-4 px-2 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
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
                <a className="text-gray-500">Home</a>
              </Link>
            </li>

            <li>
              <Link href="/services">
                <a className="text-gray-500">Services</a>
              </Link>
            </li>

            <li>
              <Link href="/centers">
                <a className="text-gray-500">Centers</a>
              </Link>
            </li>
          </ul>
        </nav>
        <div className="flex items-center space-x-6">
          <button className="px-4 py-1.5 bg-limeade hover:bg-verdun-green rounded-full text-white transition">
            Login
          </button>
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
                    <a
                      className={`${active ? 'text-limeade' : 'text-gray-600'}`}
                      href="/download"
                    >
                      Download i-Care Apps
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item as="li" className="block whitespace-nowrap p-1">
                  {({ active }) => (
                    <a
                      className={`${active ? 'text-limeade' : 'text-gray-600'}`}
                      href="/benefits"
                    >
                      Member Benefits
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item as="li" className="block whitespace-nowrap p-1">
                  {({ active }) => (
                    <a
                      className={`${active ? 'text-limeade' : 'text-gray-600'}`}
                      href="/contact"
                    >
                      Contact us
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item as="li" className="block whitespace-nowrap p-1">
                  {({ active }) => (
                    <a
                      className={`${active ? 'text-limeade' : 'text-gray-600'}`}
                      href="/about"
                    >
                      About us
                    </a>
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
