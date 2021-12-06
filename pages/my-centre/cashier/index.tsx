/* eslint-disable react/display-name */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-img-element */
import { useMemo, Fragment, useState, Dispatch, SetStateAction } from 'react'
import { Transition, Listbox, Tab } from '@headlessui/react'
import { CheckIcon, SelectorIcon } from '@heroicons/react/outline'
import {
  FaTemperatureHigh,
  FaTemperatureLow,
  FaHeartbeat,
} from 'react-icons/fa'

import { PaginationTable } from 'components/table'

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

const filters = [{ name: 'Today' }, { name: 'All' }]

import { CentreLayout } from 'layouts/CentreLayout'

export default function MyCentreCashierPage() {
  const [filter, setFilter] = useState(filters[0])

  const data = useMemo(
    () => [
      {
        id: 1,
        customerId: 'ASAS1112',
        therapistId: 'TSAS1112',
        service: '1-Hour Full Body Massage Yeo Beuty & Spa',
        appointment: '14:00',
        checkIn: '14:00',
        checkOut: '14:53',
        paidAmount: 78.9,
        temperature: 34,
        healthRiskPercentage: 30,
      },
      {
        id: 2,
        customerId: 'ASAS1113',
        therapistId: 'TSAS1113',
        service: 'Cancer Beacon Screening',
        appointment: '14:00',
        checkIn: '14:13',
        checkOut: null,
        paidAmount: null,
        temperature: 37,
        healthRiskPercentage: 90,
      },
      {
        id: 3,
        customerId: 'ASAS1114',
        therapistId: 'TSAS1114',
        service: 'Menicure',
        appointment: '14:00',
        checkIn: '14:13',
        checkOut: '16:00',
        paidAmount: 78.9,
        temperature: 39,
        healthRiskPercentage: 60,
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
        Header: 'Therapist ID',
        Footer: 'Therapist ID',
        accessor: 'therapistId',
      },
      {
        Header: 'Check-In',
        Footer: 'Check-In',
        accessor: 'checkIn',
        Cell: ({ value }: any) =>
          value ? <>{value}</> : <p className="text-gray-500">No Data</p>,
      },
      {
        Header: 'Temperature',
        Footer: 'Temperature',
        accessor: 'temperature',
        Cell: ({ value }: any) =>
          value < 36 ? (
            <p className="flex items-center space-x-2">
              <span>{value}&deg;C</span>{' '}
              <FaTemperatureLow className="text-[#34a8eb]" />
            </p>
          ) : value > 38 ? (
            <p className="flex items-center space-x-2">
              <span>{value}&deg;C</span>{' '}
              <FaTemperatureHigh className="text-red-500" />
            </p>
          ) : (
            <p className="flex items-center space-x-2">
              <span>{value}&deg;C</span>
            </p>
          ),
      },
      {
        Header: 'Health Risk',
        Footer: 'Health Risk',
        accessor: 'healthRiskPercentage',
        Cell: ({ value }: any) =>
          value < 50 ? (
            <p className="flex items-center space-x-2">
              <FaHeartbeat className="text-red-500" />
              <span>{value}%</span>{' '}
            </p>
          ) : value < 70 ? (
            <p className="flex items-center space-x-2">
              <FaHeartbeat className="text-[#ebae34]" />
              <span>{value}%</span>{' '}
            </p>
          ) : (
            <p className="flex items-center space-x-2">
              <FaHeartbeat className="text-limeade" />
              <span>{value}%</span>
            </p>
          ),
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
        <h1 className="text-xl md:text-2xl font-bold">Cashier</h1>
      </div>

      <div className="pt-6 pb-10 px-4 md:px-10">
        <Tab.Group>
          <Tab.List>
            <Tab
              className={({ selected }) =>
                `text-lg px-10 py-2 border-b-4 hover:bg-white ${
                  selected ? 'border-limeade' : 'border-gray-100'
                }`
              }
            >
              Invoice
            </Tab>
            <Tab
              className={({ selected }) =>
                `text-lg px-10 py-2 border-b-4 hover:bg-white ${
                  selected ? 'border-limeade' : 'border-gray-100'
                }`
              }
            >
              Payment
            </Tab>
            <Tab
              className={({ selected }) =>
                `text-lg px-10 py-2 border-b-4 hover:bg-white ${
                  selected ? 'border-limeade' : 'border-gray-100'
                }`
              }
            >
              Receipt
            </Tab>
          </Tab.List>
          <Tab.Panels className="py-8">
            <Tab.Panel>
              <PaginationTable
                showFooter={false}
                data={data}
                columns={columns}
                searchable={true}
                pagination={true}
                action={
                  <Filter
                    filter={filter}
                    setFilter={setFilter}
                    filters={filters}
                  />
                }
              />
            </Tab.Panel>
            <Tab.Panel>
              <PaginationTable
                showFooter={false}
                data={data}
                columns={columns}
                searchable={true}
                pagination={true}
                action={
                  <Filter
                    filter={filter}
                    setFilter={setFilter}
                    filters={filters}
                  />
                }
              />
            </Tab.Panel>
            <Tab.Panel>
              <PaginationTable
                showFooter={false}
                data={data}
                columns={columns}
                searchable={true}
                pagination={true}
                action={
                  <Filter
                    filter={filter}
                    setFilter={setFilter}
                    filters={filters}
                  />
                }
              />
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
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

MyCentreCashierPage.getLayout = function getLayout(page: JSX.Element) {
  return <CentreLayout>{page}</CentreLayout>
}
