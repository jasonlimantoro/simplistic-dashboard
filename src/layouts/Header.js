import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import classNames from 'classnames';
import { compose } from 'recompose';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

import { withChildrenType } from '../common/HOC';
import { STYLES } from '../utils/constants';

const styles = theme => ({
	root: {
		display: 'flex',
	},
	appBar: {
		marginLeft: STYLES.SIDEBAR_WIDTH,
		[theme.breakpoints.up('md')]: {
			width: `calc(100% - ${STYLES.SIDEBAR_WIDTH})`,
		},
	},
	menuButton: {
		marginRight: 20,
		[theme.breakpoints.up('md')]: {
			display: 'none',
		},
	},
	logout: {
		marginLeft: 'auto',
	},
	toolBar: {
		display: 'flex',
		justifyContent: 'space-between',
	},
});

const Header = ({ classes, className, getChildrenType }) => {
	return (
		<div className={classNames(classes.root, className)}>
			<CssBaseline />
			<AppBar className={classes.appBar}>
				<Toolbar className={classes.toolBar}>
					<div>
						{getChildrenType('burger')}
						<Typography color='inherit' variant='h6'>
							{getChildrenType('header-title')}
						</Typography>
					</div>
				</Toolbar>
				{getChildrenType('tabs')}
			</AppBar>
			{getChildrenType('sidebar')}
		</div>
	);
};

Header.propTypes = {
	classes: PropTypes.object.isRequired,
	getChildrenType: PropTypes.func.isRequired,
};

export default compose(
	withStyles(styles),
	withChildrenType,
)(Header);
