/* eslint-disable @next/next/no-img-element */
import { FC } from 'react'
import Link from 'next/link'
import { Footer } from './Footer'

const AuthLayout: FC = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <header className="py-4 px-2 shadow-lg border-b border-gray-200">
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
        </div>
      </header>
      <main className="bg-gray-100 flex-1">{children}</main>
      <Footer />
    </div>
  )
}

export default AuthLayout
