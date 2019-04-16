import React, { useState } from 'react';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import { withStyles } from '@material-ui/core/styles';
import { compose } from 'recompose';
import PropTypes from 'prop-types';

import { STYLES, MENUS } from '../utils/constants';

import SidebarMenu from './SidebarMenu';

const styles = (theme) => ({
	toolbar: {
		...theme.mixins.toolbar,
		backgroundColor: '#232f3e',
		boxShadow: '0 -1px 0 #404854 inset',
		padding: 18,
		fontSize: 24,
		fontFamily: theme.typography.fontFamily,
		color: theme.palette.common.white,
	},
	drawerPaper: {
		width: STYLES.SIDEBAR_WIDTH,
		[theme.breakpoints.only('xs')]: {
			width: STYLES.SIDEBAR_WIDTH_MOBILE,
		},
		[theme.breakpoints.only('sm')]: {
			width: STYLES.SIDEBAR_WIDTH_TABLET,
		},
		backgroundColor: '#18202c',
	},
	drawer: {
		flexShrink: 0,
		[theme.breakpoints.up('sm')]: {
			width: STYLES.SIDEBAR_WIDTH_TABLET,
		},
		[theme.breakpoints.down('sm')]: {
			width: STYLES.SIDEBAR_WIDTH_MOBILE,
		},
	},
});
const Sidebar = ({ classes }) => {
	const [mobileOpen, setMobileOpen] = useState(false);
	
	const handleDrawerToggle = () => {
		setMobileOpen(!mobileOpen);
	};
	
	const drawer = (
		<div>
			<div className={classes.toolbar}>
				Dashboard
			</div>
			<SidebarMenu menus={MENUS} />
		</div>
	);
	return (
		<div>
			<nav className={classes.drawer}>
				<Hidden xsUp implementation='css'>
					<Drawer
						variant='temporary'
						open={mobileOpen}
						onClose={handleDrawerToggle}
						classes={{
							paper: classes.drawerPaper,
						}}
					>
						{drawer}
					</Drawer>
				</Hidden>
				<Hidden smDown implementation='css'>
					<Drawer
						classes={{
							paper: classes.drawerPaper,
						}}
						variant='permanent'
						open
					>
						{drawer}
					</Drawer>
				</Hidden>
			</nav>
		</div>
	);
};

Sidebar.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default compose(
	withStyles(styles),
)(Sidebar);
