import React, { Component } from 'react';

class Home extends Component {
  render() {
	var now = new Date();
	var date = now.toDateString();
	var time = now.toLocaleTimeString();
    return (
     <div className="rcorners0">
       <h1 className="page-header">Dashboard</h1>
       <div className="text-center pb-5 pl-2 mb-5 ml-5"> 
			<div className="Home">
				<h1> Welcome Home! </h1>
				<img src={require("./BBSquareLogo.png")} width="35%"/>
				<h1>
					It is currently {time} on {date}
				</h1>
			</div>
		</div>
     </div>
    );
  }
}

export default Home;
