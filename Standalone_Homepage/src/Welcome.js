import React, { Component } from 'react';
import WeatherDisplay from './Weather.js';

class Welcome extends Component {
	
     render() {
        return (
        <div className="col-md-6 col-md-offset-2">
            <div className="Welcome">
				<h1>
					Welcome Home!
				</h1>
				<h3>
					The current weather conditions in your area are:
				</h3>
				<div className="col-md-offset-3">
					<WeatherDisplay />
				</div>
            </div>
        </div>
    );
  }
}
export default Welcome;
