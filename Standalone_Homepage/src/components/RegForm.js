import React, { Component } from 'react';

class RegForm extends Component {
    render(){
        return (
            <div id="form_name">
                <div class="firstnameorlastname">
					<form name="form" >
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
						  &nbsp;Password: <input type="password" name="Email" placeholder="Your Email" className="input_name" />
						</div>
						
						<div id="email_form">
							 &nbsp;&nbsp;&nbsp;Confirm: <input type="password" name="Password" placeholder="New Password" className="input_name" />
						</div>
						
						<div>
							<p id="sign_user" onClick="Submit()">Sign Up </p>
						</div>
					</form>
                </div>
            </div>
        )
    }
    
}

export default RegForm;
