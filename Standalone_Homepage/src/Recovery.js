import React, { Component } from 'react';

class Recovery extends Component {
	constructor(props) {
		super(props);
		this.state = {email: '',response: ''};
	 }
	 handleEmailChange(event) {
		this.setState({email: event.target.value});
	}
	attemptRecovery() {
		let data = {
			email: this.state.email
		};
		  fetch('http://localhost:3000/users/forgot', {
			  method: 'post',
			  headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			  },
			  body: data
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
			  alert('Recovery success');
			  this.transitionTo("/Login");
		  }
		  else {
			  alert('Recovery fail');
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
                                    <h3 className="panel-title" style={{'text-align': 'center'}}>Input Your Email and We Will Send You Your Password</h3>
                                </div>
                                <div className="panel-body">
										<fieldset>
											<div className="form-group">
												<input className="form-control" placeholder="Your E-Mail Address" name="email" type="text" onChange={this.handleEmailChange.bind(this)}/>
											</div>							
											<button className="btn btn-lg btn-primary btn-block" onClick={this.attemptRecovery.bind(this)} >Recover Password</button>
											<a href="/Login" className="btn btn-sm btn-secondary btn-block">Not the page you were looking for? Click here to go back</a>
											
										</fieldset>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

);}}


export default Recovery;
