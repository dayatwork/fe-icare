/* eslint-disable @next/next/no-img-element */
// import Image from 'next/image'
import { useState } from 'react'
import { RadioGroup } from '@headlessui/react'
import Image from 'next/image'
import { StarIcon } from '@heroicons/react/solid'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { parseCookies } from 'nookies'
import { LockClosedIcon } from '@heroicons/react/outline'
import useSWR from 'swr'

import Layout from '@/components/Layout'
import { DatePicker } from '@/components/DatePicker'
import { Service, Centre } from 'mock-data'
import { fetcher } from 'utils'

export default function BookingCentre() {
  const router = useRouter()
  const cookies = parseCookies()
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth() + 1)
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear())
  const [selectedDate, setSelectedDate] = useState(new Date().getDate())
  const [selectedTime, setSelectedTime] = useState('')
  const [paymentMethod, setPaymentMethod] = useState('')
  const [selectedService, setSelectedService] = useState<number>()
  const { data: centre } = useSWR<Centre>(
    () => router.query.slug && `/api/centres/${router.query.slug}`,
    fetcher
  )
  const { data: services } = useSWR<Service[]>(() => `/api/services/`, fetcher)

  const selectedServiceDetail = services?.find(
    (service) => service.id === selectedService
  )

  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="grid grid-cols-3 gap-4 lg:gap-10 py-6">
        {/* Left */}
        <div className="col-span-3 lg:col-span-2">
          <div className="bg-white shadow-md rounded-md p-4 md:p-6 mb-6">
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

                <div className="mb-4 md:mb-8 flex space-x-6 md:space-x-10 px-4">
                  <span className="py-2 text-lg font-semibold">AM</span>
                  <div className="flex-1 grid grid-cols-3 md:grid-cols-4 gap-2 md:gap-4">
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
                              className={`flex items-center justify-center  cursor-pointer text-lg py-2 rounded-md whitespace-nowrap ${
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

                <div className="mb-4 flex space-x-6 md:space-x-10 px-4">
                  <span className="py-2 text-lg font-semibold">PM</span>
                  <div className="flex-1 grid grid-cols-3 md:grid-cols-4 gap-2 md:gap-4">
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
                              className={`flex items-center justify-center  cursor-pointer text-lg py-2 rounded-md whitespace-nowrap ${
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
          <div className="bg-white shadow-md rounded-md p-4 md:p-6 mb-6">
            <h2 className="font-semibold text-xl mb-2 pb-2 border-b border-gray-200">
              Select Service
            </h2>

            <RadioGroup value={selectedService} onChange={setSelectedService}>
              <RadioGroup.Label className="sr-only">Service</RadioGroup.Label>
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
                {services
                  ?.filter((service) => service.centerId === centre?.id)
                  .map((service) => (
                    <RadioGroup.Option
                      key={service.id}
                      value={service.id}
                      className={({ checked }) =>
                        `p-4 rounded-xl border shadow border-limeade bg-white cursor-pointer ${
                          checked
                            ? 'border-4 bg-[#CBFE5B] bg-opacity-10 shadow-xl outline-none'
                            : 'border shadow'
                        }`
                      }
                    >
                      <ServiceCard service={service} />
                    </RadioGroup.Option>
                  ))}
              </div>
            </RadioGroup>
          </div>
        </div>

        {/* Right */}
        <div className="col-span-3 lg:col-span-1">
          <div className="bg-white shadow-md rounded-md p-4 md:p-6 mb-6">
            <div className="flex space-x-3 py-2">
              <img
                src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&q=80"
                alt="Person"
                className="object-cover w-24 h-20"
              />
              <div className="flex-1">
                {selectedService ? (
                  <h3 className="font-semibold text-lg mb-1.5">
                    {selectedServiceDetail?.name}
                  </h3>
                ) : (
                  <p className="text-lg bg-limeade bg-opacity-20 text-center mb-2 py-1 text-verdun-green">
                    Please select service
                  </p>
                )}
                <p className="text-gray-500 text-sm mb-2">{centre?.name}</p>
              </div>
            </div>
            <p className="text-sm mb-2">{centre?.location}</p>
            {/* <p className="text-sm mb-4">Therapist : Miss Lin Yuan</p> */}
            {selectedService ? (
              <>
                <ul>
                  <li className="flex justify-between items-center py-3 border-t border-gray-200">
                    <p className="text-gray-500">Price</p>
                    <p>
                      <span className="text-gray-500 line-through mr-2">
                        RM{selectedServiceDetail?.originalPrice}
                      </span>
                      RM{selectedServiceDetail?.price}
                    </p>
                  </li>
                  <li className="flex justify-between items-center py-3 border-t border-gray-200">
                    <p className="text-gray-500">Booking Fee</p>
                    <p>RM{selectedServiceDetail?.bookingPrice}</p>
                  </li>
                  <li className="flex justify-between items-center py-3 border-t border-gray-200">
                    <p className="font-semibold text-lg">Total Price</p>
                    <p className="font-semibold text-limeade text-xl">
                      RM
                      {selectedServiceDetail &&
                        selectedServiceDetail.price +
                          selectedServiceDetail.bookingPrice}
                    </p>
                  </li>
                </ul>

                <div>
                  <label
                    htmlFor="paymentMethod"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Payment Method
                  </label>
                  <div className="mt-1">
                    <select
                      id="paymentMethod"
                      className="form-select appearance-none block w-full px-3 py-2  placeholder-gray-400 focus:outline-none sm:text-sm border-gray-300 rounded-md"
                      value={paymentMethod}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                    >
                      <option value="">Choose Payment Method</option>
                      <option value="Payment A">Cash</option>
                      <option value="Payment B">Credit</option>
                      <option value="Payment C">Paypal</option>
                      <option value="Payment D"></option>
                    </select>
                  </div>
                </div>

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

const ServiceCard = ({ service }: { service: Service }) => {
  return (
    <div>
      {/* Rating */}
      <div className="flex justify-end mb-3">
        <div className="flex items-center space-x-2">
          <div className="flex items-center">
            {service?.rating &&
              Array.from({ length: service?.rating }, (_, i) => i + 1).map(
                (i) => <StarIcon key={i} className="w-4 h-4 text-gold" />
              )}
          </div>
          <p className="text-sm">{service?.ratedBy} Rated</p>
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
      <h3 className="mt-2 font-semibold text-lg">{service?.name}</h3>
      <p className="space-x-2 mt-6">
        <span className="text-lg text-gray-500 line-through">
          RM{service?.originalPrice}
        </span>
        <span className="text-lg text-limeade font-semibold">
          RM{service?.price}
        </span>
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
