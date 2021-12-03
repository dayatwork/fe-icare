/* eslint-disable react/display-name */
import { useMemo, Fragment, useState, Dispatch, SetStateAction } from 'react'
import { Transition, Listbox } from '@headlessui/react'

import { InstitutionLayout } from 'layouts/InstitutionLayout'
import { PaginationTable } from 'components/table'
import { CheckIcon, SelectorIcon } from '@heroicons/react/outline'

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

const filters = [{ name: 'Today' }, { name: 'All' }]

export default function InstitutionCustomers() {
  const [filter, setFilter] = useState(filters[0])

  const data = useMemo(
    () => [
      {
        id: 1,
        customerId: 'ASAS1112',
        service: '1-Hour Full Body Massage Yeo Beuty & Spa',
        appointment: '14:00',
        checkIn: '14:00',
        checkOut: '14:53',
        paidAmount: 78.9,
      },
      {
        id: 2,
        customerId: 'ASAS1113',
        service: 'Cancer Beacon Screening',
        appointment: '14:00',
        checkIn: '14:13',
        checkOut: null,
        paidAmount: null,
      },
      {
        id: 3,
        customerId: 'ASAS1114',
        service: 'Menicure',
        appointment: '14:00',
        checkIn: '14:13',
        checkOut: '16:00',
        paidAmount: 78.9,
      },
      {
        id: 4,
        customerId: 'ASAS1115',
        service: 'Foot Massage',
        appointment: '14:00',
        checkIn: null,
        checkOut: null,
        paidAmount: null,
      },
      {
        id: 5,
        customerId: 'ASAS1116',
        service: 'Menicure',
        appointment: '14:00',
        checkIn: null,
        checkOut: null,
        paidAmount: null,
      },
    ],
    []
  )
  const columns = useMemo(
    () => [
      {
        Header: 'Customer ID',
        Footer: 'Customer ID',
        accessor: 'customerId',
      },
      {
        Header: 'Service',
        Footer: 'Service',
        accessor: 'service',
      },
      {
        Header: 'Appointment',
        Footer: 'Appointment',
        accessor: 'appointment',
      },
      {
        Header: 'Check-In',
        Footer: 'Check-In',
        accessor: 'checkIn',
        Cell: ({ value }: any) =>
          value ? <>{value}</> : <p className="text-gray-500">No Data</p>,
      },
      {
        Header: 'Check-Out',
        Footer: 'Check-Out',
        accessor: 'checkOut',
        Cell: ({ value }: any) =>
          value ? <>{value}</> : <p className="text-gray-500">No Data</p>,
      },
      {
        Header: 'Paid Amount',
        Footer: 'Paid Amount',
        accessor: 'paidAmount',
        Cell: ({ value }: any) =>
          value ? (
            <p className="text-limeade font-bold">{`RM ${value}`}</p>
          ) : (
            <p className="text-gray-500">No Data</p>
          ),
      },
    ],
    []
  )

  return (
    <>
      <div className="py-6 md:py-10 px-4 md:px-10 bg-white">
        <h1 className="text-xl md:text-2xl font-bold">Customer List</h1>
      </div>

      <div className="pt-6 pb-10 px-4 md:px-10">
        <PaginationTable
          showFooter={false}
          data={data}
          columns={columns}
          searchable={true}
          pagination={true}
          action={
            <Filter filter={filter} setFilter={setFilter} filters={filters} />
          }
        />
      </div>
    </>
  )
}

type Filter = {
  name: string
}

type Props = {
  filter: Filter
  setFilter: Dispatch<
    SetStateAction<{
      name: string
    }>
  >
  filters: Filter[]
}

const Filter = (props: Props) => {
  const { filter, setFilter, filters } = props
  return (
    <Listbox value={filter} onChange={setFilter}>
      {({ open }) => (
        <>
          <Listbox.Label className="block font-semibold sr-only">
            Filter
          </Listbox.Label>
          <div className="relative w-32">
            <Listbox.Button className="relative w-full bg-white border border-gray-300 rounded-md shadow-sm pl-3 pr-3 py-1.5 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-lebg-limeade focus:border-lebg-limeade text-sm">
              <span className="flex items-center">
                <span className="block truncate">{filter.name}</span>
              </span>
              <span className="ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                <SelectorIcon
                  className="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </span>
            </Listbox.Button>

            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-56 rounded-md py-0.5 text-sm ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                {filters.map((filter) => (
                  <Listbox.Option
                    key={filter.name}
                    className={({ active }) =>
                      classNames(
                        active ? 'text-white bg-limeade' : 'text-gray-900',
                        'cursor-default select-none relative py-2 pl-3 pr-9'
                      )
                    }
                    value={filter}
                  >
                    {({ selected, active }) => (
                      <>
                        <div className="flex items-center">
                          <span
                            className={classNames(
                              selected ? 'font-semibold' : 'font-normal',
                              'block truncate'
                            )}
                          >
                            {filter.name}
                          </span>
                        </div>

                        {selected ? (
                          <span
                            className={classNames(
                              active ? 'text-white' : 'text-lebg-limeade',
                              'absolute inset-y-0 right-0 flex items-center pr-4'
                            )}
                          >
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </>
      )}
    </Listbox>
  )
}

InstitutionCustomers.getLayout = function getLayout(page: JSX.Element) {
  return <InstitutionLayout>{page}</InstitutionLayout>
}
