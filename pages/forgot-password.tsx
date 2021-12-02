/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useRef, useEffect, FormEvent } from 'react'
import toast from 'react-hot-toast'
import Link from 'next/link'

import AuthLayout from '@/components/AuthLayout'
import { forgotPassword } from 'services/auth/register'

export default function ForgotPassword() {
  // const router = useRouter()
  const [email, setEmail] = useState('')
  const [loading, setIsLoading] = useState(false)
  const emailRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    emailRef.current?.focus()
  }, [])

  const handleForgotPassword = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    try {
      const res = await forgotPassword({ username: email })
      console.log({ res })
      // Backend wrong status code
      if (res.type !== 'success') {
        throw new Error(res.message)
      }

      setIsLoading(false)
      setEmail('')
      toast.success(res.message, {
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

  return (
    <div className="flex justify-center max-w-7xl mx-auto py-20">
      {/* <div className="col-span-2"></div> */}
      <div className="shadow w-[400px]">
        <form
          onSubmit={handleForgotPassword}
          className="bg-white px-8 py-10 rounded-md"
        >
          <h2 className="text-3xl text-center mb-2">Forgot Password</h2>
          <p className="text-gray-600 text-sm text-center mb-10">
            Enter your registered e-mail or mobile number. We will send you a
            verification code to reset your password.
          </p>
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

          <div className="mt-10 mb-4">
            <button className="btn-primary w-full" disabled={loading}>
              {loading ? 'Submitting...' : 'Submit'}
            </button>
          </div>
          <p className="text-sm text-center">
            Back to{' '}
            <Link href="/login">
              <a className="text-limeade hover:text-verdun-green font-semibold">
                Login
              </a>
            </Link>
          </p>
        </form>
      </div>
    </div>
  )
}

ForgotPassword.getLayout = function getLayout(page: JSX.Element) {
  return <AuthLayout>{page}</AuthLayout>
}
