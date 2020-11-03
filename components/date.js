import React from 'react'
import { format, parseISO } from 'date-fns'

const Date = ({ dateStr, fontSize }) => {
  const date = parseISO(dateStr)

  return (
    <div className={fontSize}>
      <time dateTime={dateStr}>{format(date, 'LLLL dd, yyyy')}</time>
    </div>
  )
}

export default Date
