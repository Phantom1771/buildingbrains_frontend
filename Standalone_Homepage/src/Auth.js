'use strict';
module.exports = {
    api(url) {
        return 'http://localhost:4000'.concat(url);
    },

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
                    location.reload();
                } else {
                    alert('Unable to login with the given credentials. Please try again');
                }
            })
    },
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
                    location.replace("/");
                } else {
                    alert('Unable to register with the given credentials. Please try again');
                }
                return json
            })
    },

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

    getToken() {
        return localStorage.token
    },

    logout() {
        delete localStorage.token;
        location.reload();
    },

    loggedIn() {
        //return true
        if (localStorage.token === undefined) return false;
        return !!localStorage.token
    },
}