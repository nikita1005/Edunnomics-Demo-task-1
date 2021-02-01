import React, { Component } from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navigation from './components/Navigation';
import Sidebar from './components/Sidebar';

class App extends Component {
  render() {
    return (
      <div>
        <Navigation/>
        <Sidebar/>
      </div>
    )
  }
}export default App;
