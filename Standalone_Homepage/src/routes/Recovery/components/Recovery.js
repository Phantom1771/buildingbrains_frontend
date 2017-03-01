import React, { Component } from 'react';
import { Link } from 'react-router'
import Auth from '../../../Auth.js';

class Recovery extends Component {
	constructor(props) {
		super(props);
		this.state = {email: '',response: ''};
	}
	handleEmailChange(event) {
		this.setState({email: event.target.value});
	}

	handleEmailSubmit(){
		Auth.attemptRecovery(this.state.email)
	}
  render() {
      return (
            <div className="col-sm-6 col-sm-offset-4 col-md-8 col-md-offset-0 main">
                <div className="container">
                    <div className="row vertical-offset-100">
                        <div className="col-md-8 col-md-offset-3">
                            <div className="panel panel-default">
                                <div className="panel-heading">
                                    <h3 className="panel-title" style={{'text-align': 'center'}}>Input Your Email and We Will Send You Your Password</h3>
                                </div>
                                <div className="panel-body">
										<fieldset>
											<div className="form-group">
												<input className="form-control" placeholder="Your E-Mail Address" name="email" type="text" onChange={this.handleEmailChange.bind(this)}/>
											</div>							
											<button type="submit" className="btn btn-lg btn-primary btn-block" onClick={this.handleEmailSubmit.bind(this)} >Recover Password</button>
											<Link to="/Login" className="btn btn-sm btn-secondary btn-block">Not the page you were looking for? Click here to go back</Link>
											
										</fieldset>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

);}}


export default Recovery;
