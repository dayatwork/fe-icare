/* eslint-disable @next/next/no-img-element */
// import Image from 'next/image'
import { useState } from 'react'
import { RadioGroup } from '@headlessui/react'
import Image from 'next/image'
import { StarIcon } from '@heroicons/react/solid'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { parseCookies } from 'nookies'

import Layout from '@/components/Layout'
import { DatePicker } from '@/components/DatePicker'
import { LockClosedIcon } from '@heroicons/react/outline'

export default function BookingCentre() {
  const router = useRouter()
  const cookies = parseCookies()
  const [selectedMonth, setSelectedMonth] = useState('November')
  const [selectedYear, setSelectedYear] = useState(2021)
  const [selectedDate, setSelectedDate] = useState(12)
  const [selectedTime, setSelectedTime] = useState('09:00 AM')
  const [selectedService, setSelectedService] = useState('')

  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="grid grid-cols-3 gap-10 py-6">
        {/* Left */}
        <div className="col-span-2">
          <div className="bg-white shadow-md rounded-md p-6 mb-6">
            <h2 className="font-semibold text-xl mb-2 pb-2 border-b border-gray-200">
              Select Appointment Date & Time
            </h2>
            <div className="py-4">
              <DatePicker
                selectedDate={selectedDate}
                setSelectedDate={setSelectedDate}
                selectedMonth={selectedMonth}
                setSelectedMonth={setSelectedMonth}
                selectedYear={selectedYear}
                setSelectedYear={setSelectedYear}
              />
            </div>
            <div>
              <RadioGroup
                className="p-2  gap-4"
                value={selectedTime}
                onChange={setSelectedTime}
              >
                <RadioGroup.Label className="sr-only">
                  Select Time
                </RadioGroup.Label>

                <div className="mb-8 flex space-x-10 px-4">
                  <span className="py-2 text-lg font-semibold">AM</span>
                  <div className="flex-1 grid grid-cols-4 gap-4">
                    {[
                      '09:00 AM',
                      '10:00 AM',
                      '11:00 AM',
                      '01:00 PM',
                      '02:00 PM',
                      '03:00 PM',
                      '04:00 PM',
                      '05:00 PM',
                    ]
                      .filter((i) => i.split(' ')[1] === 'AM')
                      .map((i) => (
                        <RadioGroup.Option key={i} value={i}>
                          {({ checked }) => (
                            <span
                              className={`flex items-center justify-center  cursor-pointer text-lg py-2 rounded-md ${
                                checked
                                  ? 'bg-limeade text-white'
                                  : 'border border-limeade text-limeade '
                              }`}
                            >
                              {i}
                            </span>
                          )}
                        </RadioGroup.Option>
                      ))}
                  </div>
                </div>

                <div className="mb-4 flex space-x-10 px-4">
                  <span className="py-2 text-lg font-semibold">PM</span>
                  <div className="flex-1 grid grid-cols-4 gap-4">
                    {[
                      '09:00 AM',
                      '10:00 AM',
                      '11:00 AM',
                      '01:00 PM',
                      '02:00 PM',
                      '03:00 PM',
                      '04:00 PM',
                      '05:00 PM',
                    ]
                      .filter((i) => i.split(' ')[1] === 'PM')
                      .map((i) => (
                        <RadioGroup.Option key={i} value={i}>
                          {({ checked }) => (
                            <span
                              className={`flex items-center justify-center  cursor-pointer text-lg py-2 rounded-md ${
                                checked
                                  ? 'bg-limeade text-white'
                                  : 'border border-limeade text-limeade '
                              }`}
                            >
                              {i}
                            </span>
                          )}
                        </RadioGroup.Option>
                      ))}
                  </div>
                </div>
              </RadioGroup>
            </div>
          </div>

          {/* Select Service */}
          <div className="bg-white shadow-md rounded-md p-6 mb-6">
            <h2 className="font-semibold text-xl mb-2 pb-2 border-b border-gray-200">
              Select Service
            </h2>

            <RadioGroup value={selectedService} onChange={setSelectedService}>
              <RadioGroup.Label className="sr-only">Service</RadioGroup.Label>
              <div className="grid grid-cols-3 gap-6">
                <RadioGroup.Option
                  value="1-Hour full Body Massage Yeo Beuty & Spa #1"
                  className={({ checked }) =>
                    `p-4 rounded-xl border shadow border-limeade bg-white cursor-pointer ${
                      checked
                        ? 'border-4 bg-[#CBFE5B] bg-opacity-10 shadow-xl outline-none'
                        : 'border shadow'
                    }`
                  }
                >
                  <ServiceCard name="1-Hour full Body Massage Yeo Beuty & Spa #1" />
                </RadioGroup.Option>
                <RadioGroup.Option
                  value="1-Hour full Body Massage Yeo Beuty & Spa #2"
                  className={({ checked }) =>
                    `p-4 rounded-xl border shadow border-limeade bg-white cursor-pointer ${
                      checked
                        ? 'border-4 bg-[#CBFE5B] bg-opacity-10 shadow-xl outline-none'
                        : 'border shadow'
                    }`
                  }
                >
                  <ServiceCard name="1-Hour full Body Massage Yeo Beuty & Spa #2" />
                </RadioGroup.Option>
                <RadioGroup.Option
                  value="1-Hour full Body Massage Yeo Beuty & Spa #3"
                  className={({ checked }) =>
                    `p-4 rounded-xl border shadow border-limeade bg-white cursor-pointer ${
                      checked
                        ? 'border-4 bg-[#CBFE5B] bg-opacity-10 shadow-xl outline-none'
                        : 'border shadow'
                    }`
                  }
                >
                  <ServiceCard name="1-Hour full Body Massage Yeo Beuty & Spa #3" />
                </RadioGroup.Option>
                <RadioGroup.Option
                  value="1-Hour full Body Massage Yeo Beuty & Spa #4"
                  className={({ checked }) =>
                    `p-4 rounded-xl border shadow border-limeade bg-white cursor-pointer ${
                      checked
                        ? 'border-4 bg-[#CBFE5B] bg-opacity-10 shadow-xl outline-none'
                        : 'border shadow'
                    }`
                  }
                >
                  <ServiceCard name="1-Hour full Body Massage Yeo Beuty & Spa #4" />
                </RadioGroup.Option>
                <RadioGroup.Option
                  value="1-Hour full Body Massage Yeo Beuty & Spa #5"
                  className={({ checked }) =>
                    `p-4 rounded-xl border shadow border-limeade bg-white cursor-pointer ${
                      checked
                        ? 'border-4 bg-[#CBFE5B] bg-opacity-10 shadow-xl outline-none'
                        : 'border shadow'
                    }`
                  }
                >
                  <ServiceCard name="1-Hour full Body Massage Yeo Beuty & Spa #5" />
                </RadioGroup.Option>
                <RadioGroup.Option
                  value="1-Hour full Body Massage Yeo Beuty & Spa #6"
                  className={({ checked }) =>
                    `p-4 rounded-xl border shadow border-limeade bg-white cursor-pointer ${
                      checked
                        ? 'border-4 bg-[#CBFE5B] bg-opacity-10 shadow-xl outline-none'
                        : 'border shadow'
                    }`
                  }
                >
                  <ServiceCard name="1-Hour full Body Massage Yeo Beuty & Spa #6" />
                </RadioGroup.Option>
              </div>
            </RadioGroup>
          </div>
        </div>

        {/* Right */}
        <div>
          <div className="bg-white shadow-md rounded-md p-6 mb-6">
            <div className="flex space-x-3 py-2">
              <img
                src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&q=80"
                alt="Person"
                className="object-cover w-24 h-20"
              />
              <div className="flex-1">
                {selectedService ? (
                  <h3 className="font-semibold text-lg mb-1.5">
                    {selectedService}
                  </h3>
                ) : (
                  <p className="text-lg bg-limeade bg-opacity-20 text-center mb-2 py-1 text-verdun-green">
                    Please select service
                  </p>
                )}
                <p className="text-gray-500 text-sm mb-2">Vibes Spa</p>
              </div>
            </div>
            <p className="text-sm mb-2">
              No 123, Jalan University, Johor Bahru, Malaysia Thursday, 07 Oct
              2021
            </p>
            <p className="text-sm mb-4">Therapist : Miss Lin Yuan</p>
            {selectedService ? (
              <>
                <ul>
                  <li className="flex justify-between items-center py-3 border-t border-gray-200">
                    <p className="text-gray-500">Price</p>
                    <p>
                      <span className="text-gray-500 line-through mr-2">
                        RM168
                      </span>
                      RM68
                    </p>
                  </li>
                  <li className="flex justify-between items-center py-3 border-t border-gray-200">
                    <p className="text-gray-500">Booking Fee</p>
                    <p>RM18</p>
                  </li>
                  <li className="flex justify-between items-center py-3 border-t border-gray-200">
                    <p className="font-semibold text-lg">Total Price</p>
                    <p className="font-semibold text-limeade text-xl">RM86</p>
                  </li>
                </ul>

                {cookies && cookies.accessToken ? (
                  <button className="btn-primary mt-5 w-full">
                    Make Payment
                  </button>
                ) : (
                  <Link href={`/login?from=${router.asPath}`}>
                    <a className="btn-primary mt-5 w-full flex justify-center items-center space-x-2">
                      <span>Login to Make Payment</span>{' '}
                      <LockClosedIcon className="w-5 h-5 -mt-0.5" />
                    </a>
                  </Link>
                )}
              </>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  )
}

const ServiceCard = ({ name }: { name: string }) => {
  return (
    <div>
      {/* Rating */}
      <div className="flex justify-end mb-3">
        <div className="flex items-center space-x-2">
          <div className="flex items-center">
            <StarIcon className="w-4 h-4 text-gold" />
            <StarIcon className="w-4 h-4 text-gold" />
            <StarIcon className="w-4 h-4 text-gold" />
            <StarIcon className="w-4 h-4 text-gold" />
          </div>
          <p className="text-sm">58 Rated</p>
        </div>
      </div>
      <div className="aspect-w-3 aspect-h-2">
        <Image
          src="/images/promotion-2.png"
          alt="promotion 1"
          layout="fill"
          // className="object-cover"
        />
      </div>
      <h3 className="mt-2 font-semibold text-lg">{name}</h3>
      <p className="space-x-2 mt-6">
        <span className="text-lg text-gray-500 line-through">RM868</span>
        <span className="text-lg text-limeade font-semibold">RM268</span>
      </p>
    </div>
  )
}

BookingCentre.getLayout = function getLayout(page: JSX.Element) {
  return (
    <Layout className="min-h-screen flex flex-col bg-gray-200 justify-between">
      {page}
    </Layout>
  )
}
