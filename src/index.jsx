import React from 'react';
import ReactDOM from 'react-dom'
import { Router, hashHistory } from 'react-router'

import routes from './Routes'
import GuestStore from './stores/GuestStore'
import EthStore from './stores/EthStore'
import ViewStore from './stores/ViewStore'

const initialState = window.initialState || {
  guests:[]
}

var state = {
  guestStore: GuestStore.fromJS(initialState.guests),
  ethStore: new EthStore(),
  viewStore: new ViewStore()
}


ReactDOM.render((
  <Router history={hashHistory} routes={routes(state)}>
  </Router>
), document.querySelector("#root"))
