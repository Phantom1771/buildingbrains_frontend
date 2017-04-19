'use strict';
module.exports = {

  /*
	This function is called after the user has logged in.
	It will get the hub associated with the user account from the server
	and store it in localstorage as hubID for easy access.
  */
  getHub(token) {
    fetch(this.api('/hubs'), {
		method: 'get',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json',
			'x-access-token': token
		}
		}).then(status)
		.then((response) => response.json())
		.then(json => {
			//console.log(json);
			if (json.result === 0) {
				var hubID = json.hubs[0];
				//console.log(hubID);
				localStorage.hubID=hubID;
				
			}
			else {
			  alert('Unable to get hub for user');
			}
		})
  },
  /*
	This function returns the stored hubID to the user
  */
  getHubID() {
	  console.log(localStorage.hubID);
	  return localStorage.hubID;
  },
  /*
	This function appends the correct api endpoint onto the location of the server
  */
    api(url) {
        return 'http://localhost:4000'.concat(url);
    },

	/*
	  This function logs in the user to their account
    */
    login(email, pass) {
        let data = {
            email: email,
            password: pass
        };
        fetch(this.api('/users/login'), {
                method: 'post',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            .then((response) => response.json())
            .then(json => {
                console.log(json);
                if (json.result === 0) {
                    localStorage.token = json.userToken;
                    this.getHub(localStorage.token);
                    location.replace("/");
                } else {
                    alert('Unable to login with the given credentials. Please try again');
                }
            })
    },
    /*
	  This function registers a new user to the database
    */
    register(firstname, lastname, email, pass) {
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
        return fetch(this.api('/users/signup'), requestParams)
            .then((response) => response.json())
            .then(json => {
                console.log(json);
                if (json.result === 0) {
                    localStorage.token = json.userToken;
                    location.replace("/AddHub");
                } else {
                    alert('Unable to register with the given credentials. Please try again');
                }
                return json
            })
    },
    /*
	  This function gets the account data from the server for a given user
    */
    getAccountInfo() {
        let head = {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'x-access-token': this.getToken()
        };
        let requestParams = {
            method: 'GET',
            headers: head
        };
        return fetch(this.api('/users/account'), requestParams)
            .then((response) => response.json())
            .then(json => {
                return json
            })

    },
	/*
	  This function allows users to update their name in the database
    */
    updateProfileInfo(first, last) {
        let data = {
            firstName: first,
            lastName: last,
            userToken: this.getToken()
        }
        let head = {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        };
        let requestParams = {
            method: 'POST',
            headers: head,
            body: JSON.stringify(data)
        }
        return fetch(this.api('/users/account/profile'), requestParams)
            .then((response) => response.json())
            .then(json => {
                if (json.result === 0) {
                    alert("You have successfully updated your profile")
                }
            })
    },
    /*
	  This function allows the user to update their password in the database
    */
    updatePassword(pass) {
        let data = {
            password: pass,
            passwordResetToken: this.getToken()
        }
        let head = {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        };
        let requestParams = {
            method: 'POST',
            headers: head,
            body: JSON.stringify(data)
        }
        return fetch(this.api('/users/reset'), requestParams)
            .then((response) => response.json())
            .then(json => {
                if (json.result === 0) {
                    alert("You have successfully updated your password")
                    localStorage.token = json.userToken;
                    location.reload();
                } else {
                    alert("update fails because " + json.error)
                }
            })
    },
	/*
	  This function will delete a user account from the database and all its metadata
    */
    deleteAccount() {
        let data = {
            userToken: this.getToken()
        }
        let head = {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'x-access-token': this.getToken()
        };
        let requestParams = {
            method: 'POST',
            headers: head,
            body: JSON.stringify(data)
        }
        return fetch(this.api('/users/account/delete'), requestParams)
            .then((response) => response.json())
            .then(json => {
                if (json.result === 0) {
                    delete localStorage.token
                    alert("You have successfully deleted your profile")
                    location.reload();
                }
                return json;
            })
    },
    /*
	  This function allows a user to recover their password via email
    */
    attemptRecovery(em) {
        let data = {
            email: em
        };
        return fetch(this.api('/users/forgot'), {
                method: 'post',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            .then((responseData) => {
                this.setState({
                    response: responseData
                });
            })
            .then(function(responseData) {
                console.log('request succeeded with json response', responseData)
            }).catch(function(error) {
                console.log('request failed', error)
            })
        if (this.state.response.result === 0) {
            location.reload();
        } else {
            alert('Recovery fail');
        }
    },
	/*
	  This function will return the login token for authentication
    */
    getToken() {
        return localStorage.token
    },
	/*
	  This function logs the user out and deletes the localstorage contents
    */
    logout() {
        delete localStorage.token;
        delete localStorage.hubID;
        location.reload();
    },
	/*
	  This function will return if the user is logged in or not
    */
    loggedIn() {
        //return true
        if (localStorage.token === undefined) return false;
        return !!localStorage.token
    },
}
