import { Route, Router, hashHistory } from 'react-router'
import ReactDOM from 'react-dom'
import React from 'react'
import Auth from './Auth.js'


import App from './components/App.js'
import Login from './routes/Login/components/Login.js'
import Reg from './routes/Reg/components/Reg.js'

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
   <Router history={hashHistory} >
     <Route path="/" component={App} onEnter={requireAuth}/>
     <Route path="/Devices" component={App} onEnter={requireAuth}/>
     <Route path="/Stats" component={App} onEnter={requireAuth}/>
     <Route path="/Login" component={Login} onEnter={requireNotAuth} /> 
     <Route path="/Reg" component={Reg} onEnter={requireNotAuth}/> 
   </Router>
  
),
  document.getElementById('root')
);
