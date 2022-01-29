import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Counters from './components/counters';
import React from 'react';

function App() {
  return (
    <React.Fragment>
    <NavBar/>
    <Counters/>
    </React.Fragment>
  );
}

export default App;
