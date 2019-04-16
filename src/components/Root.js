import React from 'react';
import { Provider } from 'react-redux';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { BrowserRouter as Router } from 'react-router-dom';

import store from '../store';
import App from '../App';
import theme from '../utils/theme';

const Root = () => {
	return (
		<Provider store={store}>
			<MuiThemeProvider theme={theme}>
				<Router>
					<App />
				</Router>
			</MuiThemeProvider>
		</Provider>
	);
};

export default Root;
