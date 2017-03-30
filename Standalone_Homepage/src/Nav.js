import React, { Component } from 'react';

class Nav extends Component {
    constructor(props){
      super(props);
      this.state = {
        route: window.location.pathname,//.substr(1),
        homeActive: "",
        userActive: "",
        deviceActive: "",
        statActive: "",
        settingActive: ""

      }
    };

   componentDidMount() {
    window.addEventListener('hashchange', () => {
      this.setState({
        route: window.location.hash.substr(1)
      })
    })
  }; 

    render() {
      this.state.homeActive = "";
      this.state.userActive = "";
      this.state.deviceActive = "";
      this.state.settingActive = "";
      this.state.statActive = "";
      switch(this.state.route){
        case '/Devices' : this.state.devicesActive = "active"; break;
        case '/Settings' : this.state.settingsActive = "active"; break;
        case '/Users' : this.state.usersActive = "active"; break;
        case '/Stats' : this.state.statsActive = "active"; break;
        default: this.state.homeActive = "active"
      }
      return (
        <div className="container-fluid">
          <div className="row">

            <div className="col-sm-3 col-md-2 sidebar">
                <ul className="nav nav-sidebar">
                  <li className={this.state.homeActive}>
                    <a href="/Home">  
                    <i className="fa fa-home fa-3x " aria-hidden="true"></i>
                    <p>Home</p>
                  </a>
                  </li>
                </ul>

                <ul className="nav nav-sidebar">
                  <li className={this.state.devicesActive}>
                    <a href="/Devices">
                    <i className="fa fa-object-group fa-3x " aria-hidden="true"></i>
                    <p>Devices</p>
                    </a>
                  </li>
                </ul>

                <ul className="nav nav-sidebar">
                  <li className={this.state.statsActive}>
                    <a href="/Stats">
                    <i className="fa fa-random fa-3x " aria-hidden="true"></i>
                    <p>Stats</p>
                    </a>
                  </li>
                </ul>

                <ul className="nav nav-sidebar">
                  <li className={this.state.usersActive}>
                    <a href="/Users">
                    <i className="fa fa-users fa-3x " aria-hidden="true"></i>
                    <p>User</p>
                    </a>
                  </li>
                </ul>

                <ul className="nav nav-sidebar">
                  <li className={this.state.settingsActive}>
                    <a href="/Settings">
                    <i className="fa fa-cogs fa-3x " aria-hidden="true"></i>
                    <p>Settings</p>
                    </a>
                  </li>
                </ul>
                  
              </div>
              </div>
              </div>





        );
      }
}

export default Nav;
