import React, { Component } from 'react';

class RegForm extends Component {
    render(){
        return (
            <div id="form_name">
                <div class="firstnameorlastname">
					<form name="form" >
						<div id="errorBox"></div>

						<div id="first_form">
							First Name: <input type="text" name="Name" value="" placeholder="First Name"  class="input_name" />
						</div>

						<div id="last_form">
							Last Name: <input type="text" name="LastName" value="" placeholder="Last Name" class="input_name" />
						</div>

						<div id="email_form">
						  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;E-Mail: <input type="text" name="Email" value=""  placeholder="Your Email" class="input_email" />
						</div>
						
						<div id="email_form">
						 Username: <input type="text" name="Email" value=""  placeholder="Your Email" class="input_email" />
						</div>
						
						<div id="password_form">
							&nbsp;Password: <input type="password" name="Password" value=""  placeholder="New Password" class="input_password" />
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
