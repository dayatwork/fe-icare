/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/display-name */
import { useMemo } from 'react'
import Link from 'next/link'

import { InstitutionLayout } from 'layouts/InstitutionLayout'
import { PaginationTable } from 'components/table'

export default function InstitutionServicePricing() {
  const data = useMemo(
    () => [
      {
        id: 1,
        name: '1-Hour full Body Massage Yeo Beuty & Spa',
        originalPrice: 108.9,
        price: 78.9,
        photoURL:
          'https://images.unsplash.com/photo-1515377905703-c4788e51af15?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&q=80',
      },
      {
        id: 2,
        name: '1-Hour full Body Massage Yeo Beuty & Spa',
        originalPrice: 108.9,
        price: 78.9,
        photoURL:
          'https://images.unsplash.com/photo-1515377905703-c4788e51af15?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&q=80',
      },
      {
        id: 3,
        name: '1-Hour full Body Massage Yeo Beuty & Spa',
        originalPrice: 108.9,
        price: 78.9,
        photoURL:
          'https://images.unsplash.com/photo-1515377905703-c4788e51af15?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&q=80',
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
            className="h-20"
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
        Header: 'Original Price',
        Footer: 'Original Price',
        accessor: 'originalPrice',
        Cell: ({ value }: any) =>
          value ? (
            <p>{`RM ${value}`}</p>
          ) : (
            <p className="text-gray-500">No Data</p>
          ),
      },
      {
        Header: 'Price',
        Footer: 'Price',
        accessor: 'price',
        Cell: ({ value }: any) =>
          value ? (
            <p className="font-semibold text-limeade">{`RM ${value}`}</p>
          ) : (
            <p className="text-gray-500">No Data</p>
          ),
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
        <h1 className="text-xl md:text-2xl font-bold">Service Pricing</h1>
        <Link href="/my-institution/finance/service-pricing/add">
          <a className="bg-limeade text-white text-lg px-4 py-2 rounded-md hover:bg-opacity-90">
            Add New Service Pricing
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

InstitutionServicePricing.getLayout = function getLayout(page: JSX.Element) {
  return <InstitutionLayout>{page}</InstitutionLayout>
}
