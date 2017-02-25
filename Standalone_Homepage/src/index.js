import { Router, hashHistory } from 'react-router'
import ReactDOM from 'react-dom'
import React from 'react'
const rootRoute = {
  childRoutes: [ {
    path: '/',
    component: require('./components/App').default,
    childRoutes: [
      require('./routes/Login'),
      require('./routes/Reg')
    ]
  } ]
}

ReactDOM.render((
   <Router 
   history={hashHistory} 
   routes={rootRoute}/>
),
  document.getElementById('root')
);
