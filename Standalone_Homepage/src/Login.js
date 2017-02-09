import React, { Component } from 'react';
import LoginText from "./components/LoginText.js"
import LoginForm from "./components/LoginForm.js"

class Login extends Component {
  render() {
      return (
            <div className="col-sm-6 col-sm-offset-4 col-md-8 col-md-offset-0 main">
                <div className="container">
                    <div className="row vertical-offset-100">
                        <div className="col-md-4 col-md-offset-4">
                            <div className="panel panel-default">
                                <div className="panel-heading">
                                    <h3 className="panel-title">Please sign in</h3>
                                </div>
                                <div className="panel-body">
                                <form accept-charset="UTF-8" role="form">
                                <fieldset>
                                    <div className="form-group">
                                        <input className="form-control" placeholder="E-mail" name="email" type="text"/>
                                    </div>
                                    <div className="form-group">
                                        <input className="form-control" placeholder="Password" name="password" type="password" value=""/>
                                    </div>
                                    <div className="checkbox">
                                        <label>
                                            <input name="remember" type="checkbox" value="Remember Me"/> Remember Me
                                        </label>
                                    </div>
                                    <a href="/Home" className="btn btn-lg btn-primary btn-block" type="submit" >Login</a>
                                    <a href="/Reg" className="btn btn-lg btn-danger btn-block" type="submit">Register</a>
                                </fieldset>
                                </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

);}}


export default Login;
