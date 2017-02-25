import React, { Component } from 'react';

class Device extends Component {
	getDeviceState(deviceID){
		  let url = 'http://localhost:3000/devices/' + deviceId;
		  let head = {
			  'Accept': 'application/json',
			  'Content-Type': 'application/json',
		      'Authentication': localStorage.token
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
				//SWITCH STATEMENT HERE BASED ON statusJSON.params. Change method which device is returned
				switch(statusJSON.params[k][0]) {
					case 'int': return 0; //this should be a field that the user can enter any integer
					case 'percent': return 0; //A slide bar that allows the user to set adjustable based on percentages. 
					default: return 0; //A drop down that enumerates all of the possible options for that parameter. 
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
