import { createSelector } from 'reselect';
import { combineReducers } from 'redux';

import { createReducer } from '../common/factories/reducers/resource.reducer';
import { accum } from '../utils/helpers';

const confidentialitiesReducer = createReducer('confidentialities', {
	data: [],
	status: '',
	response: {},
	error: '',
});

const filterReducer = (state = '', action) => {
	switch (action.type) {
		case 'SET_FILTER':
			return action.filter;
		default:
			return state;
	}
};


export default combineReducers({
	confidentialities: confidentialitiesReducer,
	filter: filterReducer,
});

const selectData = state => state.confidentialities.data;
const selectStatus = state => state.confidentialities.status;
const selectError = state => state.confidentialities.error;
const selectFilter = state => state.filter;

export const selectFilteredConfidentialities = createSelector(
	selectFilter, selectData,
	(filter, data) => data.filter(({ name }) => name.toLowerCase().includes(filter.toLowerCase()))
);
export const selectConfidentialitiesAccumulatedTotalDocs = createSelector(
	selectFilteredConfidentialities, (data) => {
		const selectTotalDocs = state => state.map(({ total_docs }) => total_docs);
		return accum(selectTotalDocs(data));
	}
);
export const selectConfidentialitiesError = createSelector(selectError, error => error);
export const selectConfidentialitiesStatus = createSelector(selectStatus, status => status);
