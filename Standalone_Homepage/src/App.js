import React, { Component } from 'react';

import Nav from './Nav.js';
import Reg from './Reg.js';
import Headers from './Headers.js';
import Notification from './Notification.js';
import Home from './Home.js';
import Login from './Login.js';


class App extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      route: window.location.pathname,//.substr(1)
      isLogin: true
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
      case '/Home': Child = Home ; break;
      case '/Login': Child = Login; this.state.isLogin=false; break;
      default:      Child = Home;
    }
    return (
      <div className="App">
        <Headers />
       { this.state.isLogin ? <Nav /> : null }
        <Child />
      </div>
    )
  }
}

export default App;
