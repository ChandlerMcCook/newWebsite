import {Routes, Route} from 'react-router-dom';
import './App.css';
import Field from './components/games/Minesweeper/Field';
import Home from './components/homepage/home';
import SignIn from './components/account/signIN';
import Pet from './components/account/pet/pet';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Container } from 'react-bootstrap';

const signedIn = true;

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
              <Nav.Link href="/game/Minesweeper">Minesweeper</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <form className="d-flex">
            <NavDropdown title="Account" id="basic-nav-dropdown">
              {signedIn
                ? <>
                    <NavDropdown.Item href='/user/pet'>Pet</NavDropdown.Item>
                    <NavDropdown.Item href='/user/logout'>Logout</NavDropdown.Item>
                  </>
                : <>
                    <NavDropdown.Item href='/user/login'>Login</NavDropdown.Item>
                    <NavDropdown.Item href='/user/register'>Register</NavDropdown.Item>
                  </>
              }
            </NavDropdown>
          </form>
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
        <Route path="/game/Minesweeper" element = {<Field></Field>} />
        <Route path="/game/:gameID" element = {<Home></Home>} />
        <Route path="user/login" element = {<SignIn></SignIn>} />
        <Route path="user/register" element = {<SignIn></SignIn>} />
        <Route path="user/logout" element = {<SignIn></SignIn>} />
        <Route path="user/pet" element = {<Pet name='Jerry' animal='Pig' breed='Mini-Pig'></Pet>} />
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