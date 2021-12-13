/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/display-name */
import { useState } from 'react'
import Link from 'next/link'
import { InstitutionLayout } from 'layouts/InstitutionLayout'
import { Step } from '@/components/step'

export default function InstitutionServiceSchedule() {
  const [step, setStep] = useState(1)
  const [serviceName, setServiceName] = useState('')
  const [description, setDescription] = useState('')
  const [duration, setDuration] = useState('')
  const [price, setPrice] = useState('')
  const [image, setImage] = useState('')
  const [staffIncharge, setStaffIncharge] = useState('')
  const [workingHours, setWorkingHours] = useState('')
  const [incrementSchedule, setIncrementSchedule] = useState('')
  const [slots, setSlots] = useState('')

  return (
    <>
      <div className="py-6 md:py-10 px-4 md:px-10 bg-white flex justify-between items-center">
        <h1 className="text-xl md:text-2xl font-bold">
          Add New Service Schedule
        </h1>
        <Step currentStep={step} setCurrentStep={setStep} />
      </div>

      <div className="pt-6 pb-10 px-4 md:px-10">
        <Link href="/my-institution/service-schedule">
          <a className="text-limeade hover:underline hover:bg-opacity-10 mb-4 inline-block">
            &larr; Back to Service Schedule List
          </a>
        </Link>
        <form>
          {step === 1 && (
            <>
              <div className="bg-white p-10 rounded-md shadow max-w-7xl grid grid-cols-1 gap-6">
                <div>
                  <label
                    htmlFor="service-name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Service Name
                  </label>
                  <div>
                    <input
                      id="service-name"
                      type="text"
                      className="appearance-none block w-full px-3 py-2  placeholder-gray-400 focus:outline-none sm:text-sm border-b-2 border-gray-300"
                      value={serviceName}
                      onChange={(e) => setServiceName(e.target.value)}
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="description"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Description
                  </label>
                  <div>
                    <input
                      id="description"
                      type="text"
                      className="appearance-none block w-full px-3 py-2  placeholder-gray-400 focus:outline-none sm:text-sm border-b-2 border-gray-300"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="duration"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Duration
                  </label>
                  <div>
                    <input
                      id="duration"
                      type="text"
                      className="appearance-none block w-full px-3 py-2  placeholder-gray-400 focus:outline-none sm:text-sm border-b-2 border-gray-300"
                      value={duration}
                      onChange={(e) => setDuration(e.target.value)}
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="price"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Price
                  </label>
                  <div>
                    <input
                      id="price"
                      type="text"
                      className="appearance-none block w-full px-3 py-2  placeholder-gray-400 focus:outline-none sm:text-sm border-b-2 border-gray-300"
                      value={price}
                      onChange={(e) => setPrice(e.target.value)}
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="image"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Image
                  </label>
                  <div>
                    <input
                      id="image"
                      type="file"
                      className="appearance-none block w-full px-3 py-2  placeholder-gray-400 focus:outline-none sm:text-sm border-b-2 border-gray-300"
                      value={image}
                      onChange={(e) => setImage(e.target.value)}
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="staff-incharge"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Staff incharge
                  </label>
                  <div>
                    <select
                      id="staff-incharge"
                      className="appearance-none block w-full px-3 py-2  placeholder-gray-400 focus:outline-none sm:text-sm border-b-2 border-gray-300"
                      value={staffIncharge}
                      onChange={(e) => setStaffIncharge(e.target.value)}
                    >
                      <option value="">Choose Staff</option>
                      <option value="A">A</option>
                      <option value="B">B</option>
                      <option value="C">C</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="flex justify-end mt-4 max-w-7xl">
                <button
                  className="px-4 py-2 bg-limeade rounded-md text-white w-24"
                  type="button"
                  onClick={() => setStep(2)}
                >
                  Next
                </button>
              </div>
            </>
          )}
          {step === 2 && (
            <>
              <div className="bg-white p-10 rounded-md shadow max-w-7xl grid grid-cols-1 gap-6">
                <div>
                  <label
                    htmlFor="working-hours"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Total Working Hours
                  </label>
                  <div>
                    <input
                      id="working-hours"
                      type="text"
                      className="appearance-none block w-full px-3 py-2  placeholder-gray-400 focus:outline-none sm:text-sm border-b-2 border-gray-300"
                      value={workingHours}
                      onChange={(e) => setWorkingHours(e.target.value)}
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="increment-schedule"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Increment Schedule
                  </label>
                  <div>
                    <input
                      id="increment-schedule"
                      type="text"
                      className="appearance-none block w-full px-3 py-2  placeholder-gray-400 focus:outline-none sm:text-sm border-b-2 border-gray-300"
                      value={incrementSchedule}
                      onChange={(e) => setIncrementSchedule(e.target.value)}
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="slots"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Number of Slots
                  </label>
                  <div>
                    <input
                      id="slots"
                      type="text"
                      className="appearance-none block w-full px-3 py-2  placeholder-gray-400 focus:outline-none sm:text-sm border-b-2 border-gray-300"
                      value={slots}
                      onChange={(e) => setSlots(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              <div className="flex justify-end space-x-4 mt-4 max-w-7xl">
                <button
                  className="px-4 py-2 bg-gray-300 rounded-md  w-24"
                  type="button"
                  onClick={() => setStep(1)}
                >
                  Back
                </button>
                <button
                  className="px-4 py-2 bg-limeade rounded-md text-white w-24"
                  type="button"
                  onClick={() => setStep(3)}
                >
                  Next
                </button>
              </div>
            </>
          )}
          {step === 3 && (
            <>
              <div className="bg-white shadow rounded-lg p-4 sm:p-6 lg:p-10 max-w-7xl">
                <dl className="space-y-4 md:space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                    <div>
                      <dt className="text-sm text-gray-600">Service Name</dt>
                      <dd className="font-semibold">{serviceName}</dd>
                    </div>
                    <div>
                      <dt className="text-sm text-gray-600">Description</dt>
                      <dd className="font-semibold">{description}</dd>
                    </div>
                    <div>
                      <dt className="text-sm text-gray-600">Duration</dt>
                      <dd className="font-semibold">{duration}</dd>
                    </div>
                    <div>
                      <dt className="text-sm text-gray-600">Price</dt>
                      <dd className="font-semibold">
                        {price ? `RM ${price}` : ''}
                      </dd>
                    </div>
                    <div>
                      <dt className="text-sm text-gray-600">Staff incharge</dt>
                      <dd className="font-semibold">{staffIncharge}</dd>
                    </div>
                    <div>
                      <dt className="text-sm text-gray-600">
                        Total Working Hours
                      </dt>
                      <dd className="font-semibold">{workingHours}</dd>
                    </div>
                  </div>
                  <div>
                    <dt className="text-sm text-gray-600">
                      Increment Schedule
                    </dt>
                    <dd className="font-semibold">{incrementSchedule}</dd>
                  </div>
                  <div>
                    <dt className="text-sm text-gray-600">Number of Slots</dt>
                    <dd className="font-semibold">{slots}</dd>
                  </div>
                </dl>
              </div>
              <div className="flex justify-end space-x-4 mt-4 max-w-7xl">
                <button
                  className="px-4 py-2 bg-gray-300 rounded-md  w-24"
                  type="button"
                  onClick={() => setStep(2)}
                >
                  Back
                </button>
                <button
                  className="px-4 py-2 bg-limeade rounded-md text-white w-24"
                  type="button"
                >
                  Publish
                </button>
              </div>
            </>
          )}
        </form>
      </div>
    </>
  )
}

InstitutionServiceSchedule.getLayout = function getLayout(page: JSX.Element) {
  return <InstitutionLayout>{page}</InstitutionLayout>
}
