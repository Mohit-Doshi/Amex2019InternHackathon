import React from 'react';
import logo from './logo.svg';
import './routeslist.css';


function ListRoutes() {
  return (
    <div className="Route">
      <header className="ChooseARoute">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/routeslist.js</code> and save to reload.
        </p>
        <h1>Pick a route</h1>
        <a
          className="R-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default ListRoutes;
