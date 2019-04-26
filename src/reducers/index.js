import { combineReducers } from 'redux';
import { createSelector } from 'reselect';

import { createReducer } from '../common/factories/reducers/resource.reducer';

import * as confidentialitiesReducer from './confidentialities.reducer';

export default combineReducers({
	confidentialities: createReducer('confidentialities'),
	doctypes: createReducer('doctypes'),
	languages: createReducer('languages'),
});

// Selectors
const createSelectData = resource => state => state[resource].data;
const createSelectError = resource => state => state[resource].error;
const createSelectStatus = resource => state => state[resource].status;

export const selectConfidentialities = {
	accumulatedTotalDocs: (state) =>
		confidentialitiesReducer.selectAccumulatedTotalDocs(state.confidentialities),

	data: state =>
		createSelector(
			createSelectData('confidentialities'),
			confidentialities => confidentialities
		)(state),

	error: state =>
		createSelector(
			createSelectError('confidentialities'),
			error => error
		)(state),

	status: state =>
		createSelector(
			createSelectStatus('confidentialities'),
			status => status
		)(state),
};
