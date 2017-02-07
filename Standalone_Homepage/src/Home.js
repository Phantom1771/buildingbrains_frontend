import React, { Component } from 'react';
import Welcome from './Welcome.js';
import Customize from './Customize.js'

class Home extends Component {
  render() {
    return (
      <div className="Home">
        &nbsp;
		<div className="col-md-4 col-md-offset-2">
			<Welcome />
			<Customize /> 
		</div>
      </div>
    );
  }
}

export default Home;
