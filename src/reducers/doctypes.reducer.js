import { createSelector } from 'reselect';
import { combineReducers } from 'redux';

import { createReducer } from '../common/factories/reducers/resource.reducer';
import { accum, includesIn } from '../utils/helpers';

const doctypesReducer = createReducer('doctypes', {
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
	api: doctypesReducer,
	filter: filterReducer,
});

const selectData = state => state.api.data;
const selectStatus = state => state.api.status;
const selectError = state => state.api.error;
const selectFilter = state => state.filter;

export const selectDoctypesFilteredData = createSelector(
	selectData, selectFilter,
	(data, filter) => data.filter(({ name }) => includesIn(name, filter))
);
export const selectDoctypesFilteredAccumulatedTotalDocs = createSelector(
	selectDoctypesFilteredData, (data) => {
		const selectTotalDocs = state => state.map(({ total_docs }) => total_docs);
		return accum(selectTotalDocs(data));
	}
);
export const selectDoctypesError = createSelector(selectError, error => error);
export const selectDoctypesStatus = createSelector(selectStatus, status => status);
