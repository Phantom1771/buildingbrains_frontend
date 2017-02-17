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
	handleSubmit(event){
		let data = {
					  email: this.state.email,
					  password: this.state.password
				  };
		  fetch('http://localhost:3000/users/login', {
			  method: 'post',
			  headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			  },
			  body: JSON.stringify(data)
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
		  if (this.state.response.result === '0') {
			  alert('Login success');
			  this.transitionTo("/Home");

		  }
		  else {
			  alert('Login fail');
		  }
        
	}
  render() {
      return (
            <div className="col-sm-6 col-sm-offset-4 col-md-8 col-md-offset-0 main">
                <div className="container">
                    <div className="row vertical-offset-100">
                        <div className="col-md-12 col-md-offset-3">
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
