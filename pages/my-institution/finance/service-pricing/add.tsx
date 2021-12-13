/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/display-name */
import { useState } from 'react'
import Link from 'next/link'
import Multiselect from 'multiselect-react-dropdown'
import { InstitutionLayout } from 'layouts/InstitutionLayout'

const serviceItems = [
  {
    id: 'serviceItem1',
    name: 'Massage 1-Hour Pricing',
  },
  {
    id: 'serviceItem2',
    name: 'Pedicure',
  },
]

type ServiceItem = typeof serviceItems[0]

const paymentMethods = [
  { id: 1, name: 'Cash' },
  { id: 2, name: 'Credit' },
  { id: 3, name: 'Sehat Pay' },
  { id: 4, name: 'Transfer' },
  { id: 5, name: 'Paypal' },
]

export default function InstitutionServicePricing() {
  const [priceName, setPriceName] = useState('')
  const [service, setService] = useState('')
  const [selectedServiceItems, setSelectedServiceItems] =
    useState<ServiceItem[]>()
  const [note, setNote] = useState('')
  const [tax, setTax] = useState(0)
  const [currency, setCurrency] = useState('')

  console.log({ selectedServiceItems })

  return (
    <>
      <div className="py-6 md:py-10 px-4 md:px-10 bg-white flex justify-between items-center">
        <h1 className="text-xl md:text-2xl font-bold">
          Add New Service Pricing
        </h1>
        {/* <Step currentStep={step} setCurrentStep={setStep} /> */}
      </div>

      <div className="pt-6 pb-10 px-4 md:px-10">
        <Link href="/my-institution/finance/service-pricing">
          <a className="text-limeade hover:underline hover:bg-opacity-10 mb-4 inline-block">
            &larr; Back to Service Pricing List
          </a>
        </Link>
        <form>
          <div className="bg-white p-10 rounded-md shadow max-w-7xl grid grid-cols-1 gap-6">
            <div>
              <label
                htmlFor="price-name"
                className="block text-sm font-medium text-gray-700"
              >
                Price Name
              </label>
              <div>
                <input
                  id="price-name"
                  type="text"
                  className="appearance-none block w-full px-3 py-2  placeholder-gray-400 focus:outline-none sm:text-sm border-b-2 border-gray-300"
                  value={priceName}
                  onChange={(e) => setPriceName(e.target.value)}
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="service"
                className="block text-sm font-medium text-gray-700"
              >
                Select Service
              </label>
              <div>
                <select
                  id="service"
                  className="form-select border-t-0 border-r-0 border-l-0 appearance-none block w-full px-3 py-2  placeholder-gray-400 focus:outline-none sm:text-sm border-b-2 border-gray-300"
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                >
                  <option value="">Choose Service</option>
                  <option value="A">Service A</option>
                  <option value="B">Service B</option>
                  <option value="C">Service C</option>
                </select>
              </div>
            </div>
            <div>
              <label
                htmlFor="description"
                className="block text-sm font-medium text-gray-700"
              >
                Selected Service Item
              </label>
              <div className="mt-2">
                <Multiselect
                  style={{
                    inputField: {
                      padding: '0.25rem 0.5rem',
                    },
                    searchBox: {
                      // border: 'none',
                      'border-top-width': 0,
                      'border-left-width': 0,
                      'border-right-width': 0,
                      'border-bottom-width': '2px',
                      'border-radius': 0,
                    },
                    chips: {
                      // To change css chips(Selected options)
                      background: '#6EA001',
                    },
                  }}
                  options={serviceItems}
                  selectedValues={selectedServiceItems}
                  onSelect={(selectedList: ServiceItem[]) => {
                    setSelectedServiceItems(selectedList)
                  }}
                  onRemove={(selectedList: ServiceItem[]) => {
                    setSelectedServiceItems(selectedList)
                  }}
                  displayValue="name"
                />
              </div>
            </div>

            {selectedServiceItems?.length ? (
              <>
                <div className="p-4 border border-gray-200 space-y-8">
                  {selectedServiceItems?.map((serviceItem, idx) => (
                    <div key={serviceItem.id}>
                      <h4 className="text-gray-900 font-semibold mb-2">
                        {serviceItem.name}
                      </h4>
                      <div className="grid grid-cols-2 gap-6">
                        <div>
                          <label
                            htmlFor={`price-${idx}`}
                            className="block text-sm font-medium text-gray-700"
                          >
                            Price (RM)
                          </label>
                          <div>
                            <input
                              id={`price-${idx}`}
                              type="number"
                              className="appearance-none block w-full px-3 py-2  placeholder-gray-400 focus:outline-none sm:text-sm border-b-2 border-gray-300"
                              value={priceName}
                              onChange={(e) => setPriceName(e.target.value)}
                            />
                          </div>
                        </div>
                        <div>
                          <label
                            htmlFor={`discount-${idx}`}
                            className="block text-sm font-medium text-gray-700"
                          >
                            Discount (%)
                          </label>
                          <div>
                            <input
                              id={`discount-${idx}`}
                              type="number"
                              className="appearance-none block w-full px-3 py-2  placeholder-gray-400 focus:outline-none sm:text-sm border-b-2 border-gray-300"
                              value={priceName}
                              onChange={(e) => setPriceName(e.target.value)}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="bg-gray-300 p-4">
                  <dl className="flex space-x-4 text-lg">
                    <dt>Total Pricing:</dt>
                    <dd className="font-bold">RM 100</dd>
                  </dl>
                </div>

                <div className="mt-4">
                  <label
                    htmlFor="currency"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Currency
                  </label>
                  <div>
                    <select
                      id="currency"
                      className="form-select border-t-0 border-r-0 border-l-0 appearance-none block w-full px-3 py-2  placeholder-gray-400 focus:outline-none sm:text-sm border-b-2 border-gray-300"
                      value={currency}
                      onChange={(e) => setCurrency(e.target.value)}
                    >
                      <option value="">Choose Currency</option>
                      <option value="MYR">MYR Ringgit Malaysia</option>
                      <option value="USD">USD Dollar US</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="note"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Note
                  </label>
                  <div>
                    <input
                      id="note"
                      type="text"
                      className="appearance-none block w-full px-3 py-2  placeholder-gray-400 focus:outline-none sm:text-sm border-b-2 border-gray-300"
                      value={note}
                      onChange={(e) => setNote(e.target.value)}
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="tax"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Tax
                  </label>
                  <div>
                    <input
                      id="tax"
                      type="number"
                      className="appearance-none block w-full px-3 py-2  placeholder-gray-400 focus:outline-none sm:text-sm border-b-2 border-gray-300"
                      value={tax}
                      onChange={(e) => setTax(Number(e.target.value) || 0)}
                    />
                  </div>
                </div>
                <div>
                  <fieldset>
                    <legend className="block text-sm font-medium text-gray-700">
                      Payment Method
                    </legend>
                    <div className="mt-4 flex space-x-10">
                      {paymentMethods.map((paymentMethod, paymentMethodIdx) => (
                        <div
                          key={paymentMethodIdx}
                          className="py-4 flex items-center"
                        >
                          <div className="mr-2 flex items-center h-5">
                            <input
                              id={`paymentMethod-${paymentMethod.id}`}
                              name={`paymentMethod-${paymentMethod.id}`}
                              type="checkbox"
                              className="form-checkbox focus:ring-primary-500 h-4 w-4 text-primary-600 border-gray-300 rounded"
                            />
                          </div>
                          <div className="text-sm">
                            <label
                              htmlFor={`paymentMethod-${paymentMethod.id}`}
                              className="font-medium text-gray-700 select-none"
                            >
                              {paymentMethod.name}
                            </label>
                          </div>
                        </div>
                      ))}
                    </div>
                  </fieldset>
                </div>
              </>
            ) : (
              <p className="text-center block px-4 py-2">
                Please select service item
              </p>
            )}
          </div>
          <div className="flex justify-end mt-4 max-w-7xl">
            <button
              className="px-4 py-2 bg-limeade rounded-md text-white"
              type="button"
            >
              Add Pricing
            </button>
          </div>
        </form>
      </div>
    </>
  )
}

InstitutionServicePricing.getLayout = function getLayout(page: JSX.Element) {
  return <InstitutionLayout>{page}</InstitutionLayout>
}
