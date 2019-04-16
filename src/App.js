import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import DashboardRoutes from './routes/DashboardRoutes';

const App = () => (
	<Switch>
		<Route exact path='/' render={() => <Redirect to='/dashboard' />} />
		<Route path='/dashboard' component={DashboardRoutes} />
	</Switch>
);

export default App;
