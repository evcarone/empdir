import React from 'react'

const DataBody = ({users, search}) => {
  const generateRows = () => {
    return users.map(user=>{
      return user.email.includes(search)
      ? (
        <tr key={user.email}>
          <td>{ user.name.first }</td>
          <td>{ user.email }</td>
          <td>{ user.phone }</td>
        </tr>
      )
      : null
    })
  }
  return (
    <tbody>
      { generateRows() }
    </tbody>
  )
}

export default DataBody