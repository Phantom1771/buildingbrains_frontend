import React, { Component } from 'react';
import Auth from '../../../Auth.js';
import Nav from '../../../components/Nav.js';
import Headers from '../../../components/Headers.js';
import Slider from 'react-rangeslider';
import 'react-rangeslider/lib/index.css'

class Device extends Component {
	constructor(props) {
		super(props);
		this.state = {status: '', deviceID: '',state: ''};
	 }
	 handleFloatChange = (event) => {
		  var value = event.target.value;
		  this.setState({state: value});
		  let token = Auth.getToken();
		  let hubID = Auth.getHubID();
		  let url = 'http://localhost:3000/devices/update';
		  let head = {
			  'Accept': 'application/json',
			  'Content-Type': 'application/json',
		      'x-access-token': token
		  };
		  let data = {
			  hubID: hubID,
			  deviceID: this.state.deviceID,
			  deviceSetting: String(value)
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
					  return 0;
			    }
				else {
					  alert('Something went wrong when trying to update the device. Please try again.');
					  return -1;
				}
			  })        
	}
	handleChange = (event) => {
		  var value = event.target.value;
		  this.setState({state: value});
		  let token = Auth.getToken();
		  let hubID = Auth.getHubID();
		  let url = 'http://localhost:3000/devices/update';
		  let head = {
			  'Accept': 'application/json',
			  'Content-Type': 'application/json',
		      'x-access-token': token
		  };
		  let data = {
			  hubID: hubID,
			  deviceID: this.state.deviceID,
			  deviceSetting: String(value)
		  };
		  //console.log(JSON.stringify(data));
		  fetch(url, {
			  method: 'POST',
			  headers: head,
			  body: JSON.stringify(data),
			}).then(status)
			  .then((response) => response.json())
			  .then(json => {
				//console.log(json);
				if (json.result === 0) {
					  return 0;
			    }
				else {
					  alert('Something went wrong when trying to update the device. Please try again.');
					  return -1;
				}
			  })        
	}
	handlePercentChange = (value) => {
		  this.setState({state: value});
		  let token = Auth.getToken();
		  let hubID = Auth.getHubID();
		  let url = 'http://localhost:3000/devices/update';
		  let head = {
			  'Accept': 'application/json',
			  'Content-Type': 'application/json',
		      'x-access-token': token
		  };
		  let data = {
			  hubID: hubID,
			  deviceID: this.state.deviceID,
			  deviceSetting: String(value)
		  };
		  //console.log(JSON.stringify(data));
		  fetch(url, {
			  method: 'POST',
			  headers: head,
			  body: JSON.stringify(data),
			}).then(status)
			  .then((response) => response.json())
			  .then(json => {
				//console.log(json);
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
					  this.setState({state: json.device.state});
					  return 0;
			    }
				else {
					  alert('Something went wrong when trying to access the device. Please try again.');
					  return -1;
				}
			  })        
	}
	displayDeviceStatus(statusJSON) {
		if(!statusJSON)
		{
			return (
				<div className="row justify-content-md-center">
					<h3>Please wait while we get the status of your device. If this page does not update within 10 seconds, please refresh and try again </h3>
				</div>
			);
		}
		
		var devType = statusJSON.type;
		switch(statusJSON.params[0]) {
			case 'float': {
				return (
					<div className="deviceStatus">
						<h1> Device: {statusJSON.name} </h1>
						<h2> Device Type: {devType} </h2>
						<h2> Setting: 
							<div className="form-group">
								<input className="form-control" key={statusJSON._id} placeholder={statusJSON.state} name={statusJSON.type} type="float" onBlur={this.handleFloatChange.bind(this)}/>
							</div>
						</h2>
					</div>
				);
			}
			case 'percent': {
				var val = Number(this.state.state);
				return ( 
					<div className="deviceStatus">
						<h1> Device: {statusJSON.name} </h1>
						<h2> Device Type: {devType} </h2>
						<h2> Current State: 
							<Slider onChange={this.handlePercentChange.bind(this)} value={val}/>
						</h2>
					</div>
				);
			} 
			default: {
				if(statusJSON.type !== "Color") {
					console.log(statusJSON.params[0]);
					//console.log(statusJSON.state);
					var deviceEnum =[];
					deviceEnum.push(<option key={statusJSON._id} value={statusJSON.state}>{statusJSON.state}</option>);
					for (var option=0; option < statusJSON.params.length; option++)
						{
							var data = statusJSON.params[option];
							deviceEnum.push(<option key={option} value={data}>{data}</option>);
						}
					return (
						<div className="deviceStatus">
							<h1> Device: {statusJSON.name} </h1>
							<h2> Device Type: {devType} </h2>
							<h2> Setting: 
								<select className="form-group" onChange={this.handleChange.bind(this)}>
									{deviceEnum}
								</select>
							</h2>
						</div>
					);
				} 
				else {
					/*
					var redBox = (<input className="form-control" key="red" placeholder={statusJSON.state[0]} name="red" type="float" onBlur={this.handleRedChange.bind(this)}/>);
					var greenBox = (<input className="form-control" key="green" placeholder={statusJSON.state[2]} name="green" type="float" onBlur={this.handleGreenChange.bind(this)}/>);
					var blueBox = (<input className="form-control" key="blue" placeholder={statusJSON.state[4]} name="blue" type="float" onBlur={this.handleBlueChange.bind(this)}/>);
					return (
						<div className="deviceStatus">
							<h1> Device: {statusJSON.name} </h1>
							<h2> Device Type: {devType} </h2>
							<h2> Red: {redBox} </h2>
							<h2> Green: {greenBox} </h2>
							<h2> Blue: {blueBox} </h2>
							<p> To turn off, set all values to 0 </p>
						</div>
					);
					*/
					return (
						<div className="deviceStatus">
							<h1> Device: {statusJSON.name} </h1>
							<h2> Device Type: {devType} </h2>
							<h2> Currently Unable to Display Color Devices, Sorry </h2>
						</div>
					);
				}
			}
		
        };
	}/*
	handleRedChange(event) {
		var value = event.target.value;
		if(value > 255) {
			value = 255;
		}
		if(value < 0) {
			value = 0;
		}
		var red = String(value);
		var green = this.state.state[2];
		var blue = this.state.state[4];
		var rgb = red + "," + green + "," + blue;
		let token = Auth.getToken();
		  let hubID = Auth.getHubID();
		  let url = 'http://localhost:3000/devices/update';
		  let head = {
			  'Accept': 'application/json',
			  'Content-Type': 'application/json',
		      'x-access-token': token
		  };
		  let data = {
			  hubID: hubID,
			  deviceID: this.state.deviceID,
			  deviceSetting: rgb
		  };
		  //console.log(JSON.stringify(data));
		  fetch(url, {
			  method: 'POST',
			  headers: head,
			  body: JSON.stringify(data),
			}).then(status)
			  .then((response) => response.json())
			  .then(json => {
				//console.log(json);
				if (json.result === 0) {
					  return 0;
			    }
				else {
					  alert('Something went wrong when trying to update the device. Please try again.');
					  return -1;
				}
			  })        
		
	}
	handleGreenChange(event) {
		var value = event.target.value;
		if(value > 255) {
			value = 255;
		}
		if(value < 0) {
			value = 0;
		}
		var green = String(value);
		var red = this.state.state[0];
		var blue = this.state.state[4];
		var rgb = red + "," + green + "," + blue;
		console.log(rgb);
		let token = Auth.getToken();
		  let hubID = Auth.getHubID();
		  let url = 'http://localhost:3000/devices/update';
		  let head = {
			  'Accept': 'application/json',
			  'Content-Type': 'application/json',
		      'x-access-token': token
		  };
		  let data = {
			  hubID: hubID,
			  deviceID: this.state.deviceID,
			  deviceSetting: rgb
		  };
		  //console.log(JSON.stringify(data));
		  fetch(url, {
			  method: 'POST',
			  headers: head,
			  body: JSON.stringify(data),
			}).then(status)
			  .then((response) => response.json())
			  .then(json => {
				//console.log(json);
				if (json.result === 0) {
					  return 0;
			    }
				else {
					  alert('Something went wrong when trying to update the device. Please try again.');
					  return -1;
				}
			  })        
		
	}
	handleBlueChange(event) {
		var value = event.target.value;
		if(value > 255) {
			value = 255;
		}
		if(value < 0) {
			value = 0;
		}
		var blue = String(value);
		var green = this.state.state[2];
		var red = this.state.state[0];
		var rgb = red + "," + green + "," + blue;
		let token = Auth.getToken();
		  let hubID = Auth.getHubID();
		  let url = 'http://localhost:3000/devices/update';
		  let head = {
			  'Accept': 'application/json',
			  'Content-Type': 'application/json',
		      'x-access-token': token
		  };
		  let data = {
			  hubID: hubID,
			  deviceID: this.state.deviceID,
			  deviceSetting: rgb
		  };
		  //console.log(JSON.stringify(data));
		  fetch(url, {
			  method: 'POST',
			  headers: head,
			  body: JSON.stringify(data),
			}).then(status)
			  .then((response) => response.json())
			  .then(json => {
				//console.log(json);
				if (json.result === 0) {
					  return 0;
			    }
				else {
					  alert('Something went wrong when trying to update the device. Please try again.');
					  return -1;
				}
			  })        
		
	}
	*/
	 setID(device) {
		 this.setState({deviceID: device});
	 }
	 componentDidMount() {
		 let { params } = this.props;
		 let device = params.deviceID;
		 this.setID(device);
		 this.getDeviceState(device)
	 }
     render() {
		var state=this.displayDeviceStatus(this.state.status);
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
