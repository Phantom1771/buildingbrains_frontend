import React, { Component } from 'react';
import Auth from '../../../Auth.js';
class Setting extends Component {
    
    constructor(props){
      super(props)
      this.state={
        email: [],
        first: [],
        last: []
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
    }
    render() {
      
      
      return (
      <div className="container-rounded" >
        <div className="h1 text-left"> Setting Page </div> <hr/>
        <form>
          <div className="form-group row">
            <label for="inputEmail3" className="col-sm-2 col-form-label" readonly="readonly" >Email</label>
            <div className="col-sm-4">
            <input type="text" disabled="true" className="form-control" id="inputEmail3" placeholder={this.state.email}/>
            </div>
          </div>          
          <div className="form-group row">
            <label for="inputPassword3" className="col-sm-2 col-form-label">Last Name</label>
            <div className="col-sm-4">
            <input type="text" className="form-control" id="inputPassword3" value={this.state.last} />
            </div>
          </div>
          <div className="form-group row">
            <label for="inputPassword3" className="col-sm-2 col-form-label">Last Name</label>
            <div className="col-sm-4">
            <input type="text" className="form-control" id="inputPassword3" value={this.state.first} />
            </div>
          </div>
        </form>
    </div>
        );
    }
}

export default Setting;