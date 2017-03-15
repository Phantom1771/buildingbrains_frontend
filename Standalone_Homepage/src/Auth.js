module.exports = {
  login(email, pass) {
	let data = {
				  email: email,
				  password: pass
				  };
    fetch('http://localhost:3000/users/login', {
		method: 'post',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(data)
		}).then(status)
		.then((response) => response.json())
		.then(json => {
			console.log(json);
			if (json.result === 0) {
				 localStorage.token = json.userToken;
				 this.getHub(localStorage.token);
				 this.transitionTo('/');	 
			}
			else {
			  alert('Unable to login with the given credentials. Please try again');
			}
		})
  },
  register(firstname,lastname,email,pass) {
	   let data = {
		  firstname: firstname,
		  lastname: lastname,
		  email: email,
		  password: pass
	   };
	   let head = {
		  'Accept': 'application/json',
		  'Content-Type': 'application/json'
	   };
	   let requestParams = {
		  method: 'POST',
		  headers: head,
		  body: JSON.stringify(data)
	   };
	   fetch('http://localhost:3000/users/signup', requestParams)
		  .then(status)
		  .then((response) => response.json())
		  .then(json => {
	 		console.log(json);
			if (json.result === 0) {
				localStorage.token = json.userToken;
				this.getHub(localStorage.token);
				this.transitionTo("/");
			}
			else {
			  alert('Unable to register with the given credentials. Please try again');
			}
		}) 
  },
  getToken() {
    return localStorage.token
  },
  
  getHub(token) {
    fetch('http://localhost:3000/hubs/', {
		method: 'get',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json',
			'x-access-token': token
		}
		}).then(status)
		.then((response) => response.json())
		.then(json => {
			console.log(json);
			if (json.result === 0) {
				var hubID = json.hubs[0];
				console.log(hubID);
				localStorage.hubID=hubID;
			}
			else {
			  alert('Unable to get hub for user');
			}
		})
  },
  getHubID() {
	  return localStorage.hubID;
  },

  logout() {
    delete localStorage.token
		location.reload();
  },

  loggedIn() {
		//return true
    return !!localStorage.token
  },
	forceLoggedIn(){
		localStorage.token = Math.random().toString(36).substring(7);
		location.reload();
	}
}

