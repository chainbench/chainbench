import React from 'react';
import ReactDOM from 'react-dom'
import {observer} from 'mobx-react';

const ENTER_KEY = 13;

@observer
export default class RpcEntry extends React.Component {


	handleKeyDown = (event) => {
		if (event.keyCode !== ENTER_KEY) {
			return
		}

		event.preventDefault()

		const input = ReactDOM.findDOMNode(this.refs.rpcEntry)
		const val = input.value.trim()

		if (val) {
			this.props.state.ethStore.setRpcAddress(val)
		}
	}

	render() {
		return (
      <input
				ref="rpcEntry"
				placeholder="Address (eg http://localhost:8545)"
				onKeyDown={this.handleKeyDown}
				autoFocus={true}
				/>
		)
	}
}
