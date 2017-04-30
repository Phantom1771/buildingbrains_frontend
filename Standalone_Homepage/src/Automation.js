module.exports = {
    api(url) {
        return 'http://52.36.226.213:4000'.concat(url);
    },
    getAutomation(){
        let data = {
            hubID: localStorage.hubID
        }
        return fetch(this.api('/automations/ '), {
            method: 'post',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'x-access-token': localStorage.token
                },
                body: JSON.stringify(data)
            })
            .then((response) => response.json())
            .then(json => {
                console.log(json);
                if (json.result === 0) {
                    console.log(json)
                    return json
                } else {
                    alert('Unable to get automations. ' + json.error);
                }
            })
    },
    getDevices(cb){
        let data = {
            hubID: localStorage.hubID
        }
        return fetch(this.api('/devices/'), {
            method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'x-access-token': localStorage.token
                },
                body: JSON.stringify(data)
            })
            .then((response) => response.json())
            .then(json => {
                console.log(json);
				if (json.result === 0) {
                    return json
			    }
				else {
					  alert('Something went wrong when trying to fetch the devices.' + json.error+' Please try again.');
					  return -1;
                }
            })
    },
    addAutomation(autoDevice, autoId){
        let data = {
            hubID: localStorage.hubID,
            automationName: autoId,
            devices: autoDevice
        }
        return fetch(this.api('/automations/add'), {
            method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'x-access-token': localStorage.token
                },
                body: JSON.stringify(data)
            })
            .then((response) => response.json())
            .then(json => {
                console.log(json);
				if (json.result === 0) {
                    return json
			    }
				else {
					  alert('Something went wrong when trying to add the automations.' + json.error+' Please try again.');
					  return -1;
                }
            })
    },
    sendAutomation(autoId){
        let data = {
            hubID: localStorage.hubID,
            automationID: autoId
        }
        return fetch(this.api('/automations/send'), {
            method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'x-access-token': localStorage.token
                },
                body: JSON.stringify(data)
            })
            .then((response) => response.json())
            .then(json => {
                console.log(json);
				if (json.result === 0) {
                    return json
			    }
				else {
					  alert('Something went wrong when trying to send the automations.' + json.error+' Please try again.');
					  return -1;
                }
            })
    },
    deleteAutomation(autoId){
        let data = {
            hubID: localStorage.hubID,
            automationID: autoId
        }
        return fetch(this.api('/automations/delete'), {
            method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'x-access-token': localStorage.token
                },
                body: JSON.stringify(data)
            })
            .then((response) => response.json())
            .then(json => {
                console.log(json);
				if (json.result === 0) {
                    return json
			    }
				else {
					  alert('Something went wrong when trying to send the automations.' + json.error+' Please try again.');
					  return -1;
                }
            })
    }
    
}