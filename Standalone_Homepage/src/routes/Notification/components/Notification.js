import React, { Component } from 'react';


var notifications = "No new notifications at this time";

class Notification extends Component {
     render() {
        return (
        <div className="col-sm-6 col-sm-offset-4 col-md-8 col-md-offset-4 main">
            <div className="Notifications">
			<h1>
				Notifications:
			</h1>
			<h2>
				{notifications}
			</h2>
            </div>
        </div>
    );
  }
}
export default Notification;