import { applyMiddleware, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './reducers';

const configureStore = (preloadedState) => {
	const middlewares = [thunkMiddleware];
	const middlewareEnhancer = applyMiddleware(...middlewares);
	
	const enhancers = [middlewareEnhancer];
	const composedEnhancers = composeWithDevTools(...enhancers);

	return createStore(rootReducer, preloadedState, composedEnhancers);
};

export const preloadedState = {
	confidentialities: {
		data: [],
		status: '',
		response: {},
		error: '',
	},
	doctypes: {
		data: [],
		status: '',
		response: {},
		error: '',
	},
	languages: {
		data: [],
		status: '',
		response: {},
		error: '',
	},
};

const store = configureStore(preloadedState);

export default store;
