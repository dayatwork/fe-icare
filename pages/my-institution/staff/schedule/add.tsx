/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/display-name */
import { useState } from 'react'
import Link from 'next/link'
import { useForm, useFieldArray } from 'react-hook-form'

import { InstitutionLayout } from 'layouts/InstitutionLayout'

export default function InstitutionStaffSchedule() {
  const [name, setName] = useState('')

  const { register, control } = useForm()
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'schedules',
  })

  return (
    <>
      <div className="py-6 md:py-10 px-4 md:px-10 bg-white flex justify-between items-center">
        <h1 className="text-xl md:text-2xl font-bold">Add New Schedule</h1>
      </div>

      <div className="pt-6 pb-10 px-4 md:px-10">
        <Link href="/my-institution/staff/schedule">
          <a className="text-limeade hover:underline hover:bg-opacity-10 mb-4 inline-block">
            &larr; Back to Staff List
          </a>
        </Link>
        <form>
          <div className="bg-white p-10 rounded-md shadow max-w-7xl grid grid-cols-1 gap-6">
            <div>
              <label
                htmlFor="staff"
                className="block text-sm font-medium text-gray-700"
              >
                Full Name
              </label>
              <div>
                <select
                  id="name"
                  className="form-select border-t-0 border-l-0 border-r-0 appearance-none block w-full px-3 py-2  placeholder-gray-400 focus:outline-none sm:text-sm border-b-2 border-gray-300"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                >
                  <option value="">Choose Staff</option>
                  <option value="Staff A">Staff A</option>
                  <option value="Staff B">Staff B</option>
                  <option value="Staff C">StCff C</option>
                  <option value="Staff D">Staff D</option>
                </select>
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
              className="px-4 py-2 bg-limeade rounded-md text-white hover:bg-opacity-90"
              type="submit"
            >
              Save Schedule
            </button>
          </div>
        </form>
      </div>
    </>
  )
}

InstitutionStaffSchedule.getLayout = function getLayout(page: JSX.Element) {
  return <InstitutionLayout>{page}</InstitutionLayout>
}
