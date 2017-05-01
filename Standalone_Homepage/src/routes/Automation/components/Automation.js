import React, { Component } from 'react';
import Auth from '../../../Auth.js';
import Auto from '../../../Automation.js';
class Automation extends Component {
    
	constructor(props) {
		super(props);
		this.state = {
      deviceList: [],
      automationList: [],
      automationCount: '',
      checkedList: [],
      automationName: '',
      selectedAutomation: 'default',
      selectedDeleteAutomation: 'default'
    };
	 }
    componentWillMount() {
      Auto.getDevices()
        .then(
          json => {
            this.setState({deviceList: json.devices})
            Auto.getAutomation().then(
              json => {
                 this.setState({automationList : json.automations
                 })
                 if(this.state.automationList === undefined){
                    this.setState({automationList: [], automationCount: 0})
                 }else{
                    this.setState({automationCount: this.state.automationList.length})
                 }
                 console.log("State is now")
                 console.log(this.state)
                 console.log(this.state.automationList[0].name)
              }
            )
          }
        )

        
    }
    handleSubmit(){
      console.log(this.state)
      Auto.addAutomation(this.state.checkedList, this.state.automationName).then(
        json => {
          console.log(json)
          location.reload()
        })
    }
    handleApply(){
      console.log(this.state)
      if(this.state.selectedAutomation !== 'default'){
        Auto.sendAutomation(this.state.selectedAutomation).then(
          json =>{
            console.log(json)
          }
        )
      }
    }
    handleSelect(e){
      console.log(e.target.value)
      this.setState({selectedAutomation: e.target.value})
    }
    handleName(e){
       this.setState({automationName : e.target.value})
    }
    handleDelete(e){
       console.log(this.state.selectedDeleteAutomation)
       if(this.state.selectedDeleteAutomation !== 'default'){
        Auto.deleteAutomation(this.state.selectedDeleteAutomation).then(
          json =>{
            location.reload()
            console.log(json)

          }
        )
       }
    }
    handleDeleteSelect(e){
      console.log(e.target.value)
      this.setState({selectedDeleteAutomation: e.target.value})
    }
    handleCheck(e){
      console.log(e.target.dataset.id)
       var ch = {
            device: e.target.dataset.id,
            setting: e.target.dataset.state
       }
          
      if(e.target.dataset.checked === "false"){
          this.state.checkedList.push(ch)
          e.target.dataset.checked= "true"
      }else{
          var newArray = this.state.checkedList.filter(
            (obj) => {
              console.log(obj.device)
              console.log(obj.device === ch.device)
              return obj.device !== ch.device
            }
          )
          this.setState({checkedList: newArray})
      }
    }
    render() {
      
      return (
        <div className="rcorners0">
        <div className="h1 text-left"> Automation Page </div> 
        <div>
          <ul  className="nav nav-tabs">
            <li className="active">
              <a href="#1" data-toggle="tab">Use a Saved Automation</a>
            </li>
            <li>
              <a href="#2" data-toggle="tab">Add a New Automation</a>

            </li>
            <li>
              <a href="#3" data-toggle="tab">Delete an Automation</a>

            </li>
          </ul>
        </div>


        <div className="tab-content">
        <div className="tab-pane fade in active" id="1">

            <br/>
          <div className="form-group">
              <label for="sel1"> This will execute an automation that you have saved</label>
              <select className="form-control" id="sel1" onChange={this.handleSelect.bind(this)}>
                <option value="default"> Please select one of the automation profile</option>
              {this.state.automationList.map( automation=>
                 <option value={automation._id}>{automation.name}</option>
              )}
              </select>
          </div>

            <div align="left" className="updateButton">
              <button className="btn btn-lg btn-primary  " type="submit" onClick={this.handleApply.bind(this)} >Update</button>
            </div>
          </div>
          




          <div className="tab-pane" id="2">
            <br/>
            <div className="form-group">
                <label for="inputdefault">Set your new Automation Name</label>
                <label> 
                  <ul>
                    <li>First, set each device that you would like to include in the automation to the state you would like it to be in when you run the automation. </li>
                  <li>After ALL devices have been set properly, select them from the list and enter a name for your automation like "Watch a Movie". </li>
                    <li>Then hit submit and your automation will be saved! To run this automation, go to the "Run a Saved Automation" tab and select it from the list. </li>
                     <li> Your devices will return to the state you originally set them to for the automation.</li>
                  </ul>
                  </label>
                <input className="form-control" id="inputdefault" type="text" onChange={this.handleName.bind(this)}/>
            </div>
                <label for="inputdefault">Select the devices you want to include</label>
              <ul>
              {this.state.deviceList.map(device =>
                <li>
                  <label className="checkbox-inline">
                    <input type="checkbox" data-checked="false" data-id={device._id} data-state={device.state} onChange={this.handleCheck.bind(this)}/>
                      {device.name}, State: {device.state} 
                  </label>
                </li>
              )}
              </ul> 
              <div align="left" className="updateButton">
              <button className="btn btn-lg btn-primary  " type="submit" onClick={this.handleSubmit.bind(this)} >Add New Automation</button>
              </div>
          </div>           
              <div className="tab-pane" id="3">
            <br/>
           <div className="tab-pane fade in active" id="1">

          <div className="form-group">
              <label for="sel1"> Choose an stored automation:</label>
              <select className="form-control" id="sel1" onChange={this.handleDeleteSelect.bind(this)}>
                <option value="default"> Please select one of the automation profile</option>
              {this.state.automationList.map( automation=>
                 <option value={automation._id}>{automation.name}</option>
              )}
              </select>
          </div>

            <div align="left" className="updateButton">
              <button className="btn btn-lg btn-danger" type="submit" onClick={this.handleDelete.bind(this)} >Delete</button>
            </div>
          </div> 
          </div>   
          
			</div>
			</div>

        );
    }
}

export default Automation;