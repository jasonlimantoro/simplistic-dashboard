/**
 * Factory for resource-based reducer
 * @param {String} resource Resource the reducer belongs to
 * @returns {Function} Reducer function
 */
export const createReducer = resource => {
	const initialState = {
		data: [],
		status: '',
		response: {},
		error: '',
	};
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
