import React, { Component } from 'react';
import './LandingPage.css';
//import FindAPool from './FindAPool';
import carlogo from './redcar.png'
import FindAPool from './FindAPool';

class LandingPage extends Component {
    constructor(props) {
        super(props);
        this.state = {name: ''};

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event) {
        this.setState({name: event.target.name});
    }

    handleSubmit(event) {
        alert('Thank you: ' + this.state.name);
        event.preventDefault();
    }

    render() {
      
      var yourname 
      return (
        <div className="Home">
        <header className="LandingPage">
            <form onSubmit={this.handleSubmit}>
                <label>
                Name:
                <input type="text" name={this.state.name} onChange={this.handleChange} />
                </label>
            </form>
           <button onclick={<FindAPool resd={this.state.name} onChange={this.handleChange} />}>Find a Car/Van Pool</button>    
           <img src={carlogo} className="car-logo"/>
        </header>  
        </div>
      );
    }
  }
  export default LandingPage;




//   function FindAPool(params) {
//     return (
//         <div className="Pool">
//         <header className="FindAPool">
//             <img src={logo} className="App-logo" alt="logo" />
//             <p>
//             Edit <code>src/FindAPool.js</code> and save to reload.
//             </p>
//             <h1>This could have been it? {params.resd}</h1>
//             <a
//             className="A-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//             >
//             Learn React
//             </a>
//         </header>
//         </div>
//     );
//     }

