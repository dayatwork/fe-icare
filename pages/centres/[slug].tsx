/* eslint-disable @next/next/no-img-element */
// import Image from 'next/image'
import { Carousel } from 'react-responsive-carousel'
import { StarIcon } from '@heroicons/react/solid'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import useSWR from 'swr'

import Layout from '@/components/Layout'
import { Centre } from 'mock-data'
import { fetcher } from 'utils'

export default function Centres() {
  const router = useRouter()
  const { data } = useSWR<Centre>(
    () => router.query.slug && `/api/centres/${router.query.slug}`,
    fetcher
  )

  console.log({ data })

  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="grid md:grid-cols-3 gap-4 lg:gap-10 py-6">
        {/* Left */}
        <div className="md:col-span-2">
          <div className="bg-white shadow-md rounded-md p-6 mb-6">
            <Carousel useKeyboardArrows={true} showStatus={false}>
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80"
                  className="object-cover"
                  alt="image"
                />
              </div>
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src="https://images.unsplash.com/photo-1532798442725-41036acc7489?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
                  className="object-cover"
                  alt="image"
                />
              </div>
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src="https://images.unsplash.com/photo-1508672019048-805c876b67e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80"
                  className="object-cover"
                  alt="image"
                />
              </div>
            </Carousel>
          </div>

          <section className="bg-white shadow-md rounded-md p-6 mb-6">
            <h3 className="font-semibold text-lg">Description</h3>
            <div className="h-[1px] my-4 bg-gray-200"></div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </section>

          <section className="bg-white shadow-md rounded-md p-6 mb-6">
            <h3 className="font-semibold text-lg">Review</h3>
            <div className="h-[1px] mt-4 mb-2 bg-gray-200"></div>
            <ul>
              <Review />
              <Review />
              <Review />
            </ul>
          </section>
        </div>

        {/* Right */}
        <div>
          <div className="bg-white shadow-md rounded-md p-6 md:p-4 lg:p-6 mb-6">
            <div className="flex flex-row md:flex-col lg:flex-row space-x-4 md:space-x-0 lg:space-x-4 pb-4 border-b border-gray-200 mb-3">
              <div className="block md:flex lg:block justify-center mb-2">
                <Image
                  width={80}
                  height={80}
                  className="rounded-full object-cover"
                  src="/images/centre.png"
                  alt="Centre Photo"
                />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-2xl mb-1">{data?.name}</h3>
                <p className="text-gray-600 text-sm">{data?.location}</p>
                <div className="flex items-center space-x-2 mt-2 -ml-1">
                  <div className="flex items-center">
                    {data?.rating &&
                      Array.from({ length: data?.rating }, (_, i) => i + 1).map(
                        (i) => (
                          <StarIcon key={i} className="w-4 h-4 text-gold" />
                        )
                      )}
                  </div>
                  <p className="text-sm text-gray-600">{data?.ratedBy} Rated</p>
                </div>
              </div>
            </div>
            <dl className="grid grid-cols-4 md:grid-cols-1 lg:grid-cols-4 items-center gap-y-1">
              <dt className="text-sm text-gray-600">Safety</dt>
              <dd className="col-span-3 flex items-center space-x-2">
                <div className="h-2 bg-gray-300 rounded-full relative flex-1">
                  <div className="absolute h-2 bg-[#00746D] rounded-full top-0 w-[85%]"></div>
                </div>
                <p className="w-8 text-sm text-[#00746D] font-semibold text-right">
                  8.5
                </p>
              </dd>
              <dt className="text-sm text-gray-600">Cleaness</dt>
              <dd className="col-span-3 flex items-center space-x-2">
                <div className="h-2 bg-gray-300 rounded-full relative flex-1">
                  <div className="absolute h-2 bg-[#00746D] rounded-full top-0 w-[85%]"></div>
                </div>
                <p className="w-8 text-sm text-[#00746D] font-semibold text-right">
                  8.5
                </p>
              </dd>
              <dt className="text-sm text-gray-600">Healthness</dt>
              <dd className="col-span-3 flex items-center space-x-2">
                <div className="h-2 bg-gray-300 rounded-full relative flex-1">
                  <div className="absolute h-2 bg-[#00746D] rounded-full top-0 w-[100%]"></div>
                </div>
                <p className="w-8 text-sm text-[#00746D] font-semibold text-right">
                  10.0
                </p>
              </dd>
            </dl>

            <Link href={`/booking/centre/${router.query.slug}`}>
              <a className="block bg-limeade text-white rounded-lg hover:bg-verdun-green transition mt-5 w-full pt-2 pb-3 px-2">
                <span className="text-lg md:text-base lg:text-lg font-bold block text-center">
                  Book An Appointment
                </span>
                <span className="block text-center text-sm">
                  With booking fee <span className="font-semibold">RM10</span>
                </span>
              </a>
            </Link>
          </div>

          <div className="bg-white shadow-md rounded-md px-6 py-4 mb-6">
            <h3 className="font-semibold text-lg mb-4 pb-2 border-b border-gray-200">
              Maps
            </h3>
            <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden mb-2">
              <Image
                src="/images/maps.png"
                alt="Maps"
                layout="fill"
                className="object-cover"
              />
            </div>
          </div>

          <div className="bg-white shadow-md rounded-md px-6 py-4 mb-6">
            <h3 className="font-semibold text-lg mb-4 pb-2 border-b border-gray-200">
              Staff
            </h3>
            <ul className="grid grid-cols-3 gap-6">
              <li className="flex flex-col items-center space-y-2">
                <Image
                  src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&q=80"
                  alt="Staff"
                  width={80}
                  height={80}
                  className="object-cover rounded-full"
                />
                <div>
                  <p className="text-gray-900 font-semibold text-sm text-center">
                    Samuel
                  </p>
                  <p className="text-gray-600 text-xs text-center">Massager</p>
                </div>
              </li>
              <li className="flex flex-col items-center space-y-2">
                <Image
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&q=80"
                  alt="Staff"
                  width={80}
                  height={80}
                  className="object-cover rounded-full"
                />
                <div>
                  <p className="text-gray-900 font-semibold text-sm text-center">
                    Fione
                  </p>
                  <p className="text-gray-600 text-xs text-center">Manager</p>
                </div>
              </li>
              <li className="flex flex-col items-center space-y-2">
                <Image
                  src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&q=80"
                  alt="Staff"
                  width={80}
                  height={80}
                  className="object-cover rounded-full"
                />
                <div>
                  <p className="text-gray-900 font-semibold text-sm text-center">
                    Matthew
                  </p>
                  <p className="text-gray-600 text-xs text-center">Cashier</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

const Review = () => {
  return (
    <li className="flex items-center space-x-6 py-3 border-b border-gray-200">
      <img
        src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&q=80"
        alt="Service Photo"
        className="object-cover w-20 h-20 rounded-full"
      />
      <div className="flex-1 flex justify-between">
        <div className="flex flex-col">
          <p className="font-semibold">Foot Massage</p>
          <span className="text-gray-600 text-sm">30 min</span>
          <span className="text-sm">Massager Samuel</span>
        </div>
        <p className="text-lg font-semibold text-limeade">MYR 30</p>
      </div>
    </li>
  )
}

Centres.getLayout = function getLayout(page: JSX.Element) {
  return <Layout>{page}</Layout>
}
