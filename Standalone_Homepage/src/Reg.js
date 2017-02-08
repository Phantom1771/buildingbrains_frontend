import React, { Component } from 'react';
import RegText from "./components/RegText.js"
import RegForm from "./components/RegForm.js"

class Reg extends Component {
  render() {
      return (
        <div className="col-sm-6 col-sm-offset-4 col-md-8 col-md-offset-3 main">
        <div className="Welcome">

        <div id="container">
            <div id="container_body">
                <RegText />
                <RegForm />
            </div>
        </div>
 
        </div>
        </div>
          );
   }
}


export default Reg;
