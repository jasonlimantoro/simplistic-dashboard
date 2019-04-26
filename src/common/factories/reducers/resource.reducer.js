/**
 * Factory for resource-based reducer
 * @param {String} resource Resource the reducer belongs to
 * @param {Object} initialState Initial state of the reducer
 * @returns {Function} Reducer function
 */
export const createReducer = (resource, initialState = {}) => {
	return (state = initialState, action) => {
		switch (action.type) {
			case `FETCH_${resource.toUpperCase()}_REQUEST`:
				return {
					...state,
					status: 'loading',
					error: '',
				};
			case `FETCH_${resource.toUpperCase()}_SUCCESS`:
				return {
					...state,
					status: 'success',
					data: action[resource],
					error: '',
				};
			case `FETCH_${resource.toUpperCase()}_ERROR`:
				return {
					...state,
					status: 'error',
					error: action.error,
				};
			default:
				return state;
		}
	};
};
