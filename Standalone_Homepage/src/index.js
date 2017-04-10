import { Route, Router, browserHistory} from 'react-router'
import ReactDOM from 'react-dom'
import React from 'react'
import Auth from './Auth.js'


import App from './components/App.js'

import Reg from './routes/Reg/components/Reg.js'
import Recovery from'./routes/Recovery/components/Recovery.js'
import Login from './routes/Login/components/Login.js'

import Devices from './routes/Devices/components/Devices.js'
import Device from './routes/Device/components/Device.js'
import DeviceAdder from './routes/DeviceAdder/components/DeviceAdder.js'

import AddHub from './routes/Hub/components/AddHub.js'

import Setting from './routes/Setting/components/Setting.js'




function requireAuth(nextState, replace) {
  if (!Auth.loggedIn()) {
    replace({
      pathname: '/Login',
      state: { nextPathname: nextState.location.pathname }
    })
  }
}
function requireNotAuth(nextState, replace) {
  if (Auth.loggedIn()) {
    replace({
      pathname: '/',
      state: { nextPathname: nextState.location.pathname }
    })
  }
}

ReactDOM.render((
   <Router history={browserHistory} >
     <Route path="/" component={App} onEnter={requireAuth}>
      <Route path="/Stats" component={Setting} onEnter={requireAuth}/>
      <Route path="/Settings" component={Setting} onEnter={requireAuth}/>
      <Route path="/Users" component={Setting} onEnter={requireAuth}/>
      <Route path="/Devices" component={Devices} onEnter={requireAuth}/>
    </Route>
     <Route path="/Recovery" component={Recovery} onEnter={requireNotAuth}/>
     <Route path="/Login" component={Login} onEnter={requireNotAuth} /> 
     <Route path="/Reg" component={Reg} onEnter={requireNotAuth}/> 
     <Route path="/Devices/:deviceID" component={Device} onEnter={requireAuth}/>
	 <Route path="/DeviceAdder" component={DeviceAdder} onEnter={requireAuth}/>
	 <Route path="/AddHub" component={AddHub} onEnter={requireAuth}/> 
   </Router>
  
),
  document.getElementById('root')
);
