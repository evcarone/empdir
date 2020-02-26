import React, { useState, useEffect } from 'react';
import Header from "./components/Header";
import DataTable from "./components/DataTable";
import './App.css';

import API from './utils/API.js'

function App() {
  const [users, setUsers] = useState([])
  const [search, setSearch] = useState("")
  useEffect(() => {
    API.getUsers().then(res=> setUsers(res.data.results))
  },[])

  const handleNameSort = () => {
    const sortedUsers = [...users]
    sortedUsers.sort((a, b) => {
      if (a.name.first < b.name.first) {
        return -1
      }
      if (a.name.first > b.name.first) {
        return 1
      }
      return 0
    })
    setUsers(sortedUsers)
  }

  return (
    <div>
      <Header search={search} setSearch={setSearch}/>;
      <DataTable users={users} search={search} handleNameSort={handleNameSort} />;
    </div>
  )
}

export default App;
