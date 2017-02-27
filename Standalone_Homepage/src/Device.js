import React, { Component } from 'react';
import Auth from './Auth.js';

class Device extends Component {
	constructor(props) {
		super(props);
		this.state = {currentField: ''};
	 }
	handleChange(event) {
		  let token = Auth.getToken();
		  let url = 'http://localhost:3000/devices/' + deviceId;
		  let head = {
			  'Accept': 'application/json',
			  'Content-Type': 'application/json',
		      'Authentication': token
		  };
		  let data = {
			  hubID: dummyHubID,
			  deviceID: deviceID,
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
					  updateDeviceState(deviceID);
			    }
				else {
					  alert('Something went wrong when trying to update the device. Please try again.');
					  return -1;
				}
			  })        
	}
	updateDeviceState(deviceID) {
		displayDeviceStatus(getDeviceState(deviceID));
	}
	getDeviceState(deviceID){
		  let token = Auth.getToken();
		  let url = 'http://localhost:3000/devices/' + deviceId;
		  let head = {
			  'Accept': 'application/json',
			  'Content-Type': 'application/json',
		      'Authentication': token
		  };
		  fetch(url, {
			  method: 'get',
			  headers: head,
			}).then(status)
			  .then((response) => response.json())
			  .then(json => {
				console.log(json);
				if (json.result === 0) {
					  return json.device;
			    }
				else {
					  alert('Something went wrong when trying to access the device. Please try again.');
					  return -1;
				}
			  })        
	}
	displayDeviceStatus(statusJSON) {
		if(statusJSON != -1)
		{
			var deviceData = Object.keys(statusJSON.state).map((k, idx) => {
				this.setState({currentField: k});
				switch(statusJSON.params[k][0]) {
					case 'int': {
						return (
							<div className="form-group">
								<input className="form-control" key={idk} placeholder={statusJSON.state[k]} name={k} type="int" onBlur={this.handleChange.bind(this)}/>
							</div>
						);
					}
					case 'percent': {
						return ( <ReactSlider onChange={this.handleChange.bind(this)} defaultValue={statusJSON.state[k]}/> );
					} 
					default: {
						var deviceEnum =[];
						deviceEnum.push(<option key={k} value={statusJSON.state[k]}/>);
						for (var option=0; option < statusJSON.params[k].length; option++)
							{
								var data = statusJSON.params[k][option];
								deviceEnum.push(<option key={device} value={data}>{data}</option>);
							}
						return (
							<select className="form-group" onChange={this.handleChange.bind(this)}>
								{deviceEnum}
							</select>
						);
					} 
				}
               /*return (
                 <p key={idx}><strong>{k}</strong> - {statusJSON[k]}</p>
               );*/
            });

			return (
					<div className="deviceStatus">
						<h1> {statusJSON.name} </h1>
						<h3>{deviceData}</h3>
					</div>
				);
			}
		else {
			return (<h3> Something went wrong. Please refresh and try again</h3>);
		}
		}
	
     render() {
		var status = getDeviceState(DEVICEID);
		displayDeviceStatus(status);
     }
     
}
export default Device;
