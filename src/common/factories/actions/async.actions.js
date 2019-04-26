/**
 * Factory for asynchronous action creators for common use cases, e.g. API calls
 * @param {String} resource Resource the action creators belong to
 * @param {'fetch' | 'update' | 'delete', 'store' | String} verb
 * @param {Function} serviceThunk Service API call thunk
 * @returns {function(...[*]): function(*): *}
 */
const createAsyncActionCreators = (resource, verb, serviceThunk) => (...args) => {
	return async dispatch => {
		const resourceVerb = `${verb.toUpperCase()}_${resource.toUpperCase()}`;
		dispatch({ type: `${resourceVerb}_REQUEST` });
		return dispatch(serviceThunk(...args))
			.then(
				res => dispatch({ type: `${resourceVerb}_SUCCESS`, [resource]: res }),
				err => dispatch({ type: `${resourceVerb}_ERROR`, error: err.message })
			);
	};
};
export default createAsyncActionCreators;
