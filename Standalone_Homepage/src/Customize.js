import React, { Component } from 'react';

var dummyDeviceList = {"devices": ["Kitchen Light", "Nest Thermostat", "Alarm System"]};
function getDevices(deviceJSON) {
	var deviceOptions =[];
	deviceOptions.push(<option key="-1" />);
	var deviceList=deviceJSON.devices;
	for (var device=0; device < deviceList.length; device++)
		{
			var data = deviceList[device];
			
			deviceOptions.push(<option key={device} value={data}>{data}</option>);
		}
        return deviceOptions;
     }

class Customize extends Component {
	 
     render() {
		var devicesAvailable = getDevices(dummyDeviceList);
        return (
            <div className="customize">
				<p>Want to add a device to show on this page? Select it from the list below! </p>
			    <select className="form-control">
					{devicesAvailable}
			    </select>
            </div>
    );
  }
}
export default Customize;
