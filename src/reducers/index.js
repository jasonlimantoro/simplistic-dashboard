import { combineReducers } from 'redux';

import confidentialities, {
	selectFilteredConfidentialities,
	selectConfidentialitiesStatus,
	selectConfidentialitiesError,
	selectConfidentialitiesAccumulatedTotalDocs,
} from './confidentialities.reducer';
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
	accumulatedTotalDocs: state => selectConfidentialitiesAccumulatedTotalDocs(state.confidentialities),
	data: state => selectFilteredConfidentialities(state.confidentialities),
	error: state => selectConfidentialitiesError(state.confidentialities),
	status: state => selectConfidentialitiesStatus(state.confidentialities),
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
