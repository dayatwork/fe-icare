/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */

import { CentreLayout } from 'layouts/CentreLayout'

export default function MyCentreStatisticsPage() {
  return (
    <>
      <div className="py-6 md:py-10 px-4 md:px-10 bg-white">
        <h1 className="text-xl md:text-2xl font-bold">Statistics</h1>
      </div>

      <div className="pt-6 pb-10 px-4 md:px-10"></div>
    </>
  )
}

MyCentreStatisticsPage.getLayout = function getLayout(page: JSX.Element) {
  return <CentreLayout>{page}</CentreLayout>
}
