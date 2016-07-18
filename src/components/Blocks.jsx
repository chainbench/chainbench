import React from 'react';
import {observer} from 'mobx-react';
import Block from './Block'

@observer
export default class Blocks extends React.Component {

	render() {
		const {ethStore} = this.props.route.state

		return (
			<div>
				<div>The Blocks :</div>
				{ethStore.latestBlocks.map((block) => (
						<Block key={block.number} block={block}/>
					)
				)}
		</div>
		)
	}
}
