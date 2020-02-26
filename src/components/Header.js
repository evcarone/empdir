import React from "react";



function Header({search, setSearch}) {
  const handleSearch = e => {
    setSearch(e.target.value)
  }
  return (
    <div>
    <div className="jumbotron">
    <h1>EMPLOYEE DIRECTORY</h1>

  </div>
  <div className="card">
    <div className="card-header">
      <h3 className="card-title">list of employees -- enter search criteria to find </h3>
    </div>
    <div className="card-body">
      <p className="card-text">
        <input value={search} onChange={handleSearch} placeholder="Search..."/>
      </p>
    </div>
  </div>
  </div>
  );
}

export default Header;