import React from 'react'
import { Container } from 'reactstrap';
import { Table } from 'reactstrap';
import DataBody from './DataBody'

const DataTable = ({users, handleNameSort, search}) => {
  return (
      <Container className="themed-container" fluid="md">
    <Table striped>
      <thead>
        <tr>
          <th onClick={handleNameSort}>Name</th>
          <th>Email</th>
          <th>Phone</th>
        </tr>
      </thead>
      <DataBody users={users} search={search}/>
    </Table>
    </Container>
  )
}

export default DataTable