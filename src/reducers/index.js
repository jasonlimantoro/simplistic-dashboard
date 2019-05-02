import { combineReducers } from 'redux';

import confidentialities, * as confidentialitiesReducer from './confidentialities.reducer';
import doctypes, {
	selectDoctypesFilteredData,
	selectDoctypesStatus,
	selectDoctypesError,
	selectDoctypesFilteredAccumulatedTotalDocs,
} from './doctypes.reducer';
import languages, {
	selectLanguagesError, selectLanguagesAccumulatedTotalDocs,
	selectLanguagesFilteredData, selectLanguagesStatus,
} from './languages.reducer';

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
	accumulatedTotalDocs: state => selectDoctypesFilteredAccumulatedTotalDocs(state.doctypes),
	data: state => selectDoctypesFilteredData(state.doctypes),
	status: state => selectDoctypesStatus(state.doctypes),
	error: state => selectDoctypesError(state.doctypes),
};

export const selectLanguages = {
	accumulatedTotalDocs: state => selectLanguagesAccumulatedTotalDocs(state.languages),
	data: state => selectLanguagesFilteredData(state.languages),
	status: state => selectLanguagesStatus(state.languages),
	error: state => selectLanguagesError(state.languages),
};
