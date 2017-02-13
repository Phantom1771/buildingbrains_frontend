import React, { Component } from 'react';

class Device extends Component {
	
     render() {
        return (
             <div className="Home">
                    <div className="col-md-6 col-md-offset-2">
                    <div className="Welcome">
                        <div className="rcorners0">
                            <div className="text-left pb-5 pl-2 mb-5 ml-5"> 
                                <h2 > Your Devices: </h2>
                            </div>
                        <div class="row justify-content-md-center">
                                    <div className="col col-lg-2">
                                    <div className="rcorners2">
                                        <i className="fa fa-home  fa-10x " aria-hidden="true"></i>
                                        <p>Rounded corners!</p>
                                    </div>
                                    </div>

                                    <div className="col col-lg-2 col-md-offset-2">           
                                    <div className="rcorners1">
                                        <i className="fa fa-thermometer-quarter fa-10x " aria-hidden="true"></i>
                                        <p>Rounded corners!</p>
                                    </div>
                                    </div>

                                    <div className="col col-lg-2 col-md-offset-2">
                                    <div className="rcorners2">
                                        <i className="fa fa-clock-o  fa-10x " aria-hidden="true"></i>
                                        <p>Rounded corners!</p>
                                    </div>
                                    </div>
                                </div>
                            </div>
                            </div>
                </div>
            </div>
    );
  }
}
export default Device;
