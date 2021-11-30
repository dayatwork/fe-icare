import { FormEvent, useState } from 'react'
import { useRouter } from 'next/router'
import { EyeIcon, EyeOffIcon } from '@heroicons/react/outline'
import Link from 'next/link'
import toast from 'react-hot-toast'
import { setCookie } from 'nookies'

import { login } from 'services/auth/register'

import AuthLayout from '@/components/AuthLayout'

export default function Login() {
  const router = useRouter()
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setIsLoading] = useState(false)

  const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    const res = await login({ username: email, password })
    console.log({ res })
    setCookie(null, 'accessToken', res.data.token, {
      maxAge: 30 * 24 * 60 * 60,
      path: '/',
    })
    setIsLoading(false)
    toast.success('You are logged in', {
      duration: 5000,
      position: 'top-right',
    })
    router.replace('/')
  }

  return (
    <div className="flex justify-center max-w-7xl mx-auto py-20">
      {/* <div className="col-span-2"></div> */}
      <div className="shadow w-[400px]">
        <form onSubmit={handleLogin} className="bg-white px-8 py-10 rounded-md">
          <h2 className="text-3xl text-center mb-10">Welcome Back!</h2>
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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <div className="mt-1 relative shadow-sm">
              <input
                id="password"
                autoComplete="current-password"
                type={showPassword ? 'text' : 'password'}
                className="focus:outline-none pl-3 py-2 block w-full pr-10 sm:text-sm border-b-2 border-gray-300"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 px-3 flex items-center "
                onClick={() => setShowPassword((prev) => !prev)}
              >
                {showPassword ? (
                  <EyeIcon className="h-5 w-5 text-gray-400" />
                ) : (
                  <EyeOffIcon className="h-5 w-5 text-gray-400" />
                )}
              </button>
            </div>
          </div>

          <div className="mb-6 mt-10">
            <button className="btn-primary w-full" disabled={loading}>
              {loading ? 'Submitting...' : 'Log in'}
            </button>
          </div>
          <p className="text-sm text-center">
            Do not have an account?{' '}
            <Link href="/signup">
              <a className="text-limeade hover:text-verdun-green font-semibold">
                Signup
              </a>
            </Link>
          </p>
        </form>
      </div>
    </div>
  )
}

Login.getLayout = function getLayout(page: JSX.Element) {
  return <AuthLayout>{page}</AuthLayout>
}
