import React, { Component } from 'react';

class Nav extends Component {
  render() {
    return (


   <div className="container-fluid">
      <div className="row">
        <div className="col-sm-3 col-md-2 sidebar">
          <ul className="nav nav-sidebar">
            <li className="active "><a href="#">  
              <i className="fa fa-home fa-3x" aria-hidden="true"></i>
              <p>Home</p>
            </a></li>
          </ul>

          <ul className="nav nav-sidebar">
            <li><a href="">
              <i className="fa fa-object-group fa-3x" aria-hidden="true"></i>
              <p>Devices</p>
              </a></li>
          </ul>

          <ul className="nav nav-sidebar">
            <li><a href="">
              <i className="fa fa-random fa-3x" aria-hidden="true"></i>
              <p>Stats</p>
              </a></li>
          </ul>

          <ul className="nav nav-sidebar">
            <li><a href="">
              <i className="fa fa-users fa-3x" aria-hidden="true"></i>
              <p>User</p>
              </a></li>
          </ul>

          <ul className="nav nav-sidebar">
            <li><a href="">
              <i className="fa fa-cogs fa-3x" aria-hidden="true"></i>
              <p>Settings</p>
              </a></li>
          </ul>
            
        </div>
        </div>
        </div>





    );
  }
}

export default Nav;
