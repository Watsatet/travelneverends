import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import styled from 'styled-components';
import logo from "./logo.png";
import '../App.css'

const StyledNavbar = styled(Navbar)`
  position: sticky;
  top:0;
  background : #040404;
  opacity:0.8;
  z-index:9;
`;

function Header() {
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/search?query=${search}`);
  };

  return (
    <StyledNavbar expand="lg" variant="dark" className='d-flex justify-content-between'>
          <div className='w-40 ml-20'>
            <img src={logo} className="h-20" alt="Logo" />
          </div>        
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/Watsatet/travelneverends">Home</Nav.Link>
          <Nav.Link as={Link} to="/destinations">Destinations</Nav.Link>
          <Nav.Link as={Link} to="/about">About</Nav.Link>
          <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
        </Nav>
        <Form className="d-flex mr-10" onSubmit={handleSearch}>
          <FormControl
            type="text"
            placeholder="Search"
            className="me-2"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <Button type="submit" variant="outline-light">Search</Button>
        </Form>
      </Navbar.Collapse>
    </StyledNavbar>
  );
}

export default Header;
