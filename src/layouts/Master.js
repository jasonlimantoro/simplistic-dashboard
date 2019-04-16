import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { compose } from 'recompose';

import { STYLES } from '../utils/constants';

import Header from './Header';
import Sidebar from './Sidebar';

const styles = theme => ({
	main: {
		display: 'grid',
		gridTemplateRows: `${STYLES.APPBAR_HEIGHT} auto`,
		[theme.breakpoints.up('md')]: {
			gridTemplateColumns: `${STYLES.SIDEBAR_WIDTH} auto`,
		},
	},
	content: {
		margin: '30px 15px',
		[theme.breakpoints.up('md')]: {
			gridColumnStart: 2,
			gridRowStart: 2,
		},
	},
});

const Master = ({ children, headerTitle, classes }) => {
	return (
		<main className={classes.main}>
			<Header>
				<Fragment key='header-title'>{headerTitle}</Fragment>
				<Sidebar key='sidebar' />
			</Header>
			<div className={classes.content}>
				{children}
			</div>
		</main>
	);
};

Master.propTypes = {
	headerTitle: PropTypes.string,
};

Master.defaultProps = {
	headerTitle: 'Some Title',
};

export default compose(
	withStyles(styles)
)(Master);
