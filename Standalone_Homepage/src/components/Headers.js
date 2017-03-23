import React, { Component } from 'react';
import {Link} from 'react-router';
import Auth from '../Auth.js';

class Headers extends Component {
	
     render() {
		var logo = (<img src={require('./BBLogoColor.jpg')} width="16%" /> );
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
					<div className="logo">
						<Link className="navbar-brand" to="/">{logo}</Link>
					</div>
				</div>
				<div id="navbar" className="navbar-collapse collapse">
				<ul className="nav navbar-nav navbar-right">
					
			    {Auth.loggedIn()?<li><Link onClick={Auth.logout.bind(this)}>Log out</Link></li>:<li><Link to="/Login">Log in</Link></li>}
				</ul>
				</div>
			</div>
        </nav>
    );
  }
}
export default Headers;
