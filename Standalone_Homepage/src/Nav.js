import React, { Component } from 'react';

class Nav extends Component {
  render() {
    return (
       <div className="Nav">
        <a href="http://www.buildingbrains.co">
          <div className="Home-Button" >
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
       </div>
        
    );
  }
}

export default Nav;
