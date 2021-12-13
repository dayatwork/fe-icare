export const DAYS = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
]

export const MONTHS = [
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

export interface generateDateProps {
  year: number
  month: number
}

export function generateDate({ year, month }: generateDateProps) {
  const MONTH_SIZE = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

  // Check for leap year
  if (year % 100 === 0 ? year % 400 === 0 : year % 4 === 0) {
    MONTH_SIZE[1] = 29
  }

  const dates = []

  for (let day = 1; day <= MONTH_SIZE[month]; day++) {
    dates.push(new Date(year, month, day))
  }

  return {
    dates,
    offset: dates[0].getDay(),
  }
}
