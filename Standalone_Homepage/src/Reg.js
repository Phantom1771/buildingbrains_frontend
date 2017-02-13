import React, { Component } from 'react';

class Reg extends Component {
  render() {
      return (
            <div className="col-sm-6 col-sm-offset-4 col-md-8 col-md-offset-0 main">
                <div className="container">
                    <div className="row vertical-offset-100">
                        <div className="col-md-12 col-md-offset-3">
                            <div className="panel panel-default">
                                <div className="panel-heading">
                                    <h3 className="panel-title" style={{'text-align': 'center'}}>Sign Up Here:</h3>
                                </div>
                                <div className="panel-body">
									<form accept-charset="UTF-8" role="form">
										<fieldset>
											<div className="form-group">
												<input className="form-control" placeholder="Your First Name" name="firstname" type="text" />
											</div>

											<div className="form-group">
												<input className="form-control" placeholder="Your Last Name" name="lastname" type="text" />
											</div>

											<div className="form-group">
											  <input className="form-control" placeholder="Your E-Mail Address" name="email" type="text" />
											</div>
											
											<div className="form-group">
											  <input className="form-control" placeholder="Confirm Your E-Mail Address" name="emailConfirmation" type="text" />
											</div>
											
											<div className="form-group">
												 <input className="form-control" placeholder="Your Password" name="password" type="password" />
											</div>
											
											<div className="form-group">
											  <input className="form-control" placeholder="Confirm Your Password" name="passwordConfirmation" type="password" />
											</div>
											
											<button className="btn btn-lg btn-primary btn-block" type="submit" >Sign Up</button>
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




export default Reg;
