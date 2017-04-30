import React, { Component } from 'react';
import Auth from '../../../Auth.js';
import Tour from "react-user-tour";


class Setting extends Component {
    
    constructor(props){
      super(props)
      this.state={
        email: [],
        first: [],
        last: [],
        pass: [],
        confirm: [],
        isTourActive: false,
        tourStep: 1
      }
    }
    componentDidMount() {
      var self = this;
       Auth.getAccountInfo()
       .then(
         data => self.setState({
           email: data.email,
           first: data.firstname,
           last: data.lastname
         }) 
       )
       this.setState({
      isTourActive: false
    });
    }
    
	  handleFirstChange(event) {
      this.setState({first: event.target.value});
    }
    handleLastChange(event) {
      this.setState({last: event.target.value});
    }
    handlePassChange(event) {
      this.setState({pass: event.target.value});
    }
    handleConfirmChange(event) {
      this.setState({confirm: event.target.value});
    }
    handleProfileSubmit(){
      Auth.updateProfileInfo(this.state.first, this.state.last);
    }
    handlePassSubmit(){
      if(this.state.confirm === this.state.pass){
        Auth.updatePassword(this.state.confirm);
      }else{
        alert("Password doesn't match with the confirm password");
      }
    }

    handleDeleteUser(){
      if(confirm("Are you sure you want to DELETE your account?")){
        Auth.deleteAccount();
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
        <div className="h1 text-left"> Setting Page </div>
        <div  className="tutorial" style={{width: 150, height: 50, position:"relative", right:0, backgroundColor: "blanchedalmond", textAlign: "center", opacity: 0.8, paddingTop: 15, fontWeight: 700, cursor: "pointer"}}
        onClick={() => this.setState({isTourActive: true, tourStep: 1})}>
      Start Tutorial </div> <br/>
 
        <div>
          <ul  className="nav nav-tabs p-3">
            <li className="active">
              <a href="#1" data-toggle="tab">Profile Information</a>
            </li>
            <li>
              <a href="#2" data-toggle="tab">Change Password</a>
            </li>
            <li>
              <a href="#3" data-toggle="tab">Delete Account </a>
            </li>
          </ul>
        </div>


        <div className="tab-content ">

          <div className="tab-pane fade in active" id="1">
            <br/>
            <form>
              <div className="form-group row">
                <label for="inputEmail3" className="col-sm-2 col-form-label" readonly="readonly" >Email</label>
                <div className="col-sm-4">
                <input type="text" disabled="true" className="form-control" id="inputEmail3" placeholder={this.state.email}/>
                </div>
              </div>          
              <div className="form-group row">
                <label for="inputPassword3" className="col-sm-2 col-form-label" >Last Name</label>
                <div className="col-sm-4">
                <input type="text" className="form-control"  value={this.state.last} onChange={this.handleLastChange.bind(this)}/>
                </div>
              </div>
              <div className="form-group row">
                <label for="inputPassword3" className="col-sm-2 col-form-label">First Name</label>
                <div className="col-sm-4">
                <input type="text" className="form-control"  value={this.state.first} onChange={this.handleFirstChange.bind(this)} />
                </div>
              </div>
            </form>
            <div align="left" className="updateButton">
              <button className="btn btn-lg btn-primary  " type="submit" onClick={this.handleProfileSubmit.bind(this)} >Update</button>
            </div>
          </div>
          




          <div className="tab-pane fade" id="2">
            <br/>
            <form>
       
              <div className="form-group row">
                <label for="inputPassword3" className="col-sm-2 col-form-label" >New Password</label>
                <div className="col-sm-4">
                <input type="password" className="form-control"   onChange={this.handlePassChange.bind(this)}/>
                </div>
              </div>
              <div className="form-group row">
                <label for="inputPassword3" className="col-sm-2 col-form-label">Confirm New Password</label>
                <div className="col-sm-4">
                <input type="password" className="form-control"   onChange={this.handleConfirmChange.bind(this)} />
                </div>
              </div>
            </form>
            <div align="left" className="updateButton">
              <button className="btn btn-lg btn-primary  " type="submit" onClick={this.handlePassSubmit.bind(this)} >Update</button>
            </div>
          </div>
            <div className="tab-pane fade " id="3">
            <br/> 
            <div align="left" className="updateButton">
              <button className="btn btn-lg btn-danger " type="submit" onClick={this.handleDeleteUser.bind(this)} >Delete Account</button>
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
                            title: <div style={tourTitleStyle}>Welcome to the User page!</div>,
                            body: <div style={tourMessageStyle}>Follow the instructions!</div>,
                            position:"bottom",
                            verticalOffset: -50

                        },
                        {
                            step: 2,
                            selector: ".nav.nav-tabs.p-3",
                            title: <div style={tourTitleStyle}>Click "Change Password" !</div>,
                            body: <div style={tourMessageStyle}>Input your new password. Click "Update" to save the change.</div>,
                            position: "top",
                            //horizontalOffset: -200,
                            verticalOffset: -40
                        },
                        {
                            step: 3,
                            selector: ".nav.nav-tabs.p-3",
                            title: <div style={tourTitleStyle}>Click "Delete account" !</div>,
                            body: <div style={tourMessageStyle}>Caution: "Delete account" will permanently remove all your information !</div>,
                            position: "top",
                            horizontalOffset: 100,
                            verticalOffset: -40
                        }
                        
                    ]}
                />
                </div>
			</div>

        );
    }
}

export default Setting;