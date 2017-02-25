import React, { Component } from 'react';

var dummyDeviceList = {"devices": ["Kitchen Light", "Nest Thermostat", "Alarm System"]};
function getDevices(deviceJSON) {
	var deviceOptions =[];
	deviceOptions.push(<option key="-1" value={-1}/>);
	var deviceList=deviceJSON.devices;
	for (var device=0; device < deviceList.length; device++)
		{
			var data = deviceList[device];
			
			deviceOptions.push(<option key={device} value={data}>{data}</option>);
		}
        return deviceOptions;
     }
function getDeviceStatus(deviceID) {
	if (!deviceID)
	{
		return -1;
	}
	if (deviceID === "Nest Thermostat")
	{
		return {"Power": "On", "Temperature": "70"};
	}
	return {"Power": "On"};
}
class Customize extends Component {
	constructor(props) {
		super(props);
		this.state = {device: ''};
		this.handleChange = this.handleDeviceSelection.bind(this);

	 }

	 handleDeviceSelection(event) {
		this.setState({device: event.target.value});
	 }
	 displayDeviceStatus(statusJSON) {
		if(statusJSON != -1)
		{
			var infoData = Object.keys(statusJSON).map((k, idx) => {
               return (
                 <p key={idx}><strong>{k}</strong> - {statusJSON[k]}</p>
               );
            });

			return (
					<div className="deviceStatus">
						<h2> {this.state.device} </h2>
						<h3>{infoData}</h3>
					</div>
				);
			}
		}
	 
     render() {
		var devicesAvailable = getDevices(dummyDeviceList);
		var deviceStatus = this.displayDeviceStatus(getDeviceStatus(this.state.device));
        return (
			<div className="col-md-10 col-md-offset-2">
				<div className="Customize">
					<p>Want to add a device to show on this page? Select it from the list below! </p>
					<select className="home-form" onChange={this.handleChange}>
						{devicesAvailable}
					</select>
					{deviceStatus}
				</div>
			</div>
    );
  }
}
export default Customize;
