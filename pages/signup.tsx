import Link from 'next/link'

import AuthLayout from '@/components/AuthLayout'

export default function Signup() {
  return (
    <div className="grid grid-cols-3 gap-6 max-w-7xl mx-auto py-20">
      <div className="col-span-2"></div>
      <div className="col-span-1 shadow-md">
        <form className="bg-white">
          <h2 className="bg-limeade text-white px-6 py-4 text-lg">Register</h2>
          <div className="p-6">
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  type="email"
                  autoComplete="username"
                  className="appearance-none block w-full px-3 py-2  placeholder-gray-400 focus:outline-none sm:text-sm border-b-2 border-gray-300"
                />
              </div>
            </div>
          </div>
          <div className="bg-gray-100 px-6 py-3 flex space-x-4 items-center justify-end">
            <p className="text-sm">
              Already have an account?{' '}
              <Link href="/login">
                <a className="text-limeade hover:text-verdun-green font-semibold">
                  Login
                </a>
              </Link>
            </p>
            <button className="px-4 py-1.5 bg-limeade hover:bg-verdun-green text-white transi shadow">
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

Signup.getLayout = function getLayout(page: JSX.Element) {
  return <AuthLayout>{page}</AuthLayout>
}
