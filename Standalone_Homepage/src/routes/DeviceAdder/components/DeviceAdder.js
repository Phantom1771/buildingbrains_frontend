import React, { Component } from 'react';
import Auth from '../../../Auth.js';

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

class DeviceAdder extends Component {
	 constructor(props) {
		super(props);
		this.state = {modalOpen: false, deviceName: '', deviceID: ''};
	 }
	 displayDevices(nearbyDevices) {
		 var deviceData = Object.keys(nearbyDevices).map((k, idx) => {
			 return (<button className="btn btn-sm btn-secondary btn-block" onClick={this.openDeviceModal.bind(this,nearbyDevices[k].id)}> nearbyDevices[k].name </button>);
		 });
		 return (deviceData);
	 }
	 openDeviceModal(deviceID) {
		 this.setState({modalOpen: true});
		 this.setState({deviceID: deviceID});
	 }
	 registerDevice() {
		 let token = Auth.getToken();
		 let hubID = Auth.getHub(token);
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
		  fetch('http://localhost:3000/devices/add', {
			  method: 'POST',
			  headers: head,
			  body: JSON.stringify(data),
			}).then(status)
			  .then((response) => response.json())
			  .then(json => {
				console.log(json);
				if (json.result === 0) {
					  alert('Device successfully registered to your hub');
			    }
				else {
					  alert('Something went wrong when trying to register the device. Please try again.');
					  return -1;
				}
			  })
		 this.setState({modalOpen: false});
	 }
	 handleName(event) {
		 this.setState({deviceName: event.target.value});
	 }
	 getNearbyDevices() {
		 let token = Auth.getToken();
		  let hubID = Auth.getHub(token);
		  let url = 'http://localhost:3000/devices/nearby';
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
				console.log(json);
				if (json.result === 0) {
					  this.displayDevices(json.devices);
			    }
				else {
					  alert('Something went wrong when retrieving nearby devices. Please try again.');
					  return -1;
				}
			  })        
	 }
	 afterOpenModal() {
	    // references are now sync'd and can be accessed. 
	    this.refs.subtitle.style.color = '#f00';
	 }
	 render() {
		var nearbyDevices = this.getNearbyDevices();
		return (
             <div className="DeviceAdder">
                    <div className="col-md-6 col-md-offset-2">
							<div className="rcorners0">
								<div className="text-center pb-5 pl-2 mb-5 ml-5"> 
									<h2 > Select the Device You Want To Add From The List</h2>
								</div>
								<div class="row justify-content-md-center">
									{nearbyDevices}
									<Modal isOpen={this.state.modalOpen} onAfterOpen={this.afterOpenModal} style={customStyles} contentLabel="Name Your Device" >
							          <h2 ref="subtitle">Please Enter a Name for Your Device</h2>
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
