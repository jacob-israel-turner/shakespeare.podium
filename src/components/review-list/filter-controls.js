import React from 'react'
import ArrowDown from 'react-icons/lib/md/arrow-drop-down'
import ArrowUp from 'react-icons/lib/md/arrow-drop-up'


const columns = [
  {
    label: 'Name',
    sortField: 'author'
  },
  {
    label: 'Rating',
    sortField: 'rating'
  },
  {
    label: 'Date',
    sortField: 'publish_date'
  },
]

export default function FilterControl({onFiltersChanged, sort, ascending}) {
  return (
    <tr>
      {columns.map(({label, sortField}) => {
        return <th 
          onClick={onFiltersChanged.bind(null, {field: sortField})} 
          key={label}>
            {label}: {sort === sortField ? (ascending ? <ArrowUp /> : <ArrowDown />) : null}
          </th>
      })}

    </tr>
  )
}

