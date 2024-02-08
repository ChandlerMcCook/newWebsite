import React from 'react';
import {Routes, Route} from 'react-router-dom';
import './App.css';
import Field from './components/Minesweeper/Field'
import Home from './components/homepage/home'

function App() {
  return (
    <div id="app">
      <Routes>
        <Route path="/" element = {<Home></Home>} />
      </Routes>
    </div>
  );
}

export default App;
