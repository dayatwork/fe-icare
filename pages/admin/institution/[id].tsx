import Link from 'next/link'

import { AdminLayout } from 'layouts/AdminLayout'

export default function AdminInstitutionPage() {
  return (
    <>
      <div className="py-6 md:py-10 px-4 md:px-10  bg-white">
        <h1 className="text-xl md:text-2xl font-bold">Clinic Vidiana</h1>
      </div>

      <div className="py-10 px-4 md:px-10">
        <Link href="/admin/institution">
          <a className="text-limeade hover:underline hover:bg-opacity-10 mb-4 inline-block">
            &larr; Back to Institute List
          </a>
        </Link>
        <div className="bg-white shadow rounded-lg p-4 sm:p-6 lg:p-10 max-w-7xl">
          <dl className="space-y-4 md:space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
              <div>
                <dt className="text-sm text-gray-600">Name of Institution</dt>
                <dd className="font-semibold">Clinics Vidiana Sdn Bhd</dd>
              </div>
              <div>
                <dt className="text-sm text-gray-600">Office Number</dt>
                <dd className="font-semibold">03-12283941</dd>
              </div>
              <div>
                <dt className="text-sm text-gray-600">Established Since</dt>
                <dd className="font-semibold">12-12-2020</dd>
              </div>
              <div>
                <dt className="text-sm text-gray-600">Phone Number</dt>
                <dd className="font-semibold">013-12283941</dd>
              </div>
              <div>
                <dt className="text-sm text-gray-600">Type of Bussiness</dt>
                <dd className="font-semibold">Beauty Centre</dd>
              </div>
              <div>
                <dt className="text-sm text-gray-600">Email</dt>
                <dd className="font-semibold">admin@clinicsvidiana.com</dd>
              </div>
            </div>
            <div>
              <dt className="text-sm text-gray-600">Institute Certificate</dt>
              <dd className="font-semibold text-[#0084CE]">certificate.pdf</dd>
            </div>
            <div>
              <dt className="text-sm text-gray-600">Address</dt>
              <dd className="font-semibold max-w-lg">
                Pusat Pentadbiran Universiti Teknologi Malaysia, V01 Block B
                Level 2 Faculty of Bioscience and Medical Engineering, 80990
                Johor Bahru, Johor
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </>
  )
}

AdminInstitutionPage.getLayout = function getLayout(page: JSX.Element) {
  return <AdminLayout>{page}</AdminLayout>
}
