import React, { Component } from 'react';
import Auth from '../../../Auth.js';
import Tour from "react-user-tour";

class Reg extends Component {
	constructor(props) {
		super(props);
		this.state = {firstname: '', lastname: '', email: '', emailConfirmation: '', password: '', passwordConfirmation: '',result: ''};
		this.state = {
			isTourActive: true,
			tourStep: 1
		};
	 }
	 componentDidMount() {
		this.setState({
			isTourActive: true
		});
	}
	 handleEmailChange(event) {
		this.setState({email: event.target.value});
	}
	handlePasswordChange(event) {
	   this.setState({password: event.target.value});
	}
	handleEmailConfirmation(event) {
		this.setState({emailConfirmation: event.target.value});
	}
	handlePasswordConfirmation(event) {
	   this.setState({passwordConfirmation: event.target.value});
	}
	handleFirstChange(event) {
		this.setState({firstname: event.target.value});
	}
	handleLastChange(event) {
	   this.setState({lastname: event.target.value});
	}
	attemptRegistration() {
		if(this.state.email === this.state.emailConfirmation) {
			if(this.state.password === this.state.passwordConfirmation) {
				Auth.register(this.state.firstname,this.state.lastname,this.state.email,this.state.password);
			}
			else {
				alert('The passwords you entered did not match. Please try again');
			}
		}
		else {
			alert('The email addresses you entered did not match. Please try again');
		}
	  }
  render() {
  	const tourTitleStyle = {
			fontWeight: 700,
			fontSize: 18,
			paddingTop: 20,
			paddingBottom: 10,
			paddingLeft: 10
		};

		const tourMessageStyle = {
			fontSize: 16,
			paddingLeft: 10
		};
      return (
            <div className="col-sm-6 col-sm-offset-4 col-md-8 col-md-offset-0 main">

            <div  className="tutorial" style={{width: 150, height: 50, position:"relative", right:0, backgroundColor: "blanchedalmond", textAlign: "center", opacity: 0.8, paddingTop: 15, fontWeight: 700, cursor: "pointer"}}
		  	onClick={() => this.setState({isTourActive: true, tourStep: 1})}>
			Start Tutorial </div>


                <div className="container">
                    <div className="row vertical-offset-100">
                        <div className="col-md-8 col-md-offset-3">
                            <div className="panel panel-default">
                                <div className="panel-heading">
                                    <h3 className="panel-title" style={{'text-align': 'center'}}>Sign Up Here:</h3>
                                </div>
                                <div className="panel-body">
									
										<fieldset>
											<div className="form-group">
											<div className="fg1">
												<input className="form-control" placeholder="Your First Name" name="firstname" type="text" onChange={this.handleFirstChange.bind(this)}/>
											</div>
											</div>

											<div className="form-group">
												<input className="form-control" placeholder="Your Last Name" name="lastname" type="text" onChange={this.handleLastChange.bind(this)}/>
											</div>

											<div className="fg2">
											<div className="form-group">
											  <input className="form-control" placeholder="Your E-Mail Address" name="email" type="text" onChange={this.handleEmailChange.bind(this)}/>
											</div>
											</div>

											
											<div className="form-group">
											  <input className="form-control" placeholder="Confirm Your E-Mail Address" name="emailConfirmation" type="text" onChange={this.handleEmailConfirmation.bind(this)}/>
											</div>
											
											<div className="form-group">
												 <input className="form-control" placeholder="Your Password" name="password" type="password" onChange={this.handlePasswordChange.bind(this)}/>
											</div>
											
											<div className="form-group">
											  <input className="form-control" placeholder="Confirm Your Password" name="passwordConfirmation" type="password" onChange={this.handlePasswordConfirmation.bind(this)}/>
											</div>
											
											<button className="btn btn-lg btn-primary btn-block" onClick={this.attemptRegistration.bind(this)} >Sign Up</button>
										</fieldset>
									
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                 <div style={{position: "absolute", top: 0}}>
                <Tour
					active={this.state.isTourActive}
					step={this.state.tourStep}
					onNext={(step) => this.setState({tourStep: step})}
					onBack={(step) => this.setState({tourStep: step})}
					onCancel={() => this.setState({isTourActive: false})}
					steps={[
						{
							step: 1,
							selector: ".tutorial",
							title: <div style={tourTitleStyle}>Create an account here!</div>,
							body: <div style={tourMessageStyle}>Please follow the tutorial.</div>,
							position:"right",
							horizontalOffset: 80,
							verticalOffset: -30
						},
						{
							step: 2,
							selector: ".panel-heading",
							title: <div style={tourTitleStyle}>Please enter firstname and lastname here!</div>,
							body: <div style={tourMessageStyle}></div>,
							position: "right",
							horizontalOffset: -50,
							verticalOffset: 30
						},
						{
							step: 3,
							selector: ".fg2",
							title: <div style={tourTitleStyle}>Please enter your E-mail here!</div>,
							body: <div style={tourMessageStyle}>Make sure to confirm your E-mail.</div>,
							position: "right",
							horizontalOffset: 30,
							verticalOffset: -30
						},
						{
							step: 4,
							selector: ".fg2",
							title: <div style={tourTitleStyle}>Please enter your password here!</div>,
							body: <div style={tourMessageStyle}>Remember your password. You will use this password later!</div>,
							position: "right",
							horizontalOffset: 30,
							verticalOffset: 75
						},
						{
							step: 5,
							selector: ".btn.btn-lg.btn-primary.btn-block",
							title: <div style={tourTitleStyle}>Ok! Now click here to finish signup.</div>,
							body: <div style={tourMessageStyle}></div>,
							position: "bottom",
							horizontalOffset: 200,
							verticalOffset: -60 
							
						}
						
					]}
				/>
				</div>
            </div>
        )
    }
    
}




export default Reg;
