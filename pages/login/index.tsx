/* eslint-disable @typescript-eslint/no-explicit-any */
import { FormEvent, useState, useRef, useEffect } from 'react'
import { useRouter } from 'next/router'
import { EyeIcon, EyeOffIcon } from '@heroicons/react/outline'
import Link from 'next/link'
import toast from 'react-hot-toast'
import { setCookie } from 'nookies'

import { login } from 'services/auth/register'
import { getUserDetail } from 'services/user/user'

import AuthLayout from '@/components/AuthLayout'

export default function Login() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setIsLoading] = useState(false)
  const emailRef = useRef<HTMLInputElement>(null)

  console.log({ router })

  useEffect(() => {
    emailRef.current?.focus()
  }, [])

  const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    try {
      const res = await login({ username: email, password })
      console.log({ res })

      // Backend wrong status code
      if (res.type !== 'success') {
        throw new Error(res.message)
      }

      setCookie(null, 'accessToken', res.data.token, {
        maxAge: 30 * 24 * 60 * 60,
        path: '/',
      })
      const userDetail = await getUserDetail()
      setCookie(
        null,
        'user',
        JSON.stringify({
          id: userDetail?.data?.id,
          name: userDetail?.data?.name,
          email: userDetail?.data?.email,
        })
      )
      setIsLoading(false)
      toast.success('You are logged in', {
        duration: 5000,
        position: 'top-right',
      })

      router.replace(router.query.from ? router.query.from.toString() : '/')
    } catch (error: any) {
      setIsLoading(false)
      toast.error(error.message, {
        duration: 5000,
        position: 'top-right',
      })
      emailRef.current?.focus()
    }
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
                ref={emailRef}
                autoComplete="username"
                className="appearance-none block w-full px-3 py-2  placeholder-gray-400 focus:outline-none sm:text-sm border-b-2 border-gray-300"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          <div className="mb-2">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <div className="mt-1 relative shadow-sm mb-2">
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
            <Link href="/forgot-password">
              <a className="text-limeade hover:text-verdun-green text-right text-sm block hover:underline">
                Forgot password?
              </a>
            </Link>
          </div>

          <div className="mb-6 mt-8">
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
