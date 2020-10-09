import React from 'react';
import './App.css';
import { Navbar, Nav, NavDropdown, NavbarBrand } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
    <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
      <div class="container">
        <NavbarBrand href="/">Ristorante Confusion</NavbarBrand>
      </div>
    </Navbar>
    </div>
  );
}

export default App;
