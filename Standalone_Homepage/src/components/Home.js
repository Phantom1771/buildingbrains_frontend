import React, { Component } from 'react';
import Auth from '../Auth.js'
import Tour from "react-user-tour";
/*
   This component is the home page for the user that displays the time, welcome home, and BB logo 
*/
class Home extends Component {
	constructor(props) {
        super(props);
        this.state = {
            isTourActive: true,
            tourStep: 1
     };
    }
	/*
	   This function makes sure that the hubid is set before any api calls are made
     */
  componentDidMount() {
		 Auth.getHub(Auth.getToken());
		 this.setState({
			isTourActive: false
		});
	 }
	 /*
	   This function displays the home page
     */
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
	var now = new Date();
	var date = now.toDateString();
	var time = now.toLocaleTimeString();
    return (

     <div className="rcorners0">
       <h1 className="page-header">Dashboard</h1>
        <div  className="tutorial" style={{width: 150, height: 50, position:"relative", right:0, backgroundColor: "blanchedalmond", textAlign: "center", opacity: 0.8, paddingTop: 15, fontWeight: 700, cursor: "pointer"}}
		  	onClick={() => this.setState({isTourActive: true, tourStep: 1})}>
			Start Tutorial </div>
       <div className="text-center pb-5 pl-2 mb-5 ml-5"> 
			<div className="Home">
				<h1> Welcome Home! </h1>
				<img src={require("./BBSquareLogo.png")} width="30%"/>
				<h1>
					It is currently {time} on {date}
				</h1>
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
                            selector: ".rcorners0",
                            title: <div style={tourTitleStyle}>Welcome to the main panel !</div>,
                            body: <div style={tourMessageStyle}>Let me walk you around.</div>,
                            position:"bottom",
                            verticalOffset: -50

                        },
                        {
                            step: 2,
                            selector: ".fa.fa-home.fa-5x ",
                            title: <div style={tourTitleStyle}>Home page</div>,
                            body: <div style={tourMessageStyle}> </div>,
                            position: "right",
                            horizontalOffset: -220
                        },
                        {
                            step: 3,
                            selector: ".fa.fa-object-group.fa-5x ",
                            title: <div style={tourTitleStyle}>Device page</div>,
                            body: <div style={tourMessageStyle}>Manage and controll your smarthome devices here!</div>,
                            position: "right",
                            horizontalOffset: -220
                        },
                        {
                            step: 4,
                            selector: ".fa.fa-random.fa-5x ",
                            title: <div style={tourTitleStyle}>Automation page</div>,
                            body: <div style={tourMessageStyle}>Set automation, and you can controll multiple devices in group!</div>,
                            position: "right",
                            horizontalOffset: -220,
                            
                        },
                        {
                            step: 5,
                            selector: ".fa.fa-users.fa-5x ",
                            //selector:".btn.btn-lg.btn-primary.btn-block",
                            title: <div style={tourTitleStyle}>User page</div>,
                            body: <div style={tourMessageStyle}>Update your information, reset password and manage your account! </div>,
                            position: "right",
                            horizontalOffset: -220,
                            //verticalOffset: 85
                        },
                        {
                            step: 7,
                            selector: ".nav.navbar-nav.navbar-right ",
                            //selector:".btn.btn-lg.btn-primary.btn-block",
                            title: <div style={tourTitleStyle}>Logout Here!</div>,
                            body: <div style={tourMessageStyle}>Remeber to Logout when you are using a public computer.</div>,
                            position: "left",
                            horizontalOffset: 80,
                            verticalOffset: -40
                        },
                         {
                            step: 6,
                            selector: ".fa.fa-object-group.fa-5x ",
                            title: <div style={tourTitleStyle}>Click here!</div>,
                            body: <div style={tourMessageStyle}>Start by adding your first smart device.</div>,
                            position: "right",
                            horizontalOffset: -220
                        }
                    ]}
                />
                </div>

     </div>
    );
  }
}

export default Home;
