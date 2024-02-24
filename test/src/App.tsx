import React from 'react';
import {Routes, Route} from 'react-router-dom';
import './App.css';
import Field from './components/Minesweeper/Field';
import Home from './components/homepage/home';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Container } from 'react-bootstrap';

function MyNavbar() {
  return (
    <div id="navbar">
      <Navbar fixed="top" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">Pigkins</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/Minesweeper">Minesweeper</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </div>
  );
}

function App() {
  return (
    <div id="app">
      <MyNavbar />
      <Routes>
        <Route path="/" element = {<Home></Home>} />
        <Route path="/Minesweeper" element = {<Field></Field>} />
      </Routes>
    </div>
  );
}

export default App;



// <div id="navbar">
// <Navbar expand="lg" className = "bg-body-tertiary">
//   <Container>
//     <Navbar.Brand href="/">Squealsite</Navbar.Brand>
//     <Navbar.Toggle aria-controls="basic-navbar-nav" />
//     <Navbar.Collapse id="basic-navbar-nav">
//       <Nav className="me-auto">
//         <Nav.Link href="/Minesweeper">Minesweeper</Nav.Link>
//       </Nav>
//     </Navbar.Collapse>
//   </Container>
// </Navbar>
// </div>