import React from 'react';
import { withProps } from 'recompose';

const getChildrenType = (key, children) => {
	return React.Children.toArray(children).filter(c => c.key === `.$${key}`);
};

const withChildrenType = withProps((ownProps) => ({
	getChildrenType: (key) => getChildrenType(key, ownProps.children),
}));

export default withChildrenType;
