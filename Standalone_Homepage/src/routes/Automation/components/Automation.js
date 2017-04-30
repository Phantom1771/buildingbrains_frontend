import React, { Component } from 'react';
import Auth from '../../../Auth.js';
import Auto from '../../../Automation.js';
import Tour from "react-user-tour";







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
      selectedDeleteAutomation: 'default',
      isTourActive: false,
      tourStep: 1
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
     
  componentDidMount() {
     this.getDevices();
     this.setState({
      isTourActive: false
    });
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
     const tourTitleStyle = {
      fontWeight: 700,
      fontSize: 18,
      paddingTop: 20,
      paddingBottom: 10,
      paddingLeft: 10
    };

    const tourMessageStyle = {
      fontSize: 16,
      paddingLeft: 10
    }; 
      return (
        <div className="rcorners0">
        <div className="h1 text-left"> Automation Page </div>

        <div  className="tutorial" style={{width: 150, height: 50, position:"relative", right:0, backgroundColor: "blanchedalmond", textAlign: "center", opacity: 0.8, paddingTop: 15, fontWeight: 700, cursor: "pointer"}}
        onClick={() => this.setState({isTourActive: true, tourStep: 1})}>
      Start Tutorial </div> <br/>

        <div>
          <ul  className="nav nav-tabs">
            <li className="active">
              <a href="#1" data-toggle="tab">Use a stored automation</a>
            </li>
            <li>
              <a href="#2" data-toggle="tab">Save an automation</a>

            </li>
            <li>
              <a href="#3" data-toggle="tab">Delete an automation</a>

            </li>
          </ul>
        </div>


        <div className="tab-content">
        <div className="tab-pane fade in active" id="1">

            <br/>
          <div className="form-group">
              <label for="sel1"> Choose an stored automation:</label>
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
                <label className="setname" for="inputdefault">Set your new Automation Name</label>
                <input className="form-control" id="inputdefault" type="text" onChange={this.handleName.bind(this)}/>
            </div>
                <label className="selectdevice" for="inputdefault">Select the devices you want to include</label>
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

        <div style={{position: "absolute", top: 0}}>
                <Tour
                    active={this.state.isTourActive}
                    step={this.state.tourStep}
                    onNext={(step) => this.setState({tourStep: step})}
                    onBack={(step) => this.setState({tourStep: step})}
                    onCancel={() => this.setState({isTourActive: false})}
                    steps={[
                        {
                            step: 1,
                            selector: ".rcorners0",
                            title: <div style={tourTitleStyle}>Welcome to the Automation page!</div>,
                            body: <div style={tourMessageStyle}>Follow the instructions!</div>,
                            position:"bottom",
                            verticalOffset: -50

                        },
                        {
                            step: 2,
                            selector: ".nav.nav-tabs",
                            title: <div style={tourTitleStyle}>Click "Save an automation" !</div>,
                            body: <div style={tourMessageStyle}>To create an new automation.</div>,
                            position: "top",
                            horizontalOffset: -20,
                            verticalOffset: -35
                        },
                        {
                            step: 3,
                            selector: ".setname",
                            title: <div style={tourTitleStyle}>Give your automation a name!</div>,
                            body: <div style={tourMessageStyle}>For example, "Living room lights off", "Television Time".</div>,
                            position: "top",
                            horizontalOffset: -150,
                            verticalOffset: -38
                        },
                        {
                            step: 4,
                            selector: ".selectdevice",
                            title: <div style={tourTitleStyle}>Select the devices!</div>,
                            body: <div style={tourMessageStyle}>All the selected devices will be included in this automation.</div>,
                            position: "top",
                            horizontalOffset: -120,
                            verticalOffset: -40
                        },
                         {
                            step: 5,
                            selector: ".tab-pane.active.in",
                            title: <div style={tourTitleStyle}>Click "Add New Automation!</div>,
                            body: <div style={tourMessageStyle}>Finish adding the automation.</div>,
                            position: "bottom",
                            horizontalOffset: -120,
                            verticalOffset: -40
                        },
                        {
                            step: 6,
                            selector: ".nav.nav-tabs",
                            title: <div style={tourTitleStyle}>Click "Use a stored automation"!</div>,
                            body: <div style={tourMessageStyle}>Use a automation to controll multiple devices at a time.</div>,
                            position: "top",
                            horizontalOffset: -150,
                            verticalOffset: -35
                        },
                        {
                            step: 7,
                            selector: ".nav.nav-tabs",
                            title: <div style={tourTitleStyle}>Click "Delete an automation"!</div>,
                            body: <div style={tourMessageStyle}>Don't want an automation? Delete it here!</div>,
                            position: "top",
                            horizontalOffset: 150,
                            verticalOffset: -35
                        },

                    ]}
                />
                </div>

			</div>

        );
    }
}

export default Automation;