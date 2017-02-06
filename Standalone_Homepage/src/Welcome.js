import React, { Component } from 'react';
import WeatherDisplay from './Weather.js';

class Welcome extends Component {
	
     render() {
        return (
            <div className="Welcome">
				<h1>
					Welcome Home!
				</h1>
				<h3>
					The current weather conditions are
				</h3>
				<WeatherDisplay />
            </div>
    );
  }
}
export default Welcome;
