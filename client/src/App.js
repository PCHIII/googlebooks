
// import 'bootstrap/dist/css/bootstrap.min.css';

// import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
// import Button from 'react-bootstrap/Button';



class App extends Component {
  render() {
    return (
      <div className="App">
         {/* <Button variant="primary"> Hello </Button> */}
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      
        {/* <Navbar /> */}
     </div>
    );
  }
}

export default App;
