import React from "react";
import { Container } from 'reactstrap';



function Header({search, setSearch}) {
  const handleSearch = e => {
    setSearch(e.target.value)
  }
  return (
    <Container className="themed-container">
    <div className="jumbotron">
    <h1>EMPLOYEE DIRECTORY</h1>

  </div>
  <div className="card">
    <div className="card-body">
      <p className="card-text">
        <input value={search} onChange={handleSearch} placeholder="Search..."/>
      </p>
    </div>
  </div>
  </Container>
  );
}

export default Header;