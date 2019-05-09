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

let selectData = state => state.api.data;
let selectStatus = state => state.api.status;
let selectError = state => state.api.error;
const selectFilter = state => state.filter;

selectData = createSelector(
	selectData, selectFilter,
	(data, filter) => data.filter(({ name }) => includesIn(name, filter))
);

const selectAccumulatedTotalDocs = createSelector(
	selectData, (data) => {
		const selectTotalDocs = state => state.map(({ total_docs }) => total_docs);
		return accum(selectTotalDocs(data));
	}
);

selectStatus = createSelector(selectStatus, status => status);
selectError = createSelector(selectError, error => error);

export {
	selectData,
	selectStatus,
	selectError,
	selectAccumulatedTotalDocs,
};
