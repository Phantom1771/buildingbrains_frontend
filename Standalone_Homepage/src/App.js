import React, { Component } from 'react';
import logo from './bblogo.JPG';
import './App.css';

var insideTemp = 67;
var outsideTemp = 36;
var notifications = "No new notifications at this time";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <a href="http://www.buildingbrains.co">
		<div className="Home-Button">
        </div>
        </a>
        <a href="http://www.google.com">
        <div className="Device-Button">
        </div>
        </a>
        <a href="http://www.bing.com">
        <div className="Stats-Button">
        </div>
        </a>
        <a href="http://www.yahoo.com">
        <div className="Settings-Button">
        </div>
        </a>
        <a href="http://www.msn.com">
        <div className="Users-Button">
        </div>
        </a>
        <div className="Welcome">
			<h1>
				Welcome Home!
			</h1>
			<h2>
				Inside Temperature:
			</h2>
			<h1>
				{insideTemp}
			</h1>
			<h2>
				Outside Temperature:
			</h2>
			<h1>
				{outsideTemp}
			</h1>
		</div>
		<div className="Notifications">
			<h1>
				Notifications:
			</h1>
			<h2>
				{notifications}
			</h2>
		</div>
      </div>
      
    );
  }
}

export default App;
