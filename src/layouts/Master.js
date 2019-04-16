import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import Header from './Header';
import Sidebar from './Sidebar';

const Master = ({ children, headerTitle }) => {
	return (
		<Fragment>
			<Header>
				<Fragment key='header-title'>{headerTitle}</Fragment>
				<Sidebar key='sidebar' />
			</Header>
			{children}
		</Fragment>
	);
};

Master.propTypes = {
	headerTitle: PropTypes.string,
};

Master.defaultProps = {
	headerTitle: 'Some Title',
};

export default Master;
