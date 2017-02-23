import React, { Component } from 'react';

class RegForm extends Component {
    render(){
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
						<div id="errorBox"></div>

						<div id="email_form">
							First Name: <input type="text" name="Name"  placeholder="First Name"  className="input_name" />
						</div>

						<div id="email_form">
							Last Name: <input type="text" name="LastName" placeholder="Last Name" className="input_name" />
						</div>

						<div id="email_form">
						  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;E-Mail: <input type="text" name="Email"   placeholder="Your Email" className="input_name" />
						</div>
						
						<div id="email_form">
						  &nbsp;Confirm E-Mail: <input type="text" name="emailConfirmation" placeholder="Confirm Email" className="input_name" />
						</div>
						
						<div id="email_form">
							 &nbsp;&nbsp;&nbsp;Password: <input type="password" name="Password" placeholder="New Password" className="input_name" />
						</div>
						
						<div id="email_form">
						  &nbsp;Confirm Password: <input type="text" name="passwordConfirmation" placeholder="Confirm Password" className="input_name" />
						</div>
						
						<div>
							<p id="sign_user" onClick="Submit()">Sign Up </p>
						</div>
					</fieldset>
									</form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    
}

export default RegForm;
