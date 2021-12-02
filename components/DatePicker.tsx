import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { RadioGroup, Popover } from '@headlessui/react'
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronDownIcon,
} from '@heroicons/react/outline'

import { getDaysInMonth } from 'utils'

type Props = {
  selectedMonth: number
  setSelectedMonth: Dispatch<SetStateAction<number>>
  selectedYear: number
  setSelectedYear: Dispatch<SetStateAction<number>>
  selectedDate: number
  setSelectedDate: Dispatch<SetStateAction<number>>
}

const months = [
  '',
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]

export const DatePicker = ({
  selectedDate,
  setSelectedDate,
  selectedMonth,
  setSelectedMonth,
  selectedYear,
  setSelectedYear,
}: Props) => {
  const [days, setDays] = useState(30)

  useEffect(() => {
    const days = getDaysInMonth({
      month: Number(selectedMonth),
      year: selectedYear,
    })
    if (days) {
      setDays(days)
    }
  }, [selectedMonth, selectedYear])

  console.log({ days })

  return (
    <div>
      <Popover className="relative flex justify-center mb-4">
        <Popover.Button className="hover:bg-gray-300 px-4 py-2 flex space-x-2 items-center rounded-md text-xl font-semibold">
          <span>{`${
            months[Number(selectedMonth)]
          } ${selectedDate}, ${selectedYear}`}</span>
          <ChevronDownIcon className="w-5 h-5" />
        </Popover.Button>

        <Popover.Panel className="absolute top-12 z-10 bg-white shadow-lg rounded-md overflow-hidden">
          <div className="px-4 py-3 flex space-x-2 justify-between bg-limeade">
            <button
              className="px-3 py-1 bg-gray-100 rounded-md hover:bg-gray-300"
              onClick={() => setSelectedYear((prev) => prev - 1)}
            >
              <span className="sr-only">Previous Year</span>
              <ChevronLeftIcon className="w-5 h-5" />
            </button>
            <input
              type="number"
              className="rounded-md border-gray-200 text-center w-36"
              value={selectedYear}
              onChange={(e) => setSelectedYear(Number(e.target.value))}
            />
            <button
              className="px-3 py-1 bg-gray-100 rounded-md hover:bg-gray-300"
              onClick={() => setSelectedYear((prev) => prev + 1)}
            >
              <span className="sr-only">Next Year</span>
              <ChevronRightIcon className="w-5 h-5" />
            </button>
          </div>
          <RadioGroup
            className="px-2 py-3"
            value={selectedMonth}
            onChange={setSelectedMonth}
          >
            <RadioGroup.Label className="sr-only">
              Select Month
            </RadioGroup.Label>
            <div className="grid grid-cols-3 gap-2">
              <RadioGroup.Option value={1}>
                {({ checked }) => (
                  <span
                    className={`text-center block py-2.5 px-2 rounded-md cursor-pointer ${
                      checked ? 'bg-limeade text-white' : ''
                    }`}
                  >
                    January
                  </span>
                )}
              </RadioGroup.Option>
              <RadioGroup.Option value={2}>
                {({ checked }) => (
                  <span
                    className={`text-center block py-2.5 px-2 rounded-md cursor-pointer ${
                      checked ? 'bg-limeade text-white' : ''
                    }`}
                  >
                    February
                  </span>
                )}
              </RadioGroup.Option>
              <RadioGroup.Option value={3}>
                {({ checked }) => (
                  <span
                    className={`text-center block py-2.5 px-2 rounded-md cursor-pointer ${
                      checked ? 'bg-limeade text-white' : ''
                    }`}
                  >
                    March
                  </span>
                )}
              </RadioGroup.Option>
              <RadioGroup.Option value={4}>
                {({ checked }) => (
                  <span
                    className={`text-center block py-2.5 px-2 rounded-md cursor-pointer ${
                      checked ? 'bg-limeade text-white' : ''
                    }`}
                  >
                    April
                  </span>
                )}
              </RadioGroup.Option>
              <RadioGroup.Option value={5}>
                {({ checked }) => (
                  <span
                    className={`text-center block py-2.5 px-2 rounded-md cursor-pointer ${
                      checked ? 'bg-limeade text-white' : ''
                    }`}
                  >
                    May
                  </span>
                )}
              </RadioGroup.Option>
              <RadioGroup.Option value={6}>
                {({ checked }) => (
                  <span
                    className={`text-center block py-2.5 px-2 rounded-md cursor-pointer ${
                      checked ? 'bg-limeade text-white' : ''
                    }`}
                  >
                    June
                  </span>
                )}
              </RadioGroup.Option>
              <RadioGroup.Option value={7}>
                {({ checked }) => (
                  <span
                    className={`text-center block py-2.5 px-2 rounded-md cursor-pointer ${
                      checked ? 'bg-limeade text-white' : ''
                    }`}
                  >
                    July
                  </span>
                )}
              </RadioGroup.Option>
              <RadioGroup.Option value={8}>
                {({ checked }) => (
                  <span
                    className={`text-center block py-2.5 px-2 rounded-md cursor-pointer ${
                      checked ? 'bg-limeade text-white' : ''
                    }`}
                  >
                    August
                  </span>
                )}
              </RadioGroup.Option>
              <RadioGroup.Option value={9}>
                {({ checked }) => (
                  <span
                    className={`text-center block py-2.5 px-2 rounded-md cursor-pointer ${
                      checked ? 'bg-limeade text-white' : ''
                    }`}
                  >
                    September
                  </span>
                )}
              </RadioGroup.Option>
              <RadioGroup.Option value={10}>
                {({ checked }) => (
                  <span
                    className={`text-center block py-2.5 px-2 rounded-md cursor-pointer ${
                      checked ? 'bg-limeade text-white' : ''
                    }`}
                  >
                    October
                  </span>
                )}
              </RadioGroup.Option>
              <RadioGroup.Option value={11}>
                {({ checked }) => (
                  <span
                    className={`text-center block py-2.5 px-2 rounded-md cursor-pointer ${
                      checked ? 'bg-limeade text-white' : ''
                    }`}
                  >
                    November
                  </span>
                )}
              </RadioGroup.Option>
              <RadioGroup.Option value={12}>
                {({ checked }) => (
                  <span
                    className={`text-center block py-2.5 px-2 rounded-md cursor-pointer ${
                      checked ? 'bg-limeade text-white' : ''
                    }`}
                  >
                    December
                  </span>
                )}
              </RadioGroup.Option>
            </div>
          </RadioGroup>
        </Popover.Panel>
      </Popover>

      <RadioGroup
        className="p-2 flex space-x-2 overflow-x-scroll "
        value={selectedDate}
        onChange={setSelectedDate}
      >
        <RadioGroup.Label className="sr-only">Select Date</RadioGroup.Label>

        {Array.from({ length: days }, (_, i) => i + 1).map((i) => (
          <RadioGroup.Option key={i} value={i}>
            {({ checked }) => (
              <span
                className={`flex items-center justify-center w-16 h-16 rounded-md cursor-pointer text-2xl font-semibold ${
                  checked ? 'bg-limeade text-white' : 'bg-gray-100'
                }`}
              >
                {i}
              </span>
            )}
          </RadioGroup.Option>
        ))}
      </RadioGroup>
    </div>
  )
}
