import { useState } from 'react'
import { Popover } from '@headlessui/react'

import { DatePicker } from './DatePicker'
import { CalendarIcon } from '@heroicons/react/solid'

interface Props {
  hideLabel?: boolean
  label?: string
  placeholder?: string
  shortFormat?: boolean
}

export const InputDatePicker = ({
  hideLabel = false,
  shortFormat = false,
  label = 'Date',
}: // placeholder = 'Select Date Range',
Props) => {
  const [selectedRange, setSelectedRange] = useState<{
    from: Date | undefined
    to: Date | undefined
  }>({ from: undefined, to: undefined })

  return (
    <>
      <label
        htmlFor="date"
        className={
          hideLabel ? 'sr-only' : 'block text-sm font-medium text-gray-700 mb-1'
        }
      >
        {label}
      </label>
      <Popover className="relative">
        {({ close, open }) => (
          <>
            <Popover.Button
              type="button"
              className={`w-full text-left flex items-center sm:text-sm border-b-2 border-gray-300 py-2 ${
                shortFormat ? 'space-x-0.5' : 'space-x-3'
              }`}
            >
              <CalendarIcon className="w-6 h-6 text-limeade" />
              {/* {!selectedRange.from && !selectedRange.to && placeholder} */}
              <div>
                {/* <p className="text-sm font-bold text-left text-gray-900">
                  Change Periode
                </p> */}
                <div className="">
                  <span className="text-sm">
                    {`${
                      selectedRange.from?.toLocaleDateString('en-EN', {
                        day: '2-digit',
                        month: shortFormat ? '2-digit' : 'long',
                        year: shortFormat ? '2-digit' : 'numeric',
                      }) || 'xx xxxxxx xxxx'
                    }`}{' '}
                  </span>
                  <span
                    className={!selectedRange.from ? 'text-transparent' : ''}
                  >
                    -
                  </span>
                  <span className="text-sm">
                    {' '}
                    {`${
                      selectedRange.to?.toLocaleDateString('en-EN', {
                        day: '2-digit',
                        month: shortFormat ? '2-digit' : 'long',
                        year: shortFormat ? '2-digit' : 'numeric',
                      }) || 'xx xxxxxxx xxxx'
                    }`}
                  </span>
                </div>
              </div>
            </Popover.Button>

            {open && (
              <Popover.Panel static className="absolute z-20">
                <DatePicker
                  selectedRange={selectedRange}
                  setSelectedRange={setSelectedRange}
                  close={close}
                />
              </Popover.Panel>
            )}
          </>
        )}
      </Popover>
    </>
  )
}
