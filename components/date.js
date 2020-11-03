import React from 'react'
import { format, parseISO } from 'date-fns'

const Date = ({ dateStr }) => {
  const date = parseISO(dateStr)

  return <time dateTime={dateStr}>{format(date, 'LLLL dd, yyyy')}</time>
}

export default Date
