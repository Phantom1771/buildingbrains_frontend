import React, { Component } from 'react';
import LoginText from "./components/LoginText.js"
import LoginForm from "./components/LoginForm.js"

class Login extends Component {
  render() {
      return (
        <div className="Welcome">

        <div id="container">
            <div id="container_body">
                <LoginText />
                <LoginForm />
            </div>
        </div>
 
        </div>
          );}}


export default Login;
