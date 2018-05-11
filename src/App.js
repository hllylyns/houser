import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './component/Header/Header';
import routes from '../src/routes';


class App extends Component {
  render() {
    return (
      <div className="App">
       <Header/>
       {routes}
      </div>
    );
  }
}

export default App;
