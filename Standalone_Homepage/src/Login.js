import React, { Component } from 'react';

class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {email: '', password: '',response: ''};
	 }
	 handleEmailChange(event) {
		this.setState({email: event.target.value});
	}
	handlePasswordChange(event) {
	   this.setState({password: event.target.value});
	}
  render() {
	  var attemptLogin = function() {
		  fetch('/users/login', {
			  method: 'post',
			  headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			  },
			  body: JSON.stringify({
				email: this.state.email,
				password: this.state.password,
			  })
			}).then(status)
			  .then((responseData) => {
					this.setState({
					  response: responseData
					});
				})
			  .then(function(responseData) {
				console.log('request succeeded with json response', responseData)
			  }).catch(function(error) {
				console.log('request failed', error)
			 })
			 this.setState({response: {'result': 1}});
		  if (this.state.response.result === 1) {
			  alert('Login success');
			  this.transitionTo("/Home");

		  }
		  else {
			  alert('Login fail');
		  }
        }
      return (
            <div className="col-sm-6 col-sm-offset-4 col-md-8 col-md-offset-0 main">
                <div className="container">
                    <div className="row vertical-offset-100">
                        <div className="col-md-12 col-md-offset-3">
                            <div className="panel panel-default">
                                <div className="panel-heading">
                                    <h3 className="panel-title" style={{'text-align': 'center'}}>Please Sign In</h3>
                                </div>
                                <div className="panel-body">
									<form accept-charset="UTF-8" role="form" onSubmit={attemptLogin}>
										<fieldset>
											<div className="form-group">
												<input className="form-control" placeholder="E-mail" name="email" type="text" onChange={this.handleEmailChange.bind(this)}/>
											</div>
											<div className="form-group">
												<input className="form-control" placeholder="Password" name="password" type="password" onChange={this.handlePasswordChange.bind(this)}/>
											</div>											
											<button className="btn btn-lg btn-primary btn-block" type="submit" >Login</button>
											<a href="/Recovery" className="btn btn-sm btn-secondary btn-block" type="submit">Forgot Your Password? Click Here!</a>
											<a href="/Reg" className="btn btn-sm btn-secondary btn-block" type="submit">Don't have an account yet? Register Here!</a>
											
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
