import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography/index';
import Button from '@material-ui/core/Button/index';

const Error = ({ message, onRetry }) => {
	return (
		<Fragment>
			<Typography color='error' inline>{message}</Typography>
			<Button onClick={onRetry}>Retry</Button>
		</Fragment>
	);
};

Error.propTypes = {
	message: PropTypes.string,
	onRetry: PropTypes.func.isRequired,
};

Error.defaultProps = {
	message: 'Something went wrong',
};

export default Error;
