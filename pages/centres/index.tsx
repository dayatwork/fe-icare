/* eslint-disable @next/next/no-img-element */
import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid'
import Image from 'next/image'
import { SearchIcon, StarIcon } from '@heroicons/react/solid'
import * as Slider from '@radix-ui/react-slider'

import Layout from '@/components/Layout'

const sortingParameters = [
  {
    id: 1,
    name: 'Highest Price',
  },
  {
    id: 2,
    name: 'Lowest Price',
  },
  {
    id: 3,
    name: 'Review Score',
  },
  {
    id: 4,
    name: 'Highest Popularity',
  },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function Centres() {
  const [priceRange, setPriceRange] = useState([0, 500])
  const [sortBy, setSortBy] = useState(sortingParameters[3])
  return (
    <>
      {/* Search Area */}
      <div className="bg-limeade pt-5 pb-3">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <label htmlFor="search" className="sr-only">
              Search centres
            </label>
            <div className="mt-1 relative flex items-center">
              <input
                type="text"
                name="search"
                id="search"
                placeholder="Search for deals, places & brands here ..."
                className="form-input shadow-sm focus:ring-lebg-limeade focus:border-lebg-limeade block w-full pl-5 pr-12 sm:text-sm border-gray-300 rounded-full"
              />
              <div className="absolute inset-y-0 right-0 flex py-1 pr-1.5">
                <button className="inline-flex items-center border border-gray-200 px-4 text-sm font-sans font-medium text-gray-400 py-1 rounded-full bg-limeade hover:bg-verdun-green">
                  <span className="sr-only">Search</span>
                  <SearchIcon className="w-5 h-5 text-white" />
                </button>
              </div>
            </div>
          </div>
          <ul className="flex space-x-8 items-center mt-6 justify-center">
            <li className="flex items-center text-white space-x-1">
              <img src="/images/oil-massage.png" alt="Massage" />
              <span>Massage</span>
            </li>
            <li className="flex items-center text-white space-x-1">
              <img src="/images/makeup.png" alt="Beauty" />
              <span>Beauty</span>
            </li>
            <li className="flex items-center text-white space-x-1">
              <img src="/images/gym.png" alt="Gym" />
              <span>Gym</span>
            </li>
            <li className="flex items-center text-white space-x-1">
              <img src="/images/foot.png" alt="Reflexology" />
              <span>Reflexology</span>
            </li>
            <li className="flex items-center text-white space-x-1">
              <img src="/images/hair-brush.png" alt="Hair Salon" />
              <span>Hair Salon</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 flex space-x-6 py-8">
        {/* Filter */}
        <div className="w-64">
          <h3 className="font-semibold mb-5">Filter</h3>
          <div className="bg-white rounded-lg shadow-xl px-4 pt-4 pb-6">
            {/* Facilities */}
            <fieldset className="space-y-3">
              <legend className="text-sm font-semibold">Facilities</legend>
              <div className="relative flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="wifi"
                    aria-describedby="wifi-description"
                    name="wifi"
                    type="checkbox"
                    className="focus:ring-limeade h-4 w-4 text-limeade border-gray-300 rounded"
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="wifi" className="font-medium text-gray-700">
                    Wifi
                  </label>
                  <span id="wifi-description" className="text-gray-500">
                    <span className="sr-only">Wifi include</span>
                  </span>
                </div>
              </div>
              <div className="relative flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="parking"
                    aria-describedby="parking-description"
                    name="parking"
                    type="checkbox"
                    className="focus:ring-limeade h-4 w-4 text-limeade border-gray-300 rounded"
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label
                    htmlFor="parking"
                    className="font-medium text-gray-700"
                  >
                    Parking
                  </label>
                  <span id="parking-description" className="text-gray-500">
                    <span className="sr-only">Parking include</span>
                  </span>
                </div>
              </div>
              <div className="relative flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="wheelchair-access"
                    aria-describedby="wheelchair-access-description"
                    name="wheelchair-access"
                    type="checkbox"
                    className="focus:ring-limeade h-4 w-4 text-limeade border-gray-300 rounded"
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label
                    htmlFor="wheelchair-access"
                    className="font-medium text-gray-700"
                  >
                    Wheelchair Access
                  </label>
                  <span
                    id="wheelchair-access-description"
                    className="text-gray-500"
                  >
                    <span className="sr-only">Wheelchair include</span>
                  </span>
                </div>
              </div>
              <div className="relative flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="elevator"
                    aria-describedby="elevator-description"
                    name="elevator"
                    type="checkbox"
                    className="focus:ring-limeade h-4 w-4 text-limeade border-gray-300 rounded"
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label
                    htmlFor="elevator"
                    className="font-medium text-gray-700"
                  >
                    Elevator
                  </label>
                  <span id="elevator-description" className="text-gray-500">
                    <span className="sr-only">Elevator include</span>
                  </span>
                </div>
              </div>
              <div className="relative flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="public-transport-access"
                    aria-describedby="public-transport-access-description"
                    name="public-transport-access"
                    type="checkbox"
                    className="focus:ring-limeade h-4 w-4 text-limeade border-gray-300 rounded"
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label
                    htmlFor="public-transport-access"
                    className="font-medium text-gray-700"
                  >
                    Public Transport Access
                  </label>
                  <span
                    id="public-transport-access-description"
                    className="text-gray-500"
                  >
                    <span className="sr-only">
                      Public Transport Access include
                    </span>
                  </span>
                </div>
              </div>
            </fieldset>

            {/* Booking Policy */}
            <fieldset className="mt-6 space-y-3">
              <legend className="text-sm font-semibold">Booking Policy</legend>
              <div className="relative flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="free-cancellation"
                    aria-describedby="free-cancellation-description"
                    name="free-cancellation"
                    type="checkbox"
                    className="focus:ring-limeade h-4 w-4 text-limeade border-gray-300 rounded"
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label
                    htmlFor="free-cancellation"
                    className="font-medium text-gray-700"
                  >
                    Free Cancellation
                  </label>
                  <span
                    id="free-cancellation-description"
                    className="text-gray-500"
                  >
                    <span className="sr-only">Wifi include</span>
                  </span>
                </div>
              </div>
            </fieldset>

            {/* Price Range */}
            <fieldset className="mt-6 space-y-3">
              <legend className="text-sm font-semibold">Price Range</legend>
              <Slider.Root
                // defaultValue={[0, 500]}
                value={priceRange}
                onValueChange={setPriceRange}
                step={10}
                max={999}
                className="w-[200px] relative flex items-center h-[20px]"
                aria-label="Price Range"
              >
                <Slider.Track className="bg-black bg-opacity-30 relative flex-1 rounded-full h-[3px]">
                  <Slider.Range className="absolute bg-limeade h-full rounded-full" />
                </Slider.Track>
                <Slider.Thumb className="block w-[20px] h-[20px] bg-limeade rounded-full" />
                <Slider.Thumb className="block w-[20px] h-[20px] bg-limeade rounded-full" />
              </Slider.Root>
              <div className="grid grid-cols-2">
                <div className="flex items-center space-x-2">
                  <label htmlFor="min" className="text-sm text-gray-600">
                    Min
                  </label>
                  <input
                    id="min"
                    value={priceRange[0]}
                    onChange={(e) =>
                      setPriceRange((prev) => [
                        Number(e.target.value) > 999
                          ? 999
                          : Number(e.target.value) < 0
                          ? 0
                          : Number(e.target.value),
                        prev[1],
                      ])
                    }
                    type="number"
                    className="w-16 px-2 py-1 border-gray-300 rounded-lg"
                    min={0}
                    max={999}
                  />
                </div>
                <div className="flex items-center space-x-2">
                  <label htmlFor="max" className="text-sm text-gray-600">
                    Max
                  </label>
                  <input
                    id="max"
                    value={priceRange[1]}
                    onChange={(e) =>
                      setPriceRange((prev) => [
                        prev[0],
                        Number(e.target.value) > 999
                          ? 999
                          : Number(e.target.value) < 0
                          ? 0
                          : Number(e.target.value),
                      ])
                    }
                    type="number"
                    className="w-16 px-2 py-1 border-gray-300 rounded-lg"
                    min={0}
                    max={999}
                  />
                </div>
              </div>
            </fieldset>

            {/* Rating */}
            <fieldset className="mt-6 space-y-3">
              <legend className="text-sm font-semibold">Rating</legend>
              <div className="relative flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="5-star"
                    aria-describedby="5-star-description"
                    name="5-star"
                    type="checkbox"
                    className="focus:ring-limeade h-4 w-4 text-limeade border-gray-300 rounded"
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="5-star" className="sr-only">
                    5 star
                  </label>
                  <div className="flex items-center">
                    <StarIcon className="w-5 h-5 text-gold" />
                    <StarIcon className="w-5 h-5 text-gold" />
                    <StarIcon className="w-5 h-5 text-gold" />
                    <StarIcon className="w-5 h-5 text-gold" />
                    <StarIcon className="w-5 h-5 text-gold" />
                  </div>
                  <span id="5-star-description" className="text-gray-500">
                    <span className="sr-only">5 Star Rating</span>
                  </span>
                </div>
              </div>
              <div className="relative flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="4-star"
                    aria-describedby="4-star-description"
                    name="4-star"
                    type="checkbox"
                    className="focus:ring-limeade h-4 w-4 text-limeade border-gray-300 rounded"
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="4-star" className="sr-only">
                    4 star
                  </label>
                  <div className="flex items-center">
                    <StarIcon className="w-5 h-5 text-gold" />
                    <StarIcon className="w-5 h-5 text-gold" />
                    <StarIcon className="w-5 h-5 text-gold" />
                    <StarIcon className="w-5 h-5 text-gold" />
                  </div>
                  <span id="4-star-description" className="text-gray-500">
                    <span className="sr-only">4 Star Rating</span>
                  </span>
                </div>
              </div>
              <div className="relative flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="3-star"
                    aria-describedby="3-star-description"
                    name="3-star"
                    type="checkbox"
                    className="focus:ring-limeade h-4 w-4 text-limeade border-gray-300 rounded"
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="3-star" className="sr-only">
                    3 star
                  </label>
                  <div className="flex items-center">
                    <StarIcon className="w-5 h-5 text-gold" />
                    <StarIcon className="w-5 h-5 text-gold" />
                    <StarIcon className="w-5 h-5 text-gold" />
                  </div>
                  <span id="3-star-description" className="text-gray-500">
                    <span className="sr-only">3 Star Rating</span>
                  </span>
                </div>
              </div>
              <div className="relative flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="2-star"
                    aria-describedby="2-star-description"
                    name="2-star"
                    type="checkbox"
                    className="focus:ring-limeade h-4 w-4 text-limeade border-gray-300 rounded"
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="2-star" className="sr-only">
                    2 star
                  </label>
                  <div className="flex items-center">
                    <StarIcon className="w-5 h-5 text-gold" />
                    <StarIcon className="w-5 h-5 text-gold" />
                  </div>
                  <span id="2-star-description" className="text-gray-500">
                    <span className="sr-only">2 Star Rating</span>
                  </span>
                </div>
              </div>
              <div className="relative flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="1-star"
                    aria-describedby="1-star-description"
                    name="1-star"
                    type="checkbox"
                    className="focus:ring-limeade h-4 w-4 text-limeade border-gray-300 rounded"
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="1-star" className="sr-only">
                    1 star
                  </label>
                  <div className="flex items-center">
                    <StarIcon className="w-5 h-5 text-gold" />
                  </div>
                  <span id="1-star-description" className="text-gray-500">
                    <span className="sr-only">1 Star Rating</span>
                  </span>
                </div>
              </div>
            </fieldset>
          </div>
        </div>
        <div className="flex-1">
          <div className="-mt-1 mb-3 flex justify-between items-center">
            <h3 className="font-semibold ">Result</h3>
            {/* Sort */}
            <div className="flex items-center space-x-2">
              <Listbox value={sortBy} onChange={setSortBy}>
                {({ open }) => (
                  <>
                    <Listbox.Label className="block font-semibold">
                      Sort by
                    </Listbox.Label>
                    <div className="relative w-48">
                      <Listbox.Button className="relative w-full bg-white border border-gray-300 rounded-md shadow-sm pl-3 pr-3 py-1.5 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-lebg-limeade focus:border-lebg-limeade text-sm">
                        <span className="flex items-center">
                          <span className="block truncate">{sortBy.name}</span>
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
                          {sortingParameters.map((sortingParam) => (
                            <Listbox.Option
                              key={sortingParam.id}
                              className={({ active }) =>
                                classNames(
                                  active
                                    ? 'text-white bg-limeade'
                                    : 'text-gray-900',
                                  'cursor-default select-none relative py-2 pl-3 pr-9'
                                )
                              }
                              value={sortingParam}
                            >
                              {({ selected, active }) => (
                                <>
                                  <div className="flex items-center">
                                    <span
                                      className={classNames(
                                        selected
                                          ? 'font-semibold'
                                          : 'font-normal',
                                        'block truncate'
                                      )}
                                    >
                                      {sortingParam.name}
                                    </span>
                                  </div>

                                  {selected ? (
                                    <span
                                      className={classNames(
                                        active
                                          ? 'text-white'
                                          : 'text-lebg-limeade',
                                        'absolute inset-y-0 right-0 flex items-center pr-4'
                                      )}
                                    >
                                      <CheckIcon
                                        className="h-5 w-5"
                                        aria-hidden="true"
                                      />
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
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <CentreCard />
            <CentreCard />
            <CentreCard />
            <CentreCard />
            <CentreCard />
            <CentreCard />
            <CentreCard />
            <CentreCard />
            <CentreCard />
            <CentreCard />
            <CentreCard />
            <CentreCard />
          </div>
        </div>
      </div>
    </>
  )
}

const CentreCard = () => {
  return (
    <div className="p-4 rounded-xl shadow-md bg-white">
      {/* Rating */}
      <div className="flex justify-end mb-3">
        <div className="flex items-center space-x-2">
          <div className="flex items-center">
            <StarIcon className="w-4 h-4 text-gold" />
            <StarIcon className="w-4 h-4 text-gold" />
            <StarIcon className="w-4 h-4 text-gold" />
            <StarIcon className="w-4 h-4 text-gold" />
          </div>
        </div>
      </div>
      <div className="aspect-w-3 aspect-h-2">
        <Image
          src="/images/promotion-2.png"
          alt="promotion 1"
          layout="fill"
          // className="object-cover"
        />
      </div>
      <h3 className="mt-2 font-semibold text-lg">Vidiana Spa</h3>
      <p className="text-xs text-gray-500">Beauty Centre</p>
      <div className="flex items-center justify-between mt-3">
        <p className="text-sm text-limeade">Taman University (5km)</p>
        <button className="text-sm py-1 px-2 rounded-md bg-limeade text-white hover:bg-verdun-green">
          Learn More
        </button>
      </div>
    </div>
  )
}

Centres.getLayout = function getLayout(page: JSX.Element) {
  return <Layout>{page}</Layout>
}
