import React, { Component } from 'react';

class Recovery extends Component {
	constructor(props) {
		super(props);
		this.state = {email: '', password: '',response: ''};
	 }
	 handleEmailChange(event) {
		this.setState({email: event.target.value});
	}
  render() {
	  var attemptRecovery = function() {
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
		  if (this.state.response.result === 1) {
			  alert('Recovery success');
		  }
		  else {
			  alert('Recovery fail');
		  }
        }
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
									<form accept-charset="UTF-8" role="form" onSubmit={attemptRecovery}>
										<fieldset>
											<div className="form-group">
												<input className="form-control" placeholder="Your E-Mail Address" name="email" type="text" onChange={this.handleEmailChange.bind(this)}/>
											</div>							
											<button className="btn btn-lg btn-primary btn-block" type="submit" >Recover Password</button>
											<a href="/Login" className="btn btn-sm btn-secondary btn-block">Not the page you were looking for? Click here to go back</a>
											
										</fieldset>
									</form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

);}}


export default Recovery;
