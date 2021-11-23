import { useState } from 'react'
import Link from 'next/link'
import { EyeIcon, EyeOffIcon } from '@heroicons/react/outline'
import OtpInput from 'react-otp-input'

import AuthLayout from '@/components/AuthLayout'

export default function Signup() {
  const [step, setStep] = useState(1)
  const [otp, setOtp] = useState('')
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className="grid grid-cols-3 gap-6 max-w-7xl mx-auto py-20">
      <div className="col-span-2"></div>
      <div className="col-span-1 shadow">
        {step === 1 && (
          <form className="bg-white px-8 py-10 rounded-md">
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
                  autoComplete="username"
                  className="appearance-none block w-full px-3 py-2  placeholder-gray-400 focus:outline-none sm:text-sm border-b-2 border-gray-300"
                />
              </div>
            </div>

            <div className="mb-6 mt-10">
              <button className="btn-primary w-full" onClick={() => setStep(2)}>
                Register
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
          <form className="bg-white px-8 py-10 rounded-md">
            <h2 className="text-3xl text-center mb-2">OTP Verification</h2>
            <p className="mb-12 text-center text-sm">
              OTP Code is sent to{' '}
              <span className="font-semibold">zahrinaanwar@gmail.com</span>
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
              <button className="btn-primary w-full" onClick={() => setStep(3)}>
                Verify & Proceed
              </button>
            </div>
          </form>
        )}
        {step === 3 && (
          <form className="bg-white px-8 py-10 rounded-md">
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
              <button className="btn-primary w-full">Save</button>
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
