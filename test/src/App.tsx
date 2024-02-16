import React from 'react';
import {Routes, Route} from 'react-router-dom';
import './App.css';
import Field from './components/Minesweeper/Field';
import Home from './components/homepage/home';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function MyApp() {
  return (
    <div></div>
  );
}

function App() {
  return (
    <div id="app">
      
      <Routes>
        <Route path="/" element = {<Home></Home>} />
        <Route path="/Minesweeper" element = {<Field></Field>} />
      </Routes>
    </div>
  );
}

export default App;
