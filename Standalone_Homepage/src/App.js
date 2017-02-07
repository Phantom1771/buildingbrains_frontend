import React, { Component } from 'react';

import Nav from './Nav.js';
import Reg from './Reg.js';
import Headers from './Headers.js';
import Welcome from './Welcome.js';
import Notification from './Notification.js';
import Login from './Login.js';


class App extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      route: window.location.pathname//.substr(1)
    }
  }

  componentDidMount() {
    window.addEventListener('hashchange', () => {
      this.setState({
        route: window.location.hash.substr(1)
      })
    })
  };

  render() {
    let Child
    switch (this.state.route) {
      case '/Reg': Child = Reg; break;
      case '/Home': Child = Welcome ; break;
      case '/Login': Child = Login ; break;
      default:      Child = Notification;
    }
    console.log(window.location.hash.substr(1))
    return (
      <div className="App">
        <Headers />
        <Nav />
        <div className="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
        <Child />
        </div>
      </div>
    )
  }
}

export default App;
