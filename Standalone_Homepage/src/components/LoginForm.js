import React, { Component } from 'react';

class LoginForm extends Component {
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
		var formData = {
			uname: this.state.uname,
			password: this.state.password
		}
		var requestBody = JSON.stringify(formData);
		alert(requestBody);
		event.preventDefault();
	 }
     render() {
        return (
            <div id="Login">
				<div class="formbox">
					<form name="form" >
					
						<div id="errorBox"> </div>
						
						<h3>Username/Email Address: </h3>
						
						<div id="email_form">
							<input type="text" value={this.state.uname} onChange={(e) => this.handleUserChange(e)}  placeholder="Your Email" className="input_password"/>
						</div> 
						
						<h3>Password: </h3>
						
						<div id="password_form">
							<input type="password" value={this.state.password} onChange={(e) => this.handlePwdChange(e)} placeholder="Password" className="input_password"/>
						</div>
						<div>
					 <a className="btn btn-primary col-xs-4 classWithPad" href="/Reg">Register</a> 
					 <a className="btn btn-success p-3 col-xs-4  classWithPad " href="/Login">Login</a>	
						</div>
					</form>
				</div>
            </div>
    );
  }
}
export default LoginForm;
