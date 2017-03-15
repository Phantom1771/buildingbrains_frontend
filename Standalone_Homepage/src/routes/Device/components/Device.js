import React, { Component } from 'react';
import Auth from '../../../Auth.js';
import { ReactSlider } from 'react-slider';
import Nav from '../../../components/Nav.js';
import Headers from '../../../components/Headers.js';

class Device extends Component {
	constructor(props) {
		super(props);
		this.state = {status: '', deviceID: '', currentField: ''};
		this.handleChange.bind(this);
		this.getDeviceState.bind(this);
		this.displayDeviceStatus.bind(this);
		this.setId.bind(this);
	 }
	handleChange(event) {
		  let token = Auth.getToken();
		  let hubID = Auth.getHub(token);
		  let url = 'http://localhost:3000/devices/' + this.state.deviceID;
		  let head = {
			  'Accept': 'application/json',
			  'Content-Type': 'application/json',
		      'Authentication': token
		  };
		  let data = {
			  hubID: hubID,
			  deviceID: this.state.deviceID,
			  deviceSettings: {currentField: event.target.value}
		  };
		  fetch(url, {
			  method: 'POST',
			  headers: head,
			  body: JSON.stringify(data),
			}).then(status)
			  .then((response) => response.json())
			  .then(json => {
				console.log(json);
				if (json.result === 0) {
					  return 0;
			    }
				else {
					  alert('Something went wrong when trying to update the device. Please try again.');
					  return -1;
				}
			  })        
	}
	getDeviceState(deviceID){
		  let token = Auth.getToken();
		  let url = 'http://localhost:3000/devices/' + deviceID;
		  let head = {
			  'Accept': 'application/json',
			  'Content-Type': 'application/json',
		      'x-access-token': token
		  };
		  fetch(url, {
			  method: 'get',
			  headers: head,
			}).then(status)
			  .then((response) => response.json())
			  .then(json => {
				//console.log(json);
				if (json.result === 0) {
					  this.setState({status: json.device});
					  return 0;
			    }
				else {
					  alert('Something went wrong when trying to access the device. Please try again.');
					  return -1;
				}
			  })        
	}
	displayDeviceStatus(code) {
		if(code <0) {
			return (
				<div className="row justify-content-md-center">
					<h3>Something went wrong</h3>
				</div>
			);
		}
		var statusJSON = this.state.status;
		console.log(statusJSON);
		if(!statusJSON)
		{
			return (
				<div className="row justify-content-md-center">
					<h3>Something went wrong</h3>
				</div>
			);
		}
		//console.log(statusJSON.state);
		//console.log(statusJSON.params);
		/*
		var deviceData = Object.keys(statusJSON.state).map((k, idx) => {
			this.setState({currentField: k});
			*/
			switch(statusJSON.params[0]) {
				case 'int': {
					return (
						<div className="deviceStatus">
							<h1> {statusJSON.name} </h1>
							<div className="form-group">
								<input className="form-control" key={statusJSON._id} placeholder={statusJSON.state} name={statusJSON.type} type="int" onBlur={this.handleChange.bind(this)}/>
							</div>
						</div>
					);
				}
				case 'percent': {
					return ( 
						<div className="deviceStatus">
							<h1> {statusJSON.name} </h1>
							<ReactSlider onChange={this.handleChange.bind(this)} defaultValue={statusJSON.state}/>
						</div>
					);
				} 
				default: {
					var deviceEnum =[];
					deviceEnum.push(<option key={statusJSON._id} value={statusJSON.state}/>);
					for (var option=0; option < statusJSON.params[0].length; option++)
						{
							var data = statusJSON.params[0][option];
							deviceEnum.push(<option key={option} value={data}>{data}</option>);
						}
					return (
						<div className="deviceStatus">
							<h1> {statusJSON.name} </h1>
							<select className="form-group" onChange={this.handleChange.bind(this)}>
								{deviceEnum}
							</select>
						</div>
					);
				} 
			
           };
	}
	
	 setId(device) {
		 this.setState({deviceID: device});
	 }
     render() {
		let { params } = this.props;
		let device = params.deviceID;
		var state=this.displayDeviceStatus(this.getDeviceState(device));
		//console.log(state);
		return (
			<div className="Device">
				<Headers />
				<Nav />
				<div className="col-md-6 col-md-offset-4">
					<div className="rcorners0">
						<div className="text-center pb-5 pl-2 mb-5 ml-5"> 
							{state}
						</div>
					</div>
				</div>
			</div>
		);
     }
     
}
export default Device;
