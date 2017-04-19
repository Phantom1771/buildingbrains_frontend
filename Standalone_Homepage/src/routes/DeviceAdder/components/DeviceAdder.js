import React, { Component } from 'react';
import Auth from '../../../Auth.js';
import Nav from '../../../components/Nav.js';
import Headers from '../../../components/Headers.js';

var Modal = require('react-modal');
const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};
/*
  This component displays the page to allow users to add nearby devices to their devices 
*/
class DeviceAdder extends Component {
	 constructor(props) {
		super(props);
		this.state = {modalOpen: false, deviceName: '', deviceID: '', deviceList: ''};
	 }
	 /*
	   This function creates a displayable list of devices nearby to the hub
     */
	 displayDevices(nearbyDevices) {
		 console.log(nearbyDevices);
		 console.log(nearbyDevices.length);
		 var displayList=[];
		 for(var i=0;i<nearbyDevices.length;i++) {
			 var dev = nearbyDevices[i];
			 displayList.push(<button className="btn btn-sm btn-secondary btn-block" onClick={this.openDeviceModal.bind(this,dev._id)}> {dev.link} </button>);
		 }
		 if (displayList.length > 0) {
			return(displayList);
		 }
		 else {
			 return;
		 }
	 }
	 /*
	   This function opens a popup to create a name for the device when one is clicked
     */
	 openDeviceModal(deviceID) {
		 this.setState({modalOpen: true});
		 this.setState({deviceID: deviceID});
	 }
	 /*
	   This function registers the device with the hub in question
     */
	 registerDevice() {
		 let token = Auth.getToken();
		 let hubID = Auth.getHubID();
		 let deviceID = this.state.deviceID;
		 let deviceName = this.state.deviceName;
		 let head = {
			  'Accept': 'application/json',
			  'Content-Type': 'application/json',
		      'x-access-token': token
		  };
		  let data = {
			  hubID: hubID,
			  deviceID: deviceID,
			  deviceName: deviceName
		  };
		  fetch(Auth.api('/devices/add'), {
			  method: 'POST',
			  headers: head,
			  body: JSON.stringify(data),
			}).then(status)
			  .then((response) => response.json())
			  .then(json => {
				if (json.result === 0) {
					  alert('Device successfully registered to your hub');
					  location.replace("/devices");
			    }
				else {
					  alert('Something went wrong when trying to register the device. Please try again.');
					  return -1;
				}
			  })
		 this.setState({modalOpen: false});
	 }
	 /*
	   This function extracts the value for the name of the device
     */
	 handleName(event) {
		 this.setState({deviceName: event.target.value});
	 }
	 /*
	   This function retrieves a list of nearby devices
     */
	 getNearbyDevices() {
		 let token = Auth.getToken();
		  let hubID = Auth.getHubID();
		  let url = Auth.api('/devices/nearby');
		  let head = {
			  'Accept': 'application/json',
			  'Content-Type': 'application/json',
		      'x-access-token': token
		  };
		  let data = {
			  hubID: hubID
		  };
		  fetch(url, {
			  method: 'POST',
			  headers: head,
			  body: JSON.stringify(data),
			}).then(status)
			  .then((response) => response.json())
			  .then(json => {
				//console.log(json);
				if (json.result === 0) {
					//return this.displayDevices(json.devices);
					this.setState({deviceList: json.devices});
			    }
				else {
					  alert('Something went wrong when retrieving nearby devices. Please try again.');
					  return -1;
				}
			  })        
	 }
	 /*
	   This function controls the style of the modal
     */
	 afterOpenModal() {
	    this.refs.subtitle.style.color = '#f00';
	 }
	 /*
	   This function gets the nearby devices before the page displays to ensure no race conditions
     */
	 componentDidMount() {
		 this.getNearbyDevices();
	 }
	 /*
	   This function displays the devices that can be added as well the methods to add them
     */
	 render() {
		var nearbyDevices = this.displayDevices(this.state.deviceList);	
		if(!nearbyDevices) {
			nearbyDevices=(<div className="text-center pb-5 pl-2 mb-5 ml-5"> <h2> No nearby devices found. Click refresh to try again </h2></div>);
		}
		return (
             <div className="DeviceAdder">
				<Headers />
				<Nav />
                <div className="col-md-6 col-md-offset-4">
						<div className="rcorners0">
							<div className="text-center pb-5 pl-2 mb-5 ml-5"> 
								<h1 > Select the Device You Want To Add From The List</h1>
							</div>
							<div class="row justify-content-md-center">
								{nearbyDevices}
								<Modal isOpen={this.state.modalOpen} onAfterOpen={this.afterOpenModal} style={customStyles} contentLabel="Name Your Device" >
						          <h2>Please Enter a Name for Your Device</h2>
						          <form>
									<div className="form-group">
										<input className="form-control" placeholder="Name for Your Device" name="devicename" type="text" onBlur={this.handleName.bind(this)}/>
									</div>
						            <button onClick={this.registerDevice.bind(this)}>Register Device With This Name</button>
						          </form>
						        </Modal>
							</div>
						</div>
				</div>
            </div>
    );
    
  }     
}
export default DeviceAdder;
