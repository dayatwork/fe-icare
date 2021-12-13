/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/display-name */
import { useState } from 'react'
import Link from 'next/link'
import { useForm, useFieldArray } from 'react-hook-form'
import { InstitutionLayout } from 'layouts/InstitutionLayout'
import { InputDatePicker } from 'components/datepicker/InputDatePicker'

export default function InstitutionServices() {
  const [serviceName, setServiceName] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState('')
  const [image, setImage] = useState('')
  const [staffIncharge, setStaffIncharge] = useState('')
  const [location, setLocation] = useState('')
  // const [workingHours, setWorkingHours] = useState('')
  // const [incrementSchedule, setIncrementSchedule] = useState('')
  // const [slots, setSlots] = useState('')
  const { register, control } = useForm()
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'schedules',
  })

  return (
    <>
      <div className="py-6 md:py-10 px-4 md:px-10 bg-white flex justify-between items-center">
        <h1 className="text-xl md:text-2xl font-bold">Add New Service</h1>
      </div>

      <div className="pt-6 pb-10 px-4 md:px-10">
        <Link href="/my-institution/services">
          <a className="text-limeade hover:underline hover:bg-opacity-10 mb-4 inline-block">
            &larr; Back to Service List
          </a>
        </Link>
        <form>
          <div className="bg-white p-10 rounded-md shadow max-w-7xl grid grid-cols-1 gap-10">
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
                htmlFor="staff-incharge"
                className="block text-sm font-medium text-gray-700"
              >
                Set pricing
              </label>
              <div>
                <select
                  id="staff-incharge"
                  className="form-select border-t-0 border-r-0 border-l-0 appearance-none block w-full px-3 py-2  placeholder-gray-400 focus:outline-none sm:text-sm border-b-2 border-gray-300"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                >
                  <option value="">Choose Price</option>
                  <option value="Price A">Price A</option>
                  <option value="Price B">Price B</option>
                  <option value="Price C">Price C</option>
                </select>
              </div>
            </div>
            <div>
              <label
                htmlFor="location"
                className="block text-sm font-medium text-gray-700"
              >
                Location
              </label>
              <div>
                <input
                  id="location"
                  type="text"
                  className="appearance-none block w-full px-3 py-2  placeholder-gray-400 focus:outline-none sm:text-sm border-b-2 border-gray-300"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
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
                  className="form-select border-t-0 border-r-0 border-l-0 appearance-none block w-full px-3 py-2  placeholder-gray-400 focus:outline-none sm:text-sm border-b-2 border-gray-300"
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
            <div>
              <p className="block text-sm font-medium text-gray-700">
                Available Time
              </p>
              <div className="mt-2">
                <dl className="w-full px-3 py-2  placeholder-gray-400 focus:outline-none sm:text-sm border-2 border-gray-300 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div className="flex space-x-2">
                    <dt className="text-sm text-gray-600 w-24">Sunday</dt>
                    <dd>09:00 - 10:00</dd>
                  </div>
                  <div className="flex space-x-2">
                    <dt className="text-sm text-gray-600 w-24">Monday</dt>
                    <dd>09:00 - 10:00</dd>
                  </div>
                  <div className="flex space-x-2">
                    <dt className="text-sm text-gray-600 w-24">Tuesday</dt>
                    <dd>09:00 - 10:00</dd>
                  </div>
                  <div className="flex space-x-2">
                    <dt className="text-sm text-gray-600 w-24">Wednesday</dt>
                    <dd>09:00 - 10:00</dd>
                  </div>
                  <div className="flex space-x-2">
                    <dt className="text-sm text-gray-600 w-24">Thursday</dt>
                    <dd>09:00 - 10:00</dd>
                  </div>
                  <div className="flex space-x-2">
                    <dt className="text-sm text-gray-600 w-24">Friday</dt>
                    <dd>09:00 - 10:00</dd>
                  </div>
                  <div className="flex space-x-2">
                    <dt className="text-sm text-gray-600 w-24">Saturday</dt>
                    <dd>09:00 - 10:00</dd>
                  </div>
                </dl>
              </div>
            </div>
            <div>
              <p className="block text-sm font-medium text-gray-700">
                Schedule Day Range
              </p>
              <div className="mt-2">
                <InputDatePicker
                  label="Duration"
                  hideLabel
                  placeholder="Duration"
                />
              </div>
            </div>
            <div>
              <p className="block text-sm font-medium text-gray-700">
                Schedule
              </p>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Days
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Start Time
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        End Time
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Interval
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Transition
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      ></th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {fields.map((fields, index) => (
                      <tr key={fields.id}>
                        <td className="px-3 py-4 whitespace-nowrap">
                          <select
                            className="focus:ring-limeade focus:border-limeade outline-none block w-full px-4 sm:text-sm border-gray-300 rounded-md form-select min-w-[150px]"
                            {...register(`schedules.${index}.day`)}
                          >
                            <option value="">Select Day</option>
                            <option value="Sunday">Sunday</option>
                            <option value="Monday">Monday</option>
                            <option value="Tuesday">Tuesday</option>
                            <option value="Wednesday">Wednesday</option>
                            <option value="Thursday">Thursday</option>
                            <option value="Friday">Friday</option>
                            <option value="Saturday">Saturday</option>
                          </select>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <input
                            className="focus:ring-limeade focus:border-limeade outline-none block w-full px-4 sm:text-sm border-gray-300 rounded-md form-input"
                            type="time"
                            {...register(`schedules.${index}.startTime`)}
                          />
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <input
                            className="focus:ring-limeade focus:border-limeade outline-none block w-full px-4 sm:text-sm border-gray-300 rounded-md form-input"
                            type="time"
                            {...register(`schedules.${index}.endTime`)}
                          />
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <input
                            className="focus:ring-limeade focus:border-limeade outline-none block w-full px-4 sm:text-sm border-gray-300 rounded-md form-input"
                            type="number"
                            {...register(`schedules.${index}.interval`)}
                          />
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <input
                            className="focus:ring-limeade focus:border-limeade outline-none block w-full px-4 sm:text-sm border-gray-300 rounded-md form-input"
                            type="number"
                            {...register(`schedules.${index}.transition`)}
                          />
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <button
                            className="text-xs px-4 py-2 bg-red-600 hover:bg-red-500 text-white rounded-md"
                            onClick={() => remove(index)}
                          >
                            Remove
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="justify-center flex">
                <button
                  type="button"
                  className="mt-2 bg-gray-200 hover:bg-gray-100 text-gray-800 px-4 py-2 rounded-md text-sm font-semibold"
                  onClick={() => append({})}
                >
                  Add Schedule
                </button>
              </div>
            </div>
          </div>
          <div className="flex justify-end mt-4 max-w-7xl">
            <button
              className="px-4 py-2 bg-limeade rounded-md text-white w-24"
              type="button"
            >
              Add
            </button>
          </div>
        </form>
      </div>
    </>
  )
}

InstitutionServices.getLayout = function getLayout(page: JSX.Element) {
  return <InstitutionLayout>{page}</InstitutionLayout>
}
