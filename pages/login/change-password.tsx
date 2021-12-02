/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useRef, useEffect, FormEvent } from 'react'
import toast from 'react-hot-toast'
import { useRouter } from 'next/router'
import { EyeIcon, EyeOffIcon } from '@heroicons/react/outline'

import AuthLayout from '@/components/AuthLayout'
import { resetPassword } from 'services/auth/register'

export default function ChangePassword() {
  const router = useRouter()
  const [loading, setIsLoading] = useState(false)
  const [password, setPassword] = useState('')
  const [passwordConfirm, setPasswordConfirm] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const passwordRef = useRef<HTMLInputElement>(null)

  console.log({ router })

  useEffect(() => {
    passwordRef.current?.focus()
  }, [])

  const handleResetPassword = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    try {
      const res = await resetPassword({ password, token: router.query.token })
      console.log({ res })
      // Backend wrong status code
      if (res.type !== 'success') {
        throw new Error(res.message)
      }

      setIsLoading(false)
      setPassword('')
      setPasswordConfirm('')
      toast.success(res.message, {
        duration: 5000,
        position: 'top-right',
      })
      router.replace('/login')
    } catch (error: any) {
      setIsLoading(false)
      toast.error(error.message, {
        duration: 5000,
        position: 'top-right',
      })
      passwordRef.current?.focus()
    }
  }

  return (
    <div className="flex justify-center max-w-7xl mx-auto py-20">
      {/* <div className="col-span-2"></div> */}
      <div className="shadow w-[400px]">
        <form
          onSubmit={handleResetPassword}
          className="bg-white px-8 py-10 rounded-md"
        >
          <h2 className="text-3xl text-center mb-10">Reset Password</h2>

          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <div className="mt-1 relative shadow-sm mb-2">
              <input
                id="password"
                ref={passwordRef}
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

          <div className="mb-2">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Confirm Password
            </label>
            <div className="mt-1 relative shadow-sm mb-2">
              <input
                id="password"
                type={showPassword ? 'text' : 'password'}
                className="focus:outline-none pl-3 py-2 block w-full pr-10 sm:text-sm border-b-2 border-gray-300"
                value={passwordConfirm}
                onChange={(e) => setPasswordConfirm(e.target.value)}
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

          <div className="mt-10">
            <button className="btn-primary w-full" disabled={loading}>
              {loading ? 'Submitting...' : 'Reset Password'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

ChangePassword.getLayout = function getLayout(page: JSX.Element) {
  return <AuthLayout>{page}</AuthLayout>
}
