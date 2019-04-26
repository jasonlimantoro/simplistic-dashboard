import { combineReducers } from 'redux';

import confidentialities, * as confidentialitiesReducer from './confidentialities.reducer';
import doctypes from './doctypes.reducer';
import languages from './languages.reducer';

export default combineReducers({
	confidentialities,
	doctypes,
	languages,
});

export const selectAccumulatedTotalDocs = (state) =>
	confidentialitiesReducer.selectAccumulatedTotalDocs(state.confidentialities);

export const selectConfidentialities = state =>
	confidentialitiesReducer.selectConfidentialities(state.confidentialities);

export const selectConfidentialitiesError = state =>
	confidentialitiesReducer.selectError(state.confidentialities);

export const selectConfidentialitiesStatus = state =>
	confidentialitiesReducer.selectStatus(state.confidentialities);
