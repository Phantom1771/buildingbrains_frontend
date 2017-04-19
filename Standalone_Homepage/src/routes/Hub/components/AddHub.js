import React, { Component } from 'react';
import Auth from '../../../Auth.js';
/*
   This component allows the user to add a hub to their newly created account 
*/
class AddHub extends Component {
	constructor(props) {
		super(props);
		this.state = {hubName: '',hubCode: ''};
	 }
	 /*
	   This function performs the api call to associate the hub with the user based on the hubCode
     */
	addHubToUser() {
		let token = Auth.getToken();
		let url = Auth.api('/hubs/add');
		let head = {
			  'Accept': 'application/json',
			  'Content-Type': 'application/json',
		      'x-access-token': token
		};
		let data = {
			  hubName: this.state.hubName,
			  hubCode: this.state.hubCode
		};
		console.log(JSON.stringify(data));
		fetch(url, {
			  method: 'POST',
			  headers: head,
			  body: JSON.stringify(data),
			}).then(status)
			  .then((response) => response.json())
			  .then(json => {
				//console.log(json);
				if (json.result === 0) {
					  alert('Hub successfully registered');
					  Auth.getHub(token);
					  location.replace("/");
			    }
				else {
					  alert('Something went wrong when trying to register your hub. Please double check your code and try again');
					  return -1;
				}
			  })
		return 1;
	}
	/*
	   This function handles hubName input
     */
	handleName(event) {
		this.setState({hubName: event.target.value});
	}
	/*
	   This function handles the hubCode input
     */
	handleCode(event) {
		this.setState({hubCode: event.target.value});
	}
	/*
	   This function displays all the requisite fields
     */
	render() {
		return (
			<div className="Device">
				<div className="col-md-6 col-md-offset-2">
					<div className="rcorners0">
						<div className="text-center pb-5 pl-2 mb-5 ml-5">
							<h2> Please Register Your Hub! </h2>
							<div className="form-group">
								<input className="form-control" placeholder="Name You Would Like to Call Your Hub" name="hubname" type="text" onBlur={this.handleName.bind(this)}/>
							</div>
							<div className="form-group">
								<input className="form-control" placeholder="Enter the Hub Code From Your Box Here" name="hubcode" type="text" onBlur={this.handleCode.bind(this)}/>
							</div>
							<button className="btn btn-sm btn-secondary btn-block" onClick={this.addHubToUser.bind(this)}>Register Hub</button>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
export default AddHub;
