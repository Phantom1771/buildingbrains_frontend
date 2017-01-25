import React, { Component } from 'react';


var notifications = "No new notifications at this time";

class Notification extends Component {
     render() {
        return (
            <div className="Notifications">
			<h1>
				Notifications:
			</h1>
			<h2>
				{notifications}
			</h2>
            </div>
    );
  }
}
export default Notification;