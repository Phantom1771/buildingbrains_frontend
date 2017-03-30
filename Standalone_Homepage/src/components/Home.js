import React, { Component } from 'react';

class Home extends Component {
  render() {
    return (
     <div className="rcorners0">
       <h1 className="page-header">Dashboard</h1>
       <button type="button" className="btn btn-info" data-toggle="collapse" data-target="#demo">Simple collapsible</button>
        <div id="demo" className="collapse">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </div>

        </div>
    );
  }
}

export default Home;
