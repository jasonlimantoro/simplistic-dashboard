import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import Error from './Error';

const Async = ({ loading, error, onRetry }) => {
	return (
		<Fragment>
			{loading && 'Loading...'}
			{error && <Error onRetry={onRetry} message={error} /> }
		</Fragment>
	);
};

Async.propTypes = {
	onRetry: PropTypes.func,
	loading: PropTypes.bool,
	error: PropTypes.string,
};

Async.defaultProps = {
	onRetry: undefined,
	loading: false,
	error: '',
};

export default Async;
