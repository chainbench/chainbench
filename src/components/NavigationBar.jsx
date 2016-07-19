import React from 'react'
import CSSModules from 'react-css-modules'

import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import IconMenu from 'material-ui/IconMenu';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton'

import NavItem from './NavigationItem'
import styles from './NavigationBar.css'

class NavigationBar extends React.Component {
	render() {
		return (
			<AppBar
				iconElementLeft={<span></span>}
				title="Chainbench">
				<FlatButton label="About" />
<FlatButton label="Home"  />
			</AppBar>

			// <nav className={styles.headernav}>
			// 	<div className={styles.container}>
			// 		<div className={styles.header}>
			// 			<a className={styles.brand} href="#">boilerplate</a>
			// 		</div>
			// 		<div className={styles.menu_list}>
			// 			<ul className={styles.nav_list}>
			// 				<NavItem to='/' index={true} >Home</NavItem>
			// 				<NavItem to='/guests'>Guests</NavItem>
			// 				<NavItem to='/node'>Node</NavItem>
			// 				<NavItem to='/blocks'>Blocks</NavItem>
			// 			</ul>
			// 		</div>
			// 	</div>
			// </nav>
		)
	}
}

export default CSSModules(NavigationBar, styles, {allowMultiple: true})
