import React, { useState, useEffect, Fragment, MutableRefObject } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid'

import { DAYS, MONTHS, generateDate } from './utils/date-utils'

interface DatePickerProps {
  selectedRange: {
    from: Date | undefined
    to: Date | undefined
  }
  setSelectedRange: React.Dispatch<
    React.SetStateAction<{
      from: Date | undefined
      to: Date | undefined
    }>
  >
  close: (
    focusableElement?:
      | HTMLElement
      | MutableRefObject<HTMLElement | null>
      | undefined
  ) => void
  // open: boolean;
}

export const DatePicker = ({
  selectedRange,
  setSelectedRange,
  close,
}: // onClose,
// open,
DatePickerProps) => {
  // console.log({ open });
  const today = new Date()
  const [selectedYear, setSelectedYear] = useState(today.getFullYear())
  const [selectedMonth, setSelectedMonth] = useState(today.getMonth())
  const [dates, setDates] = useState(
    generateDate({ year: today.getFullYear(), month: today.getMonth() })
  )
  // const [selectedDate, setSelectedDate] = useState(today);
  // const [selectedRange, setSelectedRange] = useState<{
  //   from: Date | undefined;
  //   to: Date | undefined;
  // }>({ from: undefined, to: undefined });

  useEffect(() => {
    setDates(generateDate({ year: selectedYear, month: selectedMonth }))
  }, [selectedMonth, selectedYear])

  // useEffect(() => {
  //   if (selectedRange.from && selectedRange.to) {
  //     console.log("hit");
  //     onClose();
  //   }
  // }, [onClose, selectedRange.from, selectedRange.to]);

  const handlePrevMonth = () => {
    if (selectedMonth !== 0) {
      setSelectedMonth((prev) => prev - 1)
    } else {
      setSelectedYear((prev) => prev - 1)
      setSelectedMonth(11)
    }
  }

  const handleNextMonth = () => {
    if (selectedMonth !== 11) {
      setSelectedMonth((prev) => prev + 1)
    } else {
      setSelectedYear((prev) => prev + 1)
      setSelectedMonth(0)
    }
  }

  const handleChangeRange = (date: Date) => {
    // () => (selectedFrom ? setSelectedTo(date) : setSelectedFrom(date));
    if (!selectedRange.from) {
      setSelectedRange((prev) => ({ ...prev, from: date }))
    } else if (
      selectedRange.from &&
      !selectedRange.to &&
      date.getTime() < selectedRange.from.getTime()
    ) {
      setSelectedRange((prev) => ({ from: date, to: prev.from }))
      close()
    } else if (
      selectedRange.from &&
      !selectedRange.to &&
      date.getTime() >= selectedRange.from.getTime()
    ) {
      setSelectedRange((prev) => ({ ...prev, to: date }))
      close()
    } else if (selectedRange.from && selectedRange.to) {
      setSelectedRange({ from: date, to: undefined })
    }
  }

  return (
    // <>
    //   <div className="flex items-center justify-center py-8 px-4">
    <div className="w-72 overflow-hidden rounded-md shadow-xl  bg-white mt-1">
      <div className=" bg-primary-600">
        <div className="py-4 px-4 flex items-center justify-between leading-8">
          <div>
            {/* Select Month */}
            <Listbox value={selectedMonth} onChange={setSelectedMonth}>
              <div className="relative mt-1">
                <Listbox.Button
                  type="button"
                  className="relative w-full pl-3 pr-10 text-left bg-white rounded-md cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-primary-600 focus-visible:ring-offset-2 focus-visible:border-primary-500 sm:text-md"
                >
                  <span className="block truncate">
                    {MONTHS[selectedMonth]}
                  </span>
                  <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                    <SelectorIcon
                      className="w-5 h-5 text-gray-400"
                      aria-hidden="true"
                    />
                  </span>
                </Listbox.Button>
                <Transition
                  as={Fragment}
                  leave="transition ease-in duration-100"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <Listbox.Options className="absolute py-1 mt-1 overflow-auto text-base bg-white shadow-md max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm w-64 scrollbar-thin scrollbar-track-gray-100 scrollbar-thumb-gray-300">
                    {MONTHS.map((month, i) => (
                      <Listbox.Option
                        key={month}
                        className={({ active }) =>
                          `${
                            active
                              ? 'text-primary-900 bg-primary-100'
                              : 'text-gray-900'
                          }
                          cursor-default select-none relative py-2 pl-10 pr-4`
                        }
                        value={i}
                      >
                        {({ selected, active }) => (
                          <>
                            <span
                              className={`${
                                selected ? 'font-medium' : 'font-normal'
                              } block truncate`}
                            >
                              {month}
                            </span>
                            {selected ? (
                              <span
                                className={`${
                                  active
                                    ? 'text-primary-600'
                                    : 'text-primary-600'
                                }
                                absolute inset-y-0 left-0 flex items-center pl-3`}
                              >
                                <CheckIcon
                                  className="w-5 h-5"
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
            </Listbox>
          </div>
          <div className="text-white">{selectedYear}</div>
          {/* Prev and Next Month */}
          <div className="flex items-center text-white">
            <button
              type="button"
              onClick={handlePrevMonth}
              className="hover:bg-primary-700 flex items-center justify-center rounded-md p-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-chevron-left stroke-2"
                width={22}
                height={22}
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <polyline points="15 6 9 12 15 18" />
              </svg>
            </button>
            <button
              type="button"
              onClick={handleNextMonth}
              className="hover:bg-primary-700 flex items-center justify-center rounded-md p-2 ml-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-chevron-right stroke-2"
                width={22}
                height={22}
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <polyline points="9 6 15 12 9 18" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-7 gap-y-1 overflow-x-auto pt-2 pb-3 px-4">
        {/* Day label */}
        {DAYS.map((day) => (
          <div
            key={day}
            className="w-10 h-10 flex items-center justify-center mb-1"
          >
            <p className="text-sm font-semibold text-center text-primary-600 dark:text-primary-100">
              {day.substring(0, 2)}
            </p>
          </div>
        ))}
        {/* Offset */}
        {Array.from({ length: dates.offset }).map((_, i) => (
          <div key={i} className="w-10 h-10 flex items-center justify-center">
            <p className="text-md font-medium text-center text-gray-900 dark:text-gray-100"></p>
          </div>
        ))}
        {/* Print date */}
        {dates.dates.map((date) => (
          // <div
          //   key={date.getDate()}
          //   className={`p-2 cursor-pointer flex items-center w-10 h-10 justify-center hover:bg-primary-100 hover:text-gray-500 ${
          //     selectedDate.toDateString() === date.toDateString()
          //       ? 'bg-primary-600 rounded-full text-white'
          //       : 'text-gray-500'
          //   }`}
          //   onClick={() => setSelectedDate(date)}
          // >
          //   <p className={`text-md font-medium `}>{date.getDate()}</p>
          // </div>
          <button
            type="button"
            key={date.getDate()}
            className={`p-2 cursor-pointer flex items-center w-10 h-10 justify-center hover:bg-primary-100 hover:rounded-md ${
              selectedRange.from?.toDateString() === date.toDateString()
                ? 'bg-primary-600 rounded-l-full text-white'
                : ''
            } ${
              selectedRange.to?.toDateString() === date.toDateString()
                ? 'bg-primary-600 rounded-r-full text-white'
                : ''
            } ${
              selectedRange.to?.toDateString() === date.toDateString() ||
              selectedRange.from?.toDateString() === date.toDateString()
                ? 'text-white'
                : 'text-gray-700 '
            } ${
              selectedRange.from &&
              selectedRange.to &&
              selectedRange.from.getTime() < date.getTime() &&
              selectedRange.to.getTime() > date.getTime()
                ? 'bg-primary-100'
                : ''
            }`}
            onClick={() => handleChangeRange(date)}
          >
            <p className={`text-sm font-medium`}>{date.getDate()}</p>
          </button>
        ))}
      </div>
    </div>
    //   </div>
    // </>
  )
}
