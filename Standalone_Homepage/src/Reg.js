import React, { Component } from 'react';
import RegText from "./components/RegText.js"
import RegForm from "./components/RegForm.js"

class Reg extends Component {
  render() {
      return (
        <div className="Welcome">

        <div id="container">
            <div id="container_body">
                <RegText />
                <RegForm />
            </div>
        </div>
 
        </div>
          );}}


export default Reg;
