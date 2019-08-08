// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <h1>
//           This could have been it? really
//         </h1>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React from 'react';
import FindAPool from './FindAPool'
import ListRoutes from './routeslist'
function App() {
  return (
  <div className="App">
    <FindAPool resd="dk"/>
    <ListRoutes/>
    <FindAPool resd="lk"/>
    </div>
  );
};

export default App;