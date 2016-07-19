import React from 'react';
import ReactDOM from 'react-dom'
import { Router, hashHistory } from 'react-router'
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


import routes from './Routes'
import GuestStore from './stores/GuestStore'
import EthStore from './stores/EthStore'
import ViewStore from './stores/ViewStore'

const initialState = window.initialState || {
  guests:[]
}



// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

var state = {
  guestStore: GuestStore.fromJS(initialState.guests),
  ethStore: new EthStore(),
  viewStore: new ViewStore()
}


ReactDOM.render((
  <MuiThemeProvider>
  <Router history={hashHistory} routes={routes(state)}>
  </Router>
</MuiThemeProvider>

), document.querySelector("#root"))
