import React, { Component } from 'react';

class Login extends Component {
	 constructor(props) {
		super(props);
		this.state = {uname: '',password: ''};
		this.handleChange = this.handleUserChange.bind(this);
		this.handleChange = this.handlePwdChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	 }
	 handleUserChange(event) {
		this.setState({uname: event.target.value});
	 }
	 handlePwdChange(event) {
		this.setState({password: event.target.value});
	 }
	 handleSubmit(event) {
		alert('A name and password were submitted: ' + this.state.uname + this.state.password);
		event.preventDefault();
	 }
     render() {
        return (
            <div id="Login">
				<div class="formbox">
					<form name="form" onSubmit={this.handleSubmit}>
					
						<div id="errorBox"> </div>
						
						<h3>Username/Email Address: </h3>
						
						<div id="email_form">
							<input type="text" value={this.state.uname} onChange={this.handleUserChange}  placeholder="Your Email" className="input_email"/>
						</div> 
						
						<h3>Password: </h3>
						
						<div id="password_form">
							<input type="password" value={this.state.password} onChange={this.handlePwdChange} placeholder="Password" className="input_password"/>
						</div>
						
						<div>
							<p id="sign_user" onClick={this.handleSubmit}>Login </p>
						</div>
						
					</form>
				</div>
                <p>
					Don't have an account? Register here: 
					<a href="/Reg">
						<p id="register_user">Register </p>
					</a>
				</p>
            </div>
    );
  }
}
export default Login;
