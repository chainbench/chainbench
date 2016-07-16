import React from 'react';
import {Route, IndexRoute} from 'react-router'

import App from './components/App'
import About from './components/About'
import Guests from './components/Guests'
import Node from './components/Node'

export default(state) => {
	return (
		<Route path="/" component={App} state={state}>
			<IndexRoute component={About}/>
			<Route path="guests" component={Guests} state={state}/>
			<Route path="node" component={Node} state={state}/>
		</Route>
	)
}
