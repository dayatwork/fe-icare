/* eslint-disable @typescript-eslint/no-explicit-any */
import { FormEvent, useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { EyeIcon, EyeOffIcon } from '@heroicons/react/outline'
import OtpInput from 'react-otp-input'
import toast from 'react-hot-toast'
import { setCookie } from 'nookies'

import { register, verifyPin, setNameAndPassword } from 'services/auth/register'

import AuthLayout from '@/components/AuthLayout'

export default function Signup() {
  const router = useRouter()
  const [step, setStep] = useState(1)
  const [otp, setOtp] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const emailRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    emailRef.current?.focus()
  }, [])

  const handleRegister = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    try {
      const res = await register({ identity: email })

      // Backend wrong status code
      if (res.code !== 200) {
        throw new Error(res.message)
      }
      setIsLoading(false)
      setStep(2)
      toast.success(res?.message, {
        duration: 5000,
        position: 'top-right',
      })
    } catch (error: any) {
      setIsLoading(false)
      toast.error(error.message, {
        duration: 5000,
        position: 'top-right',
      })
      emailRef.current?.focus()
    }
  }

  const handleVerifyPin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    try {
      const res = await verifyPin({ identity: email, verification_pin: otp })
      setIsLoading(false)
      // Backend wrong status code
      if (res.type === 'warning') {
        throw new Error(res.message)
      }
      setCookie(null, 'accessToken', res.data, {
        maxAge: 30 * 24 * 60 * 60,
        path: '/',
      })
      toast.success(res?.message, {
        duration: 5000,
        position: 'top-right',
      })
      setStep(3)
    } catch (error: any) {
      setIsLoading(false)
      toast.error(error.message, {
        duration: 5000,
        position: 'top-right',
      })
    }
  }

  const handleSetNameAndPassword = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      const res = await setNameAndPassword({ email, name, password })
      setCookie(null, 'accessToken', res.token, {
        maxAge: 30 * 24 * 60 * 60,
        path: '/',
      })
      toast.success('Registration is successful', {
        duration: 5000,
        position: 'top-right',
      })
      router.replace('/')
    } catch (error: any) {
      setIsLoading(false)
      toast.error(error.message, {
        duration: 5000,
        position: 'top-right',
      })
    }
  }

  return (
    <div className="flex justify-center max-w-7xl mx-auto py-20">
      {/* <div className="col-span-2"></div> */}
      <div className="shadow min-w-[400px]">
        {step === 1 && (
          <div className="bg-white px-8 py-10 rounded-md">
            <form className="mb-6" onSubmit={handleRegister}>
              <h2 className="text-3xl text-center mb-10">Register</h2>
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
                    className="block w-full px-3 py-2  placeholder-gray-400 focus:outline-none sm:text-sm border-b-2 border-gray-300"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>

              <div className="mb-6 mt-10">
                <button className="btn-primary w-full" type="submit">
                  {isLoading ? 'Submitting...' : 'Register'}
                </button>
              </div>
              <p className="text-sm text-center">
                Already have an account?{' '}
                <Link href="/login">
                  <a className="text-limeade hover:text-verdun-green font-semibold">
                    Login
                  </a>
                </Link>
              </p>
            </form>
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">
                  Or continue with
                </span>
              </div>
            </div>
            <div className="mt-4 flex flex-col items-stretch space-y-2">
              <button className="flex items-center justify-center space-x-3 py-2 px-4 rounded-full border border-gray-200 hover:bg-gray-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="2500"
                  height="2500"
                  viewBox="126.445 2.281 589 589"
                  className="w-6 h-6"
                >
                  <circle cx="420.945" cy="296.781" r="294.5" fill="#3c5a9a" />
                  <path
                    d="M516.704 92.677h-65.239c-38.715 0-81.777 16.283-81.777 72.402.189 19.554 0 38.281 0 59.357H324.9v71.271h46.174v205.177h84.847V294.353h56.002l5.067-70.117h-62.531s.14-31.191 0-40.249c0-22.177 23.076-20.907 24.464-20.907 10.981 0 32.332.032 37.813 0V92.677h-.032z"
                    fill="#fff"
                  />
                </svg>
                <span>Log in with Facebook</span>
              </button>
              <button className="flex items-center justify-center space-x-3 py-2 px-4 rounded-full border border-gray-200 hover:bg-gray-100">
                <svg
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g transform="matrix(1, 0, 0, 1, 27.009001, -39.238998)">
                    <path
                      fill="#4285F4"
                      d="M -3.264 51.509 C -3.264 50.719 -3.334 49.969 -3.454 49.239 L -14.754 49.239 L -14.754 53.749 L -8.284 53.749 C -8.574 55.229 -9.424 56.479 -10.684 57.329 L -10.684 60.329 L -6.824 60.329 C -4.564 58.239 -3.264 55.159 -3.264 51.509 Z"
                    />
                    <path
                      fill="#34A853"
                      d="M -14.754 63.239 C -11.514 63.239 -8.804 62.159 -6.824 60.329 L -10.684 57.329 C -11.764 58.049 -13.134 58.489 -14.754 58.489 C -17.884 58.489 -20.534 56.379 -21.484 53.529 L -25.464 53.529 L -25.464 56.619 C -23.494 60.539 -19.444 63.239 -14.754 63.239 Z"
                    />
                    <path
                      fill="#FBBC05"
                      d="M -21.484 53.529 C -21.734 52.809 -21.864 52.039 -21.864 51.239 C -21.864 50.439 -21.724 49.669 -21.484 48.949 L -21.484 45.859 L -25.464 45.859 C -26.284 47.479 -26.754 49.299 -26.754 51.239 C -26.754 53.179 -26.284 54.999 -25.464 56.619 L -21.484 53.529 Z"
                    />
                    <path
                      fill="#EA4335"
                      d="M -14.754 43.989 C -12.984 43.989 -11.404 44.599 -10.154 45.789 L -6.734 42.369 C -8.804 40.429 -11.514 39.239 -14.754 39.239 C -19.444 39.239 -23.494 41.939 -25.464 45.859 L -21.484 48.949 C -20.534 46.099 -17.884 43.989 -14.754 43.989 Z"
                    />
                  </g>
                </svg>
                <span>Log in with Google</span>
              </button>
              <button className="flex items-center justify-center space-x-3 py-2 px-4 rounded-full border border-limeade text-limeade hover:bg-gray-100">
                <span>Continue as Guest</span>
              </button>
            </div>
          </div>
        )}
        {step === 2 && (
          <form
            className="bg-white px-8 py-10 rounded-md"
            onSubmit={handleVerifyPin}
          >
            <h2 className="text-3xl text-center mb-2">OTP Verification</h2>
            <p className="mb-12 text-center text-sm">
              OTP Code is sent to <span className="font-semibold">{email}</span>
            </p>
            <div className="mb-4">
              <OtpInput
                value={otp}
                onChange={setOtp}
                numInputs={6}
                inputStyle="text-4xl border-b-2 border-gray-300 mx-2"
                containerStyle="flex justify-center mb-4"
                // separator={<span>-</span>}
              />
              <p className="text-sm text-center">
                Did not get code?{' '}
                <button className="text-limeade hover:text-verdun-green font-semibold">
                  Resend OTP Code
                </button>
              </p>
            </div>

            <div className="mb-6 mt-10">
              <button className="btn-primary w-full" type="submit">
                {isLoading ? 'Submitting' : 'Verify & Proceed'}
              </button>
            </div>
          </form>
        )}
        {step === 3 && (
          <form
            className="bg-white px-8 py-10 rounded-md"
            onSubmit={handleSetNameAndPassword}
          >
            <h2 className="text-3xl text-center mb-10">Full Name & Password</h2>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Full Name (as per IC/Passport)
              </label>
              <div className="mt-1">
                <input
                  id="name"
                  type="text"
                  className="appearance-none block w-full px-3 py-2  placeholder-gray-400 focus:outline-none sm:text-sm border-b-2 border-gray-300"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
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
              <button className="btn-primary w-full" type="submit">
                {isLoading ? 'Submitting' : 'Save'}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  )
}

Signup.getLayout = function getLayout(page: JSX.Element) {
  return <AuthLayout>{page}</AuthLayout>
}
