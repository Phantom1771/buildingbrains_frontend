import React, { Component } from 'react';
import Auth from './Auth.js';

class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {email: '', password: '',result: ''};
	 }
	 handleEmailChange(event) {
		this.setState({email: event.target.value});
	}
	handlePasswordChange(event) {
	   this.setState({password: event.target.value});
	}
	handleSubmit(event){
		Auth.login(this.state.email,this.state.password);		
	}
  render() {
      return (
            <div className="col-sm-6 col-sm-offset-4 col-md-8 col-md-offset-0 main">
                <div className="container">
                    <div className="row vertical-offset-100">
                        <div className="col-md-8 col-md-offset-3">
                            <div className="panel panel-default">
                                <div className="panel-heading">
                                    <a href="/Reg"><h3 className="panel-title" style={{'text-align': 'center'}}>Please Sign In If You Have An Account. If It's Your First Time, Register Here!</h3></a>
                                </div>
                                <div className="panel-body">
										<fieldset>
											<div className="form-group">
												<input className="form-control" placeholder="E-mail" name="email" type="text" onChange={this.handleEmailChange.bind(this)}/>
											</div>
											<div className="form-group">
												<input className="form-control" placeholder="Password" name="password" type="password" onChange={this.handlePasswordChange.bind(this)}/>
											</div>											
											<button className="btn btn-lg btn-primary btn-block" type="submit" onClick={this.handleSubmit.bind(this)} >Login</button>
											<a href="/Recovery" className="btn btn-sm btn-secondary btn-block">Forgot Your Password? Click Here!</a>
										</fieldset>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

);}}


export default Login;
