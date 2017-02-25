import React, { Component } from 'react';
import NavItem from './NavItem.js'
class Nav extends Component {
    

    render() {
      return (
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-3 col-md-2 sidebar">
                <ul className="nav nav-sidebar">
                    <NavItem to="/" index={true}>  
                    <i className="fa fa-home fa-3x " aria-hidden="true"></i>
                    <p>Home</p>
                    </NavItem>
                </ul>

                <ul className="nav nav-sidebar">
                    <NavItem to="/Devices"  >  
                    <i className="fa fa-object-group fa-3x " aria-hidden="true"></i>
                    <p>Devices</p>
                    </NavItem>
                </ul>

                <ul className="nav nav-sidebar">
                    <NavItem to="/Stats"> 
                    <i className="fa fa-random fa-3x " aria-hidden="true"></i>
                    <p>Stats</p>
                    </NavItem>
                </ul>

                <ul className="nav nav-sidebar">
                    <NavItem to="/Users"> 
                    <i className="fa fa-users fa-3x " aria-hidden="true"></i>
                    <p>User</p>
                    </NavItem>
                </ul>

                <ul className="nav nav-sidebar">
                    <NavItem to="/Settings">
                    <i className="fa fa-cogs fa-3x " aria-hidden="true"></i>
                    <p>Settings</p>
                    </NavItem>
                </ul>
                  
              </div>
              </div>
              </div>





        );
      }
}

export default Nav;
