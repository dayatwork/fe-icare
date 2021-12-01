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
    <div className="grid grid-cols-3 gap-6 max-w-7xl mx-auto py-20">
      <div className="col-span-2"></div>
      <div className="col-span-1 shadow">
        {step === 1 && (
          <form
            className="bg-white px-8 py-10 rounded-md"
            onSubmit={handleRegister}
          >
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
