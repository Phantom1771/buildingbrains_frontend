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
	if (deviceID === -1)
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
		return (
			<div className="deviceStatus">
				<div className="col-md-16">
					<h2> {this.state.device} </h2>
					<h3> Power: {statusJSON.Power} </h3>
				</div>
			</div>
			);
		}
	 
     render() {
		var devicesAvailable = getDevices(dummyDeviceList);
		var deviceStatus = this.displayDeviceStatus(getDeviceStatus(this.state.device));
        return (
            <div className="customize">
				{deviceStatus}
				<p>Want to add a device to show on this page? Select it from the list below! </p>
			    <select className="home-form" onChange={this.handleChange}>
					{devicesAvailable}
			    </select>
            </div>
    );
  }
}
export default Customize;
