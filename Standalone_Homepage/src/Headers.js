import React, { Component } from 'react';
import logo from '../public/img/bblogo.JPG';

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
                <a className="navbar-brand" href="#">Building Brains</a>
            </div>
            <div id="navbar" className="navbar-collapse collapse">
            <ul className="nav navbar-nav navbar-right">
                <li><a href="#">Login</a></li>
            </ul>
            </div>
        </div>
        </nav>
    );
  }
}
export default Headers;