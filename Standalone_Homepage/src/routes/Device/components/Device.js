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
		  let url = Auth.api('/devices/update');
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
		  let url = Auth.api('/devices/update');
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
		  let url = Auth.api('/devices/update');
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
		  let url = Auth.api('/devices/' + deviceID);
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
					console.log(statusJSON.params[0]);
					//console.log(statusJSON.state);
					var deviceEnum =[];
					deviceEnum.push(<option key={statusJSON.state} value={statusJSON.state}>{statusJSON.state}</option>);
					for (var option=0; option < statusJSON.params.length; option++)
						{
							var data = statusJSON.params[option];
							if(!(data in deviceEnum)) {
								deviceEnum.push(<option key={data} value={data}>{data}</option>);
							}
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
		
        };
	}
	 setID(device) {
		 this.setState({deviceID: device});
	 }
	 componentDidMount() {
		 let { params } = this.props;
		 let device = params.deviceID;
		 this.setID(device);
		 this.getDeviceState(device)
	 }
	 deleteDevice() {
		  let token = Auth.getToken();
		  let hubID = Auth.getHubID();
		  let url = Auth.api('/devices/delete');
		  let head = {
			  'Accept': 'application/json',
			  'Content-Type': 'application/json',
		      'x-access-token': token
		  };
		  let data = {
			  hubID: hubID,
			  deviceID: this.state.deviceID
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
					  alert('device deleted');
					  location.replace("/devices");
			    }
				else {
					  alert('Something went wrong when trying to delete the device. Please try again.');
					  return -1;
				}
			  })
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
						<button className="btn btn-sm btn-danger btn-block" onClick={this.deleteDevice.bind(this)}>Delete Device</button>
					</div>
				</div>
			</div>
		);
     }
     
}
export default Device;
