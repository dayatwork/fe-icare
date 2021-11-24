/* eslint-disable @next/next/no-img-element */
// import Image from 'next/image'
import { Carousel } from 'react-responsive-carousel'
import { StarIcon } from '@heroicons/react/solid'

import Layout from '@/components/Layout'

export default function Services() {
  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="grid grid-cols-3 gap-10 py-6">
        {/* Left */}
        <div className="col-span-2">
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
          <div className="bg-white shadow-md rounded-md p-6 mb-6">
            <h3 className="font-semibold text-xl">
              1-Hour full Body Massage Yeo Beuty & Spa
            </h3>
            <p className="space-x-2 mt-4">
              <span className="text-lg text-gray-500 line-through">RM868</span>
              <span className="text-xl text-limeade font-semibold">RM268</span>
            </p>
            <div className="flex items-center space-x-2 mt-2">
              <div className="flex items-center">
                <StarIcon className="w-4 h-4 text-gold" />
                <StarIcon className="w-4 h-4 text-gold" />
                <StarIcon className="w-4 h-4 text-gold" />
                <StarIcon className="w-4 h-4 text-gold" />
              </div>
              <p className="text-sm">58 Rated</p>
            </div>
            <p className="text-xs text-gray-600 mt-3">Taman University (5km)</p>
            <button className="btn-primary mt-5 w-full">Book now</button>
          </div>

          <div className="bg-white shadow-md rounded-md px-6 py-4 mb-6">
            <h3 className="font-semibold text-lg mb-2 pb-2 border-b border-gray-200">
              Locations
            </h3>
            <div className="flex space-x-3 py-2">
              <img
                src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&q=80"
                alt="Person"
                className="object-cover w-24 h-20"
              />
              <div className="flex-1">
                <p className="font-semibold text-sm">Vibes Spa</p>
                <p className="text-gray-500 text-sm mb-2">
                  Taman University, Petaling Jaya
                </p>

                <div className="flex items-center space-x-2 mt-2">
                  <div className="flex items-center">
                    <StarIcon className="w-4 h-4 text-gold" />
                    <StarIcon className="w-4 h-4 text-gold" />
                    <StarIcon className="w-4 h-4 text-gold" />
                    <StarIcon className="w-4 h-4 text-gold" />
                    <StarIcon className="w-4 h-4 text-gold" />
                  </div>
                  <p className="text-sm">(58 Rated)</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white shadow-md rounded-md px-6 py-4 mb-6">
            <h3 className="font-semibold text-lg mb-2 pb-2 border-b border-gray-200">
              Suggested Services
            </h3>
            <div className="flex space-x-3 py-2">
              <img
                src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&q=80"
                alt="Person"
                className="object-cover w-24 h-20"
              />
              <div className="flex-1">
                <p className="font-semibold text-sm">Vibes Spa</p>
                <p className="text-gray-500 text-sm mb-2">
                  Taman University, Petaling Jaya
                </p>

                <div className="flex items-center space-x-2 mt-2">
                  <div className="flex items-center">
                    <StarIcon className="w-4 h-4 text-gold" />
                    <StarIcon className="w-4 h-4 text-gold" />
                    <StarIcon className="w-4 h-4 text-gold" />
                    <StarIcon className="w-4 h-4 text-gold" />
                    <StarIcon className="w-4 h-4 text-gold" />
                  </div>
                  <p className="text-sm">(58 Rated)</p>
                </div>
              </div>
            </div>
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
        src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&q=80"
        alt="Person"
        className="object-cover w-20 h-20 rounded-full"
      />
      <div className="flex-1">
        <div className="flex justify-between">
          <p className="font-semibold">Arissa Alya</p>
          <span className="text-gray-600 text-sm">15 October 2021</span>
        </div>
        <div className="flex items-center">
          <StarIcon className="w-4 h-4 text-gold" />
          <StarIcon className="w-4 h-4 text-gold" />
          <StarIcon className="w-4 h-4 text-gold" />
          <StarIcon className="w-4 h-4 text-gold" />
        </div>
        <p>Good Service!, I’ll back next time</p>
      </div>
    </li>
  )
}

Services.getLayout = function getLayout(page: JSX.Element) {
  return <Layout>{page}</Layout>
}
