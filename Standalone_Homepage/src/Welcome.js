import React, { Component } from 'react';

var insideTemp = 67;
var outsideTemp = 36;

class Welcome extends Component {
     render() {
        return (
            <div className="Welcome">
			    <h1>
			    	Welcome Home!
                </h1>
                <h2>
                    Inside Temperature:
                </h2>
                <h1>
                    {insideTemp}
                </h1>
                <h2>
                    Outside Temperature:
                </h2>
                <h1>
                    {outsideTemp}
                </h1>
            </div>
    );
  }
}
export default Welcome;