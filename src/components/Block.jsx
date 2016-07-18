import React from 'react';
import {observer} from 'mobx-react';

@observer
export default class Block extends React.Component {

	render() {
		const {block} = this.props

		return (
			<div>
				<div>
          {block.number}
				</div>
		</div>
		)
	}
}
