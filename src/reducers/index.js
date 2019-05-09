import { combineReducers } from 'redux';

import confidentialities, * as confidentialitiesReducer from './confidentialities.reducer';
import doctypes, * as doctypesReducer from './doctypes.reducer';
import languages, * as languageReducer from './languages.reducer';

export default combineReducers({
	confidentialities,
	doctypes,
	languages,
});

// Selectors
export const selectConfidentialities = {
	accumulatedTotalDocs: state => confidentialitiesReducer.selectAccumulatedTotalDocs(state.confidentialities),
	data: state => confidentialitiesReducer.selectData(state.confidentialities),
	error: state => confidentialitiesReducer.selectError(state.confidentialities),
	status: state => confidentialitiesReducer.selectStatus(state.confidentialities),
};

export const selectDoctypes = {
	accumulatedTotalDocs: state => doctypesReducer.selectAccumulatedTotalDocs(state.doctypes),
	data: state => doctypesReducer.selectData(state.doctypes),
	status: state => doctypesReducer.selectStatus(state.doctypes),
	error: state => doctypesReducer.selectError(state.doctypes),
};

export const selectLanguages = {
	accumulatedTotalDocs: state => languageReducer.selectAccumulatedTotalDocs(state.languages),
	data: state => languageReducer.selectData(state.languages),
	status: state => languageReducer.selectStatus(state.languages),
	error: state => languageReducer.selectError(state.languages),
};
