import React, { Component } from 'react';
import Auth from '../../../Auth.js';

class AddHub extends Component {
	constructor(props) {
		super(props);
		this.state = {hubName: '',hubCode: ''};
	 }
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
					  location.replace("/");
			    }
				else {
					  alert('Something went wrong when trying to register your hub. Please double check your code and try again');
					  return -1;
				}
			  })
		return 1;
	}
	handleName(event) {
		this.setState({hubName: event.target.value});
	}
	handleCode(event) {
		this.setState({hubCode: event.target.value});
	}

	render() {
		return (
			<div className="AddHub">
				<div className="rcorners1">
					<h2> ADD HUB HERE </h2>
					<div className="form-group">
						<input className="form-control" placeholder="Name for Your Hub" name="hubname" type="text" onBlur={this.handleName.bind(this)}/>
					</div>
					<div className="form-group">
						<input className="form-control" placeholder="Hub Code From Box" name="hubcode" type="text" onBlur={this.handleCode.bind(this)}/>
					</div>
					<button className="btn btn-sm btn-secondary btn-block" onClick={this.addHubToUser.bind(this)}>Register Hub</button>
				</div>
			</div>
		);
	}
}
export default AddHub;
