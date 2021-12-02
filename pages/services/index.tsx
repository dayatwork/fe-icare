/* eslint-disable @next/next/no-img-element */
import { Fragment, useState } from 'react'
import Link from 'next/link'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid'
import Image from 'next/image'
import { SearchIcon, StarIcon } from '@heroicons/react/solid'
import * as Slider from '@radix-ui/react-slider'
import useSWR from 'swr'

import Layout from '@/components/Layout'
import { Service } from 'mock-data'
import { fetcher } from 'utils'

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

const categories = [
  { id: 'Spa', name: 'Spa' },
  { id: 'Beauty Salon', name: 'Beauty Salon' },
]

const ratings = [5, 4, 3, 2, 1]

export default function Services() {
  const [priceRange, setPriceRange] = useState([0, 500])
  const [sortBy, setSortBy] = useState(sortingParameters[3])
  const { data: fetchedData } = useSWR<Service[]>(
    () => `/api/services`,
    fetcher
  )
  const [selectedCategory, setSelectedCategory] = useState<
    Record<string, boolean>
  >({
    ['Spa']: false,
    ['Beauty Salon']: false,
  })
  const [selectedRatings, setSelectedRatings] = useState<
    Record<string, boolean>
  >({
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
  })
  const filterCategories = Object.keys(selectedCategory)
    .filter((k) => selectedCategory[k])
    .map((k) => k)

  const filterRatings = Object.keys(selectedRatings)
    .filter((k) => selectedRatings[k])
    .map((k) => Number(k))

  const data = fetchedData
    ?.filter((service) => {
      if (filterCategories.length) {
        return service.category.some((category) =>
          filterCategories.includes(category)
        )
      }
      return true
    })
    ?.filter(
      (service) =>
        service.price >= priceRange[0] && service.price <= priceRange[1]
    )
    ?.filter((service) => {
      if (filterRatings.length) {
        return filterRatings.includes(service?.rating)
      }
      return true
    })
    .sort((a, b) => {
      if (sortBy.id === 1) {
        return b.price - a.price
      }
      if (sortBy.id === 2) {
        return a.price - b.price
      }
      if (sortBy.id === 3) {
        return b.rating - a.rating
      }
      if (sortBy.id === 4) {
        return b.ratedBy - a.ratedBy
      }
      return 0
    })

  return (
    <>
      {/* Search Area */}
      <div className="bg-limeade pt-5 pb-3">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <label htmlFor="search" className="sr-only">
              Search services
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
            {/* <fieldset className="space-y-3">
              <legend className="text-sm font-semibold">Facilities</legend>
              <div className="relative flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="wifi"
                    aria-describedby="wifi-description"
                    name="wifi"
                    type="checkbox"
                    className="form-checkbox focus:ring-limeade h-4 w-4 text-limeade border-gray-300 rounded"
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
                    className="form-checkbox focus:ring-limeade h-4 w-4 text-limeade border-gray-300 rounded"
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
                    className="form-checkbox focus:ring-limeade h-4 w-4 text-limeade border-gray-300 rounded"
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
                    className="form-checkbox focus:ring-limeade h-4 w-4 text-limeade border-gray-300 rounded"
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
                    className="form-checkbox focus:ring-limeade h-4 w-4 text-limeade border-gray-300 rounded"
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
            </fieldset> */}

            {/* Category */}
            <fieldset className="space-y-3">
              <legend className="text-sm font-semibold">Category</legend>
              {categories.map((category) => (
                <div key={category.id} className="relative flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id={category.id}
                      aria-describedby={`${category.id}-description`}
                      name={category.id}
                      type="checkbox"
                      // value={selectedCategory[category.id]}

                      onChange={(e) =>
                        setSelectedCategory((prev) => ({
                          ...prev,
                          [category.id]: e.target.checked,
                        }))
                      }
                      // value={category.id}
                      className="form-checkbox focus:ring-limeade h-4 w-4 text-limeade border-gray-300 rounded"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label
                      htmlFor={category.id}
                      className="font-medium text-gray-700"
                    >
                      {category.name}
                    </label>
                    <span
                      id={`${category.id}-description`}
                      className="text-gray-500"
                    >
                      <span className="sr-only">{category.name}</span>
                    </span>
                  </div>
                </div>
              ))}
              {/* <div className="relative flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="beauty-salon"
                    aria-describedby="beauty-salon-description"
                    name="beauty-salon"
                    type="checkbox"
                    value="Beauty Salon"
                    className="form-checkbox focus:ring-limeade h-4 w-4 text-limeade border-gray-300 rounded"
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label
                    htmlFor="beauty-salon"
                    className="font-medium text-gray-700"
                  >
                    Beauty Salon
                  </label>
                  <span id="beauty-salon-description" className="text-gray-500">
                    <span className="sr-only">Beauty Salon</span>
                  </span>
                </div>
              </div> */}
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
                    className="form-checkbox focus:ring-limeade h-4 w-4 text-limeade border-gray-300 rounded"
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
                step={50}
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
                    className="form-input w-16 px-2 py-1 border-gray-300 rounded-lg"
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
                    className="form-input w-16 px-2 py-1 border-gray-300 rounded-lg"
                    min={0}
                    max={999}
                  />
                </div>
              </div>
            </fieldset>

            {/* Rating */}
            <fieldset className="mt-6 space-y-3">
              <legend className="text-sm font-semibold">Rating</legend>
              {ratings?.map((rating) => (
                <div key={rating} className="relative flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id={`${rating}-star`}
                      aria-describedby="5-star-description"
                      name={`${rating}-star`}
                      type="checkbox"
                      className="form-checkbox focus:ring-limeade h-4 w-4 text-limeade border-gray-300 rounded"
                      onChange={(e) =>
                        setSelectedRatings((prev) => ({
                          ...prev,
                          [rating]: e.target.checked,
                        }))
                      }
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor={`${rating}-star`} className="sr-only">
                      {rating} star
                    </label>
                    <div className="flex items-center">
                      {Array.from({ length: rating }, (_, i) => i + 1).map(
                        (i) => (
                          <StarIcon key={i} className="w-4 h-4 text-gold" />
                        )
                      )}
                    </div>
                    <span id="5-star-description" className="text-gray-500">
                      <span className="sr-only">{rating} Star Rating</span>
                    </span>
                  </div>
                </div>
              ))}
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
          <div className="grid grid-cols-4 gap-4">
            {data?.length ? (
              data?.map((service) => (
                <ServiceCard service={service} key={service.id} />
              ))
            ) : (
              <p className="text-limeade font-semibold text-lg text-center col-span-4 py-20">
                No Result
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

const ServiceCard = ({ service }: { service: Service }) => {
  const {
    id,
    name,
    location,
    price,
    originalPrice,
    ratedBy,
    rating,
    centerName,
    centerId,
  } = service
  return (
    <Link href={`/services/${id}`}>
      <a className="flex flex-col justify-between p-4 rounded-xl shadow-md bg-white hover:bg-gray-100 hover:shadow-xl">
        {/* Rating */}
        <div>
          <div className="flex justify-end mb-3">
            <div className="flex items-center space-x-2">
              <div className="flex items-center">
                {Array.from({ length: rating }, (_, i) => i + 1).map((i) => (
                  <StarIcon key={i} className="w-4 h-4 text-gold" />
                ))}
              </div>
              <p className="text-sm">{ratedBy} Rated</p>
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
          <h3 className="mt-2 font-semibold text-lg">{name}</h3>
          <Link href={`/centres/${centerId}`}>
            <a className="text-limeade hover:underline text-sm font-semibold">
              {centerName}
            </a>
          </Link>
        </div>
        <div className="mt-3">
          <p className="space-x-2">
            <span className="text-lg text-gray-500 line-through">
              RM{originalPrice}
            </span>
            <span className="text-lg text-limeade font-bold">RM{price}</span>
          </p>
          <p className="text-xs text-gray-600 mt-1">{location}</p>
        </div>
      </a>
    </Link>
  )
}

Services.getLayout = function getLayout(page: JSX.Element) {
  return <Layout>{page}</Layout>
}
