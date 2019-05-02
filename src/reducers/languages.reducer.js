import { combineReducers } from 'redux';
import { createSelector } from 'reselect';

import { createReducer } from '../common/factories/reducers/resource.reducer';
import { accum, includesIn } from '../utils/helpers';

const languagesReducer = createReducer('languages', {
	data: [],
	status: '',
	response: {},
	error: '',
});

export const filterReducer = (state = '', action) => {
	switch (action.type) {
		case 'SET_FILTER':
			return action.filter;
		default:
			return state;
	}
};

export default combineReducers({
	api: languagesReducer,
	filter: filterReducer,
});

const selectData = state => state.api.data;
const selectStatus = state => state.api.status;
const selectError = state => state.api.error;
const selectFilter = state => state.filter;

export const selectLanguagesFilteredData = createSelector(
	selectData, selectFilter,
	(data, filter) => data.filter(({ name }) => includesIn(name, filter))
);

export const selectLanguagesAccumulatedTotalDocs = createSelector(
	selectLanguagesFilteredData, (data) => {
		const selectTotalDocs = state => state.map(({ total_docs }) => total_docs);
		return accum(selectTotalDocs(data));
	}
);

export const selectLanguagesStatus = createSelector(selectStatus, status => status);
export const selectLanguagesError = createSelector(selectError, error => error);
