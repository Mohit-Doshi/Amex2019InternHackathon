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

import React,{Component} from 'react';
import LandingPage from './LandingPage'
import ListRoutes from './routeslist'
import FindAPool from './FindAPool';
export default class App extends Component {
  render(){
  return (
  <div className="App">
    <LandingPage/>
    <FindAPool resd="dk"/>
    <ListRoutes/>
  </div>
  );
  }
};

