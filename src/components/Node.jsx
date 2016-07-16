import React from 'react';
import {observer} from 'mobx-react';
import RpcEntry from './RpcEntry'

@observer
export default class Node extends React.Component {

	render() {
		const {viewStore, ethStore} = this.props.route.state

		return (
			<div>
				<div>node details</div>
        <div>Latest Block {ethStore.latestBlock}</div>
        <RpcEntry state={this.props.route.state} />
		</div>
		)
	}
}
