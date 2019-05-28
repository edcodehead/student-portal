import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
// import Header from './Components/Header/Header';
// import SignUp from './Components/SignUp/SignUp';
// import AboutUs from './Components/AboutUs/AboutUs';
import { BrowserRouter } from 'react-router-dom';
import Layout from './Components/Layout/Layout';

class App extends Component {
  render() {
    return ( // When you first load App.js. You can remove the stuff stuff in here // Elements must be wrapped up in a single parent div
      
      <div>
      <BrowserRouter>
          <Layout />
      </BrowserRouter>
      </div>
    );
  }
}

export default App;
