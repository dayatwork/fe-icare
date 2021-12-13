/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/display-name */
import { useMemo } from 'react'
import Link from 'next/link'

import { InstitutionLayout } from 'layouts/InstitutionLayout'
import { PaginationTable } from 'components/table'

type Schedule = {
  id: number
  day: string
  startTime: string
  endTime: string
}

export default function InstitutionStaffSchedule() {
  const data = useMemo(
    () => [
      {
        id: 1,
        name: 'John Doe',
        jobTitle: 'Therapist',
        photoURL:
          'https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&q=80',
        schedules: [
          {
            id: 1,
            day: 'Monday',
            startTime: '08:00',
            endTime: '13:00',
          },
          {
            id: 2,
            day: 'Tuesday',
            startTime: '08:00',
            endTime: '13:00',
          },
        ],
      },
      {
        id: 2,
        name: 'Jane Doe',
        jobTitle: 'Therapist',
        photoURL:
          'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&q=80',
        schedules: [
          {
            id: 1,
            day: 'Monday',
            startTime: '08:00',
            endTime: '13:00',
          },
          {
            id: 2,
            day: 'Tuesday',
            startTime: '08:00',
            endTime: '13:00',
          },
        ],
      },
      {
        id: 3,
        name: 'Bob',
        jobTitle: 'Therapist',
        photoURL:
          'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&q=80',
        schedules: [
          {
            id: 1,
            day: 'Monday',
            startTime: '08:00',
            endTime: '13:00',
          },
          {
            id: 2,
            day: 'Tuesday',
            startTime: '08:00',
            endTime: '13:00',
          },
        ],
      },
    ],
    []
  )
  const columns = useMemo(
    () => [
      {
        Header: 'Photo',
        Footer: 'Photo',
        accessor: 'photoURL',
        Cell: ({ value, row }: any) => (
          <img
            src={value}
            alt={`${row.original.name} photo`}
            className="w-20 h-20 rounded-full object-cover shadow-2xl"
          />
        ),
      },
      {
        Header: 'Name',
        Footer: 'Name',
        accessor: 'name',
        Cell: ({ value }) => <p className="font-semibold">{value}</p>,
      },
      {
        Header: 'Job Title',
        Footer: 'Job Title',
        accessor: 'jobTitle',
      },
      {
        Header: 'Schedules',
        Footer: 'Schedules',
        accessor: 'schedules',
        Cell: ({ value }: { value: Schedule[] }) => {
          return value.map((schedule) => (
            <div key={schedule.id} className="flex space-x-3">
              <p className="w-20">{schedule.day}</p>
              <p className="flex-1">
                {schedule.startTime} - {schedule.endTime}
              </p>
            </div>
          ))
        },
      },

      {
        Header: 'Action',
        Footer: 'Action',
        Cell: () => (
          <div className="flex space-x-3">
            <button className="py-1.5 px-3 rounded-md border text-limeade border-limeade">
              Edit
            </button>
            <button className="py-1.5 px-3 rounded-md border text-red-500 border-red-500">
              Delete
            </button>
          </div>
        ),
      },
    ],
    []
  )

  return (
    <>
      <div className="py-6 md:py-10 px-4 md:px-10 bg-white flex justify-between">
        <h1 className="text-xl md:text-2xl font-bold">Staff</h1>
        <Link href="/my-institution/staff/schedule/add">
          <a className="bg-limeade text-white text-lg px-4 py-2 rounded-md hover:bg-opacity-90">
            Add New Schedule
          </a>
        </Link>
      </div>

      <div className="pt-6 pb-10 px-4 md:px-10">
        <PaginationTable
          showFooter={false}
          data={data}
          columns={columns}
          searchable={true}
          pagination={true}
        />
      </div>
    </>
  )
}

InstitutionStaffSchedule.getLayout = function getLayout(page: JSX.Element) {
  return <InstitutionLayout>{page}</InstitutionLayout>
}
