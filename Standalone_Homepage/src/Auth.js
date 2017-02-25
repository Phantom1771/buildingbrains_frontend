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
				 localStorage.token = json.token
				 this.transitionTo('/Home');	 
			}
			else {
			  alert('Unable to login with the given credentials. Please try again');
			  return -1;
			}
		})
  },
  getToken() {
    return localStorage.token
  },

  logout() {
    delete localStorage.token
  },

  loggedIn() {
    return !!localStorage.token
  },
}

