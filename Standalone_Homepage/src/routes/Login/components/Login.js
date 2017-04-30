import React, { Component } from 'react';
import { Link } from 'react-router'
import Auth from '../../../Auth.js';
import Header from '../../../components/Headers'
import Tour from "react-user-tour";

class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {email: '', password: '',result: ''};
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
	handleSubmit(event){
		Auth.login(this.state.email,this.state.password);		
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
		  <div>
		  <Header/>
            <div className="col-sm-6 col-sm-offset-4 col-md-8 col-md-offset-0 main">
            
            <div  className="tutorial" style={{width: 150, height: 50, position:"relative", right:0, backgroundColor: "blanchedalmond", textAlign: "center", opacity: 0.8, paddingTop: 15, fontWeight: 700, cursor: "pointer"}}
		  	onClick={() => this.setState({isTourActive: true, tourStep: 1})}>
			Start Tutorial </div>
                

                <div className="container">
                    <div className="row vertical-offset-100">
                        <div className="col-md-8 col-md-offset-3">
                            <div className="panel panel-default">
                                <div className="panel-heading">
                                    <Link to="/Reg"><h3 className="panel-title" style={{'text-align': 'center'}}>Please Sign In If You Have An Account. If It's Your First Time, Register Here!</h3></Link>
                                </div>
                                <div className="panel-body">
										<fieldset>
											<div className="form-group">
												<input className="form-control" placeholder="E-mail" name="email" type="text" onChange={this.handleEmailChange.bind(this)}/>
											</div>
											<div className="form-group">
												<input className="form-control" placeholder="Password" name="password" type="password" onChange={this.handlePasswordChange.bind(this)}/>
											</div>											
											<button className="btn btn-lg btn-primary btn-block" type="submit" onClick={this.handleSubmit.bind(this)} >Login</button>
											<Link to="/Recovery" className="btn btn-sm btn-secondary btn-block">Forgot Your Password? Click Here!</Link>
										</fieldset>
                                </div>
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
							selector: ".panel-body",
							title: <div style={tourTitleStyle}>First time using Building Brains?</div>,
							body: <div style={tourMessageStyle}>We have a tutorial for you!</div>,
							position:"right"
						},
						{
							step: 2,
							selector: ".panel-title",
							title: <div style={tourTitleStyle}>Press here to Register!</div>,
							body: <div style={tourMessageStyle}>Please login if you have an account. Don't have an account? Register Here! </div>,
							position: "bottom",
							horizontalOffset: 330
						},
						{
							step: 3,
							selector: ".form-group",
							title: <div style={tourTitleStyle}>Enter Your E-mail!</div>,
							body: <div style={tourMessageStyle}>Please enter the E-mail address you used to signup the account.</div>,
							position: "right"
						},
						{
							step: 4,
							selector: ".form-group",
							title: <div style={tourTitleStyle}>Enter Your Password!</div>,
							body: <div style={tourMessageStyle}>Forget your password? Click the link below!</div>,
							position: "right",
							horizontalOffset: 125,
							verticalOffset: 50
						},
						{
							step: 5,
							selector: ".btn.btn-sm.btn-secondary.btn-block",
							//selector:".btn.btn-lg.btn-primary.btn-block",
							title: <div style={tourTitleStyle}>Click here to Login you account!</div>,
							body: <div style={tourMessageStyle}>Forget your password? Click the link below!</div>,
							position: "bottom",
							horizontalOffset: 330,
							//verticalOffset: 85
						}
					]}
				/>
				</div>

			</div>

);}}


export default Login;
