import React, { Component } from 'react';
import Auth from '../Auth.js'
/*
   This component is the home page for the user that displays the time, welcome home, and BB logo 
*/
class Home extends Component {
	/*
	   This function makes sure that the hubid is set before any api calls are made
     */
  componentDidMount() {
		 Auth.getHub(Auth.getToken());
	 }
	 /*
	   This function displays the home page
     */
  render() {
	var now = new Date();
	var date = now.toDateString();
	var time = now.toLocaleTimeString();
    return (
     <div className="rcorners0">
       <h1 className="page-header">Dashboard</h1>
       <div className="text-center pb-5 pl-2 mb-5 ml-5"> 
			<div className="Home">
				<h1> Welcome Home! </h1>
				<img src={require("./BBSquareLogo.png")} width="30%"/>
				<h1>
					It is currently {time} on {date}
				</h1>
			</div>
		</div>
     </div>
    );
  }
}

export default Home;
