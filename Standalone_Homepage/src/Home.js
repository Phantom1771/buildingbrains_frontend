import React, { Component } from 'react';
import Welcome from './Welcome.js';
import Customize from './Customize.js'

class Home extends Component {
  render() {
    return (
      <div className="Home">
        &nbsp;
		<div className="col-md-16 col-md-offset-4" style={{height:550}}>
			<Welcome />
			<Customize /> 
		</div>
      </div>
    );
  }
}

export default Home;
