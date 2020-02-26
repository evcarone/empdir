import React from 'react'
import DataBody from './DataBody'

const DataTable = ({users, handleNameSort, search}) => {
  return (
    <table>
      <thead>
        <tr>
          <th onClick={handleNameSort}>Name</th>
          <th>Email</th>
          <th>Phone</th>
        </tr>
      </thead>
      <DataBody users={users} search={search}/>
    </table>
  )
}

export default DataTable