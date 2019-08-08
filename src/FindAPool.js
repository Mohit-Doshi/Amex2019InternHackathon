import React from 'react';
import logo from './logo.svg';
import './FindAPool.css';

function FindAPool() {
  return (
    <div className="Pool">
      <header className="FindAPool">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/FindAPool.js</code> and save to reload.
        </p>
        <h1>
          This could have been it?
        </h1>
        <a
          className="A-link"
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

export default FindAPool;
