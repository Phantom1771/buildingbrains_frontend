import React, { Component } from 'react';
import {Link} from 'react-router';
import Auth from '../Auth.js';

class Headers extends Component {
	
     render() {
        return (
      <nav className="navbar navbar-inverse navbar-fixed-top">
      <div className="container-fluid">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
						<span className="sr-only">Toggle navigation</span>
						<span className="icon-bar"></span>
						<span className="icon-bar"></span>
						<span className="icon-bar"></span>
					</button>
          <a className="navbar-brand" href="#">Project name</a>
        </div>
        <div id="navbar" className="navbar-collapse collapse">
            {Auth.loggedIn()?
              <div>
              <ul className="nav navbar-nav navbar-right">
                <li><a href="#">Home</a></li>
                <li><a href="/Devices">Devices</a></li>
                <li><a href="/Stats">Automation</a></li>
                <li><a href="/Users">Users</a></li>
                <li><Link onClick={Auth.logout.bind(this)}>Log out</Link></li>
              </ul>
              </div>:
              <div>
                <ul className="nav navbar-nav navbar-right">
                  <li><Link to="/Login">Log in</Link></li>
                </ul>
              </div>}
        </div>
        
      </div>
    </nav>
 );}
}
export default Headers;
