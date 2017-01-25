import React, { Component } from 'react';
import logo from '../public/img/bblogo.JPG';

class Headers extends Component {
     render() {
        return (
            <div className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
            </div>
    );
  }
}
export default Headers;