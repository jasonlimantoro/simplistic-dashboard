import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';

import { Dashboard, Confidentialities, Languages, Doctypes } from '../panels';


const DashboardRoutes = ({ match: { url } }) => {
	return (
		<Switch>
			<Route exact path={url} component={Dashboard} />
			<Route path={`${url}/confidentialities`} component={Confidentialities} />
			<Route path={`${url}/doctypes`} component={Doctypes} />
			<Route path={`${url}/languages`} component={Languages} />
		</Switch>
	);
};

DashboardRoutes.propTypes = {
	match: PropTypes.object.isRequired,
};

export default DashboardRoutes;
